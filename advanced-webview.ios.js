"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
("use strict");
var utils = require("tns-core-modules/utils/utils");
var color_1 = require("tns-core-modules/color");
function openAdvancedUrl(options) {
    if (!options.url) {
        throw new Error("No url set in the Advanced WebView Options object.");
    }
    var sfc = SFSafariViewController.alloc().initWithURL(NSURL.URLWithString(options.url));
    if (options.toolbarColor) {
        sfc.preferredBarTintColor = new color_1.Color(options.toolbarColor).ios;
    }
    if (options.toolbarControlsColor) {
        sfc.preferredControlTintColor = new color_1.Color(options.toolbarControlsColor).ios;
    }
    var app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
    var animated = true;
    var completionHandler = null;
    app.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(sfc, animated, completionHandler);
}
exports.openAdvancedUrl = openAdvancedUrl;
