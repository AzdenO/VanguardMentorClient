const bungie_client_id = 48924;

//const bungie_auth = "https://www.bungie.net/en/OAuth/Authorize?client_id=48924&response_type=code&redirect_uri=https://AzdenO.github.io/VanguardMentorClient/";
var initial_response_data = null;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function get_auth_code(){
    const urlparams = new URLSearchParams(window.location.search);
    const auth_code = urlparams.get('code');
    const disabled = false;
    if(!disabled){
        if (auth_code == null){
            console.log("Fetching login body");
            fetch("bodies/login.html").then(response => response.text()).then(data => {
                console.log("Injecting login body");
                document.getElementById('body').innerHTML = data;
                return false;
            });

        }else {
            await fetch('https://baa8-109-151-48-85.ngrok-free.app/server/authorize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({code: auth_code})
            }).then(res =>
                res.json())
                .then(data => {
                    console.log(data.characters);
                    fetch("bodies/coach.html").then(response => response.text()).then(data => {
                        console.log("Injecting coach body");
                        document.getElementById('body').innerHTML = data;
                        initial_response_data = data;
                    });
                }).catch(err => console.log(err));

        }
        return true;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initPage(){
    var characterSelect = document.getElementById('characterSelect');
    for(const chrc in initial_response_data.characters){
        console.log("Parsing character");
        var newOption = document.createElement("option");
        newOption.value = initial_response_data.characters[chrc][0];
        newOption.text = initial_response_data.characters[chrc][2]+" | Power: "+initial_response_data.characters[chrc][1];
        characterSelect.appendChild(newOption);
    }
}
if(await get_auth_code()){
    initPage();
}

