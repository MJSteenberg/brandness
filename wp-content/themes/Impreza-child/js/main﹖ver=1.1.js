window.onload = function() {
    // Print current daypart

    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Well, good morning!';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'A perfect day to contact us!';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Still working at this hour?';

    const greeting = document.getElementById('mc_greeting')

    if (greeting) {
        greeting.innerHTML = greet
    }

}



// Functie die kijkt of een element in de viewport is (wordt gebruikt bij de functie CheckAndToggleVideoPlayback)
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Start video's die de mc--video-autoplay als class hebben binnen de viewport en pauzeren als ze buiten de viewport komen - werkt het beste met lokale video's 
function checkAndToggleVideoPlayback() {
    const videos = document.querySelectorAll('.mc--video-autoplay');
    videos.forEach(video => {
        const playButton = video.querySelector('.w-video-icon');
        const videoElement = video.querySelector('video');
        
        if (isInViewport(video)) {
            // Start video als in viewport
            
            if (videoElement && videoElement.paused) {
                videoElement.play();
            } else if (playButton) {
                playButton.click();
            }
        } else {
            //Pauzeer video als niet in viewport
            if (videoElement && !videoElement.paused) {
                videoElement.pause();
            }
        }
    });
}

// Voeg scroll event toe
window.addEventListener('scroll', checkAndToggleVideoPlayback);

// Controleer bij het laden van de pagina of de video niet al in view is
document.addEventListener('DOMContentLoaded', checkAndToggleVideoPlayback);


// Animatie op marketing studio pagina
if (
  window.location.pathname.indexOf("/marketing-studio/") === 0 ||
  window.location.pathname.indexOf("/en/marketing-studio/") === 0
) {
	
    jQuery(document).scroll(function(){
        setInView();   

    });

    jQuery(document).resize(function(){

           setInView();    

    });

    jQuery(document).ready(function(){

            setInView();          
    });

        
    function testInView($el){
        var wTop = jQuery(window).scrollTop();
        var wBot = wTop + jQuery(window).height();
        var eTop = $el.offset().top;
        var eBot = eTop + $el.height();
        return ((eBot <= wBot) && (eTop >= wTop));
    }


    function setInView(){
        jQuery(".mc--section-checker").each(function(){

            var $zis = jQuery(this);
            var $zisSec1 = jQuery('#section-1-title');
            var $zisSec2 = jQuery('#section-2-title');
            var $zisSec3 = jQuery('#section-3-title');
            var $zisSec4 = jQuery('#section-4-title'); 
            var $zisSec5 = jQuery('#section-5-title'); 
            var $zisSec6 = jQuery('#section-6-title'); 
            var $zisSec7 = jQuery('#section-7-title');              
          
            $zis.removeClass("inview");

            if(testInView($zis)){
               $zis.addClass("inview");   
            }
            if(testInView($zisSec1)){

                jQuery("#section-1-image").css("opacity", "1");
                jQuery("#section-2-image").css("opacity", "0");
                jQuery("#section-3-image").css("opacity", "0");
                jQuery("#section-4-image").css("opacity", "0");
                jQuery("#section-5-image").css("opacity", "0");                 
                jQuery("#section-1-title").css("opacity", "1");
                jQuery("#section-2-title").css("opacity", "0");
                jQuery("#section-3-title").css("opacity", "0");
                jQuery("#section-4-title").css("opacity", "0");
                jQuery("#section-5-title").css("opacity", "0"); 
                jQuery("#section-1-text").css("opacity", "1");
                jQuery("#section-2-text").css("opacity", "0");
                jQuery("#section-3-text").css("opacity", "0");
                jQuery("#section-4-text").css("opacity", "0");
                jQuery("#section-5-text").css("opacity", "0");                
                jQuery("#section-6-image").css("opacity", "0");
                jQuery("#section-7-image").css("opacity", "0");   
                jQuery("#section-6-title").css("opacity", "0");
                jQuery("#section-7-title").css("opacity", "0"); 
                jQuery("#section-6-text").css("opacity", "0");
                jQuery("#section-7-text").css("opacity", "0");                                             

            }else if(testInView($zisSec2)){

                jQuery("#section-2-image").css("opacity", "1");
                jQuery("#section-1-image").css("opacity", "0");
                jQuery("#section-3-image").css("opacity", "0");
                jQuery("#section-4-image").css("opacity", "0");  
                jQuery("#section-5-image").css("opacity", "0"); 
                jQuery("#section-2-title").css("opacity", "1");
                jQuery("#section-1-title").css("opacity", "0");
                jQuery("#section-3-title").css("opacity", "0");
                jQuery("#section-4-title").css("opacity", "0");  
                jQuery("#section-5-title").css("opacity", "0"); 
                jQuery("#section-2-text").css("opacity", "1");
                jQuery("#section-1-text").css("opacity", "0");
                jQuery("#section-3-text").css("opacity", "0");
                jQuery("#section-4-text").css("opacity", "0");  
                jQuery("#section-5-text").css("opacity", "0");   
                jQuery("#section-6-image").css("opacity", "0");
                jQuery("#section-7-image").css("opacity", "0");   
                jQuery("#section-6-title").css("opacity", "0");
                jQuery("#section-7-title").css("opacity", "0"); 
                jQuery("#section-6-text").css("opacity", "0");
                jQuery("#section-7-text").css("opacity", "0");                

            }else if(testInView($zisSec3)){

                jQuery("#section-3-image").css("opacity", "1");
                jQuery("#section-2-image").css("opacity", "0");
                jQuery("#section-1-image").css("opacity", "0");
                jQuery("#section-4-image").css("opacity", "0"); 
                jQuery("#section-5-image").css("opacity", "0");
                jQuery("#section-3-title").css("opacity", "1");
                jQuery("#section-2-title").css("opacity", "0");
                jQuery("#section-1-title").css("opacity", "0");
                jQuery("#section-4-title").css("opacity", "0"); 
                jQuery("#section-5-title").css("opacity", "0"); 
                jQuery("#section-3-text").css("opacity", "1");
                jQuery("#section-2-text").css("opacity", "0");
                jQuery("#section-1-text").css("opacity", "0");
                jQuery("#section-4-text").css("opacity", "0"); 
                jQuery("#section-5-text").css("opacity", "0");   
                jQuery("#section-6-image").css("opacity", "0");
                jQuery("#section-7-image").css("opacity", "0");   
                jQuery("#section-6-title").css("opacity", "0");
                jQuery("#section-7-title").css("opacity", "0"); 
                jQuery("#section-6-text").css("opacity", "0");
                jQuery("#section-7-text").css("opacity", "0");                

            }else if(testInView($zisSec4)){
                jQuery("#section-4-image").css("opacity", "1");                 
                jQuery("#section-3-image").css("opacity", "0");
                jQuery("#section-2-image").css("opacity", "0");
                jQuery("#section-1-image").css("opacity", "0");
                jQuery("#section-5-image").css("opacity", "0");
                jQuery("#section-4-title").css("opacity", "1");                 
                jQuery("#section-3-title").css("opacity", "0");
                jQuery("#section-2-title").css("opacity", "0");
                jQuery("#section-1-title").css("opacity", "0");
                jQuery("#section-5-title").css("opacity", "0");   
                jQuery("#section-4-text").css("opacity", "1");                 
                jQuery("#section-3-text").css("opacity", "0");
                jQuery("#section-2-text").css("opacity", "0");
                jQuery("#section-1-text").css("opacity", "0");
                jQuery("#section-5-text").css("opacity", "0");                 
                jQuery("#section-6-image").css("opacity", "0");
                jQuery("#section-7-image").css("opacity", "0");   
                jQuery("#section-6-title").css("opacity", "0");
                jQuery("#section-7-title").css("opacity", "0"); 
                jQuery("#section-6-text").css("opacity", "0");
                jQuery("#section-7-text").css("opacity", "0");                
                                
            }else if(testInView($zisSec5)){
                jQuery("#section-5-image").css("opacity", "1");                 
                jQuery("#section-4-image").css("opacity", "0");
                jQuery("#section-3-image").css("opacity", "0");
                jQuery("#section-2-image").css("opacity", "0");
                jQuery("#section-1-image").css("opacity", "0"); 
                jQuery("#section-5-title").css("opacity", "1");                 
                jQuery("#section-4-title").css("opacity", "0");
                jQuery("#section-3-title").css("opacity", "0");
                jQuery("#section-2-title").css("opacity", "0");
                jQuery("#section-1-title").css("opacity", "0"); 
                jQuery("#section-5-text").css("opacity", "1");                 
                jQuery("#section-4-text").css("opacity", "0");
                jQuery("#section-3-text").css("opacity", "0");
                jQuery("#section-2-text").css("opacity", "0");
                jQuery("#section-1-text").css("opacity", "0");                                                                
                jQuery("#section-6-image").css("opacity", "0");
                jQuery("#section-7-image").css("opacity", "0");   
                jQuery("#section-6-title").css("opacity", "0");
                jQuery("#section-7-title").css("opacity", "0"); 
                jQuery("#section-6-text").css("opacity", "0");
                jQuery("#section-7-text").css("opacity", "0");

            }else if(testInView($zisSec6)){
                jQuery("#section-5-image").css("opacity", "0");                 
                jQuery("#section-4-image").css("opacity", "0");
                jQuery("#section-3-image").css("opacity", "0");
                jQuery("#section-2-image").css("opacity", "0");
                jQuery("#section-1-image").css("opacity", "0"); 
                jQuery("#section-5-title").css("opacity", "0");                 
                jQuery("#section-4-title").css("opacity", "0");
                jQuery("#section-3-title").css("opacity", "0");
                jQuery("#section-2-title").css("opacity", "0");
                jQuery("#section-1-title").css("opacity", "0"); 
                jQuery("#section-5-text").css("opacity", "0");                 
                jQuery("#section-4-text").css("opacity", "0");
                jQuery("#section-3-text").css("opacity", "0");
                jQuery("#section-2-text").css("opacity", "0");
                jQuery("#section-1-text").css("opacity", "0");                                                                
                jQuery("#section-6-image").css("opacity", "1");
                jQuery("#section-7-image").css("opacity", "0");   
                jQuery("#section-6-title").css("opacity", "1");
                jQuery("#section-7-title").css("opacity", "0"); 
                jQuery("#section-6-text").css("opacity", "1");
                jQuery("#section-7-text").css("opacity", "0");  
                
            }else if(testInView($zisSec7)){
                jQuery("#section-5-image").css("opacity", "0");                 
                jQuery("#section-4-image").css("opacity", "0");
                jQuery("#section-3-image").css("opacity", "0");
                jQuery("#section-2-image").css("opacity", "0");
                jQuery("#section-1-image").css("opacity", "0"); 
                jQuery("#section-5-title").css("opacity", "0");                 
                jQuery("#section-4-title").css("opacity", "0");
                jQuery("#section-3-title").css("opacity", "0");
                jQuery("#section-2-title").css("opacity", "0");
                jQuery("#section-1-title").css("opacity", "0"); 
                jQuery("#section-5-text").css("opacity", "0");                 
                jQuery("#section-4-text").css("opacity", "0");
                jQuery("#section-3-text").css("opacity", "0");
                jQuery("#section-2-text").css("opacity", "0");
                jQuery("#section-1-text").css("opacity", "0");                                                                
                jQuery("#section-6-image").css("opacity", "0");
                jQuery("#section-7-image").css("opacity", "1");   
                jQuery("#section-6-title").css("opacity", "0");
                jQuery("#section-7-title").css("opacity", "1"); 
                jQuery("#section-6-text").css("opacity", "0");
                jQuery("#section-7-text").css("opacity", "1");                
                
            }else{
                jQuery("#section-5-image").css("opacity", "0");                 
                jQuery("#section-4-image").css("opacity", "0");
                jQuery("#section-3-image").css("opacity", "0");
                jQuery("#section-2-image").css("opacity", "0");
                jQuery("#section-1-image").css("opacity", "0"); 
                jQuery("#section-5-title").css("opacity", "0");                 
                jQuery("#section-4-title").css("opacity", "0");
                jQuery("#section-3-title").css("opacity", "0");
                jQuery("#section-2-title").css("opacity", "0");
                jQuery("#section-1-title").css("opacity", "0"); 
                jQuery("#section-5-text").css("opacity", "0");                 
                jQuery("#section-4-text").css("opacity", "0");
                jQuery("#section-3-text").css("opacity", "0");
                jQuery("#section-2-text").css("opacity", "0");
                jQuery("#section-1-text").css("opacity", "0");                  
                jQuery("#section-6-image").css("opacity", "0");
                jQuery("#section-7-image").css("opacity", "0");   
                jQuery("#section-6-title").css("opacity", "0");
                jQuery("#section-7-title").css("opacity", "0"); 
                jQuery("#section-6-text").css("opacity", "0");
                jQuery("#section-7-text").css("opacity", "0");                
            }
        });
    }
	

}



// Animatie op campagne pagina
if (window.location.pathname.indexOf("/campagnes/") === 0) {

    const sectionIds = ['section-1', 'section-2', 'section-3', 'section-4'];
    const imageSuffix = '-image';
    const titleSuffix = '-title';
    const textSuffix = '-text';

    const sectionElements = {};
    sectionIds.forEach(id => {
        sectionElements[id] = {
            image: jQuery(`#${id}${imageSuffix}`),
            title: jQuery(`#${id}${titleSuffix}`),
            text: jQuery(`#${id}${textSuffix}`)
        };
    });

    const $sectionChecker = jQuery(".mc--section-checker");

    jQuery(document).on('scroll resize ready', setInView);

    function testInView($el) {
        const wTop = jQuery(window).scrollTop();
        const wBot = wTop + jQuery(window).height();
        const eTop = $el.offset().top;
        const eBot = eTop + $el.height();
        return ((eBot <= wBot) && (eTop >= wTop));
    }

    function setInView() {
        $sectionChecker.each(function () {
            const $zis = jQuery(this);
            $zis.toggleClass("inview", testInView($zis));

            sectionIds.forEach(id => {
                const isInView = testInView(jQuery(`#${id}-title`));
                sectionElements[id].image.css("opacity", isInView ? "1" : "0");
                sectionElements[id].title.css("opacity", isInView ? "1" : "0");
                sectionElements[id].text.css("opacity", isInView ? "1" : "0");
            });
        });
    }
}
