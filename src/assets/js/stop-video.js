//
// typed.js
// Theme module
//

(function() {
  
  //
  // Variables
  //

  var theVideo = document.getElementById("iframe-video");

  //
  // Functions
  //


    // $('#videoModal').on('hidden.bs.modal', '.modal', function() {
    //   $('#iframe-video').attr("src","");
    //   console.log('deez');
    // })


  $('body').on('hidden.bs.modal', '.modal', function () {
    $('audio').trigger('pause');
    $('video').trigger('pause');
  });

  //
  // Events
  //

  
})();