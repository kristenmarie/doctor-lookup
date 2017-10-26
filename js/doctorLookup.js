var apiKey = require('./../.env').apiKey;

export class DoctorLookup {

  getDoctors(query, address, searchType) {
    let searchQuery = searchType;
    let search = query.replace(/\s/g, '%20');
    let userAddress = address.replace(/\s/g, '+');
    $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ address }&key=AIzaSyAz2UbBTpj6yNEVN1eaPU6V2YIkenbGakg`)
  .then(function(response){
    let latitude = response.results[0].geometry.location.lat;
    let longitude = response.results[0].geometry.location.lng;
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?${ searchQuery }=${ search }&location=${ latitude }%2C${ longitude }%2C50&user_location=${ longitude }%2C${ latitude }&skip=0&limit=10&user_key=${ apiKey }`)
    .then(function(response){
      let results = response.data;
      if(results.length == 0) {
        $('#results').append(`<h2>No doctors matched your query.</h2>`);
      }
      results.forEach(function(result){
        $('#results').append(
          `<h3>Name: ${result.profile.first_name} ${result.profile.last_name}</h3>
          <p><strong>Address:</strong> ${result.practices[0].visit_address.street},  ${result.practices[0].visit_address.city},
          ${result.practices[0].visit_address.state}
          ${result.practices[0].visit_address.zip}</p>
          <p><strong>Website:</strong> <a href="${result.practices[0].website}">Click Here</a></p>
          <p><strong>Phone Number:</strong> ${result.practices[0].phones[0].number}</p>`
        );
        if(result.practices[0].accepts_new_patients) {
          $('#results').append(`<h5><strong>Accepting New Patients</strong></h5>`);
        } else {
          $('#results').append(`<h5><strong>Not Accepting New Patients</strong></h5>`);
        }
      });
    })
    .fail(function(error){
      $('#results').append(`There was an error processing your request: ${error.responseText}. Please try again!`);
    });
  })
   .fail(function(error){
     $('#results').append(`There was an error processing your request: ${error.responseText}. Please try again!`);
   });
  }
}
