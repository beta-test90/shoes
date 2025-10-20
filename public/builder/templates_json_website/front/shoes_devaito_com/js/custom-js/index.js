"use strict";

document.addEventListener('DOMContentLoaded', function() {
$(document).ready(function() {
    var productSection = $('#section-product-showcase');

    function isElementInViewport(el) {
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) || (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0
        );
    }

    function triggerAnimation() {
        if (isElementInViewport(productSection) && !productSection.hasClass('in-view')) {
            productSection.addClass('in-view');
        }
    }

    $(window).on('scroll resize', triggerAnimation);
    triggerAnimation();

    // Color Swatch Interaction
    $('#section-product-showcase .color-swatches li').on('click', function() {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.siblings().removeClass('active');
            $this.addClass('active');
            var colorName = $this.data('color');
            var colorNameSpan = $('<span class="color-name-display">' + colorName + '').hide();
            
            $this.closest('.color-selector').find('.color-name-display').remove();
            $this.closest('.color-selector').append(colorNameSpan);
            colorNameSpan.fadeIn(400);
        }
    });
    $('#section-product-showcase .color-swatches li.active').trigger('click');


    // Thumbnail Gallery Interaction
    $('#section-product-showcase .thumbnail-list li').on('click', function() {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            var targetImage = $this.data('target');
            
            // Update active thumbnail
            $this.siblings().removeClass('active');
            $this.addClass('active');
            
            // Switch main image with transition
            var $activeImage = $('#section-product-showcase .main-product-image.active');
            var $nextImage = $(targetImage);
            
            if ($nextImage.length) {
                $activeImage.removeClass('active');
                $nextImage.addClass('active');
            }
        }
    });

    // Add to Cart Button Mock Interaction
    $('#section-product-showcase .btn-add-to-cart').on('click', function(e) {
        e.preventDefault();
        var $btn = $(this);
        var originalText = $btn.html();
        
        $btn.html('<i class="fa fa-check"> Added!').addClass('added');
        
        setTimeout(function() {
            $btn.html(originalText).removeClass('added');
        }, 2000);
    });
});

const colorSwatches = document.querySelectorAll('.color-swatch');
const mainShoe = document.getElementById('main-shoe');

colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
        colorSwatches.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
        const newImage = this.getAttribute('data-main-image');
        if (newImage) {
            mainShoe.style.opacity = '0';
            setTimeout(() => {
                mainShoe.src = newImage;
                mainShoe.style.opacity = '1';
            }, 300);
        }
    });
});

mainShoe.style.transition = 'opacity 0.3s ease';


$(document).ready(function() {
    // Thumbnail click to change main image
    $('#section-shoe-hero .thumbnail-shoe').on('click', function() {
        var $this = $(this);
        var newImageSrc = $this.data('main-image');
        var $mainShoe = $('#section-shoe-hero #main-shoe');

        if ($mainShoe.attr('src') === newImageSrc) {
            return;
        }
        
        $mainShoe.css('transition', 'transform 0.3s ease-out, opacity 0.3s ease-out');
        $mainShoe.css('transform', 'scale(0.9) rotate(-15deg)');
        $mainShoe.css('opacity', '0');

        setTimeout(function() {
            $mainShoe.attr('src', newImageSrc);
            $mainShoe.css('transform', 'scale(1) rotate(-15deg)');
            $mainShoe.css('opacity', '1');
        }, 300);
    });

    // Entrance animation on scroll
    var section = document.querySelector('#section-shoe-hero');
    if (section) {
        var observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                $(section).addClass('in-view');
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        observer.observe(section);
    }
});
$(document).ready(function() {
    'use strict';

    var section = $('#section-featured-items');
    var windowEl = $(window);

    function checkSectionVisibility() {
        if (!section.length) {
            return;
        }
        
        var topOfSection = section.offset().top;
        var bottomOfSection = topOfSection + section.outerHeight();
        var topOfScreen = windowEl.scrollTop();
        var bottomOfScreen = topOfScreen + windowEl.innerHeight();

        if ((bottomOfScreen > topOfSection + 150) && (topOfScreen < bottomOfSection)) {
            if (!section.hasClass('is-visible')) {
                section.addClass('is-visible');
                windowEl.off('scroll.featuredItems resize.featuredItems');
            }
        }
    }

    function setupEventListeners() {
        windowEl.on('scroll.featuredItems resize.featuredItems', checkSectionVisibility);

        $('#section-featured-items .btn-custom').on('click', function(e) {
            e.preventDefault();
            var currentBtn = $(this);
            if (!currentBtn.hasClass('item-added')) {
                currentBtn.addClass('item-added');
                currentBtn.text('Added!');
                setTimeout(function() {
                    currentBtn.removeClass('item-added');
                    currentBtn.text('Add To Cart');
                }, 2000);
            }
        });
    }

    checkSectionVisibility();
    setupEventListeners();
});
$(document).ready(function() {
    var $section = $('#section-shoe-promo');

    function checkVisibility() {
        if (!$section.length) return;

        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var sectionTop = $section.offset().top;
        var sectionHeight = $section.height();

        if (scrollTop + windowHeight > sectionTop + sectionHeight * 0.2) {
            if (!$section.hasClass('is-visible')) {
                $section.addClass('is-visible');
            }
        }
    }

    $section.find('.promo-button').on('click', function(e) {
        e.preventDefault();
        alert('Redirecting to products page...');
    });

    $(window).on('scroll.shoePromo resize.shoePromo', checkVisibility);
    checkVisibility();
});
$(document).ready(function() {
    var $section = $('#section-product-detail');
    if ($section.length === 0) return;

    var $thumbnails = $section.find('.thumbnail-item');
    var $mainImage = $section.find('#main-product-image');
    var $dots = $section.find('.product-pagination .dot');

    function updateProductView(index) {
        var $activeThumb = $thumbnails.eq(index);
        if (!$activeThumb.length) return;
        
        var newImageSrc = $activeThumb.find('img').data('full-src');

        $mainImage.css('opacity', 0);
        setTimeout(function() {
            $mainImage.attr('src', newImageSrc);
            $mainImage.css('opacity', 1);
        }, 300);

        $thumbnails.removeClass('active');
        $activeThumb.addClass('active');

        $dots.removeClass('active');
        $dots.eq(index).addClass('active');
    }

    $thumbnails.on('click', function() {
        var index = $(this).index();
        updateProductView(index);
    });

    $dots.on('click', function() {
        var index = $(this).index();
        updateProductView(index);
    });
    
    $section.find('.btn-add-to-cart').on('click', function(e) {
        e.preventDefault();
        var $btn = $(this);
        if ($btn.text() === 'Add to Cart') {
            $btn.text('Added!');
            setTimeout(function() {
                $btn.text('Add to Cart');
            }, 2000);
        }
    });

    var $animatedElements = $section.find('.animate-on-scroll');
    var isAnimationTriggered = false;

    function checkAnimations() {
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        var sectionTop = $section.offset().top;

        if (windowScrollTop + windowHeight * 0.8 > sectionTop && !isAnimationTriggered) {
            $.each($animatedElements, function() {
                var $element = $(this);
                var delay = $element.data('animation-delay') || '0s';
                $element.css('transition-delay', delay);
                $element.addClass('is-visible');
            });
            isAnimationTriggered = true; 
        }
    }

    $(window).on('scroll.productDetail resize.productDetail', checkAnimations);
    setTimeout(checkAnimations, 100);
});
$(document).ready(function() {
    'use strict';

    var $window = $(window);
    var $animatedElements = $('#section-connect .anim-el');

    function isElementInViewport(el) {
        if (el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

    function checkAnimation() {
        $animatedElements.each(function() {
            var $el = $(this);
            if (isElementInViewport($el)) {
                $el.addClass('is-visible');
            }
        });
    }

    $window.on('scroll.connect resize.connect', checkAnimation).trigger('scroll.connect');

    $('#section-connect .email-form').on('submit', function(e) {
        e.preventDefault();
        var $emailInput = $(this).find('input[type="email"]');
        var email = $emailInput.val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.trim() === '') {
            alert('Please enter your email address.');
            return;
        }

        if (emailRegex.test(email)) {
            alert('Thank you for connecting! We will be in touch with you at ' + email);
            $emailInput.val('');
        } else {
            alert('Please enter a valid email address.');
        }
    });
});


});
