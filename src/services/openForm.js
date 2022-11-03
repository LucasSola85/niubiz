

export const openForm = async() => {

    // Este formulario funciona y levanta correctamente pero redirecciona directamente a lo que esta en el action del form
    // la function complete no recibe el resultado del form. 
  
    VisanetCheckout.configure({
        sessiontoken: 'b5bd42d67abb3da32a89a45e096338c993852c751c0b2868a10e133e6e4b638b', //lo tengo que retornar del back
        channel: 'web',
        merchantid: '341198210', //numero de comercio
        purchasenumber: '1667328361587',//'16673216591', //numero de compra
        amount: '10.5', //monto de la compra
        expirationminutes: '20',
        timeouturl: 'about:blank',
        merchantlogo: 'https://www.masterpak.cl/wp-content/uploads/2016/06/cencosud.png',
        formbuttoncolor: '#000000',
        method: 'post',
        action: 'http://localhost:8080/api/niubiz/wong/send-transaction-token',
        isrecurrence: false,
        complete: function (params) {
            console.log('print key complete: ',params);
            alert(JSON.stringify(params));
        }
    });
    VisanetCheckout.open();

    console.log('print key openForm: ', await openForm());
}

