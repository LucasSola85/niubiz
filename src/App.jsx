import { useState } from "react"
import { openForm } from "./services/openForm"


export const App = () => {

  const [form, setForm] = useState(false)

  const handleForm = async () => {
    console.log('hey')
    // setForm(!form);
    openForm();
  }


  return (

    <>
      <h1>Test Api Niubiz</h1>
      <hr />
      <p>AQUI EL FORMULARIO 😋</p>

      {


         


          // form && (
          //   <form action="http://localhost:8080/api/niubiz/wong/send-transaction-token">

          //     {/* scrip sacado del ejemplo que paso niubiz 👇 */}
          //     <script type="text/javascript">
          //       {
          //         function checkout() {
          //           var config = {
          //             action: 'http://localhost:8080/api/niubiz/wong/send-transaction-token', //'/process'
          //             sessiontoken: '15b12d797879f1f40237e811a6ee0a3fbce99bf2997c14bf8bce7dd719cb2f7e',
          //             channel: 'web',//'payment.channel',
          //             merchantid: '341198210',//'payment.merchantId',
          //             purchasenumber: 'payment.purchaseNumber',
          //             amount: '1667328361587',//'payment.amount',
          //             // cardholdername: 'payment.cardholdername',
          //             // cardholderlastname: 'payment.cardholderlastname',
          //             // cardholderemail: 'payment.cardholderemail',
          //             // usertoken: 'payment.cardholderemail',
          //             expirationminutes: '20',
          //             merchantlogo: 'img/niubiz.png',
          //             formbuttoncolor: '#d80000',
          //             formbuttontext: 'Registrar',
          //             showamount: 'FALSE',
          //             complete: function (params) {
          //               alert(JSON.stringify(params));
          //             },
          //           }
          //           VisanetCheckout.configure(config);
          //           VisanetCheckout.open();
          //         }

          //       }

          //     </script>

          //   </form>
          // )

      }




      {/* <form id="frmVisaNet" action="http://localhost:8080/api/niubiz/wong/send-transaction-token">
        <script src="https://static-content-qas.vnforapps.com/v2/js/checkout.js"
          data-sessiontoken="b8de2bc189034f940a8d7c9e5071602951f690d4d499f77ef40c2b9fc415fb49"
          data-channel="web"
          data-merchantid="522591303"
          data-merchantlogo="https://botondepago.evirtuales.shop/assets/img/logo.png"
          data-purchasenumber="3412314183"
          data-amount="10.5" 
          data-expirationminutes="5"
          data-timeouturl="https://botondepago.evirtuales.shop/"
          data-usertoken=""
          data-cardholdername="Integraciones"
          data-cardholderlastname="Necomplus"
          data-cardholderemail="integraciones.niubiz@necomplus.com"
          data-buttonsize="DEFAULT"
          data-buttoncolor="NAVY"
          data-formbuttoncolor="#ff0000"
          data-showamount="TRUE"
          data-hidexbutton="false">
        </script>
        <button type="submit" className="start-js-btn modal-opener default"> apretame </button> */}
      {/* </form> */}





      <div
        className="btn btn-outline-primary"
        onClick={handleForm}
      >
        Quiero Pagar!
      </div>
    </>

  )
}
