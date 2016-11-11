var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "add-channels",
  label: "Add Channels to Irvue",
  onClick: function(state) {
  		let currentURL = tabs.activeTab.url;
  		if (currentURL.indexOf("http://unsplash.com") == -1 && 
			currentURL.indexOf("https://unsplash.com") == -1) {
			return;
		}
		var irvueURL = "irvue://add_channel?target="+encodeURIComponent(currentURL);
		tabs.open(irvueURL);
	}
});