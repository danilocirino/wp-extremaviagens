<?php
/**
 * Customer new account email
 *
 * This template can be overridden by copying it to yourtheme/wp-travel-engine/emails/customer-new-account.php.
 *
 * HOWEVER, on occasion WP Travel Engine will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://wptravelengine.com
 * @author      WP Travel Engine
 * @package     WP_Travel_Engine/Includes/Templates/Emails
 * @version     1.2.7
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>
	<p><?php printf( esc_html__( 'Welcome to %1$s. A new account has been created for your email address on the website %1$s. Your username is %2$s', 'wp-travel-engine' ), esc_html( $blogname ), '<strong>' . esc_html( $user_login ) . '</strong>' ); ?></p>
	<p><?php printf( esc_html__( 'Your password has been automatically generated: %s', 'wp-travel-engine' ), '<strong>' . esc_html( $user_pass ) . '</strong>' ); ?></p>
	<p><?php printf( esc_html__( 'You can access your account area to view your Trip Bookings and change your password here: %s.', 'wp-travel-engine' ), make_clickable( esc_url( wp_travel_engine_get_page_permalink_by_id( wp_travel_engine_get_dashboard_page_id() ) ) ) ); ?></p>
	<p><?php esc_html_e( 'Powered by', 'wp-travel-engine' ); ?><a href="https://wptravelengine.com"
																  target="_blank"> <?php esc_html_e( 'WP Travel Engine', 'wp-travel-engine' ); ?></a>
	</p>
<?php
