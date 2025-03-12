const bungie_client_id = 48924;

const bungie_auth = "https://www.bungie.net/en/OAuth/Authorize?client_id=48924&response_type=code&redirect_uri=https://AzdenO.github.io/VanguardMentorClient/";
function get_auth_code(){
    const urlparams = new URLSearchParams(window.location.search);
    const auth_code = urlparams.get('code');
    const disabled = false;
    if(!disabled){
        if (auth_code == null){
            console.log("Fetching login body");
            fetch("bodies/login.html").then(response => response.text()).then(data => {
                console.log("Injecting login body");
                document.getElementById('body').innerHTML = data;
            });

        }else{
            fetch('https://baa8-109-151-48-85.ngrok-free.app/server/authorize',{
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
