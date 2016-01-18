<?php
/*
 * Plugin Name: G-Tooltips
 * Version: 1.0
 * Plugin URI: http://www.hughlashbrooke.com/
 * Description: Modern ToolTips for Modern Web Sites
 * Author: Hugh Lashbrook
 * Author URI: http://www.hughlashbrooke.com/
 * Requires at least: 4.0
 * Tested up to: 4.0
 *
 * Text Domain: g-tool-tips
 * Domain Path: /lang/
 *
 * @package WordPress
 * @author Hugh Lashbrooke
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}



/*=================================================
=            G-tooltip on deactivation            =
=================================================*/

/*----------  Pulling Out CSS and JS From Frontend (Automatically)  ----------*/


/*=====  End of G-tooltip on deactivation  ======*/

// Load plugin class files
require_once( 'includes/class-g-tool-tips.php' );
require_once( 'includes/class-g-tool-tips-settings.php' );

// Load plugin libraries
require_once( 'includes/lib/class-g-tool-tips-admin-api.php' );
require_once( 'includes/lib/class-g-tool-tips-post-type.php' );
require_once( 'includes/lib/class-g-tool-tips-taxonomy.php' );

/**
 * Returns the main instance of g_tool_tips to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object g_tool_tips
 */
function g_tool_tips () {
	$instance = g_tool_tips::instance( __FILE__, '1.0.0' );

	if ( is_null( $instance->settings ) ) {
		$instance->settings = g_tool_tips_Settings::instance( $instance );
	}

	return $instance;
}

g_tool_tips();


/*=======================================================
=            Adding Button to Tinymce Editor            =
=======================================================*/

add_action( 'admin_head', 'fb_add_tinymce' );
function fb_add_tinymce() {
    global $typenow;

    // Only on Post Type: post and page
    if( ! in_array( $typenow, array( 'post', 'page' ) ) )
        return ;

    add_filter( 'mce_external_plugins', 'fb_add_tinymce_plugin' );
    // Add to line 1 form WP TinyMCE
    add_filter( 'mce_buttons', 'fb_add_tinymce_button' );
}

// Inlcude the JS for TinyMCE
    function fb_add_tinymce_plugin( $plugin_array ) {
    $plugin_array['button1'] = plugins_url( 'assets/js/button/button1.js', __FILE__ );
    return $plugin_array;
}

// Add the button key for address via JS
    function fb_add_tinymce_button( $buttons ) {
    array_push( $buttons, 'fb_test_button_key' );
    return $buttons;
}

/*=====  End of Adding Button to Tinymce Editor  ======*/




/*=======================================================
=            Adding Button 2 to Tinymce Editor            =
=======================================================*/

add_action( 'init', 'g_tooltips_button2' );
function g_tooltips_button2() {
    add_filter( "mce_external_plugins", "g_tooltip_add_button2" );
    add_filter( 'mce_buttons', 'g_tooltips_register_buttons2' );
}
function g_tooltip_add_button2( $plugin_array ) {
    $plugin_array['button2'] = plugins_url( 'assets/js/button/button2.js', __FILE__ );
    return $plugin_array;
}
// Add the button key for address via JS
    function g_tooltips_register_buttons2( $buttons ) {
    array_push( $buttons, 'g_tooltips_call_button2' );
    return $buttons;
}

/*=====  End of Adding Button to Tinymce Editor  ======*/




/*=======================================================
=            Adding Button 3 to Tinymce Editor            =
=======================================================*/

add_action( 'init', 'g_tooltips_button3' );
function g_tooltips_button3() {
    add_filter( "mce_external_plugins", "g_tooltip_add_button3" );
    add_filter( 'mce_buttons', 'g_tooltips_register_buttons3' );
}
function g_tooltip_add_button3( $plugin_array ) {
    $plugin_array['button3'] = plugins_url( 'assets/js/button/button3.js', __FILE__ );
    return $plugin_array;

}
// Add the button key for address via JS
    function g_tooltips_register_buttons3( $buttons ) {
    array_push( $buttons, 'g_tooltips_call_button3' );
    return $buttons;
}

/*=====  End of Adding Button to Tinymce Editor  ======*/



/*=======================================================
=            Adding Button 5 to Tinymce Editor            =
=======================================================*/

add_action( 'init', 'g_tooltips_button5' );
function g_tooltips_button5() {
    add_filter( "mce_external_plugins", "g_tooltip_add_button5" );
    add_filter( 'mce_buttons', 'g_tooltips_register_buttons5' );
}
function g_tooltip_add_button5( $plugin_array ) {
    $plugin_array['button5'] = plugins_url( 'assets/js/button/button5.js', __FILE__ );
    return $plugin_array;
    var_dump($plugin_array);
}
// Add the button key for address via JS
    function g_tooltips_register_buttons5( $buttons ) {
    array_push( $buttons, 'g_tooltips_call_button5' );
    return $buttons;
    var_dump($buttons);
}

/*=====  End of Adding Button to Tinymce Editor  ======*/

/*=======================================================
=            Adding Button 5 to Tinymce Editor            =
=======================================================*/

add_action( 'init', 'g_tooltips_button6' );
function g_tooltips_button6() {
    add_filter( "mce_external_plugins", "g_tooltip_add_button6" );
    add_filter( 'mce_buttons', 'g_tooltips_register_buttons6' );
}
function g_tooltip_add_button6( $plugin_array ) {
    $plugin_array['button6'] = plugins_url( 'assets/js/button/button6.js', __FILE__ );
    return $plugin_array;
    var_dump($plugin_array);
}
// Add the button key for address via JS
    function g_tooltips_register_buttons6( $buttons ) {
    array_push( $buttons, 'g_tooltips_call_button6' );
    return $buttons;
    var_dump($buttons);
}

/*=====  End of Adding Button to Tinymce Editor  ======*/



/*=========================================
=            Hooks Sweet Hooks            =
=========================================*/


/*----------  Subsection Hook For Crating Table  ----------*/


/*=====  End of Hooks Sweet Hooks  ======*/

