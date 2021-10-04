

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("img2");
const modalImg = document.getElementById("modalContent");


// On click, open modal and display image
img.addEventListener('click' , () =>  {

  
  modal.style.display = "block";
  modalImg.src = img.src;

});
  
  
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


