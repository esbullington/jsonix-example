var PO_Module_Factory = function () {
  var PO = {
    name: 'PO',
    defaultElementNamespaceURI: 'urn:ietf:params:xml:ns:xmpp-stanzas',
    typeInfos: [{
        localName: 'Presence',
        typeName: null,
        propertyInfos: [{
            name: 'showOrStatusOrPriority',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'show',
                  namespaceURI: 'jabber:client'
                }
              }, {
                elementName: {
                  localPart: 'status',
                  namespaceURI: 'jabber:client'
                },
                typeInfo: '.Status'
              }, {
                elementName: {
                  localPart: 'priority',
                  namespaceURI: 'jabber:client'
                },
                typeInfo: 'Byte'
              }],
            type: 'elementRefs'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }, {
            name: 'error',
            elementName: {
              localPart: 'error',
              namespaceURI: 'jabber:client'
            },
            typeInfo: '.Error'
          }, {
            name: 'from',
            attributeName: {
              localPart: 'from'
            },
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'to',
            attributeName: {
              localPart: 'to'
            },
            type: 'attribute'
          }, {
            name: 'type',
            values: ['error', 'probe', 'subscribe', 'subscribed', 'unavailable', 'unsubscribe', 'unsubscribed'],
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'Language',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Iq',
        typeName: null,
        propertyInfos: [{
            name: 'any',
            mixed: false,
            type: 'anyElement'
          }, {
            name: 'error',
            elementName: {
              localPart: 'error',
              namespaceURI: 'jabber:client'
            },
            typeInfo: '.Error'
          }, {
            name: 'from',
            attributeName: {
              localPart: 'from'
            },
            type: 'attribute'
          }, {
            name: 'id',
            required: true,
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'to',
            attributeName: {
              localPart: 'to'
            },
            type: 'attribute'
          }, {
            name: 'type',
            required: true,
            values: ['error', 'get', 'result', 'set'],
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'Language',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Body',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'lang',
            typeInfo: 'Language',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Message',
        typeName: null,
        propertyInfos: [{
            name: 'subjectOrBodyOrThread',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'subject',
                  namespaceURI: 'jabber:client'
                },
                typeInfo: '.Subject'
              }, {
                elementName: {
                  localPart: 'body',
                  namespaceURI: 'jabber:client'
                },
                typeInfo: '.Body'
              }, {
                elementName: {
                  localPart: 'thread',
                  namespaceURI: 'jabber:client'
                },
                typeInfo: '.Thread'
              }],
            type: 'elements'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }, {
            name: 'error',
            elementName: {
              localPart: 'error',
              namespaceURI: 'jabber:client'
            },
            typeInfo: '.Error'
          }, {
            name: 'from',
            attributeName: {
              localPart: 'from'
            },
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'to',
            attributeName: {
              localPart: 'to'
            },
            type: 'attribute'
          }, {
            name: 'type',
            values: ['chat', 'error', 'groupchat', 'headline', 'normal'],
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'Language',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Subject',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'lang',
            typeInfo: 'Language',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Text',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'lang',
            typeInfo: 'Language',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Error',
        typeName: null,
        propertyInfos: [{
            name: 'badRequest',
            required: true,
            elementName: 'bad-request',
            values: ['']
          }, {
            name: 'conflict',
            required: true,
            values: ['']
          }, {
            name: 'featureNotImplemented',
            required: true,
            elementName: 'feature-not-implemented',
            values: ['']
          }, {
            name: 'forbidden',
            required: true,
            values: ['']
          }, {
            name: 'gone',
            required: true
          }, {
            name: 'internalServerError',
            required: true,
            elementName: 'internal-server-error',
            values: ['']
          }, {
            name: 'itemNotFound',
            required: true,
            elementName: 'item-not-found',
            values: ['']
          }, {
            name: 'jidMalformed',
            required: true,
            elementName: 'jid-malformed',
            values: ['']
          }, {
            name: 'notAcceptable',
            required: true,
            elementName: 'not-acceptable',
            values: ['']
          }, {
            name: 'notAuthorized',
            required: true,
            elementName: 'not-authorized',
            values: ['']
          }, {
            name: 'notAllowed',
            required: true,
            elementName: 'not-allowed',
            values: ['']
          }, {
            name: 'paymentRequired',
            required: true,
            elementName: 'payment-required',
            values: ['']
          }, {
            name: 'policyViolation',
            required: true,
            elementName: 'policy-violation',
            values: ['']
          }, {
            name: 'recipientUnavailable',
            required: true,
            elementName: 'recipient-unavailable',
            values: ['']
          }, {
            name: 'redirect',
            required: true
          }, {
            name: 'registrationRequired',
            required: true,
            elementName: 'registration-required',
            values: ['']
          }, {
            name: 'remoteServerNotFound',
            required: true,
            elementName: 'remote-server-not-found',
            values: ['']
          }, {
            name: 'remoteServerTimeout',
            required: true,
            elementName: 'remote-server-timeout',
            values: ['']
          }, {
            name: 'resourceConstraint',
            required: true,
            elementName: 'resource-constraint',
            values: ['']
          }, {
            name: 'serviceUnavailable',
            required: true,
            elementName: 'service-unavailable',
            values: ['']
          }, {
            name: 'subscriptionRequired',
            required: true,
            elementName: 'subscription-required',
            values: ['']
          }, {
            name: 'undefinedCondition',
            required: true,
            elementName: 'undefined-condition',
            values: ['']
          }, {
            name: 'unexpectedRequest',
            required: true,
            elementName: 'unexpected-request',
            values: ['']
          }, {
            name: 'text',
            typeInfo: '.Text'
          }, {
            name: 'by',
            attributeName: {
              localPart: 'by'
            },
            type: 'attribute'
          }, {
            name: 'type',
            required: true,
            values: ['auth', 'cancel', 'continue', 'modify', 'wait'],
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Status',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'lang',
            typeInfo: 'Language',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Thread',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'NMToken',
            type: 'value'
          }, {
            name: 'parent',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'parent'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        values: [''],
        elementName: 'recipient-unavailable'
      }, {
        values: [''],
        elementName: 'item-not-found'
      }, {
        values: [''],
        elementName: 'subscription-required'
      }, {
        typeInfo: '.Status',
        elementName: {
          localPart: 'status',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'not-acceptable'
      }, {
        typeInfo: '.Text',
        elementName: 'text'
      }, {
        elementName: 'redirect'
      }, {
        values: [''],
        elementName: 'not-authorized'
      }, {
        typeInfo: '.Thread',
        elementName: {
          localPart: 'thread',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'internal-server-error'
      }, {
        values: [''],
        elementName: 'jid-malformed'
      }, {
        values: [''],
        elementName: 'feature-not-implemented'
      }, {
        values: [''],
        elementName: 'registration-required'
      }, {
        values: [''],
        elementName: 'resource-constraint'
      }, {
        values: [''],
        elementName: 'remote-server-not-found'
      }, {
        typeInfo: '.Error',
        elementName: {
          localPart: 'error',
          namespaceURI: 'jabber:client'
        }
      }, {
        elementName: 'gone'
      }, {
        values: [''],
        elementName: 'forbidden'
      }, {
        typeInfo: '.Presence',
        elementName: {
          localPart: 'presence',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'payment-required'
      }, {
        values: [''],
        elementName: 'not-allowed'
      }, {
        values: [''],
        elementName: 'bad-request'
      }, {
        typeInfo: '.Message',
        elementName: {
          localPart: 'message',
          namespaceURI: 'jabber:client'
        }
      }, {
        typeInfo: '.Body',
        elementName: {
          localPart: 'body',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'service-unavailable'
      }, {
        values: [''],
        elementName: 'unexpected-request'
      }, {
        typeInfo: '.Subject',
        elementName: {
          localPart: 'subject',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'remote-server-timeout'
      }, {
        values: [''],
        elementName: 'conflict'
      }, {
        typeInfo: '.Iq',
        elementName: {
          localPart: 'iq',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'undefined-condition'
      }, {
        values: ['away', 'chat', 'dnd', 'xa'],
        elementName: {
          localPart: 'show',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'policy-violation'
      }, {
        typeInfo: 'Byte',
        elementName: {
          localPart: 'priority',
          namespaceURI: 'jabber:client'
        }
      }]
  };
  return {
    PO: PO
  };
};
if (typeof define === 'function' && define.amd) {
  define([], PO_Module_Factory);
}
else {
  var PO_Module = PO_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.PO = PO_Module.PO;
  }
  else {
    var PO = PO_Module.PO;
  }
}