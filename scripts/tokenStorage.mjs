/**
 * @module tokenStorage
 * @description Module that acts as a storage and transport medium for access/refresh tokens received from the server.
 * The page provider script is what recieves the initial tokens, but they are required by the tool methods to make further
 * requests to the server
 * @version 0.1.0
 * @author Declan Roy Alan Wadsworth (drw8)
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The access token for this session, stored globally in this modules scope, but inaccessible to anything without access
 * to this module
 * @type {string}
 */
var accessToken = "null";
/**
 * The refresh token provided by the API server.
 * @type {string}
 */
var refreshToken = "null";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Function to store an access token received from the API server
 * @param accessToken the token to store within this modules scope
 */
export function setAccessToken(accesstoken){
    accessToken = accesstoken;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function getAccessToken(){
    return accessToken;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function setRefreshToken(refreshtoken){
    refreshToken = refreshtoken;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function getRefreshToken(){
    return refreshToken;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////