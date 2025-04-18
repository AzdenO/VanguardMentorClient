/**
 * @module aPiRequests
 * @description module to encapsulate the few standardised methods for making requests to the API server
 * @version 0.1.0
 * @author Declan Roy Alan Wadsworth (drw8)
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Make a request to the API server, to the provided endpoint and with the provided headers
 * @param {string} endpoint The endpoint to make this request to
 * @param {{}} headers The headers to send for this request
 * @returns {Promise<void>}
 */
export async function makeGetRequest(endpoint, headers){
    console.log("Making request to: "+endpoint+" With headers: "+JSON.stringify(headers));
    try{

        const res = await fetch(endpoint, {
            method: "GET",
            headers: headers

        });
        if(!res.ok){
            console.log(res.text());
        }else{
            const data = await res.json();
        }

    }catch(error){
        console.log(error.stack);
        console.log(error.message);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////