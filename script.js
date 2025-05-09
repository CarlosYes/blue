var i = 0;
var images = [];
var time = 5000;

images[0] = 'https://xatimg.com/image/LW2NXbLlHCBk.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80';
images[1] = 'https://xatimg.com/image/XYHh8E84Re7N.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80';
images[2] = 'https://xatimg.com/image/8mIGtntQsdyj.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80';
images[3] = 'https://xatimg.com/image/QpIVfHvw4IbT.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=623&q=80';
images[4] = 'https://xatimg.com/image/LZQBHUJx7g4i.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=636&q=80';
images[5] = 'https://xatimg.com/image/hAWW6OVAubWv.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80';
images[6] = 'https://xatimg.com/image/UWdJeIcE6G7j.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';
images[7] = 'https://xatimg.com/image/L0KzsAVDFLp6.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80';
images[8] = 'https://xatimg.com/image/ibjkGpWn8sAF.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80';
images[9] = 'https://xatimg.com/image/GtkMVBV9jHgJ.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80';
images[10] = 'https://xatimg.com/image/cdnkKjL6cKfk.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=623&q=80';
images[11] = 'https://xatimg.com/image/BpBxQsZvF3kK.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=636&q=80';
images[12] = 'https://xatimg.com/image/SgfsTmVNO9bP.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80';
images[13] = 'https://xatimg.com/image/n441rrmTVXTa.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';
images[14] = 'https://xatimg.com/image/NMIXIdGd9Rxe.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=636&q=80';
images[15] = 'https://xatimg.com/image/r2xtLvUlFYFu.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80';
images[16] = 'https://xatimg.com/image/ojvMTW6yDi2R.gif?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';
images[17] = 'https://xatimg.com/image/jZfoRUZmk8N2.gif?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80';

function changeSlide() {
  document.slider.src = images[i];
  if (i < images.length - 1){
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeSlide()", time);
}

window.onload = changeSlide;