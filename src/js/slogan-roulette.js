
/*
 * Slogan Roulette
 *
 * @author Dmitri Chapkine 2016
 * @usage https://github.com/dchapkine/slogan-roulette
 */
(function ( $ ) {

	function animate(el, x, cb) {
		//var oldclass = el.attr("class");
		el.addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function()
			{
				$(this).removeClass(x + ' animated');
				cb();
			});
	};

	function nextClaim(el, settings)
	{
		var autoplay = settings.autoplay;
		var repeat = settings.repeat;
		var interval = settings.interval;
		var outClass = settings.outClass;
		var inClass = settings.inClass;
		var slogans = settings.slogans;

		var i = ~~(el.attr("data-claim-id"));
		var theend = i>=slogans.length;
		var claim = theend?slogans[0]:slogans[i];
		el.attr("data-claim-id", !theend?i+1:(repeat == true?1:i));

		if (!theend || repeat == true)
		{
			animate(el, outClass, function() {
				el.find("span").text(claim);
				animate(el, inClass, function() {
					if (autoplay === true)
					{
						setTimeout(function(){
							nextClaim(el, settings);
						}, interval);
					}
				});
			});
		}
	}

	$.fn.sloganRoulette = function( options ) {

		$(this).each(function(){

			var el = this;
			options = options||{};

			var settings = $.extend({
				autoplay: true,
				repeat: true,
				startDelay: 700,
				interval: 1000,
				outClass: "fadeOutDown",
				inClass: "fadeInDown",
				slogans: ["one", "two", "three"]
			}, options );

			$(el).css("display", "inline-block");

			if (settings.startDelay > 0)
			{
				setTimeout(function() {
				
					nextClaim($(el), settings);

				}, settings.startDelay);
			}
			else
			{
				nextClaim($(el), settings);
			}
			
		});

		return this;
	};

}( (window['Zepto']!=undefined)?Zepto:jQuery ));

