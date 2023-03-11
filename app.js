let formButton = document.querySelector(".form-btn");
const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

formButton.addEventListener("click", function(e){
    e.preventDefault();
    let firstName = document.querySelector(".first-name").value;
    let lastName = document.querySelector(".last-name").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;

    if(firstName === null || lastName === null || email === null || password === null || !email.toLowerCase().match(re)){
        if(!firstName){
            document.querySelector("#first-name-error").style.display = "block";
        }
    
        if(!lastName){
            document.querySelector("#last-name-error").style.display = "block";
        }
    
        if(!email){
            document.querySelector("#email-error").style.display = "block";
        }else if(!email.toLowerCase().match(re)){
            document.querySelector("#email-error").style.display = "none";
            document.querySelector("#email-second-error").style.display = "block";
        }
    
        if(!password){
            document.querySelector("#password-error").style.display = "block";
        }
    }else{
        alert("Registered Successfully");
        location.reload();
        document.querySelector("#first-name-error").style.display = "none";
        document.querySelector("#last-name-error").style.display = "none";
        document.querySelector("#email-error").style.display = "none";
        document.querySelector("#password-error").style.display = "none";
    }
});
