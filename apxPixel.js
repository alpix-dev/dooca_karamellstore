if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    console.log('APX_PIXEL_LOADED');

    window.dooca.trackers.fb.addToCart = function(oObj){
        console.log('[APX-Pixel] Event - addToCart');
        apx.external_api('AddToCart',oObj);
    }

    window.dooca.trackers.fb.viewCollection = function(oObj){
        console.log('[APX-Pixel] Event - viewCollection');
        apx.external_api('ViewContent',oObj);
    }

    window.dooca.trackers.fb.initiateCheckout = function(oObj){
        console.log('[APX-Pixel] Event - initiateCheckout');
        apx.external_api('InitiateCheckout',oObj);
        //console.log(oObj);
    }

    // window.dooca.trackers.fb.checkoutPayment = function(oObj){
    //     console.log('[APX-Pixel] Event - checkoutPayment');
    //     apx.external_api('checkoutPayment',oObj);
    //     //console.log(oObj);
    // }


    window.dooca.trackers.fb.addPaymentInfo = function(oObj){
        console.log('[APX-Pixel] Event - addPaymentInfo');
        apx.external_api('AddPaymentInfo',oObj);
        //console.log(oObj);
    }

    window.dooca.trackers.fb.purchase = function(oObj){
        console.log('[APX-Pixel] Event - purchase');
        apx.external_api('Purchase',oObj);
        //console.log(oObj);
    }

    window.dooca.trackers.fb.viewCart = function(oObj){
        console.log('[APX-Pixel] Event - viewCart');
        apx.external_api('ViewContent',oObj);
        //console.log(oObj);
    }
    window.dooca.trackers.fb.viewProduct = function(oObj){
        console.log('[APX-Pixel] Event - viewProduct');
        apx.external_api('ViewContent',oObj);
        //console.log(oObj);
    }
    
    const apx = [];
    apx.getCookie = function(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    apx.external_api= function(currentAction, info){
            $.ajax({
            type: 'POST',
            url: 'http://localhost:5001/facebookapi-77db9/us-central1/app',
            data: JSON.stringify({dooca:window.dooca, agent : window.navigator.userAgent, fbp: apx.getCookie('_fbp'),fbc:apx.getCookie('_fbc'), event:currentAction, info:info}), 
            success: function(data) { console.log(data); },
            contentType: "application/json",
            dataType: 'json'
            });
    }
}
