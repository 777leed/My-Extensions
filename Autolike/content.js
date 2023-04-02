  
  
    function doc_keyUp(e) {
      
      if (e.ctrlKey + e.shiftKey + (e.keyCode >= 49 && e.keyCode <= 56) === 3) {
       
        document.getElementById("avatar-btn").click();  
        setTimeout(() => {   
        switchbtn = document.querySelectorAll('#content-icon > yt-icon')[2] ;
        switchbtn.click();
        setTimeout(() => {
        channelid = (e.keyCode - 48).toString();
        leedx = document.querySelectorAll(`#contents > ytd-account-item-renderer:nth-child(${channelid}) > tp-yt-paper-icon-item > tp-yt-paper-item-body`)[0];
        leedx.click()
        }, 1000);

       }, 1000);

       
        
      }

      
  }
  document.addEventListener('keyup', doc_keyUp, false);
  
  

