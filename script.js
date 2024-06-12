function sendMail() {
    
    var params = {
        numberSale: document.getElementById('myNumber').value,
        Card : document.getElementById('Card').textContent,
        name: document.getElementById('name').value,
        whats: document.getElementById('Whats').value,
		  numero: document.getElementById('Numero1').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        
    }

    emailjs.send('service_mrv6z8y', 'template_dw979va', params).then((res)=> {
       console.log(res);
       alert('your message send successfully');
    })
    .catch(err => console.log(err))
}