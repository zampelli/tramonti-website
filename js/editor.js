// importing all the elements from the DOM I use the export to keep all the data in another file
import {t1,a1,t2,a2,t3,a3,t4,a4,t5,a5,t6,a6,t7,a7,t8,a8,t9,a9,t10,a10,t11,a11,t12,a12,t13,a13,t14,a14,t15,a15,t16,a16,t17,a17,t18,a18,t19,a19,t20,a20,t21,a21,t22,a22,t23,a23,t24,a24,t25,a25,t26,a26,t27,a27,t28,a28,t29,a29,t30,a30,t31,a31,t32,a32,t33,a33,t34,a34,t35,a35,t36,a36,t37,a37,t38,a38,t39,a39,t40,a40,t41,a41,t42,a42,t43,a43,t44,a44,t45,a45,t46,a46,t47,a47,t48,a48,t49,a49,t50,a50,t51,a51,t52,a52,t53,a53,t54,a54,cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8} from "./data.js";
//Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA6-fEJ468i8D8osZbA-cuh0wp1GxCpB4s",
  authDomain: "tramonti-9a267.firebaseapp.com",
  databaseURL: "https://tramonti-9a267.firebaseio.com",
  projectId: "tramonti-9a267",
  storageBucket: "tramonti-9a267.appspot.com",
  messagingSenderId: "913007124963",
  appId: "1:913007124963:web:55aaa8f0be91325fe300d6",
  measurementId: "G-H1149840L0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const showSubBtn = document.querySelector(".hide-btn");
const loginForm = document.querySelector("#log-in");
const logOut = document.querySelector(".logout");
const modalLogIn = document.querySelector(".modal-log-in");
const logInPop = document.querySelector('.pops-up');
const logOutPop = document.querySelector('.pops-out');
const updatePop = document.querySelector('.update-pop');
const subBtn = document.querySelector(".updt-btn");
const editable = document.querySelector('.editable');
const database = firebase.database();
const ref = database.ref("content");
subBtn.addEventListener("click", function() {
  let data = {
    t1: t1.innerText,
    a1: a1.innerText,
    t2: t2.innerText,
    a2: a2.innerText,
    t3: t3.innerText,
    a3: a3.innerText,
    t4: t4.innerText,
    a4: a4.innerText,
    t5: t5.innerText,
    a5: a5.innerText,
    t6: t6.innerText,
    a6: a6.innerText,
    t7: t7.innerText,
    a7: a7.innerText,
    t8: t8.innerText,
    a8: a8.innerText,
    t9: t9.innerText,
    a9: a9.innerText,
    t10: t10.innerText,
    a10: a10.innerText,
    t11: t11.innerText,
    a11: a11.innerText,
    t12: t12.innerText,
    a12: a12.innerText,
    t13: t13.innerText,
    a13: a13.innerText,
    t14: t14.innerText,
    a14: a14.innerText,
    t15: t15.innerText,
    a15: a15.innerText,
    t16: t16.innerText,
    a16: a16.innerText,
    t17: t17.innerText,
    a17: a17.innerText,
    t18: t18.innerText,
    a18: a18.innerText,
    t19: t19.innerText,
    a19: a19.innerText,
    t20: t20.innerText,
    a20: a20.innerText,
    t21: t21.innerText,
    a21: a21.innerText,
    t22: t22.innerText,
    a22: a22.innerText,
    t23: t23.innerText,
    a23: a23.innerText,
    t24: t24.innerText,
    a24: a24.innerText,
    t25: t25.innerText,
    a25: a25.innerText,
    t26: t26.innerText,
    a26: a26.innerText,
    t27: t27.innerText,
    a27: a27.innerText,
    t28: t28.innerText,
    a28: a28.innerText,
    t29: t29.innerText,
    a29: a29.innerText,
    t30: t30.innerText,
    a30: a30.innerText,
    t31: t31.innerText,
    a31: a31.innerText,
    t32: t32.innerText,
    a32: a32.innerText,
    t33: t33.innerText,
    a33: a33.innerText, 
    t34: t34.innerText, 
    a34: a34.innerText, 
    t35: t35.innerText,
    a35: a36.innerText, 
    t36: t36.innerText, 
    a36: a36.innerText, 
    t37: t37.innerText, 
    a37: a37.innerText, 
    t38: t38.innerText, 
    a38: a38.innerText, 
    t39: t39.innerText, 
    a39: a39.innerText, 
    t40: t40.innerText, 
    a40: a40.innerText, 
    t41: t41.innerText, 
    a41: a41.innerText, 
    t42: t42.innerText, 
    a42: a42.innerText, 
    t43: t43.innerText,
    a43: a43.innerText, 
    t44: t44.innerText,
    a44: a44.innerText,
    t45: t45.innerText,
    a45: a45.innerText,
    t46: t46.innerText,
    a46: a46.innerText,
    t47: t47.innerText,
    a47: a47.innerText,
    t48: t48.innerText,
    a48: a48.innerText,
    t49: t49.innerText,
    a49: a49.innerText,
    t50: t50.innerText,
    a50: a50.innerText,
    t51: t51.innerText,
    a51: a51.innerText,
    t52: t52.innerText,
    a52: a52.innerText,
    t53: t53.innerText,
    a53: a53.innerText,
    t54: t54.innerText,
    a54: a54.innerText,
    cat1: cat1.innerText,
    cat2: cat2.innerText,
    cat3: cat3.innerText,
    cat4: cat4.innerText,
    cat5: cat5.innerText,
    cat6: cat6.innerText,
    cat7: cat7.innerText,
    cat8: cat8.innerText
  };
  ref.child("menu-items").update(data);
  updatePop.style.visibility = 'visible';
  setTimeout(function (){
   updatePop.style.visibility = 'hidden';
 },900);
});

// read data from database
// note make more functions like gotData to retrieve all the data
ref.on("value", getData, errorData);

function getData(data) {
  let items = data.val();
  let keys = Object.keys(items);
  for (let i = 0; i < keys.length; i++) {
    // iterating trough the update items in the database
    let k = keys[i];
    let tit1 = items[k].t1;
    let desc1 = items[k].a1;
    let tit2 = items[k].t2;
    let desc2 = items[k].a2;
    let tit3 = items[k].t3;
    let desc3 = items[k].a3;
    let tit4 = items[k].t4;
    let desc4 = items[k].a4;
    let tit5 = items[k].t5;
    let desc5 = items[k].a5;
    let tit6 = items[k].t6;
    let desc6 = items[k].a6;
    let tit7 = items[k].t7;
    let desc7 = items[k].a7;
    let tit8 = items[k].t8;
    let desc8 = items[k].a8;
    let tit9 = items[k].t9;
    let desc9 = items[k].a9;
    let tit10 = items[k].t10;
    let desc10 = items[k].a10;
    let tit11 = items[k].t11;
    let desc11 = items[k].a11;
    let tit12 = items[k].t12;
    let desc12 = items[k].a12;
    let tit13 = items[k].t13;
    let desc13 = items[k].a13;
    let tit14 = items[k].t14;
    let desc14 = items[k].a14;
    let tit15 = items[k].t15;
    let desc15 = items[k].a15;
    let tit16 = items[k].t16;
    let desc16 = items[k].a16;
    let tit17 = items[k].t17;
    let desc17 = items[k].a17;
    let tit18 = items[k].t18;
    let desc18 = items[k].a18;
    let tit19 = items[k].t19;
    let desc19 = items[k].a19;
    let tit20 = items[k].t20;
    let desc20 = items[k].a20;
    let tit21 = items[k].t21;
    let desc21 = items[k].a21;
    let tit22 = items[k].t22;
    let desc22 = items[k].a22;
    let tit23 = items[k].t23;
    let desc23 = items[k].a23;
    let tit24 = items[k].t24;
    let desc24 = items[k].a24;
    let tit25 = items[k].t25;
    let desc25 = items[k].a25;
    let tit26 = items[k].t26;
    let desc26 = items[k].a26;
    let tit27 = items[k].t27;
    let desc27 = items[k].a27;
    let tit28 = items[k].t28;
    let desc28 = items[k].a28;
    let tit29 = items[k].t29;
    let desc29 = items[k].a29;
    let tit30 = items[k].t30;
    let desc30 = items[k].a30;
    let tit31  = items[k].t31;
    let desc31  = items[k].a31;
    let tit32  = items[k].t32;
    let desc32  = items[k].a32;
    let tit33 = items[k].t33;
    let desc33 = items[k].a33;
    let tit34 = items[k].t34;
    let desc34 = items[k].a34;
    let tit35 = items[k].t35;
    let desc35 = items[k].a35;
    let tit36 = items[k].t36;
    let desc36 = items[k].a36;
    let tit37 = items[k].t37;
    let desc37 = items[k].a37;
    let tit38 = items[k].t38;
    let desc38 = items[k].a38;
    let tit39 = items[k].t39;
    let desc39 = items[k].a39;
    let tit40 = items[k].t40;
    let desc40 = items[k].a40;
    let tit41 = items[k].t41;
    let desc41 = items[k].a41;
    let tit42 = items[k].t42;
    let desc42 = items[k].a42;
    let tit43  = items[k].t43;
    let desc43  = items[k].a43;
    let tit44 = items[k].t44;
    let desc44 = items[k].a44;
    let tit45 = items[k].t45;
    let desc45 = items[k].a45;
    let tit46 = items[k].t46;
    let desc46 = items[k].a46;
    let tit47 = items[k].t47;
    let desc47 = items[k].a47;
    let tit48 = items[k].t48;
    let desc48 = items[k].a48;
    let tit49 = items[k].t49;
    let desc49 = items[k].a49;
    let tit50 = items[k].t50;
    let desc50 = items[k].a50;
    let tit51 = items[k].t51;
    let desc51 = items[k].a51;
    let tit52 = items[k].t52;
    let desc52 = items[k].a52;
    let tit53 = items[k].t53;
    let desc53 = items[k].a53;
    let tit54 = items[k].t54;
    let desc54 = items[k].a54;
    let category1  = items[k].cat1;
    let category2  = items[k].cat2;
    let category3  = items[k].cat3;
    let category4  = items[k].cat4;
    let category5  = items[k].cat5;
    let category6  = items[k].cat6;
    let category7  = items[k].cat7;
    let category8  = items[k].cat8;

    //dinamically changing the content on the page with new content from database
    t1.innerHTML = tit1;
    a1.innerHTML = desc1;
    t2.innerHTML = tit2;
    a2.innerHTML = desc2;
    t3.innerHTML = tit3;
    a3.innerHTML = desc3;
    t4.innerHTML = tit4;
    a4.innerHTML = desc4;
    t5.innerHTML = tit5;
    a5.innerHTML = desc5;
    t6.innerHTML = tit6;
    a6.innerHTML = desc6;
    t7.innerHTML = tit7;
    a7.innerHTML = desc7;
    t8.innerHTML = tit8;
    a8.innerHTML = desc8;
    t9.innerHTML = tit9;
    a9.innerHTML = desc9;
    t10.innerHTML = tit10;
    a10.innerHTML = desc10;
    t11.innerHTML = tit11;
    a11.innerHTML = desc11;
    t12.innerHTML = tit12;
    a12.innerHTML = desc12;
    t13.innerHTML = tit13;
    a13.innerHTML = desc13;
    t14.innerHTML = tit14;
    a14.innerHTML = desc14;
    t15.innerHTML = tit15;
    a15.innerHTML = desc15;
    t16.innerHTML = tit16;
    a16.innerHTML = desc16;
    t17.innerHTML = tit17;
    a17.innerHTML = desc17;
    t18.innerHTML = tit18;
    a18.innerHTML = desc18;
    t19.innerHTML = tit19;
    a19.innerHTML = desc19;
    t20.innerHTML = tit20;
    a20.innerHTML = desc20; 
    t21.innerHTML = tit21;
    a21.innerHTML = desc21;
    t22.innerHTML = tit22;
    a22.innerHTML = desc22;
    t23.innerHTML = tit23;
    a23.innerHTML = desc23;
    t24.innerHTML = tit24;
    a24.innerHTML = desc24;
    t25.innerHTML = tit25;
    a25.innerHTML = desc25;
    t26.innerHTML = tit26;
    a26.innerHTML = desc26;
    t27.innerHTML = tit27;
    a27.innerHTML = desc27;
    t28.innerHTML = tit28;
    a28.innerHTML = desc28;
    t29.innerHTML = tit29; 
    a29.innerHTML = desc29;
    t30.innerHTML = tit30;
    a30.innerHTML = desc30;
    t31.innerHTML = tit31;
    a31.innerHTML = desc31;
    t32.innerHTML = tit32;
    a32.innerHTML = desc32;
    t33.innerHTML = tit33;
    a33.innerHTML = desc33;
    t34.innerHTML = tit34;
    a34.innerHTML = desc34
    t35.innerHTML = tit35;
    a35.innerHTML = desc35;
    t36.innerHTML = tit36;
    a36.innerHTML = desc36;
    t37.innerHTML = tit37;
    a37.innerHTML = desc37;
    t38.innerHTML = tit38;
    a38.innerHTML = desc38;
    t39.innerHTML = tit39; 
    a39.innerHTML = desc39;
    t40.innerHTML = tit40;
    a40.innerHTML = desc40;
    t41.innerHTML = tit41;
    a41.innerHTML = desc41;
    t42.innerHTML = tit42;
    a42.innerHTML = desc42;
    t43.innerHTML = tit43;
    a43.innerHTML = desc43;
    t44.innerHTML = tit44;
    a44.innerHTML = desc44;
    t45.innerHTML = tit45;
    a45.innerHTML = desc45;
    t46.innerHTML = tit46;
    a46.innerHTML = desc46;
    t47.innerHTML = tit47;
    a47.innerHTML = desc47;
    t48.innerHTML = tit48;
    a48.innerHTML = desc48;
    t49.innerHTML = tit49;
    a49.innerHTML = desc49;
    t50.innerHTML = tit50;
    a50.innerHTML = desc50;
    t51.innerHTML = tit51;
    a51.innerHTML = desc51;
    t52.innerHTML = tit52;
    a52.innerHTML = desc52;
    t53.innerHTML = tit53;
    a53.innerHTML = desc53;
    t54.innerHTML = tit54;
    a54.innerHTML = desc54;
    cat1.innerHTML = category1;
    cat2.innerHTML = category2;
    cat3.innerHTML = category3;
    cat4.innerHTML = category4;
    cat5.innerHTML = category5;
    cat6.innerHTML = category6;
    cat7.innerHTML = category7;
    cat8.innerHTML = category8;
  
  }
}

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


// in case there is an error... I hope not tho
function errorData(err) {
  console.log("Error");
  console.log(err);
}
