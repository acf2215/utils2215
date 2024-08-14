import { Authentication } from "./Authentication";
import { Caching } from "./Caching";

export type HttpHeaders = 
  | Authentication 
  | Caching 
  | (string & {}); 
