Chrome extension to use Prettier with Glitch
============================================

Install the extension by heading [here](https://glitch-prettier-extension.glitch.me/) and downloading it.

TODO:
- Make this check to see what the file format is (currently it's assuming JS)
- Preserve cursor position (formatWithCursor) so it stay in the same place after formatting
- Test this on non-Glitch pages
- Remove jQuery, we're not using it
- Fix the icons (sparkle emoji logo?)
- Get it hosted in the Chrome extension store
- Ping the support forum about it (e.g. https://support.glitch.com/t/how-to-beautify-prettify-the-text/2168/5)

Build process
=============
The build process here was lovingly remixed from another project (to which I have lost the reference, I'm so sorry!). Details are here:
- All the extension code lives inside of the /extension folder.
- Glitch's file watch behavior is used to monitor for changes and then rebuild the output crx file on every keystroke, which is hosted at public/extension.crx

Remix instructions:
- You need to change the URL to the URL of your project in the file manifest.json, tweak the value content_security_policy.
- You'll also need to generate a PEM file and place it at .data/key.pem
  - Open up the console, then run this code: openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout .data/key.pem -out .data/cert.pem 
  - When prompted for "Common Name (eg, fully qualified host name)" you must enter the full hostname of the extension (e.g. glitch-prettier-extension.glitch.me)

Resources:
- https://robots.thoughtbot.com/how-to-make-a-chrome-extension 
- https://developer.chrome.com/extensions/hosting 
- https://developer.chrome.com/extensions/packaging 
- https://chrome.google.com/webstore/developer/dashboard


Made by [Sheridan Kates](https://twitter.com/sheridanvk)
-------------------

\ ゜o゜)ノ
