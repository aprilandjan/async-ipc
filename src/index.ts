export interface IpcHostConfig {
  /** the name of the ipc host */
  name: string;
  /** the default timeout for this host message */
  timeout: number;
  /** the integrated type of this ipcHost */
  type?: string;
}

export interface IpcConfig {
  timeout: number;
  noReply: boolean;
}

/** send interface  */
export interface Send {
  (channel: string, payload: any): void;
}

export function createHost(config: IpcHostConfig) {
  return {
    send: () => {},
  }
}