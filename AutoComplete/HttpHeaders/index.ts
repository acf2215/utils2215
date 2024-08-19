import { Authentication } from "./Authentication";
import { Caching } from "./Caching";
import { Conditionals } from "./Conditionals";
import { ConnectionManagement } from "./ConnectionManagement";

export type HttpHeaders = 
  | Authentication 
  | Caching 
  | Conditionals
  | ConnectionManagement
  | (string & {}); 
