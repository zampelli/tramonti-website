  // nav bar toggle
  const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks =document.querySelectorAll('.nav-links li');

  // toggle nav
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

  // animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
  //burger transformation
      burger.classList.toggle('toggle');
  });

}

navSlide();

// slide images
let i = 0;
let images = [];
let time = 4000;

//image list
images[0] = '/img/img1.jpg';
images[1] = '/img/img2.jpg';
images[2] = '/img/img3.jpg';
images[3] = '/img/img4.jpg';
images[4] = '/img/img5.jpg';
images[5] = '/img/img6.jpg';


//change image
function changeImg () {
  document.slide.src = images[i];

  if(i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

changeImg();

// logo animation
const animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'data.json'
});



