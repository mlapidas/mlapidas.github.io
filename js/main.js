  // Initialize Firebase
  firebase.auth().signInWithEmailAndPassword("user@user.user", "password").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});		
  var config = {
    apiKey: "AIzaSyBBUlg2eb7VN7gUHYi5kobeDhwdb7SFHo0",
    authDomain: "restaurant-site-453cf.firebaseapp.com",
    databaseURL: "https://restaurant-site-453cf.firebaseio.com",
    storageBucket: "restaurant-site-453cf.appspot.com",
    messagingSenderId: "575747396588"
  };
  firebase.initializeApp(config);

var database = firebase.database();
database.ref('reservations').set([]);

var reservationData ={};

//$('.reservation-day li').on('click', function (){
//  reservationData.day = $(this).text();	
//});
database.ref('reservations').set([]);
$('.reservation-form').on('submit', function(event){
  event.preventDefault();
  console.log('asdf');
  reservationData.name = $('.reservation-name').val();
  reservationData.day = $('.reservation-day').val();
  var reservationsReference = database.ref('reservations');
  reservationsReference.push(reservationData);
});

function getReservations(){
database.ref('reservations').on('value', function (results) {
var allReservations = results.val();
  $('.reservations').empty();
 
for (var reservation in allReservations){
  var context = {
    name: allReservations[reservation].name,
    day: allReservations[reservation].day,
    reservationId: reservation
  };
  var source = $("#reservation-template").html();
  var template = Handlebars.compile(source);
  var reservationListItem = template(context);
  $('.reservations').append(reservationListItem);
    }
});
}
 getReservations();

 function initMap() {
 	var latLng = {lat: 40.8054491, lng: -73.9654415};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: 8
  });
  var marker = new google.maps.Marker({
          position: latLng,
          map: map,
      	  title: 'User Location'
        });
}

initMap();
