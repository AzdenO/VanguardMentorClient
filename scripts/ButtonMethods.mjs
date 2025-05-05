/**
 * @module buttonMethods
 * @description A module that encapsulates button click logic, dealing with filling in content,
 * fetching none AI content from the API such as recent activities and the knowledge base, as well
 * as oth small bits of logic
 * @version 0.1.0
 * @author Declan Roy Alan Wadsworth
 */
import {apiMethods} from "./ApiMethods.mjs";
import {fillSelector} from "./utils/fillerMethods.mjs";
import {getAccessToken,getRefreshToken} from "./tokenStorage.mjs";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Function that loads the character analysis tool window configuration, gets the currently selected character, and makes
 * the character analysis request to the server
 */
function characterAnalysis(){
    const selectedCharacterId = document.getElementById("characters").value;

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Function to fetch player weapon skills content and display on page
 */
function weaponSkills(){

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Function to configure tool window when activity summary button is clicked
 */
async function activitySummaries(){
    const characterid = document.getElementById("characters").value;//get currently selected character
    const data = await apiMethods.getRecentActivities(getAccessToken(),characterid);//request this characters recent activities

    await fetch("toolWindows/activitySummaries.html").then(
        response => response.text()).then(data =>{
            document.getElementById("toolcontent").innerHTML = data
        });


}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Method to configure tool window when knowledge base button is clicked
 */
function knowledgeBase(){

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function attachToGlobals(){
    window.toolWindowMethods = {
        characterAnalysis,
        activitySummaries,
        knowledgeBase,
        weaponSkills
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
attachToGlobals();