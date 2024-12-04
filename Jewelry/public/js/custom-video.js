$(document).ready(function(){
   
    
    $(window).scroll(function (event) {
       
        if($('#introSectionVideo1')[0] && $('#introSectionVideo1')[0].muted){
            
          
            $('#introSectionVideo1')[0].muted =false;
        }
        
      
    });

    setInterval(function(){
        const videoObjectKeys = $('video');
 
        Object.keys(videoObjectKeys).forEach((v, index) => {
          const currentVideoObject = videoObjectKeys[v];
       
          if(currentVideoObject != null && v != 'length'){
            
              
            if(currentVideoObject.src && currentVideoObject.src.indexOf('videos/First%20section_1.mp4') < 0){
              
                currentVideoObject.muted = true;
            }
        }
        var introSectionVideo1 =  $('#introSectionVideo1')[0];

        if(introSectionVideo1 && introSectionVideo1.paused && introSectionVideo1.muted){
            
            introSectionVideo1.muted = true;
            introSectionVideo1.play();  
        }
        });
    },500);
});