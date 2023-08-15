
var mapId = document.getElementById('mapId');
var submit = document.getElementById('getLocationButton')


const loadMap = ()  => {
     new Microsoft.Maps.Map(mapId, {
         credentials: 'AmPo7Obw7MXmyo3ayIEiSlRIveTa4HQdJRmoUt9Zi8OrYSOUMLC-LRhxWAc0nwqb'
     });
 }

const locateSuccess = (position) => {
     let map = new Microsoft.Maps.Map(mapId);
     let loc = new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude)
     let pin = new Microsoft.Maps.Pushpin(loc);
     map.entities.push(pin);
     map.setView({
         center: loc,
         zoom: 15

     });

 }

const locateFail = (error) => {
     alert('Geolocation failed: ' + error.message);
 }

const getLocation = () =>  {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(locateSuccess, locateFail);
     } else {
         alert('Geolocation is not supported by your browser.');
     }
 }

 
submit.addEventListener('click', () => {
    getLocation();
    window.onload = loadMap;
});
