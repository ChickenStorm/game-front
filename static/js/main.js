import Dictionnary from './core/dictionnary.js';
import Player from './model/player.js';

Player.fetchCurrentPlayer().then(player => {
    window.player = player;

    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = `/static/images/factions/${player.faction.banner}`;
    document.getElementsByTagName('head')[0].appendChild(link);
});

window.setCurrentPlanet = id => localStorage.setItem('current_planet', id);

window.setCurrentFleet = id => localStorage.setItem('current_fleet', id);

window.getCurrentPlanet = () => {
    let currentPlanet;
    if (typeof (currentPlanet = localStorage.getItem('current_planet')) === 'undefined') {
        window.location = '/views/profile';
        return;
    }
    return currentPlanet;
};

window.getCurrentFleet = () => {
    let currentFleet;
    if (typeof (currentFleet = localStorage.getItem('current_fleet')) === 'undefined') {
        window.location = '/views/fleet/fleet-all.html';
        return;
    }
    return currentFleet;
};

Dictionnary.translateTags();
