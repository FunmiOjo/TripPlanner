const mapboxgl = require('mapbox-gl');
const marker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoidHJpY2lhbG9ibyIsImEiOiJjamtrNWF3bzgxbXlvM3BtbHh6aGNuZGhmIn0.K0wJwNaqqGTA5JzRzrZKdw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10',
});

module.exports = map;
