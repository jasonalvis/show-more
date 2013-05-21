$(document).ready(function() {
     	
	$('.showmore_one').showMore({
		speedDown: 300,
	        speedUp: 300,
	        height: '165px',
	        showText: 'Show more',
	        hideText: 'Show less'
	});

	$('.showmore_two').showMore({
		speedDown: 300,
	        speedUp: 300,
	        height: '195px',
	        showText: 'Show more',
	        hideText: 'Show less'
	});
	      
});

/*
 * Show More jQuery Plugin
 * Author: Jason Alvis
 * Author Site: http://www.jasonalvis.com
 * License: Free General Public License (GPL)
 * Version: 1.0.4
 * Date: 21.05.2013
 */
(function(a){a.fn.showMore=function(b){var c={speedDown:300,speedUp:300,height:"265px",showText:"Show",hideText:"Hide"};var b=a.extend(c,b);return this.each(function(){var e=a(this),d=e.height();if(d>parseInt(b.height)){e.wrapInner('<div class="showmore_content" />');e.find(".showmore_content").css("height",b.height);e.append('<div class="showmore_trigger"><span>'+b.showText+"</span></div>");e.find(".showmore_trigger").on("click",function(){a(this).addClass("less");a(this).find("span").text(b.hideText);a(this).parent().find(".showmore_content").animate({height:d},b.speedDown)});e.find(".showmore_trigger.less").on("click",function(){a(this).removeClass("less");a(this).find("span").text(b.showText);a(this).parent().find(".showmore_content").animate({height:b.height},b.speedUp)})}})}})(jQuery);