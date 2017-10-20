var apiKey = require('./../.env').apiKey;

export class DoctorLookup {

  getDoctors(query) {
    let search = query.replace(/\s/g, '%20');
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${ search }&location=47.625703%2C-122.354744%2C50&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${ apiKey }`)
    .then(function(response){
      $('#results').append(response.data[0].profile.first_name);
    })
    .fail(function(){
      console.log("something went wrong again");
    });
   }

}
