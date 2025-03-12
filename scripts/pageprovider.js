const bungie_client_id = 48924;

const bungie_auth = "https://www.bungie.net/en/OAuth/Authorize?client_id=48924&response_type=code&redirect_uri=https://AzdenO.github.io/VanguardMentorClient/";
function get_auth_code(){
    const urlparams = new URLSearchParams(window.location.search);
    const auth_code = urlparams.get('code');
    const disabled = true;
    if(!disabled){
        if (auth_code == null){
            window.location.href = bungie_auth;

        }else{
            fetch('https://b618-109-151-48-85.ngrok-free.app/server/authorize',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({code: auth_code})
            }).then(res =>
                res.json())
                .then(data => {
                    console.log(data.characters);
                }).catch(err => console.log(err));
        }
    }
}

get_auth_code();
