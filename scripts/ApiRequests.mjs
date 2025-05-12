/**
 * @module aPiRequests
 * @description module to encapsulate the few standardised methods for making requests to the API server
 * @version 0.1.0
 * @author Declan Roy Alan Wadsworth (drw8)
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Make a request to the API server, to the provided endpoint and with the provided headers
 *
 * @returns {Promise<void>}
 */
export async function makeGetRequest(endpoint, headers){
    console.log("Making request to: "+endpoint+" With headers: "+JSON.stringify(headers));
    let response = null;
    try{

        const res = await fetch(endpoint, {
            signal: AbortSignal.timeout(20000),
            method: 'GET',
            headers: headers

        });
        if(!res.ok){
            console.log("Error "+await res.text());
        }else{
            const data = await res.json();
            console.log(data);
            return data;

        }

    }catch(error){
        console.log(response);
        console.log(error.stack);
        console.log(error.message);
    }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////