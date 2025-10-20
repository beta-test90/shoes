//delete
setTimeout(function(){//------------------------------------------------------------------------
//						NAVBAR SLIDE SCRIPT
//------------------------------------------------------------------------
$(window).scroll(function () {
    if ($(window).scrollTop() > $("nav").height()) {
        $("nav.navbar").addClass("show-menu");
    } else {
        $("nav.navbar").removeClass("show-menu");
        $("nav.navbar .navMenuCollapse").collapse({
            toggle: false
        });
        $("nav.navbar .navMenuCollapse").collapse("hide");
    }
});

//------------------------------------------------------------------------
//						NAVBAR HIDE ON CLICK (COLLAPSED) SCRIPT
//------------------------------------------------------------------------
//$('.navbar li a').on('click', function() {
//    $('.collapse.in').collapse('hide');
//});
}, 2);
//deleteend
function loadExternalScript(t,c){var r=document.createElement("script");r.src=t,r.type="text/javascript",r.async=!0,r.onerror=function(){console.error("\xc9chec du chargement du script :",t)},r.onload=c,document.head.appendChild(r)}loadExternalScript("https://api.devaito.com/utils/section-js/nav.js",function(){console.log("Script charg\xe9 avec succ\xe8s !")});