import { DoctorLookup } from './../js/doctorLookup.js';

$(document).ready(function(){
  $(document).ajaxStart(function(){
    $("#waiting").show();
  });
  $(document).ajaxComplete(function(){
    $("#waiting").hide();
    $("#results").show();
 });
  $('form#doctor-search').submit(function(event){
    event.preventDefault();
    $('form#doctor-search').hide();
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
