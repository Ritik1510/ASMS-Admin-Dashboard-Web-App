/** 
 * Public entry point for the HTTP infrastructure.
 * Exposes only the HTTP capabilities intended for consumers, 
 * while keeping the internal implementation modules private. 
*/

export { request } from "./request.http";
export type { RequestConfig } from "./request.http";