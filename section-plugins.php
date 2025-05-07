<?php
/**
 * Plugin Name: Section Collection
 * Description: A versatile section collection plugin featuring essential UI blocks to craft impactful, engaging, and user-centric web pages.
 * Version: 1.0.2
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'BPSC_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'BPSC_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BPSC_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'BPSCPlugin' ) ){
	class BPSCPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
			add_action( 'enqueue_block_editor_assets', [ $this, 'enqueueAssets' ] );
			add_filter( 'block_categories_all', [$this, 'registerCategories'] );
		}

		function onInit(){
			$blocks =['faq-section',"ticker-section","team-section","about-section","timeline-section","testimonial-section","feature-section","call-to-actions-section","hero-section"];
			foreach ( $blocks as $block ) {
				register_block_type( __DIR__ . "/build/".$block );
			}

		
			

		}
		function enqueueAssets(){
			wp_enqueue_style( 'BPSC-style', BPSC_DIR_URL . 'build/index.css', [], BPSC_VERSION );
			wp_enqueue_script( 'BPSC-script', BPSC_DIR_URL . 'build/index.js', ['react', 'react-dom', 'wp-blob', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-compose', 'wp-data', 'wp-i18n'], BPSC_VERSION, true );
		}
		function registerCategories( $categories ){
			return array_merge( [ [
				'slug'	=> 'section_collection',
				'title'	=> __( 'section-collection', 'b-plugins' ),
			] ], $categories );
		}
	}
	new BPSCPlugin();
}