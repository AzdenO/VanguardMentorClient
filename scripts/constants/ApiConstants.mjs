/**
 * @module ApiConstants
 * @description module to hold constant variables associated with the remote Mentor API server
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The API servers base domain
 * @type {string}
 */
export const serverDomain = "https://192.168.10.46:3000";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The basic POST authorisation endpoint used to establish a presence on the server using a provided bungie OAuth2 code,
 * or if any client cannot provide an exisitng refresh token, so OAuth2 must be established again
 * @type {string}
 */
export const serverAuth = serverDomain+"/server/authorize";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * VanguardMentor.GetActivityBuildSuggestion
 * The GET endpoint on the API to request a build suggestion for a specific activity
 * @type {string}
 */
export const serverBuildByAct = serverDomain+"/server/coach/act_sug_build";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * VanguardMentor.GetWeaponSkillsAnalysis
 * The GET endpoint on the API to request coaching for the players weapon skills
 * @type {string}
 */
export const serverWeaponSkills = serverDomain+"/server/coach/weapon_skills";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * VanguardMentor.getCharacterAnalysis
 * The GET endpoint on the API to request an analysis of a selected characters current configuration
 * @type {string}
 */
export const serverCharacterAnalysis = serverDomain+"/server/coach/characterAnalysis";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
