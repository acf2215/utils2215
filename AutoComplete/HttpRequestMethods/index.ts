export type HttpRequestMethods = 
  | 'GET' 
  | 'HEAD'
  | 'POST' 
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH'
  | (string & {});
