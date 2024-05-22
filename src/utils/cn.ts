import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...className: ClassValue[]) => {
  return twMerge(clsx(className));
};

export default cn;
