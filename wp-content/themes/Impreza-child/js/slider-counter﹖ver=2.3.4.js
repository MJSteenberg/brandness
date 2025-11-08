jQuery( document ).ready(function($) {

    initCounterCarousel()

function initCounterCarousel() {
        const $carousel = $('.mc--counter-slider .owl-carousel')

        if ($carousel.parent().hasClass('type_carousel')) { // Impreza carousel
            $carousel.on('initialized.owl.carousel', function(event) {
                const carousel = event.relatedTarget
                $('.mc-owl-carousel-counter .total').text(carousel.items().length)
            })
        } else { // Custom carousel
            $carousel.owlCarousel({
                items: 1,
                loop: true,
                dots: false
            })

            if ($carousel.data('owl.carousel') !== undefined && $carousel.data('owl.carousel')._items.length == 1) {
                $carousel.data('owl.carousel').options.loop = false
                $carousel.trigger('refresh.owl.carousel')
            }
        }

        $carousel.on('changed.owl.carousel', function(event) {
            const carousel = event.relatedTarget
            $('.mc-owl-carousel-counter .current').text(carousel.relative(carousel.current()) + 1)
        })
    
        $('.mc-owl-previous-button').on('click', function() {
            $carousel.trigger('prev.owl.carousel')
        })
    
        $('.mc-owl-next-button').on('click', function() {
            $carousel.trigger('next.owl.carousel')
        })
    }

  


});


