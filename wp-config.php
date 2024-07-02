<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'G9hFc%%&o%mU]U5]Xk*RO&4x<[%|--FP4I(Cbuy^z<0w3-;GBXnmLQ%#lU2f21>9' );
define( 'SECURE_AUTH_KEY',   '<jklUFt8F}8$~iHS!D#C#rrPXKIir0o-c)I]w_)f@dTlyi?c|t?GD+~Bfx:C)l%G' );
define( 'LOGGED_IN_KEY',     'B|$l:04o.^cLWe>Lm|}1yd.C0TgmHoq%}}W -OQWTV| :}uz5UAWPK?V^8GWE*M%' );
define( 'NONCE_KEY',         'qC|`fLBAGZP2^BW(<gu3;`f,GZb! Q[}n]kgt~{^<(XKKk;uWR6~=WOp:?6k*J:=' );
define( 'AUTH_SALT',         '0beB<Iof6|R}5Rp15nRzgt.K-pY(!;b[Bk,Q$d~=TrAE%5WNM)dTPy$Z:-Ar<[IH' );
define( 'SECURE_AUTH_SALT',  '?4[p;>nG>qK8 og@ 1yLMG|y7N^$4C7}J}1^l/MpOnI>4L+RtBeEdqPT6P>Tkp7G' );
define( 'LOGGED_IN_SALT',    'wVB;nqY|=teu>UT~F^lp>0sck+&Ru3 ??G`/S[&RIp(DkTR3Id%`)C2~Pc?==*ro' );
define( 'NONCE_SALT',        '%mMgW^/*5]2..*Ft34isGL2{PIMsyO$rk%|z.7t4:zrO#WBZDUsjatGZ69lq4KD-' );
define( 'WP_CACHE_KEY_SALT', '%OWZ?mu.~&fejy2Sa9`It=5f.;S-c! 8lT]Eycx|@zf_&&9$-oU9&,S!mwnd&${s' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
