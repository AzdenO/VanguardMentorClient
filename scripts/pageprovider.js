const bungie_client_id = 48924;

window.onerror = function (message, source, lineno, colno, error) {
    console.error("Error caught:", message, "at", source, "line", lineno);
};

const bungie_auth = "https://www.bungie.net/en/OAuth/Authorize?client_id=48924&response_type=code&redirect_uri=https://AzdenO.github.io/VanguardMentorFront-End/index.html";
console.log("Script is running");
alert("Script Loaded");
function get_auth_code(){
    const urlparams = new URLSearchParams(window.location.search);
    const auth_code = urlparams.get('code');
    if (auth_code == null){
      window.location.href = bungie_auth;

    }else{
        fetch('https://localhost:32765/server/authorize',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({code: auth_code})
        }).then(res =>
            res.json())
            .then(data => {
                console.log(data);
            }).catch(err => console.log(err));
    }
}

get_auth_code();
