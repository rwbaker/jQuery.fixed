/*
 * jQuery Fixed Div plugin v1.0.0 <https://github.com/rwbaker/jQuery.fixed/>
 * @requires jQuery v1.2.6 or later
 * is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

(function( $ ){

    var default_options = {
        'top': 0
    };

    $.fn.fixed = function( options ) {
        var o = $.extend({}, default_options, options);

        return this.each(function() {
            // Set the basics
            var $this = $(this);
            var offset = $this.offset();

            offset = (parseInt(offset.top) - parseInt(o.top) );

            // Init
            $this.css('position','absolute');

            // Check if element is already passed offset; usually on page refresh
            if ( $(document).scrollTop() > offset ) {
                setFixed();
            }

            window.onscroll = function() {
                //documentElement.scrollTo works for IE/Firefox (Gecko); self.pageYOffset for Chrome/Safari(Webkit))
                if (document.documentElement.scrollTop > offset || self.pageYOffset > offset) {
                    setFixed();

                } else if (document.documentElement.scrollTop < offset || self.pageYOffset < offset) {
                    setAb();
                }
            };

            function setFixed() {
                $this.css('position','fixed').css('top', o.top+'px');
            }
            function setAb() {
                $this.css('position','absolute').css('top', '0px');
            }
        });

    };
})( jQuery );
