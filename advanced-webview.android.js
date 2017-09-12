"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
("use strict");
var color_1 = require("tns-core-modules/color");
var app = require("tns-core-modules/application");
var CustomTabsIntent = android.support.customtabs.CustomTabsIntent;
var Uri = android.net.Uri;
function openAdvancedUrl(options) {
    if (!options.url) {
        throw new Error("No url set in the Advanced WebView Options object.");
    }
    var activity = app.android.startActivity || app.android.foregroundActivity;
    var intentBuilder = new CustomTabsIntent.Builder();
    if (options.toolbarColor) {
        intentBuilder.setToolbarColor(new color_1.Color(options.toolbarColor).android);
    }
    if (options.showTitle) {
        intentBuilder.setShowTitle(options.showTitle);
    }
    intentBuilder.addDefaultShareMenuItem();
    intentBuilder.enableUrlBarHiding();
    var pm = app.android.context.getPackageManager();
    try {
        var isChrome = void 0;
        isChrome = pm.getApplicationInfo("com.android.chrome", 0);
        if (isChrome.enabled) {
            var intent = intentBuilder.build().intent;
            intent.setPackage("com.android.chrome");
            intentBuilder.build().launchUrl(activity, Uri.parse(options.url));
        }
        else {
            intentBuilder.build().launchUrl(activity, Uri.parse(options.url));
        }
    }
    catch (err) {
        intentBuilder.build().launchUrl(activity, Uri.parse(options.url));
    }
}
exports.openAdvancedUrl = openAdvancedUrl;
