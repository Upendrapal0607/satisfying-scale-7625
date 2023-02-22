let user = [];

if (localStorage.getItem("user") == null) {
    localStorage.setItem("user", JSON.stringify([]));
}

let againget = localStorage.getItem("user");
if (againget !== null) {
    user = JSON.parse(againget);
}
function fetchNumber() {
    mobNumCheck();
    let inputmob = document.getElementById("number").value;
    if (inputmob.length == 0 || inputmob.length < 10 || inputmob.length > 10) {
        alert("Please enter vailid Number")
        return ;
    }
   
    let objuser = {
        Mobile: inputmob,
    }
    user.push(objuser);
    let out = objuser.Mobile;
    localStorage.setItem("user", JSON.stringify(user));
    document.getElementById("number").value = "";
}

    function mobNumCheck() {
        let inputmob = document.getElementById("number").value;
        let againget = localStorage.getItem("user");
        if (againget !== null) {
            var use = JSON.parse(againget);
        }

        if(inputmob.length === 10){
        let bt = document.getElementById("arrow"); 
        alert("Account Created Successfully! Please use your credentials to login");
        window.location.href="login.html";
        }
    } 

