import validators, { Validator } from '@/assets/ts/validators';

const int32_max = Math.pow(2, 31) - 1;
const scala_int_max = Math.pow(2, 31) - 1;

interface MultiInput {
  key: string;
  type: 'multi';
  help?: string;
  validators: Validator[];
  validatorsPerItem: Validator[];
  required?: boolean;
  values?: undefined;
  minItems?: number;
  maxItems?: number;
  unit?: string;
}

export type ConfigDefnition =
  | {
      key: string;
      type: 'text';
      help?: string;
      validators: Validator[];
      required?: boolean;
      values?: undefined;
      minItems?: undefined;
      maxItems?: undefined;
      unit?: string;
    }
  | MultiInput
  | {
      key: string;
      type: 'select';
      help?: string;
      validators?: undefined;
      required?: boolean;
      values: string[];
      minItems?: undefined;
      maxItems?: undefined;
      unit?: undefined;
    }
  | {
      key: string;
      type: 'check';
      help?: string;
      validators?: undefined;
      required?: boolean;
      values: string[];
      unit?: undefined;
    }
  | {
      key: string;
      type: 'readonly';
      help?: string;
      validators?: undefined;
      required?: boolean;
      values?: undefined;
      minItems?: undefined;
      maxItems?: undefined;
      unit?: undefined;
    };

export function isMulti(config: ConfigDefnition): config is MultiInput {
  return config.type == 'multi';
}

const d = (e: ConfigDefnition): ConfigDefnition => e;

export const dhcpdConfigDefnitions: Readonly<Array<ConfigDefnition>> = [
  d({
    key: 'user',
    type: 'readonly',
    help: `dhcpdプロセスを起動するユーザIDを指定します。`,
  }),
  d({
    key: 'group',
    type: 'readonly',
    help: `dhcpdプロセスを起動するグループIDを指定します。`,
  }),
  d({
    type: 'text',
    key: 'umask',
    validators: [validators.umask],
    required: true,
    help: `パーミッションを指定します。
          許可しないビットを指定します。`,
  }),
  d({
    key: 'interface',
    type: 'text',
    validators: [validators.alphanumericSymbols],
    help: '送受信に使用するNICを指定します',
  }),
  d({
    key: 'eventlog',
    type: 'select',
    values: ['on', 'off'],
    help: 'アプリケーションログの出力の有無を指定します',
  }),
  d({
    key: 'file_name_event_log',
    type: 'readonly',
    help: 'アプリケーションログ名（自動的に設定されます）',
  }),
  d({
    key: 'leaselog',
    type: 'select',
    values: ['on', 'off'],
    help: 'リースログの出力の有無を指定します',
  }),
  d({
    key: 'file_name_lease_log',
    type: 'readonly',
    help: 'リースログ名（自動的に設定されます）',
  }),
  d({
    key: 'tftplog',
    type: 'select',
    values: ['on', 'off'],
    help: `TFTPログの出力の有無を指定します`,
  }),
  d({
    key: 'file_name_tftp_log',
    type: 'readonly',
    help: `TFTPログ名（自動的に設定されます）`,
  }),
  d({
    key: 'detaillog',
    type: 'select',
    values: ['on', 'off'],
    help: 'パケットログの出力の有無を指定します',
  }),
  d({
    key: 'file_name_detail_log',
    type: 'readonly',
    help: 'パケットログ名（自動的に設定されます）',
  }),
  d({
    key: 'log_rotate_time',
    type: 'text',
    validators: [validators.integer(1, 86400)],
    required: true,
    help: 'リースログ、パケットログの切り替え時間を指定します',
    unit: '秒',
  }),
  d({
    key: 'ctl_port',
    type: 'readonly',
    help: '運用コマンド用のポート番号（自動的に設定されます）',
  }),
  d({
    key: 'renew_lifetime',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.threshold],
    required: true,
    help: `T1(Renew)時刻の値を指定します。
          DHCPv4で0の場合、当該オプションは設定されません。
          DHCPの場合、複数指定することでIA_PD,IA_NA,IA_TAの順に値が指定可能です。
          省略された場合は最後の値がそれぞれのIAオプション向けに使用されます。`,
    minItems: 1,
    maxItems: 3,
  }),
  d({
    key: 'rebind_lifetime',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.threshold],
    required: true,
    help: `T2(Rebind)時刻の値を指定します。
          DHCPv4で0の場合、当該オプションは設定されません。
          数値のみを指定した場合は固定の秒数として扱われます。
          末尾に % を指定した場合はリース時間(valid_lifetime)に対する割合として扱われます。
          DHCPの場合、複数指定することでIA_PD,IA_NA,IA_TAの順に値が指定可能です。
          省略された場合は最後の値がそれぞれのIAオプション向けに使用されます。`,
    minItems: 1,
    maxItems: 3,
  }),
  d({
    key: 'preferred_lifetime',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.threshold],
    required: true,
    help: `推奨有効期間を指定します。
          数値のみを指定した場合は固定の秒数として扱われます。
          末尾に % を指定した場合はリース時間(valid_lifetime)に対する割合として扱われます。
          DHCPの場合、複数指定することでIA_PD,IA_NA,IA_TAの順に値が指定可能です。
          省略された場合は最後の値がそれぞれのIAオプション向けに使用されます。`,
    minItems: 1,
    maxItems: 3,
  }),
  d({
    key: 'valid_lifetime',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.integer(1, int32_max)],
    required: true,
    help: `最大有効期間(秒)を指定します。
          DHCPの場合、複数指定することでIA_PD,IA_NA,IA_TAの順に値が指定可能です。
          省略された場合は最後の値がそれぞれのIAオプション向けに使用されます。`,
    minItems: 1,
    maxItems: 3,
  }),
  d({
    key: 'discover_lifetime',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.integer(1, int32_max)],
    required: true,
    help: `払出要求時の最大有効期間(秒)を指定します。
          DHCPの場合、複数指定することでIA_PD,IA_NA,IA_TAの順に値が指定可能です。
          省略された場合は最後の値がそれぞれのIAオプション向けに使用されます。`,
    minItems: 1,
    maxItems: 3,
  }),
  d({
    key: 'renew_threshold',
    type: 'text',
    validators: [validators.threshold],
    required: true,
    help: `Request, Renew, Rebind要求時にリース時間の延長を行う閾値を指定します。
          数値のみを指定した場合はすべてのプールに対し固定の秒数として扱われます。
          末尾に % を指定した場合は個々のプールのリース時間(valid_lifetime)に対する割合として扱われます。
          この閾値以下の場合のみリース時間の延長を行います。
          ０の場合は無条件に延長を行います。`,
  }),
  d({
    key: 'grace_period',
    type: 'text',
    validators: [validators.integer(0, int32_max)],
    required: true,
    help: 'リース時間満了後、当該プレフィックスを払い出すまでの猶予時間を指定します。',
    unit: '秒',
  }),
  d({
    key: 'upper_random_lifetime',
    type: 'text',
    validators: [validators.integer(-100, 100)],
    required: true,
    help: `クライアントに通知するリース時間の上限ランダム幅を指定します。
          リース時間が100であり、かつ設定値が10だった場合、応答される最大のリース時間は110になります。`,
    unit: '％',
  }),
  d({
    key: 'lower_random_lifetime',
    type: 'text',
    validators: [validators.integer(-100, 100)],
    required: true,
    help: `クライアントに通知するリース時間の下限ランダム幅を指定します。
          リース時間が100であり、かつ設定値が-5だった場合、応答される最小のリース時間は95になります。`,
    unit: '％',
  }),
  d({
    key: 'subnet_type',
    type: 'select',
    values: ['without-relay', 'outside-link', 'inside-link', 'outside-peer', 'inside-peer'],
    help: `払い出しアドレスプールの選択に使用するリレーエージェントアドレスの取得方法を指定します。
          without-relay: リレーエージェントを使用しません
          outside-link: Relay-Forwardメッセージのうち、DHCPサーバーから見て外側からsubnet_depth個目のリンクアドレスを使用します
          inside-link: Relay-Forwardメッセージのうち、DHCPサーバーから見て内側からsubnet_depth個目のリンクアドレスを使用します
          outside-peer: Relay-Forwardメッセージのうち、DHCPサーバーから見て外側からsubnet_depth個目のピアアドレスを使用します
          inside-peer: Relay-Forwardメッセージのうち、DHCPサーバーから見て内側からsubnet_depth個目のピアアドレスを使用します`,
  }),
  d({
    key: 'subnet_depth',
    type: 'text',
    validators: [validators.integer(0, int32_max)],
    required: true,
    help: `払い出しアドレスプールの選択に使用するリレーエージェントアドレスのRelay-Forwardのカプセル位置を指定します。
          0を指定すると最も外側/内側のメッセージとなります。`,
  }),
  d({
    key: 'allow_without_relay',
    type: 'select',
    values: ['yes', 'no'],
    help: `リレーパケットでない要求を許容するかを指定します。
          subnet_typeがwithout-relayの場合は必ずyesを指定する必要があります。
          リレーパケットでない要求のリレーエージェントアドレスは::として扱われます。`,
  }),
  d({
    key: 'ia_threshold',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.integer(0, 99)],
    minItems: 1,
    maxItems: 3,
    help: `クライアントからのIA_PD/IA_NA/IA_TAのリクエストに対して、IPv6プレフィックスを払い出す最大数を指定します。
      複数指定する場合は、先頭からIA_PD,IA_NA,IA_TAの値として指定されます。
      省略された場合は最後の値がそれぞれのIAオプション向けに使用されます。`,
  }),
  d({
    key: 'siaddr',
    type: 'text',
    validators: [validators.ipv4Address],
    required: true,
    help: `DHCPv4においてDHCPメッセージのsiaddrフィールドに設定するアドレスを指定します。`,
  }),
  d({
    key: 'boot_file',
    type: 'text',
    validators: [validators.alphanumericSymbols],
    required: false,
    help: `DHCPv4においてDHCPメッセージのfileフィールドに設定するファイル名を指定します。`,
  }),
  d({
    key: 'server_id',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.ipAddress],
    minItems: 0,
    help: `DHCPv4においてServer Identifierオプションに設定するサーバーのIPアドレスを指定します。`,
  }),
  d({
    key: 'router_list',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.ipAddress],
    minItems: 0,
    help: `ルーターオプションに設定するデフォルトのIPアドレスを指定します。`,
  }),
  d({
    key: 'dns_list',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.ipAddress],
    minItems: 0,
    help: `DNSサーバーオプションに設定するデフォルトのIPアドレスを指定します。`,
  }),
  d({
    key: 'ntp_list',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.ipAddress],
    minItems: 0,
    help: `NTPサーバーオプションに設定するデフォルトのIPアドレスを指定します。`,
  }),
  d({
    key: 'domain_name',
    type: 'text',
    validators: [validators.domain],
    required: false,
    help: `ドメイン名オプションに設定するデフォルトのドメイン名を指定します。`,
  }),
  d({
    key: 'size_shared_memory',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help: 'プール情報およびリース情報用に割り当てられる共有メモリサイズを指定します(単位：byte)',
    unit: 'bytes',
  }),
  d({
    key: 'lease_db',
    type: 'text',
    validators: [validators.alphanumericSymbols],
    required: true,
    help: 'IPv6プレフィックスの割り当て状況を収めるファイルDBを指定します',
  }),
  d({
    key: 'input_interval',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help: 'アドレスプール差分情報ファイルを読み込む間隔を指定します',
    unit: '秒',
  }),
  d({
    key: 'temporary_closetime',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help:
      '払出IPアドレスへのping送信に対し、応答があった場合の当該IPアドレスの閉塞時間を指定します。',
    unit: '秒',
  }),
  d({
    key: 'ping_enable',
    type: 'select',
    values: ['yes', 'no'],
    help: 'ping送信機能の使用の有無を指定します。',
  }),
  d({
    key: 'ping_lifetime',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help: 'ping送信の有効期間を指定します。',
    unit: '秒',
  }),
  d({
    key: 'ping_interval',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help: '起動時のping送信の間隔を指定します。',
    unit: 'ミリ秒',
  }),
  d({
    key: 'ping_timeout1',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help: 'ping送信に対する応答の待ち受け時間を指定します。',
    unit: 'ミリ秒',
  }),
  d({
    key: 'ping_timeout2',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help: 'ping送信に対する応答の待ち受け時間を指定します。',
    unit: 'ミリ秒',
  }),
  d({
    key: 'ignore_inform',
    type: 'check',
    values: ['client', 'relayagent'],
    required: true,
    help: `情報通知要求破棄対象を指定します。
          client: DHCPクライアント
          relayagent: DHCPリレーエージェント`,
  }),
  d({
    key: 'reserved_address',
    type: 'check',
    values: ['classful_network', 'classful_broadcast', '24bit_network', '24bit_broadcast'],
    help: `DHCPv4において払出対象から除外する予約済みアドレスの種別を指定します。
          classful_network: IPアドレスクラスのネットワークアドレス
          classful_broadcast: IPアドレスクラスのブロードキャストアドレス
          24bit_network: 第4オクテットが0のアドレス
          24bit_broadcast: 第4オクテットが255のアドレス`,
  }),
  d({
    key: 'lease_db_rotate_time',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help: `リースDBのジャーナルファイルの切り替え時間を指定します。`,
    unit: '秒',
  }),
  d({
    key: 'lease_db_rotate_size',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help: `リースDBのジャーナルファイルの切り替えサイズを指定します。`,
    unit: 'byte',
  }),
  d({
    key: 'concurrency',
    type: 'text',
    validators: [validators.integer(1, 99)],
    required: true,
    help: `DHCPパケットを処理するプロセス数を指定します。`,
  }),
  d({
    key: 'closed_mac_address',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.macAddress],
    minItems: 0,
    help: `閉塞対象のMACアドレスを指定します。
           特定のベンダーの機器や特定の端末に対する払出を行いたくない場合に指定します。`,
  }),
  d({
    key: 'ctl_client',
    type: 'readonly',
    help: '運用コマンド用のクライアントIPアドレス（自動的に設定されます）',
  }),
  d({
    key: 'log_rotate_size',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help:
      'log_rotate_typeの値がfilesizeの時にリースログ、パケットログの切り替えサイズを指定します。',
    unit: 'byte',
  }),
  d({
    key: 'log_rotate_type',
    type: 'select',
    values: ['inittime', 'localtime', 'filesize'],
    help: `リースログ、パケットログの切り替えタイミングを指定します。
          inittime: 起動時の時刻を基準として指定間隔で切り替えを行います。
          localtime: システム時刻を基準として指定間隔で切り替えを行います
          filesize: 指定ファイルサイズで切り替えを行います。`,
  }),
  d({
    key: 'mac_auth',
    type: 'select',
    values: ['disable', 'nak', 'discard'],
    help: `MACアドレス認証機能の動作を指定します。
          disable: 認証を行いません(MACアドレス情報の検索は行う)
          nak: 認証失敗時にNoPrefixAvailを応答します
          discard: 認証失敗時にパケットを破棄します`,
  }),
  d({
    key: 'tftp_server',
    type: 'text',
    validators: [validators.ipAddress],
    required: true,
    help: 'TFTPサーバーオプションに設定するデフォルトのTFTPサーバーを指定します。',
  }),
  d({
    key: 'max_discover_queue',
    type: 'text',
    validators: [validators.integer(0, int32_max)],
    required: true,
    help: `ping応答待ちのDHCPDISCOVER要求の最大数を指定します。
          大量のDHCPDISCOVERを受信する可能性があるとき同時処理数を制限したいときに指定します。`,
  }),
  d({
    key: 'max_discover_pps',
    type: 'text',
    validators: [validators.integer(0, int32_max)],
    required: true,
    help: '1秒間あたりの払出要求への最大応答数を指定します。',
  }),
  d({
    key: 'use_broadcast',
    type: 'select',
    values: ['yes', 'no'],
    help: `DHCPv4においてブロードキャストを利用するかどうかを指定します。
          yesを指定する場合、リレーエージェントとして0.0.0.0を登録する必要があります。`,
  }),
  d({
    key: 'remote_id_auth',
    type: 'select',
    values: ['disable', 'nak', 'discard'],
    help: `リモートID認証を利用するかどうかを指定します。
          disable: 認証を行いません
          nak: 認証拒否時にNAKを応答します
          discard: 認証拒否時にパケットを破棄します`,
  }),
  d({
    key: 'ldap_auth',
    type: 'select',
    values: ['disable', 'enable'],
    help: `LDAP認証を利用するかどうかを指定します。
          disable: 認証を行いません
          enable: 認証を行います`,
  }),
  d({
    key: 'ldap_server',
    type: 'text',
    validators: [validators.ipWithPort],
    required: false,
    help: 'LDAP認証で利用するLDAPサーバーのアドレスとポートを指定します',
  }),
  d({
    key: 'ldap_bind_dn',
    type: 'text',
    validators: [validators.alphanumericSymbols],
    required: false,
    help: 'LDAP認証で利用するバインドDNを指定します',
  }),
  d({
    key: 'ldap_password',
    type: 'text',
    validators: [validators.alphanumericSymbols],
    required: false,
    help: 'LDAP認証で利用するバインド時のパスワードを指定します',
  }),
  d({
    key: 'ldap_base_dn',
    type: 'text',
    validators: [validators.alphanumericSymbols],
    required: false,
    help: 'LDAP認証で利用する検索時のベースDNを指定します',
  }),
  d({
    key: 'ldap_dns',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.ipAddress],
    minItems: 0,
    help: 'LDAP認証で登録のなかったクライアントに応答するDNSサーバーのアドレスを指定します',
  }),
  d({
    key: 'allow_lease_query',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.ipAddress],
    minItems: 0,
    help: 'リースクエリーを許可するクライアントのアドレスを指定します。',
  }),
  d({
    key: 'max_expire_count',
    type: 'text',
    validators: [validators.integer(1, int32_max)],
    required: true,
    help: '1秒間における期限切れリースの開放数を指定します。',
  }),
  d({
    key: 'tftp_enable',
    type: 'select',
    values: ['yes', 'no'],
    help: 'TFTPサーバーとして動作するかを指定します。',
  }),
  d({
    key: 'statistics_interval',
    type: 'text',
    validators: [validators.integer(1, 86400)],
    required: true,
    help: '統計情報の取得間隔を指定します。',
    unit: '秒',
  }),
].filter(({ key }) => {
  if (process.env.NUXT_ENV_DHCP_MANAGER_EDITION === 'STANDARD') {
    return (
      key !== 'grace_period' && key !== 'upper_random_lifetime' && key !== 'lower_random_lifetime'
    );
  } else {
    return true;
  }
});

export const managerIniDefnitions: Readonly<ConfigDefnition[]> = [
  d({
    key: 'bind_address',
    type: 'text',
    help: '同期時の自ホストのIPアドレスを指定します',
    validators: [validators.required, validators.ipAddress],
    required: true,
  }),
  d({
    key: 'bind_port',
    type: 'readonly',
    help: '同期時の自ホストのポート番号（自動的に設定されます）',
  }),
  d({
    key: 'sync_port',
    type: 'readonly',
    help: '同期時のポート番号（自動的に設定されます）',
  }),
  d({
    key: 'heartbeat_interval',
    type: 'text',
    validators: [validators.required, validators.integer(1, scala_int_max)],
    required: true,
    help: 'ハートビートを送信する間隔を指定します',
    unit: '秒',
  }),
  d({
    key: 'heartbeat_retry_count',
    type: 'text',
    validators: [validators.required, validators.integer(1, scala_int_max)],
    required: true,
    help: 'ハートビートのリトライ回数を指定します',
    unit: '回',
  }),
  d({
    key: 'connect_interval',
    type: 'text',
    validators: [validators.required, validators.integer(1, scala_int_max)],
    required: true,
    help: '同期するサーバーへのTCP接続を試行する間隔を指定します',
    unit: '秒',
  }),
  d({
    key: 'connect_timeout',
    type: 'text',
    validators: [validators.required, validators.integer(1, scala_int_max)],
    required: true,
    help: '同期するサーバーへのTCP接続タイムアウト時間を指定します',
    unit: '秒',
  }),
  d({
    key: 'connect_retry_count',
    type: 'text',
    validators: [validators.required, validators.integer(1, scala_int_max)],
    required: true,
    help: '同期するサーバーへのTCP接続リトライ回数を指定します',
    unit: '回',
  }),
  d({
    key: 'child_process',
    type: 'text',
    validators: [validators.alphanumericSymbolSpaces],
    required: true,
    help: '同期プロセスが子プロセスを起動する際のコマンドライン引数を指定します',
  }),
  d({
    key: 'file_name_sync_log',
    type: 'readonly',
    help: '同期ログ名（自動的に設定されます）',
  }),
  d({
    key: 'synclog',
    type: 'select',
    values: ['on', 'off'],
    help: '同期ログの出力の有無を指定します',
  }),
  d({
    key: 'log_rotate_time',
    type: 'text',
    validators: [validators.required, validators.integer(1, 86400)],
    required: true,
    help: '同期ログの切り替え時間を指定します',
    unit: '秒',
  }),
  d({
    key: 'syslog_facility',
    type: 'select',
    values: [
      'auth',
      'cron',
      'daemon',
      'kern',
      'lpr',
      'mail',
      'news',
      'syslog',
      'user',
      'uucp',
      'local0',
      'local1',
      'local2',
      'local3',
      'local4',
      'local5',
      'local6',
      'local7',
    ],
    help: 'システムログのファシリティを指定します',
  }),
  d({
    key: 'user',
    type: 'readonly',
    help: 'managerプロセスを起動するユーザIDを指定します。',
  }),
  d({
    key: 'group',
    type: 'readonly',
    help: 'managerプロセスを起動するグループIDを指定します。',
  }),
  d({
    key: 'umask',
    type: 'text',
    validators: [validators.umask],
    required: true,
    help: 'managerプロセスのumaskを8進数で指定します。',
  }),
  d({
    key: 'backup_client',
    type: 'text',
    validators: [validators.ipAddress],
    required: false,
    help: 'コールドスタンバイ用のクライアントアドレスを指定します。',
  }),
  d({
    key: 'virtual_ip_address',
    type: 'multi',
    validators: [],
    validatorsPerItem: [validators.virtualIpAddress],
    help: `稼働系に付与する仮想IPアドレスを下記形式で指定します。
          インターフェース名1=仮想IPアドレス1`,
    minItems: 0,
  }),
  d({
    key: 'duplicate_address',
    type: 'select',
    values: ['ignore', 'halt', 'wait'],
    help: `仮想IPアドレス付与時にvirtual_ip_addressの重複を検出した際の動作を指定します。
          ignore: 強制的に仮想IPアドレスを付与します
          halt: 稼働系になることを断念しプロセスを停止します
          wait: 重複が解消するまで待機します`,
  }),
];
