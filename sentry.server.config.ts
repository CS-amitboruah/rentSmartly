import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://6d57f1babd1b4857971b6b71701f3d2c@o4504598551330816.ingest.sentry.io/4504599043768320",

  tracesSampleRate: 1.0,
});
