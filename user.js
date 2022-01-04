// const USER_EMAIL_KEY = "userEmail";
const USER_EMAIL_KEY = "email"
/** 
 * Если пользователь залогинен(усть в localStorage email):
 * пройти дальнейшую регистрацию
 * иначе перейти на страницу логина
 * При нажатии на log out:
 * удалить из localStorage email пользователя(removeItem(key))
 * перейти на страницу пользователя**/
// window.onload = ()=>{
//    isUserLoggined();
// }
// function isUserLoggined(){
//     if(localStorage.getItem(USER_EMAIL_KEY)){
//         alert("Добро пожаловать");
//     }else{
//         window.location.href = "login.html"
//         alert("login plz")
//     }
// }
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let exit = document.querySelector("#exit");
let phone = document.querySelector("#phone");
let head = document.querySelector(".head");
let textErrorName = document.querySelector(".textErrorName");
let textErrorBirt = document.querySelector(".textErrorBirt");
let textErrorLastName = document.querySelector(".textErrorLastName");
let textErrorGender = document.querySelector(".textErrorGender");
let textErrorPhone = document.querySelector(".textErrorPhone");
let gender = document.querySelector("#gender");
let skype = document.querySelector("#skype");
let dateBrith = document.querySelector("#dateBrith");



let reName = new RegExp(/^[a-zA-Z]{3,20}$/);
let rePhone = new RegExp(/^(\+375|80)(17|29|33|44)[0-9]{7}$/); 
let btnSave = document.querySelector(".btnSave");
let result = document.getElementById("email")
let nameUser = document.createElement("h3");
let a = document.createElement("a");
nameUser.className = "user";
let keyEmail = localStorage.getItem("key", USER_EMAIL_KEY);
nameUser.innerHTML = (`Hello, mr. ${keyEmail}!`);
a.innerHTML = "exit"
//a.href = "login.html"
head.appendChild(a);
head.append(nameUser);

a.addEventListener("click", function(){
    localStorage.clear("key", USER_EMAIL_KEY);
    window.location.href ="login.html"
})

function isValidPhone(){
    if(rePhone.test(phone.value)){
        return true;
    }else{
        phone.focus();
       return textErrorPhone.style.display = "block"
}
}
function isValidFirstName(){
    if(reName.test(firstName.value)){
        return true;
    }else{
        firstName.focus();
       return textErrorName.style.display = "block"
     
    }
}
function isValidLastName(){
    if(reName.test(lastName.value)){
        return true;
    }else{
        lastName.focus();
         return textErrorLastName.style.display = "block"
    }
}
function isValidGender(){
    if(gender.value === "0"){
        gender.focus();
        console.log("ошибка")
        return textErrorGender.style.display = "block"
    }else{
        return true;
    }
}
function isValidData(){
    if(dateBrith.value === ""){
        dateBrith.focus();
        return textErrorBirt.style.display = "block"
    }else{
        return true;
    }
}
function isValidSkype(){
    if(skype.value === ""){
        skype.focus();
    }

}

// function setCookie(firstName, lastName){
//     users = {
//         firstName: firstName.value,
//         lastName: lastName.value,
//     }
//     let updatedCookie = encodeURIComponent(lastName) + "=" + encodeURIComponent(value);
//     for (let userKey in users){
//         updatedCookie += ";" + userKey;
//         let userValue = users[userKey];
//         if(userValue !== true){
//             updatedCookie += "=" + userValue; 
//         }
//     }
//     document.cookie = updatedCookie;
// }
// setCookie(firstName.value, lastName.value);
// function setCookie(firstName){
//     let cookie_string = firstName + "=" + firstName.value;
//     document.cookie = cookie_string;
// }
btnSave.addEventListener("click", function(){
    if(isValidFirstName() && isValidLastName() && isValidPhone()){
        console.log ("все верно");
        localStorage.setItem("firstName", firstName.value);
        localStorage.setItem("lastName", lastName.value);
        localStorage.setItem("dateBrith", dateBrith.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("gender", gender.value);
        localStorage.setItem("skype", skype.value);
    }
   
    
    firstName.value = "";
    lastName.value = "";
    phone.value = "";
    gender.value = "";
    dateBrith.value = "";
    skype.value = "";
})
