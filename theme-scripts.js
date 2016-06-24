/* Demo slider */
jQuery(window).load(function(){
    jQuery('a[href^="http://www.thinkupthemes.com"]').attr( 'target', '_blank' );
    jQuery('a[href^="http://www.wordpress.org"]').attr( 'target', '_blank' );

    jQuery('a[href="#"]').attr( 'onclick', 'return false;' );

    jQuery('#wpcf7-f9604-w1-o1').click(function(){
        alert('Contact form is disabled');
        return false;
    });

    // Remove 'Upcoming Events ›' breadcrumb from tribe events calendar list displays
    $target = jQuery('h2.tribe-events-page-title');
    if ($target.length !== 0){
        $string = $target.html();
        $string = $string.replace('Upcoming Events', '');
        $string = $string.replace('›', '');
        $target.html($string);
    }
});