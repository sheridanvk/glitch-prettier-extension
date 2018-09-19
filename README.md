Welcome to the Glitch BETA
=========================

Hey. Let's make a chrome extension.

All the extension code lives inside of the /extension folder.

We use Glitch's file watch behavior to monitor for changes and then rebuild the output crx file, which we host at public/extension.crx


Remix instructions:
-------------------

Change the root URL to your remixed project's URL in content.js
scriptToLoad.src = 'https://{YOUR_URL}/script.js';

You also need to change your URL in the file `manifest.json`a, tweak the value
`content_security_policy`.

You'll need to generate a PEM file and place it at .data/key.pem

Open up the console, then run this code:
`
  openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout .data/key.pem -out .data/cert.pem
`
Fill out the prompts, then you'll be OK.
You can also bring in your own external .pem file.


Resources:
----------
https://robots.thoughtbot.com/how-to-make-a-chrome-extension
https://developer.chrome.com/extensions/hosting
https://developer.chrome.com/extensions/packaging
https://chrome.google.com/webstore/developer/dashboard


Made by [Fog Creek](https://fogcreek.com/)
-------------------

\ ゜o゜)ノ
