/*구글 지도*/
function initialize() {
        var mapLocation = new google.maps.LatLng('37.550943', '126.900330'); 
        var markLocation = new google.maps.LatLng('37.368617', '127.368020');
         
        var mapOptions = {
          center: mapLocation, 
          zoom: 9.6,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), 
            mapOptions);
         
        var size_x = 60; 
        var size_y = 60; 
         
        // 마커로 사용할 이미지 주소
        var image = new google.maps.MarkerImage( 'http://www.larva.re.kr/home/img/boximage3.png',
                            new google.maps.Size(size_x, size_y),
                            '',
                            '',
                            new google.maps.Size(size_x, size_y));
         
        var marker;
        marker = new google.maps.Marker({
               position: markLocation, 
               map: map,
               icon: image, 
               title: '' 
        });
         
        var content = ""; 
         
        
        var infowindow = new google.maps.InfoWindow({ content: content});
 
        google.maps.event.addListener(marker, "click", function() {
            infowindow.open(map,marker);
        });
         
 
         
      }
      google.maps.event.addDomListener(window, 'load', initialize);
	  




	/*modal popup*/
        var modal = document.getElementById('myModal');
        var btn = document.getElementById("myBtn");
 
        var span = document.getElementsByClassName("close")[0];                                          
 
        btn.onclick = function() {
            modal.style.display = "block";
        }
 
        span.onclick = function() {
            modal.style.display = "none";
        }
 
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1884px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);


/*submemnu 스크립트*/
( function( $ ) {
$( document ).ready(function() {
$('#nav > ul > li > a').click(function() {
  $('#nav li').removeClass('active');
  $(this).closest('li').addClass('active');   
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('fast');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#nav ul ul:visible').slideUp('fast');
    checkElement.slideDown('fast');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;   
  }      
});
});
} )( jQuery );


/*table td 효과*/

$(document).ready(function() {
	var $container = $("#inner-container"), $articles = $container.children("article"), timeout;

	$articles.on('mouseenter', function(event) {
		var $article = $(this);
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			if ($article.hasClass('active')) return false;
			$articles.not($article).removeClass('active')/*.addClass('blur');*/
			$article.removeClass('blur').addClass('active');
		}, 75);
		$container.on('mouseleave', function(event) {
			clearTimeout(timeout);
			$articles.removeClass('active blur');
		});
	});
});



/*체크박스 전체선택*/

$(document).ready(function(){
	$("#checkall").click(function(){
		if($("#checkall").prop("checked")){
			$("input[name=chk]").prop("checked",true);
			}else{
			$("input[name=chk]").prop("checked",false);
			}
		})
	})
	
	
	
