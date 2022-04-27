const billing = new (require('../lib/billing'))( 'bnsILmrfTAu7hR528i54FA', 'e2dUTbYGEbSUX2jH5EaP6KCqwGt4BH5T' );

async function importTest()
{
    try
    {
        await billing.document.import(
        {
            _id: 'MSK21000109',
            sequence: 'MSK{YY}{NNNNNN}',
            billing: '921000234',
            parent: 'MSKZ21000120',
            type: 'invoice',
            seller: {
              email: 'medical@lucullus.sk',
              phone: '+421 948 928 971',
              company: 'LUCULLUS s.r.o.',
              address: 'Pribinova 4',
              zip: '811 09',
              city: 'Bratislava',
              country: 'SK',
              crn: '50169971',
              tax: '2120204361',
              vat: 'SK2120204361'
            },
            buyer: {
              email: 'tvirag1@gmail.com',
              phone: '0903533144',
              company: '',
              name: 'Biofarma Turie',
              address: 'Biofarma Turie 656',
              zip: '01312',
              city: 'Turie',
              country: 'SK',
              crn: '',
              tax: '',
              vat: '',
              shipping: {
                name: 'Biofarma Turie',
                address: 'Biofarma Turie 656',
                zip: '01312',
                city: 'Turie',
                country: 'SK'
              }
            },
            items: [
              {
                id: 1044,
                name: 'Bezpudrové nitrilové rukavice Mercator L - 100ks',
                url: 'https://sk.medical.lucullus.sk/rukavice/bezpudrove-nitrilove-rukavice-mercator-l-100ks-p9',
                image: 'https://cdn.medical.lucullus.sk/100ks-premiovych-nitrilovych-rukavic-mercator-velkost-xl-p11.jpg',
                quantity: 3,
                price: 9.59,
                discount: 0.6367,
                vat: 0.2,
                physical: true
              },
              {
                id: 1045,
                name: 'Dobierka',
                url: undefined,
                image: '',
                quantity: 1,
                price: 2,
                discount: 0,
                vat: 0.2,
                physical: false
              },
              {
                id: 1046,
                name: 'Kuriér na adresu',
                url: undefined,
                image: '',
                quantity: 1,
                price: 2.9,
                discount: 0,
                vat: 0.2,
                physical: false
              }
            ],
            reference: '921000234',
            currency: 'EUR',
            price: 33.67,
            vat: true,
            issued: new Date('2021-11-22T10:38:22.000Z'),
            delivered: new Date('2021-11-22T10:38:22.000Z'),
            due: new Date('2021-11-22T10:38:22.000Z'),
            data: {}
          })
    }
    catch( e )
    {
        console.log( e );
    }
}

async function renderTest()
{
    try
    {
        const fs = require('fs'), PDF = require('../../../liqd-js/pdf');
        const Invoice = new PDF( require('fs').readFileSync( __dirname + '/pdf.html', 'utf8' ));

        let document = await billing.document.get( 'MSK22000006' );

        Invoice.render( document, { locale: 'sk' }, __dirname + '/invoice.pdf');

        console.log( document );
    }
    catch(e)
    {
        console.log( e );
    }
}

//importTest();

renderTest();