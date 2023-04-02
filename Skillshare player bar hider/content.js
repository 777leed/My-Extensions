window.onload = function() {
  var x = document.getElementById("vjs_video_3_html5_api");
  playButton=document.getElementById('playButton');
// define a handler
function doc_keyUp(e) {
  var x = document.getElementById("vjs_video_3_html5_api");
  // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
  if (e.ctrlKey && e.key === 'ArrowDown') {
      // call your function to do the thing
      enterFullScreen(x);
      var style = document.createElement('style');
        style.innerHTML = `
        audio::-webkit-media-controls-timeline,
        video::-webkit-media-controls-timeline {
          display: none;
}
        `;
        document.head.appendChild(style);

  }
}
// register the handler
document.addEventListener('keyup', doc_keyUp, false);
x.addEventListener('click', playOrPause, false);


function playOrPause() {
  if (!x.paused){
      x.pause();
  } else {
      x.play();
  }
}


function enterFullScreen(element) {
if(element.requestFullscreen) {
  element.requestFullscreen();
}else if (element.mozRequestFullScreen) {
  element.mozRequestFullScreen();     // Firefox
}else if (element.webkitRequestFullscreen) {
  element.webkitRequestFullscreen();  // Safari
}else if(element.msRequestFullscreen) {
  element.msRequestFullscreen();      // IE/Edge
}
};

};
