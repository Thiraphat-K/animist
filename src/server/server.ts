import {
  NextDevOptions,
  PortSource,
  NextStartOptions,
} from "../types/serverTypes";
import { config } from "dotenv";

config();

const getPortSource = (): PortSource => {
  const argIdx = process.argv.indexOf("--port-source");
  if (argIdx !== -1 && process.argv[argIdx + 1]) {
    const portSourceArg = process.argv[argIdx + 1] as PortSource;
    if (["default", "cli", "env"].includes(portSourceArg)) return portSourceArg;
  }
  return "default";
};

const main = async () => {
  const port = parseInt(process.env.APP_PORT!);
  if (process.argv.length > 2 && process.argv[2] === "dev") {
    const { nextDev } = await import("next/dist/cli/next-dev");
    const options: NextDevOptions = { port };
    const portSource = getPortSource();
    await nextDev(options, portSource);
  } else {
    const { nextStart } = await import("next/dist/cli/next-start");
    const options: NextStartOptions = { port };
    await nextStart(options);
  }
};

main();
