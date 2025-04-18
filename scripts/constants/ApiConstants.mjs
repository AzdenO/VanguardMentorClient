/**
 * @module ApiConstants
 * @description module to hold constant variables associated with the remote Mentor API server
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The API servers base domain
 * @type {string}
 */
export const serverDomain = "https://cd47-86-175-119-200.ngrok-free.app";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The basic POST authorisation endpoint used to establish a presence on the server using a provided bungie OAuth2 code,
 * or if any client cannot provide an exisitng refresh token, so OAuth2 must be established again
 * @type {string}
 */
export const serverAuth = serverDomain+"/server/authorize";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The GET endpoint on the API to request a build suggestion for a specific activity
 * @type {string}
 */
export const serverBuildByAct = serverDomain+"/server/coach/act_sug_build";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////