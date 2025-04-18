/**
 * @module toolmethods
 * @description script containing all top-level methods that can be attatched to tool buttons on the page
 * @version 0.1.0
 * @author Declan Roy Alan Wadsworth (drw8)
 */

import {makeGetRequest} from "./ApiRequests.mjs";
import * as endpoints from "./constants/ApiConstants.mjs";
///////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Method attached to the button for getting a suggested build for a selected activity
 * @returns {Promise<void>}
 */
async function getSuggestedBuild(){
    const headers = {
        "Content-Type": "application/json",
        "character-id": "TEST",
        "x-access-token": "TEST",
        "activity-id": "TEST"
    }
    const data = await makeGetRequest(endpoints.serverBuildByAct, headers);
    console.log(JSON.stringify(data, null, 4));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
function attachToWindow(){
    window.toolMethods = {
        "ActBuild": getSuggestedBuild,
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
attachToWindow();