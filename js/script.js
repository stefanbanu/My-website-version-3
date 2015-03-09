( function( $ ) {
    var isOpened = "true";

	$( document ).ready(function() {

		$('#cssmenu .icon-active').click(function(e) {
			e.preventDefault();
		});

		$('#cssmenu .link-inactive').click(function(e) {
			e.preventDefault();
		});

		$('#cssmenu').prepend('<div id="indicatorContainer"><div id="pIndicator"><div id="cIndicator"></div></div></div>');
		var activeElement = $('#cssmenu>ul>li:first');

		$('#cssmenu>ul>li').each(function() {
			if ($(this).hasClass('active')) {
				activeElement = $(this);
			}
		});

		var posLeft = activeElement.position().left;
		var elementWidth = activeElement.width();
		posLeft = posLeft + elementWidth/2 -6;
		if (activeElement.hasClass('has-sub')) {
			posLeft -= 6;
		}

		$('#cssmenu #pIndicator').css('left', posLeft);
		var element, leftPos, indicator = $('#cssmenu pIndicator');

		$("#cssmenu>ul>li").hover(function() {
			element = $(this);
			var w = element.width();
			if ($(this).hasClass('has-sub'))
			{
				leftPos = element.position().left + w/2 - 12;
			}
			else {
				leftPos = element.position().left + w/2 - 6;
			}

			$('#cssmenu #pIndicator').css('left', leftPos);
		}
		, function() {
			$('#cssmenu #pIndicator').css('left', posLeft);
		});

		$('#cssmenu>ul').prepend('<li id="menu-button"><a>Menu</a></li>');

		$( "#menu-button" ).click(function(){
			if ($(this).parent().hasClass('open')) {
				$(this).parent().removeClass('open');
                $('#cssmenu>ul>li').find('ul').addClass('close');


			}else {

				$(this).parent().addClass('open');


			}
		});

//        alert ($(window).width());
        if($(window).width() < 800) {
            $( "#cssmenu>ul>li>ul").addClass('close');
        }

        $("#cssmenu>ul>li").click(function(){
                if ($(this).find('ul').hasClass('close')) {
                    $(this).find('ul').removeClass('close');
                }
                else {
                    $(this).find('ul').addClass('close');


                }
        });


	});

	$( window ).resize(function() {
		$('#cssmenu>ul').removeClass('open');
        if($(window).width() < 800) {
            $( "#cssmenu>ul>li>ul").addClass('close');
        } else {
            $( "#cssmenu>ul>li>ul").removeClass('close');
        }
	});

} )( jQuery );
