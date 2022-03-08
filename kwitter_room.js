var firebaseConfig = {
  apiKey: "AIzaSyChWI676_469iQF_cmpexmLmqnZgcpv6BQ",
  authDomain: "let-s-chat-web-app-b055e.firebaseapp.com",
  projectId: "let-s-chat-web-app-b055e",
  storageBucket: "let-s-chat-web-app-b055e.appspot.com",
  messagingSenderId: "697238168835",
  appId: "1:697238168835:web:1fa0af283dcfa30e763536"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome  "+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
       purpose :"adding roomname" 
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";

}



function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("Room Name -"+Room_names);
              row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' > #"+Room_names+" </div><hr>";
              document.getElementById("output").innerHTML+=row;
              //End code
        });
  });
}
getData();

function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}