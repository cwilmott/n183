mapboxgl.accessToken =
  "pk.eyJ1IjoiY3dpbG1vdHQiLCJhIjoiY2s2bWRjb2tiMG1xMjNqcDZkbGNjcjVraiJ9.2nNOYL23A1cfZSE4hdC9ew";

const map = new mapboxgl.Map({
  container: "map", // this is the container ID that we set in the HTML
  style: "mapbox://styles/cwilmott/cmq8iw734004t01r491mec800", // Your Style URL goes here
  center: [-124.107, 41.79], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
});