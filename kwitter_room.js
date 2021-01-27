// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBt4YwYvJ8D8oZVjhNnMBMINyvQsmT6K1M",
      authDomain: "kwitter-a2f0c.firebaseapp.com",
      databaseURL: "https://kwitter-a2f0c-default-rtdb.firebaseio.com",
      projectId: "kwitter-a2f0c",
      storageBucket: "kwitter-a2f0c.appspot.com",
      messagingSenderId: "909952093394",
      appId: "1:909952093394:web:b20bb68321c675ce7eb10b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS

var user_name = localStorage.getItem("user_name");
document.getElementById("user_header").innerHTML ="Welcome! " + user_name;

function add_room(){
      room_name = document.getElementById("room_name").value;
      if (room_name == "")
      {
            window.alert("Please enter a room name.")
      }
      else 
      {
            firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
            localStorage.setItem("room_name", room_name);
            document.getElementById("room_name").value = "";
            window.location = "kwitter_page.html";
      }
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);

      row = "<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      console.log("Log Out");
}