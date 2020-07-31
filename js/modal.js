
// Get modal elements
const modal = document.getElementById('modalSpecial');
const modalBtn = document.querySelector('.modalBtn');
const specialLink = document.querySelector('.specialLink');
const modalLog = document.querySelector('.modal-log');
const closeBtn = document.querySelector('.close-btn');
const closeBtnLogIn = document.querySelector('.close-log-in');
const editBtn = document.querySelector('.edit');
const hide = document.querySelector('.hide');
const show = document.querySelector('.show');

function openModal() {
  modal.style.display = 'block';
};

function closeModal() {
  // modalLog.style.display = 'none';
  hide.classList.toggle('close');
  // modal.style.display = 'none';
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
editBtn.addEventListener('click', editContent);
closeBtnLogIn.addEventListener('click', closeModal);
// modalBtn.addEventListener('click', openModal);
// specialLink.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

