//inizialize firabase

const firebaseConfig = {
  apiKey: "AIzaSyDaEE3UvT5wbmBYdbR6eElXll6xFu0bmtI",
  authDomain: "databaseconnection-8533b.firebaseapp.com",
  databaseURL: "https://databaseconnection-8533b.firebaseio.com",
  projectId: "databaseconnection-8533b",
  storageBucket: "databaseconnection-8533b.appspot.com",
  messagingSenderId: "4380561237",
  appId: "1:4380561237:web:eef5e5394f7da513ef69dc",
  measurementId: "G-E9JSD4W2R8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//set up
const appeTitle = document.getElementById("title-appetizer");
const appeDescr = document.getElementById("appet-descr");
const firstTitle = document.getElementById("title-first");
const firstDescr = document.getElementById("first-descr");
const secondTitle = document.getElementById("title-second");
const secondDescr = document.getElementById("second-descr");
const thirdTitle = document.getElementById("title-third");
const thirdDescr = document.getElementById("third-descr");
const subBtn = document.querySelector(".modal-btn");
const showSubBtn = document.querySelector(".hide-btn");
const loginForm = document.querySelector("#log-in");
const logOut = document.querySelector(".log-out");
const modalLogIn = document.querySelector(".modal-log-in");
const logInPop = document.querySelector('.pops-up');
const logOutPop = document.querySelector('.pops-out');
// const content = document.getElementById("modal-content");
const editable = document.querySelector('.text-content');
const anotherHide = document.querySelector('.hide');
const database = firebase.database();
const ref = database.ref("content");

// submit the edited content to database write to database
subBtn.addEventListener("click", function() {
  let data = {
    appetizerName: appeTitle.innerText,
    appetizerParagr: appeDescr.innerText,
    firstItemName: firstTitle.innerText,
    firstItemParagr: firstDescr.innerText,
    secondItemName: secondTitle.innerText,
    secondItemParagr: secondDescr.innerText,
    thirdItemName: thirdTitle.innerText,
    thirdItemParagr: thirdDescr.innerText
  };
   ref.child('new-content').update(data);
});


// read data from database
ref.on("value", gotData, errorData);

function gotData(data) {
  let items = data.val();
  let keys = Object.keys(items);
  for (let i = 0; i < keys.length; i++) {
    // iterating trough the update items in the database
    let k = keys[i];
    let firstItem = items[k].appetizerName;
    let firstItem0 = items[k].appetizerParagr;
    let secondItem = items[k].firstItemName;
    let secondItem0 = items[k].firstItemParagr;
    let thirdItem = items[k].secondItemName;
    let thirdItem0 = items[k].secondItemParagr;
    let fourthItem = items[k].thirdItemName;
    let fourthItem0 = items[k].thirdItemParagr;

    //dinamically changing the content on the page with new content from database
    appeTitle.innerHTML = firstItem;
    appeDescr.innerHTML = firstItem0;
    firstTitle.innerHTML = secondItem;
    firstDescr.innerHTML = secondItem0;
    secondTitle.innerHTML = thirdItem;
    secondDescr.innerHTML = thirdItem0;
    thirdTitle.innerHTML = fourthItem;
    thirdDescr.innerHTML = fourthItem0;
  };
};

//Authentication and listen for auth status changes
firebase.auth().onAuthStateChanged(function(user){
  if (user) {
  // if logged in you can edite the contents that it' inside the content div. 
  // also there is a sequenze of toggling and changing style of elements
   editable.setAttribute('contenteditable', true);
   modalLogIn.classList.add('hide');
   logOut.style.display = 'block';
   showSubBtn.style.display = 'block';
   logInPop.style.display = 'block';
   setTimeout(function (){
    logInPop.style.display = 'none';
  },900);
  setTimeout(function (){
    modalLogIn.classList.remove('show');
  },1000);
  } else {
    // if you did logged out you can't edit the content
    editable.setAttribute('contenteditable', false);
  }
})

//log in
loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(cred){
    //close modal, show logout icon and reset input
    if(e.target === modalLogIn){
      modalLogIn.classList.remove('show');
      modalLogIn.classList.add('hide');
  }
    modalLogIn.classList.toggle('hide');
    loginForm.reset();
  })

})

//log out
logOut.addEventListener('click', function(e){
  e.preventDefault();
  firebase.auth().signOut();
  logOut.style.display = 'none';
  showSubBtn.style.display= 'none';
  logOutPop.style.display = 'block';
  setTimeout(function (){
    logOutPop.style.display = 'none';
  },1000);
})


// in case there is an error... I hope not tho
function errorData(err) {
  console.log("Error");
  console.log(err);
}


