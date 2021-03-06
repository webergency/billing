'use strict';

module.exports = class WebergencyBillingAPI extends require('@webergency/api')
{
    constructor( clientID, clientSecret )
    {
        super( 'https://api.billing.webergency.com', clientID, clientSecret,
        //super( 'http://localhost:8091', clientID, clientSecret,
        {
            'billing.create'            : ( $, billing )                  => $.client.request( 'PUT',   'billing', { body: billing }),
            'billing.get'               : ( $, id )                       => $.client.request( 'GET',   'billing/' + id ),
            'billing.list'              : ( $, query )                    => $.client.request( 'GET',   'billings', { query: { ...query }}),
            'billing.update'            : ( $, id, update )               => $.client.request( 'PATCH', 'billing/' + id, { body: update }),
            'billing.cancel'            : ( $, id )                       => $.client.request( 'DELETE','billing/' + id ),
            'billing.import'            : ( $, billing )                  => $.client.request( 'POST',  'billing/import', { body: billing }),
            'billing.documents'         : ( $, id, projection = [])       => $.client.request( 'GET',   `billing/${id}/documents`, { query: { projection }}),
            'billing.payments'          : ( $, id )                       => $.client.request( 'GET',   `billing/${id}/payments` ),

            'document.create'           : ( $, document )                 => $.client.request( 'PUT',   'document', { body: document }),
            'document.issue'            : ( $, billingID, type, options ) => $.client.request( 'POST',  'document/issue', { body: { billingID, type, options }}),
            'document.get'              : ( $, id )                       => $.client.request( 'GET',   'document/' + id ),
            'document.list'             : ( $, query, properties )        => $.client.request( 'POST',  'documents', { body: { query, properties }}),
            'document.update'           : ( $, id, update )               => $.client.request( 'PATCH', 'document/' + id, { body: update }),
            'document.import'           : ( $, document )                 => $.client.request( 'POST',  'document/import', { body: document }),
            'document.url'              : ( $, id )                       => `https://api.billing.webergency.com/document/${id}/pdf?token=${clientID}`
    });

        Object.defineProperty( this, 'name', { value: 'WebergencyBillingAPI' });
    }
}