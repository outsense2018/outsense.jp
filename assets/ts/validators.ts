export type Validator = (str: string) => string;

const int32_max = Math.pow(2, 31) - 1;

const toIpv6IntArray = (str: string): number[] | undefined => {
  let result: number[] = [];
  if (str.indexOf('::') !== -1) {
    if (str === '::') {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    const splitCompression = str.split('::');
    if (splitCompression.length > 2) {
      return;
    }
    const headBlank = str.startsWith('::');
    const tailBlank = str.endsWith('::');
    let headSrc = splitCompression[0];
    let tailSrc = splitCompression[1];
    if (headBlank) {
      if (headSrc !== '') {
        return;
      }
      headSrc = '0';
    } else if (tailBlank) {
      if (tailSrc !== '') {
        return;
      }
      tailSrc = '0';
    }
    const head = headSrc.split(':').map(x => Number(`0x${x}`));
    const tail = tailSrc.split(':').map(x => Number(`0x${x}`));
    if (head.find(Number.isNaN) || tail.find(Number.isNaN)) {
      return;
    }
    const blank: number[] = [];
    for (let i = head.length + tail.length; i < 8; i++) {
      blank.push(0);
    }
    result = head.concat(blank, tail);
  } else {
    const splitted = str.split(':');
    if (splitted.length != 8) {
      return;
    }
    result = splitted.map(x => Number(`0x${x}`));
  }
  if (!result.every(x => 0 <= x && x <= 65535)) {
    return;
  }
  return result;
};

const validators = {
  required(str: string): string {
    if (str.length === 0) {
      return '必須です';
    }
    return '';
  },
  integer(min?: number, max?: number): Validator {
    return (str: string) => {
      if (!str.match(/^-?\d+$/)) {
        return '整数値を入力してください';
      }
      const num = Number(str);
      if (num === NaN) {
        return '整数値を入力してください';
      }
      if (min != undefined && num < min) {
        return `${min}以上の数値を指定してください`;
      }
      if (max != undefined && num > max) {
        return `${max}以下の数値を指定してください`;
      }
      return '';
    };
  },
  alphanumericSymbols(str: string): string {
    if (!str.match(/^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/)) {
      return '不正な形式です';
    }
    return '';
  },
  alphanumericSymbolSpaces(str: string): string {
    if (!str.match(/^[a-zA-Z0-9!-/:-@¥[-`{-~ ]*$/)) {
      return '不正な形式です';
    }
    return '';
  },
  ipv4Address(str: string): string {
    const message = '不正なIPアドレスです';
    const splitted = str.split('.');
    if (splitted.length !== 4) {
      return message;
    }
    if (!splitted.every(x => x.match(/^\d{1,3}$/) && parseInt(x, 10) <= 255)) {
      return message;
    }
    return '';
  },
  ipv6Address(str: string): string {
    if (!toIpv6IntArray(str)) {
      return '不正なIPアドレスです';
    }
    return '';
  },
  ipv6Prefix(str: string): string {
    const message = '不正なプレフィックスです';
    const prefixSplit = str.split('/');
    if (prefixSplit.length !== 2) {
      return message;
    }
    const [addrStr, prefixStr] = prefixSplit;
    const address = toIpv6IntArray(addrStr);
    if (!address) {
      return message;
    }
    if (validators.integer(0, 128)(prefixStr)) {
      return message;
    }
    const prefix = parseInt(prefixStr, 10);
    const dropSize = Math.floor((128 - prefix) / 16);
    if (dropSize !== 0) {
      if (!address.slice(dropSize * -1).every(x => x === 0)) {
        return message;
      }
    }
    const last = address[7 - dropSize];
    if (last) {
      const lastMask = 15 - ((prefix - 1) % 16);
      if (!(last === (last >> lastMask) << lastMask)) {
        return message;
      }
    }
    return '';
  },
  ipAddress(str: string): string {
    return str.indexOf(':') === -1 ? validators.ipv4Address(str) : validators.ipv6Address(str);
  },
  ipWithPort(str: string): string {
    if (str.indexOf('.') >= 0) {
      const splitted = str.split(':');
      const port = Number(splitted[1]);
      if (!(port !== NaN && 1 <= port && port <= 65535)) {
        return '不正なポートです';
      }
      return validators.ipv4Address(splitted[0]);
    } else if (str.indexOf('[') === 0) {
      const idx = str.lastIndexOf(':');
      const port = Number(str.slice(idx + 1));
      if (!(port !== NaN && 1 <= port && port <= 65535)) {
        return '不正なポートです';
      }
      const address = str.slice(1, idx - 1);
      return validators.ipv6Address(address);
    } else {
      const idx = str.lastIndexOf(':');
      const port = Number(str.slice(idx + 1));
      if (!(port !== NaN && 1 <= port && port <= 65535)) {
        return '不正なポートです';
      }
      const address = str.slice(0, idx);
      return validators.ipv6Address(address);
    }
  },
  virtualIpAddress(str: string): string {
    const splitted = str.split('=');
    if (!(splitted.length == 2 && splitted[0].length > 0)) {
      return '不正な形式です';
    }
    return splitted[1].indexOf(':') == -1
      ? validators.ipv4Address(splitted[1])
      : validators.ipv6Address(splitted[1]);
  },
  macAddress(str: string): string {
    const splitted = str.split(':');
    if (!(splitted.length === 6 && splitted.every(x => x.match(/[0-9a-fA-F]{2}/)))) {
      return '不正なMACアドレスです';
    }
    return '';
  },
  byteLength(min?: number, max?: number): Validator {
    return (str: string) => {
      const length = encodeURIComponent(str).replace(/%../g, '#').length;
      if (min && length < min) {
        return `${min} バイト以上の文字列を入力してください`;
      }
      if (max && length > max) {
        return `${max} バイト以下の文字列を入力してください`;
      }
      return '';
    };
  },
  byteInHex(minBytes?: number, maxBytes?: number, forceCase?: 'lower' | 'upper'): Validator {
    return (str: string) => {
      if (!str.match(/^[0-9a-fA-F]*$/)) {
        return 'バイナリ値を16進で入力してください';
      }
      if (forceCase) {
        const matcher = forceCase === 'lower' ? /[A-F]/ : /[a-f]/;
        if (str.match(matcher)) {
          return `${forceCase === 'lower' ? '大文字' : '小文字'}は使用できません`;
        }
      }
      const length = Math.floor(str.length / 2);
      if (minBytes && length < minBytes) {
        return `${minBytes} バイト以上になるよう入力してください`;
      }
      if (maxBytes && length > maxBytes) {
        return `${maxBytes} バイト以下になるよう入力してください`;
      }
      if (str.length % 2 !== 0) {
        return 'バイナリ値を16進で入力してください';
      }
      return '';
    };
  },
  duid(str: string): string {
    if (validators.byteInHex(4, undefined, 'lower')(str)) {
      return '正しいDUIDを入力してください';
    }
    const type = parseInt(str.slice(0, 4), 16);
    if (type === 1) {
      // type(2bytes), HWtype(2bytes), time(4bytes), link-layer address(variable length)
      if (validators.byteInHex(9, 130, 'lower')(str)) {
        return 'hardware type, time, link-layer addressを正しく入力してください';
      }
    } else if (type === 2) {
      // type(2bytes), enterprise-number(4bytes), identifier(variable length)
      if (validators.byteInHex(7, 130, 'lower')(str)) {
        return 'enterprise-number, identifierを正しく入力してください';
      }
    } else if (type === 3) {
      // type(2bytes), HWtype(2bytes), link-layer address(variable length)
      if (validators.byteInHex(5, 130, 'lower')(str)) {
        return 'hardware type, link-layer addressを正しく入力してください';
      }
    } else if (type === 4) {
      // type(2bytes), UUID(128 bits)
      if (validators.byteInHex(18, 18, 'lower')(str)) {
        return 'UUIDを正しく入力してください';
      }
    } else {
      return 'DUID-Typeが不正です';
    }
    return '';
  },
  validLifetime(str: string) {
    if (!str.match(/^-?\d+$/)) {
      return '数値を入力してください';
    }
    const value = parseInt(str, 10);
    const lower = Math.round(Date.now() / 1000) * -1;
    if (value < lower) {
      return '現在のUNIX時刻以上の負の値は設定できません';
    }
    return '';
  },
  umask(str: string) {
    if (!str.match(/^[0124]?[0-7]{3}$/)) {
      return '不正なumaskです';
    }
    return '';
  },
  threshold(str: string) {
    if (str.match(/%/)) {
      if (str.match(/^(0|[1-9][0-9]{0,2})(\.[0-9]{1,2})?%$/)) {
        const value = parseFloat(str.slice(0, -1));
        if (value > 100) {
          return '100%以下の割合を指定してください';
        }
      } else {
        return '不正な割合指定です';
      }
    } else if (validators.integer(0, int32_max)(str) !== '') {
      return '不正なthreshold値です';
    }
    return '';
  },
  multipleOf(number: number): Validator {
    return (str: string) => {
      if (str.match(/^\d*$/) && parseInt(str, 10) % number == 0) {
        return '';
      }
      return `${number}の倍数を指定してください`;
    };
  },
  minLength(num: number): Validator {
    return (str: string) => {
      if (str.length < num) {
        return `${num}文字以上入力してください`;
      }
      return '';
    };
  },
  UserOrGroupString(str: string) {
    if (str.match(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/)) {
      return '';
    } else {
      return `使用できない文字が含まれています`;
    }
  },
  UserOrGroupNameValid(str: string) {
    if (str.length > 50) {
      return '最大50文字までです。';
    } else {
      return '';
    }
  },
  serverNameValid(str: string) {
    if (str.length > 50) {
      return '最大50文字までです。';
    } else {
      return '';
    }
  },
  groupCommentValid(str: string) {
    if (str.length > 100) {
      return '100文字以内で入力して下さい。';
    } else {
      return '';
    }
  },
  password(str: string) {
    if (str.length < 4) {
      return '4文字以上のパスワードを入力してください';
    } else if (72 < str.length) {
      return '72文字以下のパスワードを入力してください';
    } else if (!str.match(/^[\x20-\x7E]+$/)) {
      return '使用できない文字が含まれています';
    }
    return '';
  },
  passwordConfirm(expect: string) {
    return (str: string) => {
      if (str === '' || str === expect) {
        return '';
      }
      return `同一の値にしてください。`;
    };
  },
  absolutePath(str: string) {
    if (str.match(/^\/.*$/)) {
      return '';
    } else {
      return `絶対パスを入力してください。`;
    }
  },
  poolIdStr(str: string) {
    if (str.match(/^[\x21\x23-\x2B\x2D\x2F-\x7E]+$/)) {
      return '';
    } else {
      return '使用できない文字種が含まれています';
    }
  },
  domain(str: string) {
    var pattern = 'a-zA-Z0-9-_\\.\\/';

    var maxLength = str.slice(-1) == '.' ? 254 : 253;
    if (str.length > maxLength) {
      return '最大長を超えています。';
    }
    var labels = str.split('.');
    for (var i = 0; i < labels.length; i++) {
      var target = labels[i];
      if (target.length == 0 && i != labels.length - 1 && str != '.') {
        return '"."の位置が不正です。';
      }
      if (target.length > 63) {
        return '1ラベルの最大長は63文字です。';
      }
    }
    if (str.match(/[\\ \t]/)) {
      return '使用できない文字が含まれています。';
    }

    var reg = new RegExp('^[' + pattern + ']+$');
    if (!str.match(reg)) {
      return '使用できない文字が含まれています。';
    }
    return '';
  },
} as const;

export default validators;
