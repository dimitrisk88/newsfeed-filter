# newsfeed-filter
A browser extension to remove facebook's ads and promoted content.

popup.html contains the css code and represents the whole UI after clicking the icon.
popup.js contains the code to change options from UI and trigger the worker.
worker.js contains the code which is responsible for the whole hide/show of the promoted content.

For firefox, you need to add this key to manifest.json. Chrome will not accept it with this key... The rest of the code is exactly the same on the bright side!
	"applications": {
		"gecko": {
			"id": "some-id@in-email.format"
		}
	}
