import { Authentication } from "./Authentication";

export type HttpHeaders = 
  | Authentication 
  | (string & {});
