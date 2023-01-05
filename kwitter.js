function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.localStorage="kwitter_room.html";
}