type Envvariables = {
  readonly ENV: "production" | "staging" | "development" | "test";
  readonly NODE_ENV: "production" | "development";
  readonly NEXT_PUBLIC_REST_API_ENDPOINT: string;
  readonly NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
  readonly NEXT_PUBLIC_SITE_URL: string;
  readonly NEXT_PUBLIC_ADMIN_URL: string;
  readonly NEXTAUTH_URL: string;
  readonly SECRET: string;
  readonly GOOGLE_CLIENT_ID: string;
  readonly GOOGLE_CLIENT_SECRET: string;
  readonly FACEBOOK_CLIENT_ID: string;
  readonly FACEBOOK_CLIENT_SECRET: string;
};
export function getEnv(
  name: keyof Envvariables
): Envvariables[keyof Envvariables] {
  const val = process.env[name];
  if (!val) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }
  return val;
}
