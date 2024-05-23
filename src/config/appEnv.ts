type envTypes = {
  baseApiUrl?: string;
};

export const appEnv: envTypes = {
    baseApiUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
};
