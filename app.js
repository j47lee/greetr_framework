var g = G$('Jonathan', 'Lee')

$('#login').click(function(){
  $('#logindiv').hide();
  g.setlang($('#lang').val()).HTMLgreeting('#greeting', true).log();
})
