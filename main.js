



var hello11 = require("./routes/hello11.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.soap("/hello11", "https://ready4soa-fabiojose.rhcloud.com/hello11/doGreeting", "RequestElement", hello11.RequestElement);

Sandbox.define("/hello11/WSDL", "GET", function(req, res){
    
    res.type('xml');
    res.render('hello11_wsdl');
    
});
