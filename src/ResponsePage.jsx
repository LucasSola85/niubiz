import { useEffect } from "react"


export const ResponsePage = (props) => {

  useEffect(() => {
    
    const form = document.getElementsByTagName('form');
    const formData = new FormData(form);

    for(const key of formData.keys()) {
      console.log(key);
    }


  }, [])
  
  
 useEffect(() => {

    const { data } = props.location.state;

    console.log('data', data);

    const { sessiontoken, channel, merchantid, purchasenumber, amount, expirationminutes, merchantlogo, formbuttoncolor, formbuttontext, showamount } = data;
   
    const script = document.createElement("script");
    script.src = "https://static-content-qas.vnforapps.com/v2/js/checkout.js?qa=true";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = `
      function checkout() {
        var config = {
          action: 'http://localhost:8080/api/niubiz/wong/send-transaction-token',
          sessiontoken: '${sessiontoken}',
          channel: '${channel}',
          merchantid: '${merchantid}',
          purchasenumber: '${purchasenumber}',
          amount: '${amount}',
          expirationminutes: '${expirationminutes}',
          merchantlogo: '${merchantlogo}',
          formbuttoncolor: '${formbuttoncolor}',
          formbuttontext: '${formbuttontext}',
          showamount: '${showamount}',
          complete: function (params) {
            alert(JSON.stringify(params));
          },
        }
        VisanetCheckout.configure(config);
        VisanetCheckout.open();
      }
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }

  }, [props.location.state]);
  
 


  return (
    
    <>
      <h1>Response Page</h1>
      <hr />

      {
        JSON.stringify(props, null, 3)
      }
      

    </>

  )
}
