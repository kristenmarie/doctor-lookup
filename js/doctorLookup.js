var apiKey = require('./../.env').apiKey;

export class DoctorLookup {

  getDoctor(query) {
    let address = userInput.replace(/\s/g, '+');
    $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ address }&key=AIzaSyAz2UbBTpj6yNEVN1eaPU6V2YIkenbGakg`)
    .then(function(response){
      
    })
    .fail(function(){
      console.log("something went wrong again")
    });
   }

}
