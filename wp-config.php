<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sip');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         't7-[h9(YA|p@NF@x}vrF$ y<b$S1ZtYLOb}%5S[iZOu]Ia%ExR:nC}}/@(Q:f0WT');
define('SECURE_AUTH_KEY',  '>IqIh8dO)o~>CH+RFzq;sYn`<-9yc4w{h]xV-@0H,dMUu^9q:kfOptr~:Sf[+@;k');
define('LOGGED_IN_KEY',    'F[nRK0lc:%L(Dv1p6naTCyFJo?#(.i`6p~O1nK}khx6!}XAJk&{>{G9n6uO2gNBb');
define('NONCE_KEY',        '$J3T&IpOrBT?zu>}Q% P^&`__eF/A=L=J!LQ>hkjh5QMri+&n_2sljQ[|pWfaIzW');
define('AUTH_SALT',        '*t !oo}wmRy[Z1b00?zJfo})0cnTZ2R3@GBNG~nW#y~/r !g$Za@-zv|4T:GP%et');
define('SECURE_AUTH_SALT', ':aY y3@o=85v*-ni&A @0^ryL6:5?6wrS.fP7:-^~D7BMa?-E)p5juy!cD51uV1$');
define('LOGGED_IN_SALT',   'aEs^~Tt!I]Y {p:71qXLrF[MDD&9C1dP5YvY.[]gZg%hw}SQGfsA0aX{dBGj|g0B');
define('NONCE_SALT',       'p$*DcJH_P%sT!(te~;?L9*=$)XKvLpwMH[5l%iqs6~) x{4k`N< /8(TBZ]P.>kB');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
