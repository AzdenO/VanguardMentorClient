/**
 * @module toolmethods
 * @description script containing all top-level methods that can be attatched to tool buttons on the page
 * @version 0.1.0
 * @author Declan Roy Alan Wadsworth (drw8)
 */

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
        "character-id": 'TEST',
        "x-access-token": getAccessToken(),
        "activity-id": 'TEST',
    }
    const data = await makeGetRequest(endpoints.serverBuildByAct, headers);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
async function getWeaponSkills(){
    let headers = {
        "Content-Type": 'application/json',
        "x-access-token": getAccessToken(),
        "skills-type": true,
    }
    const data = await makeGetRequest(endpoints.serverWeaponSkills, headers);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
async function getCharacterAnalysis(){
    let headers = {
        "Content-Type": 'application/json',
        "x-access-token": getAccessToken(),
        "character-id": '2305843009262116386',
    }
    const data = await makeGetRequest(endpoints.serverCharacterAnalysis, headers);
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