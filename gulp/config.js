var src               = 'app';
var build             = 'build';
var development       = '/build/development';
var production        = '/build/production';
var srcAssets         = 'app/_assets';
var developmentAssets = 'app/build/development/assets';
var productionAssets  = 'build/production/assets';
var serverJS          = './server/app.js'
var servers           = './server/'
var production        = false;
var defaultPort       = 7203;

module.exports = {
  sass: {
  src:  srcAssets + '/styles/**/*.{sass,scss}',
  dest: developmentAssets + '/css',
  options: {
    noCache: true,
    bundleExec: true,
    sourcemap: true
    }
  },
  autoprefixer: {
  browsers: [
    'last 2 versions',
    'safari 5',
    'ie 8',
    'ie 9',
    'opera 12.1',
    'ios 6',
    'android 4'
  ],
  cascade: true
},
  watch: {
    sass: srcAssets + '/styles/**/*.{sass,scss}',
    html: development + '/**/*.html'
  },
fonts: {
  src: srcAssets + '/fonts/**/',
  dest: developmentAssets + '/fonts/'
  },
images: {
  src: srcAssets + '/images/**/',
  dest: developmentAssets + '/images/',
  options: {
    optimizationLevel: 4,

    }
  },
script: {
  src: srcAssets + '/js/**/*.js',
  dest: developmentAssets + '/js/',
  options: {
    "presets": ["es2015"]
    }
  },
nodemon: {
    defaultPort: 7203,
    nodeServer: serverJS,
    server: servers,
    delay: 1000
}
};
