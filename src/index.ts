export interface IpcHostConfig {
  /** the name of the ipc host */
  name: string;
  /** the default timeout for this host message */
  timeout: number;
  /** the integrated type of this ipcHost */
  type?: string;
}
