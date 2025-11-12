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

(function () {
    const MOBILE_BREAKPOINT = 1024;

    const isMobileViewport = () => window.innerWidth <= MOBILE_BREAKPOINT;

    function initFallbackMobileMenu() {
        const nav = document.querySelector('.l-header .w-nav');
        if (!nav || nav.dataset.fallbackMobileMenu === 'ready') {
            return;
        }

        const toggles = [];
        const navToggle = nav.querySelector('.w-nav-control');
        if (navToggle) {
            toggles.push(navToggle);
        }
        const headerShow = document.getElementById('w-header-show');
        if (headerShow) {
            toggles.push(headerShow);
        }
        if (!toggles.length) {
            return;
        }

        const sourceList = nav.querySelector('.w-nav-list.level_1');
        if (!sourceList) {
            return;
        }

        const overlay = document.createElement('div');
        overlay.className = 'fallback-mobile-menu';
        overlay.setAttribute('aria-hidden', 'true');

        const panel = document.createElement('div');
        panel.className = 'fallback-mobile-menu__panel';
        overlay.appendChild(panel);

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'fallback-mobile-menu__close';
        closeButton.setAttribute('aria-label', 'Menu sluiten');
        closeButton.innerHTML = '<span></span><span></span>';
        panel.appendChild(closeButton);

        const clonedList = sourceList.cloneNode(true);
        clonedList.classList.add('fallback-mobile-menu__list');
        clonedList.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
        clonedList.querySelectorAll('.w-nav-close').forEach((element) => element.remove());
        clonedList.querySelectorAll('.w-nav-arrow').forEach((element) => element.remove());
        panel.appendChild(clonedList);

        document.body.appendChild(overlay);

        const submenuMap = new Map();
        const parentItems = Array.from(clonedList.querySelectorAll('.menu-item-has-children'));
        parentItems.forEach((item) => {
            const anchor = item.querySelector(':scope > .w-nav-anchor');
            const subList = item.querySelector(':scope > .w-nav-list');
            if (!anchor || !subList) {
                return;
            }

            subList.classList.add('fallback-mobile-menu__sublist');
            subList.style.display = 'none';

            anchor.setAttribute('aria-expanded', 'false');
            item.classList.add('fallback-menu-has-children');

            const toggle = document.createElement('button');
            toggle.type = 'button';
            toggle.className = 'fallback-mobile-menu__submenu-toggle';
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', `${anchor.textContent.trim()} submenu`);
            toggle.innerHTML = '<span></span><span></span>';
            item.insertBefore(toggle, subList);

            submenuMap.set(item, { anchor, toggle, subList });
        });

        const html = document.documentElement;
        let lastTrigger = null;

        const collapseItem = (item) => {
            const refs = submenuMap.get(item);
            if (!refs) {
                return;
            }
            item.classList.remove('fallback-sub-open');
            refs.toggle.setAttribute('aria-expanded', 'false');
            refs.anchor.setAttribute('aria-expanded', 'false');
            refs.subList.style.display = 'none';
        };

        const expandItem = (item) => {
            const refs = submenuMap.get(item);
            if (!refs) {
                return;
            }
            item.classList.add('fallback-sub-open');
            refs.toggle.setAttribute('aria-expanded', 'true');
            refs.anchor.setAttribute('aria-expanded', 'true');
            refs.subList.style.display = 'block';
        };

        const collapseSiblings = (item) => {
            const parent = item.parentElement;
            if (!parent) {
                return;
            }
            Array.from(parent.children)
                .filter((sibling) => sibling !== item && sibling.classList && sibling.classList.contains('fallback-sub-open'))
                .forEach((sibling) => collapseItem(sibling));
        };

        function closeMenu() {
            if (!html.classList.contains('fallback-menu-open')) {
                return;
            }
            html.classList.remove('fallback-menu-open');
            html.classList.remove('w-nav-open');
            overlay.setAttribute('aria-hidden', 'true');
            overlay.classList.remove('fallback-mobile-menu--visible');
            toggles.forEach((button) => {
                button.setAttribute('aria-expanded', 'false');
                if (button.classList.contains('w-nav-control')) {
                    button.classList.remove('active');
                }
            });
            submenuMap.forEach((_refs, item) => collapseItem(item));
            overlay.scrollTop = 0;
            document.removeEventListener('keydown', handleKeydown);
            if (lastTrigger && typeof lastTrigger.focus === 'function') {
                try {
                    lastTrigger.focus({ preventScroll: true });
                } catch (_error) {
                    lastTrigger.focus();
                }
            }
            lastTrigger = null;
        }

        function openMenu(trigger) {
            if (html.classList.contains('fallback-menu-open')) {
                return;
            }
            lastTrigger = trigger instanceof HTMLElement ? trigger : null;
            html.classList.add('fallback-menu-open');
            html.classList.add('w-nav-open');
            overlay.setAttribute('aria-hidden', 'false');
            overlay.classList.add('fallback-mobile-menu--visible');
            toggles.forEach((button) => {
                button.setAttribute('aria-expanded', 'true');
                if (button.classList.contains('w-nav-control')) {
                    button.classList.add('active');
                }
            });
            const firstLink = clonedList.querySelector('.w-nav-anchor');
            if (firstLink) {
                firstLink.focus({ preventScroll: true });
            }
            document.addEventListener('keydown', handleKeydown);
        }

        const handleKeydown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeMenu();
            }
        };

        parentItems.forEach((item) => {
            const refs = submenuMap.get(item);
            if (!refs) {
                return;
            }

            refs.toggle.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                const isOpen = item.classList.contains('fallback-sub-open');
                if (isOpen) {
                    collapseItem(item);
                } else {
                    collapseSiblings(item);
                    expandItem(item);
                }
            });

            refs.anchor.addEventListener('click', (event) => {
                const isOpen = item.classList.contains('fallback-sub-open');
                if (!isOpen) {
                    event.preventDefault();
                    collapseSiblings(item);
                    expandItem(item);
                } else {
                    closeMenu();
                }
            });
        });

        const onToggleClick = (event) => {
            if (!isMobileViewport()) {
                closeMenu();
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            if (html.classList.contains('fallback-menu-open')) {
                closeMenu();
            } else {
                openMenu(event.currentTarget);
            }
        };

        toggles.forEach((button) => {
            button.setAttribute('aria-expanded', 'false');
            button.addEventListener('click', onToggleClick, true);
        });

        closeButton.addEventListener('click', (event) => {
            event.preventDefault();
            closeMenu();
        });

        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeMenu();
            }
        });

        clonedList.addEventListener('click', (event) => {
            const anchor = event.target.closest('.w-nav-anchor');
            if (!anchor) {
                return;
            }
            const parentItem = anchor.closest('.menu-item-has-children');
            if (!parentItem || !parentItem.classList.contains('fallback-sub-open')) {
                closeMenu();
            }
        });

        window.addEventListener('resize', () => {
            if (!isMobileViewport()) {
                closeMenu();
            }
        });

        nav.dataset.fallbackMobileMenu = 'ready';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFallbackMobileMenu);
    } else {
        initFallbackMobileMenu();
    }
})();
