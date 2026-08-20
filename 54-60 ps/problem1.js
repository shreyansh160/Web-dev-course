function checkpassword(password){
    if(password.length<8){
        console.log("Weak Password")
    }else if(password.length>=8 && password.includes("code")){
        console.log("Strong password");
    }else{
        console.log("Moderate password")
    }
}

checkpassword("pass");
checkpassword("secretcode");