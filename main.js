



var hello11 = require("./routes/hello11.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.soap("/hello11", "https://ready4soa-fabiojose.rhcloud.com/hello11/doGreeting", "RequestElement", hello11.RequestElement);

