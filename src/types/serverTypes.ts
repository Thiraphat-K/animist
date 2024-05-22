export type NextDevOptions = {
  turbo?: boolean;
  port: number;
  hostname?: string;
  experimentalHttps?: boolean;
  experimentalHttpsKey?: string;
  experimentalHttpsCert?: string;
  experimentalHttpsCa?: string;
  experimentalUploadTrace?: string;
};

export type NextStartOptions = {
    port: number;
    hostname?: string;
    keepAliveTimeout?: number;
}

export type PortSource = "cli" | "default" | "env";
