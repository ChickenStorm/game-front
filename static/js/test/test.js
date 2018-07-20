import Api from './../core/api.js';
import Player from './../model/player.js';
import Planet from './../model/planet.js';
import { renderFactionFlag } from './../components/faction/banner.js';

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');



const setMyProfile = () => Player.fetchCurrentPlayer().then(displayProfile);

const setProfile = id => Player.fetchPlayer(id).then(displayProfile);

const displayProfile = profile => {
    document.querySelector('.player-name').innerText = profile.pseudo;
    const faction = document.querySelector('.faction-name > a');
    faction.append(renderFactionFlag(profile.faction));
    faction.append(profile.faction.name);
};

window.addEventListener("load", () => {
    document.getElementById("testButton").onclick = sendTestT;
    return (id !== null)
        ? setProfile(id)
        : setMyProfile()
    ;
    
});


const sendRequest = (url,type,bodyP)=> {
    if (bodyP == "" || bodyP == undefined || bodyP == null) {
        return fetch(url, {
            method: type,
            headers: Api.headers,
        }).then(data => {
            document.getElementById("responce").innerHTML = JSON.stringify(data);
            return data;
        });
    }
    else{
        return fetch(url, {
            method: type,
            headers: Api.headers,
            body : bodyP,
        }).then(responce => {
            document.getElementById("responce").innerHTML = JSON.stringify(data);
            return data;
        });
    }
    
}


export function sendTestT () {
    
    var responce = sendRequest(document.getElementById("url-to-send").value,document.getElementById("test-type").value,document.getElementById("test-body").value);
    
    //document.getElementById("responce").innerHTML = JSON.stringify(responce);
}


