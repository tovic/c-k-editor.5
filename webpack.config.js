'use strict';

const path = require('path');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');

module.exports = {
    entry: './ckeditor.js',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ckeditor.js'
    },

    module: {
      rules: [
        {
          // Or /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/ if you want to limit this loader
          // to CKEditor 5 icons only.
          test: /\.svg$/,
          use: ['raw-loader']
        },
        {
          // Or /ckeditor5-[^/]+\/theme\/[^/]+\.css$/ if you want to limit this loader
          // to CKEditor 5 theme only.
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: {
                singleton: true
              }
            },
            {
              loader: 'postcss-loader',
              options: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                },
                minify: true
              })
            },
          ]
        }
      ]
    },

    // Useful for debugging.
    devtool: 'source-map',

    // By default webpack logs warnings if the bundle is bigger than 200kb.
    performance: { hints: false }

};