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
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
async function getCharacterAnalysis(){
    let headers = {
        "Content-Type": 'application/json',
        "x-access-token": getAccessToken(),
    }
    const pathParams = {
        "CHARACTERID": "TEST"
    }
    const url = replaceMultiple(/CHARACTERID/g,pathParams,endpoints.serverCharacterAnalysis)
    const data = await makeGetRequest(url, headers);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function attachToWindow(){
    window.toolMethods = {
        "ActBuild": getSuggestedBuild,
        "WeaponSkills": getWeaponSkills,
        "CharacterAnalysis": getCharacterAnalysis,
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
attachToWindow();