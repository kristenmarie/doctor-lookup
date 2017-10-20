import { DoctorLookup } from './../js/doctorLookup.js';

$(document).ready(function(){
  $('form#doctor-search').submit(function(event){
    event.preventDefault();
    $('form#doctor-search').hide();
    $('#results').show();
    let query = $('#query').val();
    let name = $('#name').val();
    let findDoctor = new DoctorLookup();
    if(query != '') {
      findDoctor.getDoctors(query);
    }else if(name != '') {
      findDoctor.findByName(name);
    } else {
      $('#no-input').show();
    }
    $('button#home').click(function(){
      location.reload();
    });
  });
});
