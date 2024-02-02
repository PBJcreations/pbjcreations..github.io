// Get the modal
var modal;

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img;
var modalImg;
var modalImgMobile;
var captionText;
var span;

// When the user clicks on <span> (x), close the modal
function clickedClose(clickId) {
  modal = document.getElementById('Modal');
  modal.style.display = "none";
}


function clickedImg(clickId) {
  //Get and set all variables from the clicked image
  modal = document.getElementById('Modal');
  img = document.getElementById('Img' + clickId);
  modalImg = document.getElementById('ModalImg');
  modalImgMobile = document.getElementById('ModalImgMobile');
  captionText = document.getElementById('Caption');

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  modalImgMobile.src = img.src;

  //Set the close button
  span = document.getElementsByClassName("close")[0];
}

