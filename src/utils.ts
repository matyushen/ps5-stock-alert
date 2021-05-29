export const getEnvVar = (key: string) => {
  const value = process.env[key];
  if (!value) throw Error(`Missing environment variable ${key}!`);
  return value;
};
