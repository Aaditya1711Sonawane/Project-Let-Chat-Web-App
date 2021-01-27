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
//YOUR FIREBASE LINKS

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send(){
      msg = document.getElementById("message_input").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message_input").value = "";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
console.log(firebase_message_id, message_data);
 var name = message_data["name"];
 var message = message_data["message"];
 var like = message_data["like"];
 name_code = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
 message_code = "<h3 class='message_h4'>" + message + "</h3>";
 like_code = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='update_like(this.id)'><span class='glyphicon glyphicon-thumbs-up'>like:" + like + "</span></button><hr>";
 message_HTMLcode = name_code+message_code+like_code;
 document.getElementById("output").innerHTML += message_HTMLcode;
 console.log("message sent");
//End code
   } });  }); }
getData();



function update_like(like_id){
     likes = document.getElementById(like_id).value;
     updated_likes = Number(likes)+ 1;
     firebase.database().ref(room_name).child(like_id).update({
      like:updated_likes
});
}