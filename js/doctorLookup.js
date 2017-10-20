var apiKey = require('./../.env').apiKey;

export class DoctorLookup {

  getDoctors(query) {
    let search = query.replace(/\s/g, '%20');
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${ search }&location=47.625703%2C-122.354744%2C50&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${ apiKey }`)
    .then(function(response){
      let results = response.data;
      results.forEach(function(result){
        $('#results').append(
          `<h3>Name: ${result.profile.first_name} ${result.profile.last_name}</h3>
          <p><strong>Address:</strong> ${result.practices[0].visit_address.street},  ${result.practices[0].visit_address.city},
          ${result.practices[0].visit_address.state}
          ${result.practices[0].visit_address.zip}</p>
          <p><strong>Website:</strong> <a href="${result.practices[0].website}">Click Here</a></p>`
        );
        if(result.practices[0].accepts_new_patients) {
          $('#results').append(`<p><strong>Accepting New Patients</strong></p>`);
        } else {
          $('#results').append(`<p><strong>Not Accepting New Patients</strong></p>`);
        }
      });
    })
    .fail(function(){
      console.log("something went wrong again");
    });
   }

   findByName(name) {
     let doctor = name.replace(/\s/g, '%20');
     $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${ doctor }&location=47.625703%2C-122.354744%2C50&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${ apiKey }`)
     .then(function(response){
       let results = response.data;
       results.forEach(function(result){
         $('#results').append(
           `<h3>Name: ${result.profile.first_name} ${result.profile.last_name}</h3>
           <p><strong>Address:</strong> ${result.practices[0].visit_address.street},  ${result.practices[0].visit_address.city},
           ${result.practices[0].visit_address.state}
           ${result.practices[0].visit_address.zip}</p>
           <p><strong>Website:</strong> <a href="${result.practices[0].website}">Click Here</a></p>`
         );
         if(result.practices[0].accepts_new_patients) {
           $('#results').append(`<p><strong>Accepting New Patients</strong></p>`);
         } else {
           $('#results').append(`<p><strong>Not Accepting New Patients</strong></p>`);
         }
       });
     })
     .fail(function(){
       console.log("something went wrong again");
     });
   }

}
