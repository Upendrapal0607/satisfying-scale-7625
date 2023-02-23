
let user = JSON.parse(localStorage.getItem("user")) || [];
let num = document.getElementById("num");
num.value = user.mobile;

function userInfo(){
    let user = JSON.parse(localStorage.getItem("user")) || [];
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let gender = document.getElementById("gender");
    
            let objuser={
                name : name.value,
                email : email.value,
                mobile : num.value,
                password : password.value,
                gender : gender.value
            };
            // console.log("obj", objuser)
            // user.push(objuser);
            localStorage.setItem("user", JSON.stringify(objuser));
            alert("Login Successfully");
            window.location.href="index.html";
        
}
 
function clearLogin(){
    window.location.href = "index.html"
}