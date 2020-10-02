let headerOverlay = document.getElementById('headerOverlay');
let videoCover;
let videoHeight;
let primaryCover = document.getElementById('primaryCover');

changeOverlayHeight();

(function ar(){
changeOverlayHeight();
})();

window.addEventListener('resize',function(){
   // console.log('pqp');
    changeOverlayHeight();
  //  console.log(videoHeight);
});

function changeOverlayHeight(){
    videoCover = document.getElementById('videoCover');
   // videoHeight = videoCover.offsetHeight;

   // headerOverlay.style.height = videoHeight+'px';
    primaryCover.style.height = videoHeight+'px';
}

$(window).scroll(function(){
  $("#informationBox").css("top",Math.min($("#primaryCover").height()/4,$("#primaryCover").height()+$("#sobreMBAContainer").height()-$("#aboutDappContainer").height()-$(this).scrollTop()));
});

// $(function() {
//   $(window).scroll(function() {
//     $('#grafo').css({
//       'transform': 'rotateX(' + 30 * (1 + Math.PI * Math.atan($(document).scrollTop() / 300)) + 'deg)'
//     });
//   });
// })