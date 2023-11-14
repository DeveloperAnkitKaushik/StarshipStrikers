document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (event) { 
  if (event.key === 'F12' || event.keyCode === 123) {
    event.preventDefault();
}
  if (event.keyCode == 123) {
    return false; 
  }

  if (event.key === 'i' || event.keyCode === 73) {
    event.preventDefault();
  }

  if (event.key === 'c' || event.keyCode === 67) {
    event.preventDefault();
  }

  if (event.key === 'j' || event.keyCode === 74) {
    event.preventDefault();
  }
});

window.onload = function () {
  if (window.innerWidth <= 1100) {
    window.location = "./restrictionPage/index.html";
  }
};