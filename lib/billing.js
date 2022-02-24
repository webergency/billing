'use strict';

module.exports = class WebergencyBillingAPI extends require('@webergency/api')
{
    constructor( clientID, clientSecret )
    {
        super( 'https://api.billing.webergency.com', clientID, clientSecret,
        {
            'billing.create'   : ( $, shipment )     => $.client.request( 'PUT',      'shipment', { body: shipment }),
            'billing.get'      : ( $, id )           => $.client.request( 'GET',      'shipment/' + id ),
            'billing.list'     : ( $, query )        => $.client.request( 'GET',      'shipments', { query: { ...query }}),
            'billing.delete'   : ( $, id )           => $.client.request( 'DELETE',   'shipment/' + id )
        });

        Object.defineProperty( this, 'name', { value: 'WebergencyBillingAPI' });
    }
}