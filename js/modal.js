
// Get modal elements
const modal = document.getElementById('modalSpecial');
const modalBtn = document.querySelector('.modalBtn');
const specialLink = document.querySelector('.specialLink');
const closeBtn = document.querySelector('.close-btn');
const closeBtnLogIn = document.querySelector('.close-log-in');
const modalLog = document.querySelector('.modal-log');
const editBtn = document.querySelector('.edit');
const hide = document.querySelector('.hide');
const show = document.querySelector('.show');

function openModal() {
  modal.style.display = 'block';
};

function closeModal() {
  modal.style.display = 'none';
  hide.classList.toggle('close');
  setTimeout(function (){
    hide.classList.remove('close');
    hide.classList.remove('show');
  },1000);
  
  // hideSubmit.style.display = 'none';
  // edit.setAttribute("contenteditable", false);
};

function editContent(){
  // hide.classList.toggle('hide');
  hide.classList.toggle('show');
  
};

function clickOutside(e) {
  if(e.target === modal){
    modal.style.display = 'none';
  }
};

//Listen for clicks
modalBtn.addEventListener('click', openModal);
specialLink.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeBtnLogIn.addEventListener('click', closeModal);
editBtn.addEventListener('click', editContent);
window.addEventListener('click', clickOutside);

