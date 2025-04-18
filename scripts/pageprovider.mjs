const bungie_client_id = 48924;

//const bungie_auth = "https://www.bungie.net/en/OAuth/Authorize?client_id=48924&response_type=code&redirect_uri=https://AzdenO.github.io/VanguardMentorClient/";
var initial_response_data = null;
import {serverAuth} from "./constants/ApiConstants.mjs";
import {setAccessToken, setRefreshToken} from "./tokenStorage.mjs";

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
            await fetch(serverAuth, {
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
                initPage()

            });
        }
        return true;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initPage(){
    var characterSelect = document.getElementById('characterSelect');
    for(const chrc in initial_response_data.characters){
        var newOption = document.createElement("option");
        newOption.value = initial_response_data.characters[chrc][0];
        newOption.text = initial_response_data.characters[chrc][2]+" | Power: "+initial_response_data.characters[chrc][1];
        characterSelect.appendChild(newOption);
    }
}
const success = await get_auth_code();

