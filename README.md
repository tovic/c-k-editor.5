Custom CKEditor 5 Builder
=========================

Tutorial for Noob
-----------------

 - Open _Node.js command prompt_
 - Move to `.\@ckeditor` directory
 - Type `npm install` then press _Enter_
 - Wait for a moment
 - Edit `.\@ckeditor\ckeditor.js` file to set your custom build
 - Type `npm run build` hen press _Enter_
 - Wait for a moment
 - The results will be available in `.\@ckeditor\dist\ckeditor.js`
 - Move the `.\@ckeditor\dist\ckeditor.js` file to `.\lot\extend\c-k-editor\lot\worker\@ckeditor` to replace the old _CKEditor_ build.
 - Configure your toolbars in `.\lot\extend\c-k-editor\lot\state\editor.php`

Special thanks to [@igoynawamreh](https://github.com/igoynawamreh)