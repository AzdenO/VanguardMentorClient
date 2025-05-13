/**
 * @module buttonMethods
 * @description A module that encapsulates button click logic, dealing with filling in content,
 * fetching none AI content from the API such as recent activities and the knowledge base, as well
 * as oth small bits of logic
 * @version 0.1.0
 * @author Declan Roy Alan Wadsworth
 */
import {apiMethods} from "./ApiMethods.mjs";
import {fillRecentActivities} from "./utils/fillerMethods.mjs";
import {getAccessToken,getRefreshToken} from "./tokenStorage.mjs";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Function that loads the character analysis tool window configuration, gets the currently selected character, and makes
 * the character analysis request to the server
 */
async function characterAnalysis(){
    document.getElementById("toolcontent").innerHTML = ""
    const selectedCharacterId = document.getElementById("characters").value;
    const data = await apiMethods.getCharacterAnalysis(selectedCharacterId);
    var paragraph = document.createElement("p");
    paragraph.textContent = JSON.stringify(data.generated,null, 4);
    document.getElementById("toolcontent").appendChild(paragraph);

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Function to fetch player weapon skills content and display on page
 */
async function weaponSkills(){
    document.getElementById("toolcontent").innerHTML = "";
    const data = await apiMethods.getWeaponSkills();
    let paragraph = document.createElement("p");
    paragraph.textContent = JSON.stringify(data.generated,null, 4);
    document.getElementById("toolcontent").appendChild(paragraph);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Function to fetch player activity skills content and display on page
 *
 */
async function activitySkills(){
    document.getElementById("toolcontent").innerHTML = ""
    const characterid = document.getElementById("characters").value;//get currently selected character
    const data = await apiMethods.getActivitySkills(characterid);
    var paragraph = document.createElement("p");
    paragraph.textContent = JSON.stringify(data.generated,null, 4);
    document.getElementById("toolcontent").appendChild(paragraph);

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Function to configure tool window when activity summary button is clicked
 */
async function activitySummaries(){
    document.getElementById("toolcontent").innerHTML = ""
    const characterid = document.getElementById("characters").value;//get currently selected character
    const data = await apiMethods.getRecentActivities(getAccessToken(),characterid);//request this characters recent activities
    await fetch("toolWindows/activitySummaries.html").then(//fetch prestructured tool window div
        response => response.text()).then(data =>{
            document.getElementById("toolcontent").innerHTML = data//insert div into tool window
        });
    fillRecentActivities(document.getElementById("activitySelect"),data.content);//fill activity selector with fetched activities
    document.getElementById("getCoaching").onclick = async () => {
        const data = await apiMethods.getActivityFeedback(
            document.getElementById("characters").value,
            document.getElementById("activitySelect").value,
            getAccessToken()
        )
        var paragraph = document.createElement("p");
        paragraph.textContent = JSON.stringify(data,null, 4);
        document.getElementById("content").appendChild(paragraph);

    };

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function activityBuilds(){
    apiMethods.getSuggestedBuild();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Method to configure tool window when knowledge base button is clicked
 */
async function knowledgeBase(){
    document.getElementById("toolcontent").innerHTML = ""
    const data = await apiMethods.getKnowledgeBase();
    await fetch("toolWindows/knowledgeBase.html").then(//fetch prestructured tool window div
        response => response.text()).then(data =>{
        document.getElementById("toolcontent").innerHTML = data//insert div into tool window
    });

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function attachToGlobals(){
    window.toolWindowMethods = {
        characterAnalysis,
        activitySummaries,
        knowledgeBase,
        weaponSkills,
        activityBuilds,
        activitySkills,

    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
attachToGlobals();