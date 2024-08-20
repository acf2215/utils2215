import { Authentication } from "./Authentication";
import { Caching } from "./Caching";
import { Conditionals } from "./Conditionals";
import { ConnectionManagement } from "./ConnectionManagement";
import { ContentNegotiation } from "./ContentNegotiation";
import { Controls } from "./Controls";
import { Cookies } from "./Cookies";
import { CORS } from "./CORS";

export type HttpHeaders = 
  | Authentication 
  | Caching 
  | Conditionals
  | ConnectionManagement
  | ContentNegotiation
  | Controls
  | Cookies
  | CORS
  | (string & {}); 
