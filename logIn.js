document.getElementById("bttn").addEventListener('click', () => {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    //console.log("your username is " + username + " and ur password is " + password);
    if (username !== "saurab") {
        // alert("WRONG USERNAME");
    } if (password !== "12345") {
        alert("wrong username or password");
    } else {
        alert("login Successfull");
        window.location = "miniState.html";
    }

})