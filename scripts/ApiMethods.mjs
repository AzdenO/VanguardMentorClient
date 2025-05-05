/**
 * @module toolmethods
 * @description script containing all top-level methods that can be attatched to tool buttons on the page
 * @version 0.1.0
 * @author Declan Roy Alan Wadsworth (drw8)
 */
import {replaceMultiple} from "../utils/stringUtils.mjs";
import {makeGetRequest} from "./ApiRequests.mjs";
import * as endpoints from "./constants/ApiConstants.mjs";
import * as tokens from "./tokenStorage.mjs";
import {getAccessToken} from "./tokenStorage.mjs";
///////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Method attached to the button for getting a suggested build for a selected activity
 * @returns {Promise<void>}
 */
async function getSuggestedBuild(){
    let headers = {
        "Content-Type": 'application/json',
        "x-access-token": getAccessToken(),
    }
    const pathParams = {
        "CHARACTERID": "TEST",
        "ACTIVITYID": "TEST"
    }
    const url = replaceMultiple(/CHARACTERID|ACTIVITYID/g,pathParams,endpoints.serverBuildByAct)
    const data = await makeGetRequest(url, headers);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
async function getWeaponSkills(){
    let headers = {
        "Content-Type": 'application/json',
        "x-access-token": getAccessToken(),
    }
    const url = endpoints.serverWeaponSkills+"?skillstype="+true;
    const data = await makeGetRequest(url, headers);
    return data;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
async function getRecentActivities(token, characterId){
    let headers = {
        "Content-Type": 'application/json',
        "x-access-token": token,
    }
    let pathParams = {
        "CHARACTERID": characterId
    }
    const url = replaceMultiple(/CHARACTERID/g,pathParams,endpoints.serverRecentActs);
    const data = await makeGetRequest(url, headers);
    return data;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
async function getCharacterAnalysis(characterId){
    let headers = {
        "Content-Type": 'application/json',
        "x-access-token": getAccessToken(),
    }
    const pathParams = {
        "CHARACTERID": characterId,
    }
    const url = replaceMultiple(/CHARACTERID/g,pathParams,endpoints.serverCharacterAnalysis);
    const data = await makeGetRequest(url, headers);
    return data;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
async function getActivityFeedback(character, instance, token){
    let headers = {
        "Content-Type": 'application/json',
        "x-access-token": token,
    }
    let pathParams = {
        "CHARACTERID": character,
        "INSTANCEID": instance
    }
    const url = replaceMultiple(/CHARACTERID|INSTANCEID/g, pathParams, endpoints.serverActivityAnalysis);
    const data = await makeGetRequest(url, headers);
    return data;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
async function getKnowledgeBase(){
    let headers = {
        "Content-Type": 'application/json',
    }
    const data = await makeGetRequest(endpoints.serverKnowledgeBase, headers);
    return data;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
async function getActivitySkills(characterid){
    let headers = {
        "Content-Type": 'application/json',
        "x-access-token": getAccessToken(),
    }
    let params = {
        "CHARACTERID": characterid,
    }
    const url = replaceMultiple(/CHARACTERID/g,params,endpoints.serverActivitySkills);
    const data = await makeGetRequest(url, headers);
    return data;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
export const apiMethods ={
    getWeaponSkills,
    getCharacterAnalysis,
    getSuggestedBuild,
    getRecentActivities,
    getActivityFeedback,
    getKnowledgeBase,
    getActivitySkills
}