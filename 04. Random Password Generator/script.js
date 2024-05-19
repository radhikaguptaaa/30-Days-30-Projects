const passwordbox = document.getElementById("textbox");
const length = 12 ;

const upperCase = "ABCDEFGHIJKLMNOPQURTSUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_}{[]/-=+~";

const allchars = upperCase +lowerCase + numbers+ symbols;

function createPassword(){
    let password = "";
    password += upperCase[ Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[ Math.floor(Math.random()*lowerCase.length)];
    password += numbers[ Math.floor(Math.random()*numbers.length)];
    password += symbols[ Math.floor(Math.random()*symbols.length)];


    while(length > password.length){
        password += allchars[ Math.floor(Math.random()*allchars.length)];

    }

    passwordbox.value = password ;
}


function copyPassword() {
    passwordbox.select();
    document.execCommand("copy");
}