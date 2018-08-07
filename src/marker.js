
const mapboxgl = require('mapbox-gl');
const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';

function markerBuild (type, arrCoords) {
    if (type==='Activity')
    markerDomEl.style.backgroundImage = 'http://i.imgur.com/WbMOfMl.png';
    else if (type==='Hotel') markerDomEl.style.backgroundImage =  'http://i.imgur.com/D9574Cu.png';
    else markerDomEl.style.backgroundImage = 'http://i.imgur.com/cqR6pUI.png';

    new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
}



module.exports = markerBuild;
