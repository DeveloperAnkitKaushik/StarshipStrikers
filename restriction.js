document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'c' || event.keyCode === 67) {
    event.preventDefault();
  }
  if (event.keyCode == 123) {
    return false;
  }

  if (e.ctrlKey && e.shiftkey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftkey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
});

window.onload = function () {
  if (window.innerWidth <= 1100) {
    window.location = "./restrictionPage/index.html";
  }
};