(function($) {
  "use strict";

  $(document).ready(function() {
    var owl = $(".owl-carousel"),
        // rangeArr = [],
        inputType =$("input[type=range]");
      owl.owlCarousel({
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      autoplay: true,
      smartSpeed: 2200,
      autoplayTimeout: 4000,
      center: false,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1280: {
          items: 1,
        }
      }
    });
  //   function getIndex(event) {
      
  //   }
        owl.on('changed.owl.carousel', function(event) {
        console.log(event.item.index);
        inputType.val(event.item.index);
      });
    
    $(".go-me").click(function() {
      owl.trigger("next.owl.carousel");
    });
    $(".back-me").on("click", function() {
      owl.trigger("prev.owl.carousel");
    });
    $("input").on("change", function(e) {
      e.preventDefault();
      console.log(inputType.val());
      // console.log(e.item.index);
      // FIGURE OUT HOW TO GET CAROUSEL INDEX
      $('.owl-carousel').trigger('to.owl.carousel', [inputType.val(),1,true]);
    });
  });





  /*map*/ 
  window.onload = function WindowLoad(event) {
    var myLatlng = new google.maps.LatLng(59.938635, 30.323118);//kordinata bu
    var myOptions = {
        zoom: 17, //karta yaqinligi
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    addMarker(map, googleLatLng, "technotip.com")
  }
  function addMarker (map, googleLatLng, title){
    var markerOpen={
      position: googleLatLng,
      map: map,
      title: title,
      animation: google.maps.Animation.DROP //yoki BOUNCE  bu animatsya turi
    }
    var marker = new google.maps.Marker(markerOpen)
  }




  // Mobile menu dropdown
  $(".menu-trigger").on("click", function() {
    var width = $(window).width();
    if (width < 579.99) {
      $(".main-nav-mobile").toggleClass("active");
    }
  });
  $(".scroll-to-section").on("click", function() {
    var width = $(window).width();
    if (width < 579.99) {
      $(".main-nav-mobile").toggleClass("active");
    }
  });

  $(document).ready(function() {
    $('body').fullpage({
        anchors: ['select-program', 'catalog', 'about'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000
    });
});


  // Page loading animation
  $(window).on("load", function() {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1"
      });
    }

    $("#preloader").animate(
      {
        opacity: "0"
      },
      600,
      function() {
        setTimeout(function() {
          $("#preloader")
            .css("visibility", "hidden")
            .fadeOut();
        }, 300);
      }
    );
  });
})(window.jQuery);
