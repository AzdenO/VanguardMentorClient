/**
 * @module aPiRequests
 * @description module to encapsulate the few standardised methods for making requests to the API server
 * @version 0.1.0
 * @author Declan Roy Alan Wadsworth (drw8)
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function makeGetRequest(endpoint, headers){
    try{
        await fetch(endpoint, {
            method: "GET",
            headers: headers
        }).then(response => {
            console.log(response.toString());
            response.json()
        }).then(function(data){
            return data;
        })
    }catch(error){
        console.log(error.stack);
        console.log(error.message);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////