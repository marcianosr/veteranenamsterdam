module.exports = function(grunt) { 



	var config = {
			buildFolder: 'build/',
			distFolder: 'dist/'
	};

	grunt.initConfig({

		less: { 
			development: { 
				files: { 


					"public/css/style.css": "public/stylesheets.less",
			
				}
			}

		},

		 watch: {
		      less: {
			        files: ['public/less/style.less', 'public/stylesheets.less'], // which files to watch
			        tasks: ['less', 'copy:build'],
			        options: {
			          	nospawn: true
			        }
		      }, 

		      scripts: { 
		      		files: ['public/js/main.js'], 
		      		tasks: ['scripts'], 
		      		  options: {
			          	nospawn: true
			        }

		      }



		      html: { 

		      	    files: ['public/index.html'], // which files to watch
			        tasks: ['includereplace:build'],
			        options: {
			          	nospawn: true
			        }
		      }, 


	    },

	    includereplace: {
				
				dist: { 
	
			    }, 


			    build: { 


			    	// IT now created a public folder with an index.html file in the existing tet folder!
			    	// src: what file do we need to replace?
			    	// dest: destination 
			    	// cwd: relative folder
			    	// 
		    		src: 'index.html', 
		    		dest: 'test/',

		    		// CWD probably is the path where to look for the files which needs to be compiled
		    		cwd: 'public', 
		    		expand: true,
		 

			    }
			     
			   
		},

		copy: {

			dist: { 
			  files: [{
			    cwd: 'public/',  // set working folder / root to copy
			    src: '**/*',           // copy all files and subfolders
			    dest: 'dist/',    // destination folder
			    expand: true           // rootequired when using cwd
			  }]

			},

			build: { 
			  files: [{
			    cwd: 'public/',  // set working folder / root to copy
			    src: '**/*',           // copy all files and subfolders
			    dest: 'test/',    // destination folder
			    expand: true           // required when using cwd
			  }]

			}, 

		},

		browserSync: {

			dist: { 

			 	bsFiles: {
				    src : ['dist/css/style.css', 
				    	   'dist/index.html', 
				    	   'dist/index.html', 
				    
				    	   'dist/views/*.html',
				    	   'dist/js/*.js', 
				    	   'dist/js/**/*.js']
				    },

				    options: {

					    watchTask: true,

					    server: {

					      baseDir: "dist"
					    }


				  	},

			 	},

			build: { 

			    bsFiles: {

				    src : [
				    	   'test/index.html', 
				    	   'test/css/*.css', 
				    	   'test/js/*.js'
				    	]
				  	},

			    options: {

		    		watchTask: true,
			    	server: {
			    	 	 baseDir: "test", 
			    
			  	    }
				},

			},

		}

	


	});


	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-newer');

	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('dist', ['browserSync:dist', 'copy:dist', 'includereplace:dist', 'watch']);
	grunt.registerTask('build', ['browserSync:build', 'copy:build', 'includereplace:build', 'watch']);
	grunt.registerTask('default', ['browserSync:build', 'includereplace', 'watch']);
}
