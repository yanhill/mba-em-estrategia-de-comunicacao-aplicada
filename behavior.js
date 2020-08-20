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
    videoHeight = videoCover.offsetHeight;

    headerOverlay.style.height = videoHeight+'px';
    primaryCover.style.height = videoHeight+'px';
}