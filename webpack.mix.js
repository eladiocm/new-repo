const mix = require("laravel-mix");
const path = require("path");

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
        },
    },
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css");

mix.js(
    "resources/js/pages/GlobalRouter/GlobalRouter.js",
    "public/js/pages/GlobalRouter.js"
);
//firebase
//mix.copyDirectory('resources/js/firebase/firebase-messaging-sw.js', 'public/js').version();
// mix.js('resources/js/firebase/firebase-messaging-sw.js', 'public').react();

/* Images */
// mix.copyDirectory("resources/images", "public/images");
mix.copyDirectory("resources/js/img/assets", "public/images/assets");

/* Fonts */
mix.copyDirectory("resources/fonts/", "public/fonts/");

mix.combine(
    ["resources/gull/assets/css/themes/lite-purple.css"],
    "public/assets/css/common-bundle-script.css"
);

mix.combine(
    [
        "resources/gull/assets/js/plugins/jquery-3.3.1.min.js",
        "resources/gull/assets/js/plugins/perfect-scrollbar.min.js",
    ],
    "public/assets/js/common-bundle-script.js"
);
