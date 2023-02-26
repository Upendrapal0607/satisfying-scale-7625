let user = [];
if (localStorage.getItem("user") == null) {
    localStorage.setItem("user", JSON.stringify({
        data : [],
        mobile : ''
    }));
}

function fetchNumber() {
    // console.log("fun run ...");
    let inputmob = document.getElementById("number").value;
    if (inputmob.length == 0 || inputmob.length < 10 || inputmob.length > 10) {
        alert("Please enter vailid Number")
        return ;
    }
    
    
        let user = JSON.parse(localStorage.getItem("user")) || [];
        // console.log("user",user);
        // console.log("inputmon",inputmob);
    
        user.mobile = inputmob ;
        localStorage.setItem("user", JSON.stringify(user));
        mobNumCheck();
}

    function mobNumCheck() {
        let inputmob = document.getElementById("number").value;
        if(inputmob.length === 10){ 
        alert("Account Created Successfully! Please use your credentials to login");
        window.location.href="login.html";
        }
    } 

    function clearLogin(){
        window.location.href = "index.html"
    }


    function renderToAdmin(){
        window.location.href="admin-login.html"
    }