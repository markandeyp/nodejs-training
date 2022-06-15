if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      document.write(
        "<h1>Latitude:" +
          position.coords.latitude +
          ", Longitude:" +
          position.coords.longitude +
          "</h1>"
      );
    },
    function (error) {
      document.write("<h1>" + error.message + "</h1>");
    }
  );
} else {
  document.write("<h1>Browser doesn't support geolocation</h1>");
}
