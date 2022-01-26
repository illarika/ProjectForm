var email = document.querySelector("#email");
let password = document.querySelector("#password");
let passRepeat = document.querySelector("#passRepeat");
let textRed = document.querySelector(".textRed");
let textRedPass = document.querySelector(".textRedPass");
let regExpr = new RegExp(/([a-zA-Z_\.-]{3,})@([a-z_\.-]+)\.([a-z\.]{2,6})/g)
//"^([a-zA-Z_\.-]{3})@([a-z_\.-]+)\.([a-z\.]{2,6})$";
let passReg = new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g)



let btnSign = document.querySelector("#btnSign");
        // если форма валидна:
        // 1.записать в localStorage email
        // 2.перейти на стр.user.html
function isValidEmail(){
    if(regExpr.test(email.value)){ 
       return true
        }else{
          return  textRed.style.display = "block"
        }
}
function isValidPass(){
    if(passReg.test(password.value)){
            return true;
        }else{
            textRedPass.style.display = "block";

            return false
        }
}
function coincidencePass(){
    if (password.value === passRepeat.value){
          return true;
    }else{
           textRedPass.style.display = "block";
           return false;
    }
}
// function isValidForm(){
//     if(isValidEmail() && isValidPass() && coincidencePass()){
//         console.log(true)
//         // localStorage.setItem("key", email.value);
//         // window.location.href ="user.html"
//     }else{
//         alert("не верно")
//     }
// }



        btnSign.addEventListener("click", function(){
            if(isValidEmail() && isValidPass() && coincidencePass()){
                localStorage.setItem("key", email.value);
                window.location.href ="user.html"
            }
        // if(password.value === strPass){
        //     console.log(true);
        // }else{
        //     console.log(false)
        // }
        email.value = ""
        password.value = ""
        passRepeat.value = ""
     })