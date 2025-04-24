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
export const serverBuildByAct = serverDomain+"/server/coach/character/CHARACTERID/activity/ACTIVITYID/build";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * VanguardMentor.GetWeaponSkillsAnalysis
 * The GET endpoint on the API to request coaching for the players weapon skills
 * @type {string}
 */
export const serverWeaponSkills = serverDomain+"/server/coach/weapon-skills";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * VanguardMentor.getCharacterAnalysis
 * The GET endpoint on the API to request an analysis of a selected characters current configuration
 * @type {string}
 */
export const serverCharacterAnalysis = serverDomain+"/server/coach/character/CHARACTERID/analysis";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * VanguardMentor.getRecentActivities
 * The GET endpoint on the API to request the past 30 activities for a selected character
 * @type {string}
 */
export const serverRecentActs = serverDomain+"/server/bungie/character/CHARACTERID/recent-activities";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * VanguardMentor.getKnowledgeBase
 * The GET endpoint on the API to request a knowledge base of the game containing all keywords to players need to know
 * @type {string}
 */
export const serverKnowledgeBase = serverDomain+"/server/bungie/knowledge";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * VanguardMentor.getCoachData
 * The GET endpoint on the API to request basic coaching data the server stores about a player, used as part of page initialisation
 * @type {string}
 */
export const serverCoachData = serverDomain+"/server/coach/data";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * VanguardMentor.getActivitySkillsAnalysis
 * The GET endpoint on the API to request analysis of a players activity skills
 * @type {string}
 */
export const serverActivitySkills = serverDomain+"/server/coach/activity-skills/";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * VanguardMentor.getActivityAnalysis
 * The GET endpoint on the API to request analysis of an activity the player took part in
 * @type {string}
 */
export const serverActivityAnalysis = serverDomain+"/server/coach/character/CHARACTERID/played/INSTANCEID/analysis";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

