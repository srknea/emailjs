function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params).then(function (res) {
        alert("Success! " + res.status);
    })
}
