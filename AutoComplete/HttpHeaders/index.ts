import { Authentication } from "./Authentication";
import { Caching } from "./Caching";
import { Conditionals } from "./Conditionals";

export type HttpHeaders = 
  | Authentication 
  | Caching 
  | Conditionals
  | (string & {}); 
