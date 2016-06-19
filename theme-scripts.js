/* Demo slider */
jQuery(window).load(function(){
    jQuery('a[href^="http://www.thinkupthemes.com"]').attr( 'target', '_blank' );
    jQuery('a[href^="http://www.wordpress.org"]').attr( 'target', '_blank' );

    jQuery('a[href="#"]').attr( 'onclick', 'return false;' );

    jQuery('#wpcf7-f9604-w1-o1').click(function(){
        alert('Contact form is disabled');
        return false;
    });
});