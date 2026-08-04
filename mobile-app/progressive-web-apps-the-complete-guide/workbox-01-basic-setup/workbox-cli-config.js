module.exports = {
  globDirectory: 'public/',
  globPatterns: [
    '**/*.{html,ico,json,css}',
    'src/images/*.{jpg,png}', // this caches only the files in src/images without files in subfolders such as 'icons'
    'src/js/*.min.js',
  ],
  swSrc: 'public/sw-base.js',
  swDest: 'public/service-worker.js',
  globIgnores: [
    '../workbox-cli-config.js',
    'help/**', // everything will be ignored in 'help' folder
  ],
};
