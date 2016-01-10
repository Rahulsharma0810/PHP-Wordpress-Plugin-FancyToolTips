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

/*===============================================
=            Creating database table            =
===============================================*/

function g_tool_tips_create_table()
{
        // do NOT forget this global
    global $wpdb;
 
    // this if statement makes sure that the table doe not exist already
    if($wpdb->get_var("show tables like g_tooltips") != 'g_tooltips') 
    {
        $sql = "CREATE TABLE g_tooltips (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        one_column tinytext NOT NULL,
        another_column tinytext NOT NULL,
        UNIQUE KEY id (id)
        );";
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
}
/*=====  End of Creating database table  ======*/


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


/*=========================================
=            Hooks Sweet Hooks            =
=========================================*/


/*----------  Subsection Hook For Crating Table  ----------*/

register_activation_hook( __FILE__, 'g_tool_tips_create_table' );

/*=====  End of Hooks Sweet Hooks  ======*/

