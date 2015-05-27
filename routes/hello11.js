

/*
 * POST /hello11
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.RequestElement = function(req, res) {
	res.status(200);
	
	var namevar = req.xmlDoc.get("//*[local-name() = 'name']").getTextContent();

	// set response body and send
	res.type('xml');
	res.render('hello11_RequestElement', {name: namevar});
};