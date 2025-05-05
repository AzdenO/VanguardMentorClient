/**
 * @module FillerMethods
 * @description Utility module for filling select elements
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Method for iteratively filling a select element from a provided array
 * @param {Element} element The selector to fill
 * @param {Array<>}array
 */
export function fillRecentActivities(element, array){
    for(const activity of array){
        const newOption = document.createElement("option");
        newOption.text = activity.Date+" | "+"activity.Activity"+" | "+activity.Type;
        newOption.value = activity.Hash;
        element.appendChild(newOption);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Method for iteratively filling the two selectors used in the knowledge base window
 * @param {{keyword: Element, type: Element}} selectors The two selectors to fill
 * @param {Object} knowledge Knowledge base retrieved from the API
 */
export function fillKnowledge(selectors, knowledge){

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////