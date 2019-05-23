// hamburger
console.log("test");
var toggle = document.getElementById("toggle");
var links = document.querySelectorAll('.sidebar a');
var test = document.getElementsByClassName('panel');

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');

  for (var i = 0; i < test.length; i++) {
    test[i].classList.toggle('full');
  }
}

toggle.addEventListener("click", function () {
  toggleSidebar();
});

// modale
function closeModal() {
  document.getElementById('overlay').classList.remove('showModal')
};
//closing modal by click on the x or OK button
document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    closeModal()
  })
})
//closing modal by click on overlay
document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal()
  }
})
//closing modal by enter ESC key
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal()
  }
})
//opening the modal
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('showModal')
  })
  document.querySelector('#overlay').classList.add('showModal')
  document.querySelector(modal).classList.add('showModal')
}
var quit = document.getElementById('quit');
quit.addEventListener('click', function (e) {
  e.preventDefault()
  openModal('#modalQuit')
});