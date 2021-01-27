
function add_user(){
    user_name = document.getElementById("name_input").value;
    if (user_name == "")
    {
        window.alert("Please enter your name");
    }
    else
    {
        console.log("user name is not blank");
        localStorage.setItem("user_name", user_name);
        window.location = "kwitter_room.html";
    }
}