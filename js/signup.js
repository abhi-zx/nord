
var lbtn2 = document.getElementById("lbtn2");
lbtn2.addEventListener("click", login)
function login() {
    window.location.href = "../html/signup1.html";
}
var lbtn1= document.getElementById("lbtn1");
lbtn1.addEventListener("click", create)
function create() {
    signup();
}
    async function signup() {
        let userId = Math.floor( Math.random()*999 ) + 100;
    
var email1 =document.getElementById('em1').value;
var password1 =document.getElementById('pass1').value
var uname1 = document.getElementById('uname1').value;
       

        let form = document.getElementById("myForm");

        let user_data = {
            name: `user${userId}`,
            email: email1,
            password: password1,
            username: uname1,
            mobile: `99${userId}8389`,
            description: `filler`
        }

        user_data = JSON.stringify(user_data);
        console.log(user_data);

        let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
            method: "POST",
            body: user_data,
            headers: {
                "Content-Type": "application/json",
            },
        })

        res = await res.json();
        var str =res.message;
        alert(str)
        if(str=="Registration Success")
        window.location.href = '../html/signin.html';
        else
        window.location.href = '../html/signup1.html';
    }