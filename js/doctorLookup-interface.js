import { DoctorLookup } from './../js/doctorLookup.js';

$(document).ready(function(){
  $('form#doctor-search').submit(function(event){
    event.preventDefault();
    $('form#doctor-search').hide();
    let query = $('#query').val();
    let findDoctor = new DoctorLookup();
    findDoctor.getDoctors(query);
  });
});
