import { Authentication } from "./Authentication";
import { Caching } from "./Caching";
import { Conditionals } from "./Conditionals";
import { ConnectionManagement } from "./ConnectionManagement";
import { ContentNegotiation } from "./ContentNegotiation";

export type HttpHeaders = 
  | Authentication 
  | Caching 
  | Conditionals
  | ConnectionManagement
  | ContentNegotiation
  | (string & {}); 
