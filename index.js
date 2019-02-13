// Include or require PO.js so that PO variable is available
// For instance, in node.js:
var PO = require('./mappings/PO').PO;

// First we construct a Jsonix context - a factory for unmarshaller (parser)
// and marshaller (serializer)
var context = new Jsonix.Context([PO]);

// Then we create a unmarshaller
var unmarshaller = context.createUnmarshaller();

// Unmarshal an object from the XML retrieved from the URL
unmarshaller.unmarshalURL('data/message_response.xml',
    // This callback function will be provided with the result of the unmarshalling
    function (unmarshalled) {
        console.log(unmarshalled); 
    });

