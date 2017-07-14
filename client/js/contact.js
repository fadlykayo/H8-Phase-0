var map = new GMaps({
  el: '#map',
  lat: -6.2099505,
  lng: 106.7521659
});

map.addMarker({
  lat: -6.2099505,
  lng: 106.7521659,
  title: 'KIN+',
  infoWindow: {
    content: '<p>Lorem Ipsum Content</p>'
  }
});
