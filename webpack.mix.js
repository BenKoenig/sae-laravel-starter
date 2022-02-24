const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/*mix.sass('resources/sass/app.scss', 'public/css').version()*/

mix.js('resources/vue', 'public/js/vue-app.js').vue().version()

mix.js('resources/vue/index.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .version();



/*mix.scripts([

    'node_modules/bootstrap/dist/js/bootstrap.bundle.js',

], 'public/js/app.js').version()*/

mix.copy('node_modules/font-awesome/fonts', 'public/fonts')
