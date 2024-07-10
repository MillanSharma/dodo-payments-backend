import type { Env } from "../dodo-payments-backend/src/utils/env";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
