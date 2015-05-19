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
			      tasks: ['less', 'copy:less'],
			        tasks: ['less'],
			        options: {
			          	nospawn: true
			        }
		      }, 

	        css: {
			        files: ['public/css/style.css', 'public/stylesheets.css'], // which files to watch
			        tasks: ['copy:css'],
			        options: {
			          	nospawn: true
			        }
		      }, 

		      scripts: { 
		      		files: ['public/js/main.js'], 
		      		tasks: ['copy:js', 'concat:build'], 
		      		  options: {
			          	nospawn: true
			        }

		      },



		      html: { 

		      	    files: ['public/index.html', 'public/html/**/*.html'], // which files to watch
			       tasks: ['includereplace:build', 'copy:html'],
			        options: {
			          	nospawn: true
			        }
		      }


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

			html: { 
			  files: [{
			    cwd: 'public/html',  // set working folder / root to copy
			    src: '**/*',           // copy all files and subfolders
			    dest: 'test/html',    // destination folder
			    expand: true           // required when using cwd
			  }]

			},

			less: { 
			  files: [{
			    cwd: 'public/less',  // set working folder / root to copy
			    src: '**/*',           // copy all files and subfolders
			    dest: 'test/less',    // destination folder
			    expand: true           // required when using cwd
			  }]

			}, 

			css: { 
			  files: [{
			    cwd: 'public/css',  // set working folder / root to copy
			    src: '**/*',           // copy all files and subfolders
			    dest: 'test/css',    // destination folder
			    expand: true           // required when using cwd
			  }]

			}, 

			js: {

			  files: [{
			    cwd: 'public/js',  // set working folder / root to copy
			    src: '**/*',           // copy all files and subfolders
			    dest: 'test/js',    // destination folder
			    expand: true           // required when using cwd
			  }]




			}

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

		}, 

		concat: { 

			build: { 
				src: ['lib/angular/', 'public/js/main.js', 'public/js/controllers/*.js'], 
				dest: 'js/veteranenamsterdam.js'


			}


		},

		// Create comment to let usemin read the js file
		useminPrepare: { 

				html: 'public/index.html',
				options: { 
					dest: 'test'
				}


	
		

		}, 

		usemin: { 
				html: ['test/index.html'],  	
		
		
		}

	


	});


	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-usemin');


	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('dist', ['browserSync:dist', 'copy:dist', 'includereplace:dist', 'watch']);
	grunt.registerTask('build', ['browserSync:build', 'copy:build', 'includereplace:build', 'concat:build', 'useminPrepare', 'usemin', 'watch']);
	grunt.registerTask('default', ['browserSync:build', 'includereplace', 'watch']);
}
