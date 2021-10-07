

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal 
const img = document.getElementsByClassName("imagegallery");
const modalImg = document.getElementById("myModal");
const modalContent = document.getElementById("modalContent");
const modalCaption = document.getElementById("caption")

// On click, open modal and display image
// Run classe img with for loop
// Use its "alt" text as a caption
for (let i = 0; i < img.length; i++ ) {
  img[i].addEventListener('click',() => {
  
  modalImg.style.display = "block";
  modalContent.src = img[i].src;
  console.log (img[i].src);
  modalCaption.innerHTML = img[i].alt;
  });
}



// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

