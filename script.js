
var mapId = document.getElementById('mapId');
var submit = document.getElementById('getLocationButton')


 function loadMap() {
     var map = new Microsoft.Maps.Map(mapId, {
         credentials: 'AmPo7Obw7MXmyo3ayIEiSlRIveTa4HQdJRmoUt9Zi8OrYSOUMLC-LRhxWAc0nwqb'
     });
 }

 function locateSuccess(position) {
     var map = new Microsoft.Maps.Map(mapId);
     map.setView({
         center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
         zoom: 15
     });

 }

 function locateFail(error) {
     alert('Geolocation failed: ' + error.message);
 }

 function getLocation() {
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
