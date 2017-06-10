$(function() {
   console.log("Loading cities");

   function loadCities() {
      $.getJSON( "/api/students/", function( cities ) {
         console.log(cities);
         var message = "No city is here";
         if( cities.length > 0) {
            message = cities[0].city + " " + cities[0].hashtag;
         }
         $("#welcome").text(message);
      });
   };

   loadCities();
   setInterval( loadCities, 2000);
});