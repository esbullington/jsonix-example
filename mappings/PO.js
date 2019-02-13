var PO_Module_Factory = function () {
  var PO = {
    name: 'PO',
    defaultElementNamespaceURI: 'urn:ietf:params:xml:ns:xmpp-stanzas',
    typeInfos: [{
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
                  localPart: 'priority',
                  namespaceURI: 'jabber:client'
                },
                typeInfo: 'Byte'
              }, {
                elementName: {
                  localPart: 'status',
                  namespaceURI: 'jabber:client'
                },
                typeInfo: '.Status'
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
        localName: 'Body',
        typeName: null,
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'uri',
            elementName: {
              localPart: 'uri',
              namespaceURI: 'http:\/\/jabber.org\/protocol\/httpbind'
            }
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }, {
            name: 'accept',
            attributeName: {
              localPart: 'accept'
            },
            type: 'attribute'
          }, {
            name: 'ack',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'ack'
            },
            type: 'attribute'
          }, {
            name: 'authid',
            attributeName: {
              localPart: 'authid'
            },
            type: 'attribute'
          }, {
            name: 'charsets',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'NMTokens'
            },
            attributeName: {
              localPart: 'charsets'
            },
            type: 'attribute'
          }, {
            name: 'condition',
            values: ['bad-request', 'host-gone', 'host-unknown', 'improper-addressing', 'internal-server-error', 'item-not-found', 'other-request', 'policy-violation', 'remote-connection-failed', 'remote-stream-error', 'see-other-uri', 'system-shutdown', 'undefined-condition'],
            attributeName: {
              localPart: 'condition'
            },
            type: 'attribute'
          }, {
            name: 'content',
            attributeName: {
              localPart: 'content'
            },
            type: 'attribute'
          }, {
            name: 'from',
            attributeName: {
              localPart: 'from'
            },
            type: 'attribute'
          }, {
            name: 'hold',
            typeInfo: 'UnsignedByte',
            attributeName: {
              localPart: 'hold'
            },
            type: 'attribute'
          }, {
            name: 'inactivity',
            typeInfo: 'UnsignedShort',
            attributeName: {
              localPart: 'inactivity'
            },
            type: 'attribute'
          }, {
            name: 'key',
            attributeName: {
              localPart: 'key'
            },
            type: 'attribute'
          }, {
            name: 'maxpause',
            typeInfo: 'UnsignedShort',
            attributeName: {
              localPart: 'maxpause'
            },
            type: 'attribute'
          }, {
            name: 'newkey',
            attributeName: {
              localPart: 'newkey'
            },
            type: 'attribute'
          }, {
            name: 'pause',
            typeInfo: 'UnsignedShort',
            attributeName: {
              localPart: 'pause'
            },
            type: 'attribute'
          }, {
            name: 'polling',
            typeInfo: 'UnsignedShort',
            attributeName: {
              localPart: 'polling'
            },
            type: 'attribute'
          }, {
            name: 'report',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'report'
            },
            type: 'attribute'
          }, {
            name: 'requests',
            typeInfo: 'UnsignedByte',
            attributeName: {
              localPart: 'requests'
            },
            type: 'attribute'
          }, {
            name: 'rid',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'rid'
            },
            type: 'attribute'
          }, {
            name: 'route',
            attributeName: {
              localPart: 'route'
            },
            type: 'attribute'
          }, {
            name: 'sid',
            attributeName: {
              localPart: 'sid'
            },
            type: 'attribute'
          }, {
            name: 'stream',
            attributeName: {
              localPart: 'stream'
            },
            type: 'attribute'
          }, {
            name: 'time',
            typeInfo: 'UnsignedShort',
            attributeName: {
              localPart: 'time'
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
            values: ['error', 'terminate'],
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'ver',
            attributeName: {
              localPart: 'ver'
            },
            type: 'attribute'
          }, {
            name: 'wait',
            typeInfo: 'UnsignedShort',
            attributeName: {
              localPart: 'wait'
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
      }],
    elementInfos: [{
        typeInfo: '.Message',
        elementName: {
          localPart: 'message',
          namespaceURI: 'jabber:client'
        }
      }, {
        typeInfo: '.Body',
        elementName: {
          localPart: 'body',
          namespaceURI: 'http:\/\/jabber.org\/protocol\/httpbind'
        }
      }, {
        values: [''],
        elementName: 'not-authorized'
      }, {
        typeInfo: '.Error',
        elementName: {
          localPart: 'error',
          namespaceURI: 'jabber:client'
        }
      }, {
        typeInfo: '.Thread',
        elementName: {
          localPart: 'thread',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'payment-required'
      }, {
        values: [''],
        elementName: 'not-allowed'
      }, {
        typeInfo: '.Iq',
        elementName: {
          localPart: 'iq',
          namespaceURI: 'jabber:client'
        }
      }, {
        elementName: 'redirect'
      }, {
        values: [''],
        elementName: 'resource-constraint'
      }, {
        values: [''],
        elementName: 'internal-server-error'
      }, {
        values: [''],
        elementName: 'subscription-required'
      }, {
        typeInfo: '.Presence',
        elementName: {
          localPart: 'presence',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'bad-request'
      }, {
        values: [''],
        elementName: 'unexpected-request'
      }, {
        elementName: 'gone'
      }, {
        values: [''],
        elementName: 'recipient-unavailable'
      }, {
        values: [''],
        elementName: 'registration-required'
      }, {
        values: [''],
        elementName: 'undefined-condition'
      }, {
        values: [''],
        elementName: 'remote-server-not-found'
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
        elementName: 'forbidden'
      }, {
        values: [''],
        elementName: 'feature-not-implemented'
      }, {
        typeInfo: '.Text',
        elementName: 'text'
      }, {
        values: [''],
        elementName: 'service-unavailable'
      }, {
        typeInfo: 'Byte',
        elementName: {
          localPart: 'priority',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'policy-violation'
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
        typeInfo: '.Body',
        elementName: {
          localPart: 'body',
          namespaceURI: 'jabber:client'
        }
      }, {
        values: [''],
        elementName: 'item-not-found'
      }, {
        values: [''],
        elementName: 'conflict'
      }, {
        values: [''],
        elementName: 'jid-malformed'
      }, {
        values: ['away', 'chat', 'dnd', 'xa'],
        elementName: {
          localPart: 'show',
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