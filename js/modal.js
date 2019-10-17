// Get modal elements
const modal = document.getElementById('modalSpecial');
const modalBtn = document.querySelector('.modalBtn');
const specialLink = document.querySelector('.specialLink');
const closeBtn = document.querySelector('.close-btn');
const editBtn = document.querySelector('.edit-btn');
const hideSubmit = document.querySelector('.hide');
let edit = document.querySelector('.text-content');
let input;

// As default the content cannot be editable
edit.setAttribute('contenteditable', false);
// Submit button it's only visible if the contenteditable is True
hideSubmit.style.display = 'none';

function openModal() {
  modal.style.display = 'block';
};

function closeModal() {
  modal.style.display = 'none';
  hideSubmit.style.display = 'none';
  edit.setAttribute("contenteditable", false);
};

function editContent() {
 input = prompt('Are you the Admin?');
 if(input === '1234') {
  edit.setAttribute("contenteditable", true);
  hideSubmit.style.display = 'block';
 } else {
  edit.setAttribute("contenteditable", false);
 }
};

function clickOutside(e) {
  if(e.target === modal){
    modal.style.display = 'none';
    hideSubmit.style.display = 'none';
    edit.setAttribute("contenteditable", false);
  }
};

//Listen for clicks
modalBtn.addEventListener('click', openModal);
specialLink.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
editBtn.addEventListener('click', editContent);
window.addEventListener('click', clickOutside);

