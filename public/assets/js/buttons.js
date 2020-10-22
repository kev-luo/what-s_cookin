$(function() {

  $("#to-eat button").on("click", function(event) {
    event.preventDefault();
    let foodId = $(this).data('value');
    $.ajax({
      url: `/demolish/${foodId}`,
      type: 'PUT'
    }).then(res => {
      location.reload();
    })
  })

  $("#eaten button").on("click", function(event) {
    event.preventDefault();
    let foodId = $(this).data('value');
    $.ajax({
      url: `/toss/${foodId}`,
      type: 'DELETE'
    }).then(res => {
      location.reload();
    })
  })

})