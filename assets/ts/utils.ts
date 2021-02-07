const utils = {
  wait(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  },
} as const;

export default utils;
