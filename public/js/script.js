
const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
 


// Enable light mode
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "assets/moon.png"
    }
    else {
        icon.src = "assets/sun.png"
    }

}

// <!-- Firebase Link -->
const firebaseConfig = {
  apiKey: "AIzaSyCpbCDFW0fjkZk_p_rGCDMRq5EHYx3ggmM",
  authDomain: "portfolio-web-70240.firebaseapp.com",
  databaseURL: "https://portfolio-web-70240-default-rtdb.firebaseio.com",
  projectId: "portfolio-web-70240",
  storageBucket: "portfolio-web-70240.appspot.com",
  messagingSenderId: "768658885878",
  appId: "1:768658885878:web:08baa077e11973b18670d7",
  measurementId: "G-1J9007EZ3R"
};

//   initialize firebase
firebase.initializeApp(firebaseConfig);
var portfolioDB = firebase.database().ref('portfolio-web');
document.getElementById("contact").addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var username = getElementval('name');
    var emailId = getElementval('email');
    var Contactnumber = getElementval('number');
    var textVal = getElementval('text');

    saveMessage(username,emailId,Contactnumber,textVal)
    alert("Form Submitted")

    // Reset form 
    document.getElementById("contact1").reset();
}

const saveMessage = (username, emailId, Contactnumber, textVal) => {
    var newportfolioDB = portfolioDB.push();

    newportfolioDB.set({
        name: username,
        email: emailId,
        contact: Contactnumber,
        text: textVal
    })
}

const getElementval = (id) => {
    return document.getElementById(id).value;
}

// For Modals
// Get all project links
var projectLinks = document.querySelectorAll('.project-link');

// Get all modals
var modals = document.querySelectorAll('.modal');

// Get all close buttons
var closeButtons = document.querySelectorAll('.close');

// When the user clicks a project link, open the corresponding modal
projectLinks.forEach(function(link) {
  link.onclick = function(event) {
    event.preventDefault();
    var modalId = this.getAttribute('data-modal-target');
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
  }
});

// When the user clicks on <span> (x), close the modal
closeButtons.forEach(function(button) {
  button.onclick = function() {
    var modal = this.closest('.modal');
    modal.style.display = 'none';
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
}

// my work button
function toggleBackgroundAndScroll() {
  document.body.classList.toggle('dark');
  scrollToProjects();
}

function scrollToProjects() {
  const projectsSection = document.getElementById('projects');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
}

// hireme
function toggleBackgroundAndScrollHireme() {
  document.body.classList.toggle('dark');
  scrollToProjectsHireme();
}

function scrollToProjectsHireme() {
  const projectsSection = document.getElementById('contact');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
}
