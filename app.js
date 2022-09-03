const firstName = document.querySelector("#firstName");
const fName = document.querySelector(".fName");
const lName = document.querySelector(".lName");
const eName = document.querySelector(".eName");
const pName = document.querySelector(".pName");
const lastName = document.querySelector("#lastName");
const emailAddress = document.querySelector("#emailAddress");
const password = document.querySelector("#password");
const form = document.querySelector(".form");
const button = document.querySelector("#button");
const image1 = document.querySelector(".imgs1");
const image2 = document.querySelector(".imgs2");
const image3 = document.querySelector(".imgs3");
const image4 = document.querySelector(".imgs4");
const regEx = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
button.addEventListener('click', function (e) {
    e.preventDefault();
    buttonfunc(); 
},{once:true} );

const buttonfunc = ()=>{
    if (firstName.value === "") {
        let firstNameMsg = document.createElement("p");
        firstNameMsg.style.color = 'hsl(0, 100%, 74%) ';
        firstName.style.borderColor = 'hsl(0, 100%, 74%)';
        firstName.style.borderWidth = '2px';
        firstNameMsg.style.textAlign = "right";
        firstNameMsg.style.margin = "0 2px";
        firstNameMsg.style.padding = "2px";
       firstNameMsg.innerText = "First Name cannot be empty";
       firstNameMsg.style.fontSize = "12px";
       firstNameMsg.style.fontWeight = "400";
       firstNameMsg.style.fontStyle= "italic";
       fName.after(firstNameMsg);
       firstName.placeholder = '';
       image1.style.visibility = 'visible';
    } if (lastName.value ==="") {
        let lastNameMsg = document.createElement("p");
        lastNameMsg.style.color = 'hsl(0, 100%, 74%) ';
        lastName.style.borderColor = 'hsl(0, 100%, 74%)';
        lastName.style.borderWidth = '2px';
        lastNameMsg.style.textAlign = "right";
        lastNameMsg.style.margin = "0 2px";
        lastNameMsg.style.padding = "2px";
        lastNameMsg.innerText = "Last Name cannot be empty";
        lastNameMsg.style.fontSize = "12px";
        lastNameMsg.style.fontWeight = "400";
        lastNameMsg.style.fontStyle= "italic";
        lName.after(lastNameMsg);
        lastName.placeholder = '';
        image2.style.visibility = 'visible';
    } if (emailAddress.value ==="") {
        let emailAddressMsg = document.createElement("p");
        emailAddressMsg.style.color = 'hsl(0, 100%, 74%) ';
        emailAddress.style.borderColor = 'hsl(0, 100%, 74%)';
        emailAddress.style.borderWidth = '2px';
        emailAddressMsg.style.textAlign = "right";
        emailAddressMsg.style.margin = "0 2px";
        emailAddressMsg.style.padding = "2px";
        emailAddressMsg.innerText = "Email Address cannot be empty";
        emailAddressMsg.style.fontSize = "12px";
        emailAddressMsg.style.fontWeight = "400";
        emailAddressMsg.style.fontStyle= "italic";
        eName.after(emailAddressMsg);
        emailAddress.placeholder = 'email@example.com';
        image3.style.visibility = 'visible';
      } 
       if (emailAddress.value !== "") {
            if (regEx.test(emailAddress.value) === false) {
                let emailAddressMsg = document.createElement("p");
        emailAddressMsg.style.color = 'hsl(0, 100%, 74%) ';
        emailAddress.style.borderColor = 'hsl(0, 100%, 74%)';
        emailAddress.style.borderWidth = '2px';
        emailAddressMsg.style.textAlign = "right";
        emailAddressMsg.style.margin = "0 2px";
        emailAddressMsg.style.padding = "2px";
        emailAddressMsg.innerText = "Looks like this is not an email";
        emailAddressMsg.style.fontSize = "12px";
        emailAddressMsg.style.fontWeight = "400";
        emailAddressMsg.style.fontStyle= "italic";
        eName.after(emailAddressMsg);
        emailAddress.placeholder = 'email@example.com';
        image3.style.visibility = 'visible';
            }
      }
    
      if (password.value ==="") {
        let passwordMsg = document.createElement("p");
        passwordMsg.style.color = 'hsl(0, 100%, 74%) ';
        password.style.borderColor = 'hsl(0, 100%, 74%)';
        password.style.borderWidth = '2px';
        passwordMsg.style.textAlign = "right";
        passwordMsg.style.margin = "0 2px";
        passwordMsg.style.padding = "2px";
        passwordMsg.innerText = "Password cannot be empty";
        passwordMsg.style.fontSize = "12px";
        passwordMsg.style.fontWeight = "400";
        passwordMsg.style.fontStyle= "italic";
        pName.after(passwordMsg);
        password.placeholder = '';
        image4.style.visibility = 'visible';
    }
}
