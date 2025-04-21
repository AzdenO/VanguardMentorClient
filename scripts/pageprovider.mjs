import {makeGetRequest} from "./ApiRequests.mjs";

const bungie_client_id = 48924;

//const bungie_auth = "https://www.bungie.net/en/OAuth/Authorize?client_id=48924&response_type=code&redirect_uri=https://AzdenO.github.io/VanguardMentorClient/";
var initial_response_data = null;
import * as Endpoints from "./constants/ApiConstants.mjs";
import {setAccessToken, setRefreshToken} from "./tokenStorage.mjs";
import {initialisePage} from "./PageInitialisation.mjs";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function get_auth_code(){
    const urlparams = new URLSearchParams(window.location.search);
    const auth_code = urlparams.get('code');
    const disabled = false;
    if(!disabled){
        if (auth_code == null){
            console.log("Fetching login body");
            await fetch("bodies/login.html").then(response => response.text()).then(data => {
                console.log("Injecting login body");
                document.getElementById('body').innerHTML = data;
            });
            return false;

        }else {
            await fetch(Endpoints.serverAuth, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({code: auth_code})
            }).then(res =>
                res.json()
            )
                .then(data => {
                    console.log(data.message);
                    setRefreshToken(data.refresh_token);
                    setAccessToken(data.access_token);
                    initial_response_data = data;


                }).catch(err => console.log(err));
            await fetch("bodies/coach.html").then(response => response.text()).then(data => {
                console.log("Injecting coach body");
                document.getElementById('body').innerHTML = data;
                let toolscript = document.createElement("script");
                toolscript.type = "module";
                toolscript.src = "https://azdeno.github.io/VanguardMentorClient/scripts/toolmethods.mjs";
                document.body.appendChild(toolscript);
                initialisePage(initial_response_data.characters,initial_response_data.bungiename);

            });
        }
        return true;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const success = await get_auth_code();

