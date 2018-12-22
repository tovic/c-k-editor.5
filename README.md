Custom CKEditor 5 Builder
=========================

> CKEditor 5 builder for Mecha CMS.

Tutorial for Noob
-----------------

- Download: `git clone https://github.com/mecha-cms/c-k-editor.5.git` or [download zip](https://github.com/mecha-cms/c-k-editor.5/archive/master.zip)
- Open _Node.js command prompt_
- Move to `/c-k-editor.5` directory
- Type `npm install` then press _Enter_
- Wait for a moment
- Edit `ckeditor.js` file to set your custom build
- Type `npm run build` then press _Enter_
- Wait for a moment
- The results will be available in `dist/ckeditor.js`
- Move the `dist/ckeditor.js` file to `lot/extend/c-k-editor/lot/worker/@ckeditor` to replace the old _CKEditor_ build.
- Configure your toolbars in `lot/extend/c-k-editor/lot/state/editor.php`

Special thanks to [@igoynawamreh](https://github.com/igoynawamreh)
