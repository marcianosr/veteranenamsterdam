module.exports = function(grunt) { 

	grunt.initConfig({

		less: { 
			development: { 
				files: { 


					"public/css/style.css": "public/less/style.less"
				}
			}

		},

		 watch: {
		      less: {
			        files: ['public/less/style.less'], // which files to watch
			        tasks: ['less'],
			        options: {
			          	nospawn: true
			        }
		      }
	    },

		browserSync: {
			  bsFiles: {
			    src : ['public/css/style.css', 
			    	   'public/index.html', 
			    	   'index.html', 
			    	   'public/views/*.html',
			    	   'public/js/*.js', 
			    	   'public/js/**/*.js']
			  },
			  options: {
			    watchTask: true,
			    server: {
			      baseDir: "public"
			    }
			  },

			},

	


	});


	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);
}
