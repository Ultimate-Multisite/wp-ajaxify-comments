module.exports = function( grunt ) {
	grunt.initConfig( {
		compress: {
			main: {
				options: {
					archive: 'wp-ajaxify-comments.zip',
				},
				files: [
					{ src: [ 'wp-ajaxify-comments.php' ], dest: '/', filter: 'isFile' },
					{ src: [ 'functions.php' ], dest: '/', filter: 'isFile' },
					{ src: [ 'wpml-config.xml' ], dest: '/', filter: 'isFile' },
					{ src: [ 'readme.txt' ], dest: '/', filter: 'isFile' },
					// Keep editable asset sources in source control without shipping them.
					{ src: [ 'assets/**', '!assets/source/**' ], dest: '/' },
					{ src: [ 'dist/**' ], dest: '/' },
					{ src: [ 'js/**' ], dest: '/' },
					{ src: [ 'languages/**' ], dest: '/' },
					{ src: [ 'lib/**' ], dest: '/' },
					{ src: [ 'php/**' ], dest: '/' },
				],
			},
		},
	} );
	grunt.registerTask( 'default', [ 'compress' ] );

	grunt.loadNpmTasks( 'grunt-contrib-compress' );
};
