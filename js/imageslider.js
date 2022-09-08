const imageList = [
  "images/falooda.jpg",
  "images/GarlicNaan.jpg",
  "images/RandomImage.jpg",
  "images/Sambar.jpg",
];
const previousButton = document.getElementById("previousbutton");
const nextButton = document.getElementById("nextbutton");
const imageElement = document.getElementById("image");

let imageindex = 0;
imageElement.src = imageList[imageindex];

previousButton.addEventListener("click", () => {
  if (imageindex > 0) {
    imageindex--;
  }
  imageElement.src = imageList[imageindex];
});

function changeNextImage() {
    if (imageindex < imageList.length - 1) {
      imageindex++;
    }
    imageElement.src = imageList[imageindex]
    console.log("Hello from Javascript file");;
  }

nextButton.addEventListener("click", changeNextImage);

function zoya(arg1) {
  console.log(arg1 * 5);
}




// 1) Have instance of image element in javascript(document.getelementbyID ro doc.queryselector)

// 2) Inside event listener, change source attribute of image element obtained in step 1

// 3) Can set port to other path and combine previous and next button to go through images continuously
// document.getElementById("myBtn").addEventListener("click", displayDate);

// const textdiv=document.createElement("div");
// document.body.appendChild(textdiv);
// textdiv.innerHTML="dynamicallyaddedtext";
// const imageelement=document.createElement("img");
// imageelement.src="images/falooda.jpg";
// document.body.appendChild(imageelement);

// const imageelement2=document.createElement("img");
// imageelement2.src="images/RandomImage.jpg";
// imageelement2.style.width="500px";
// imageelement2.style.height="500px";
// document.body.appendChild(imageelement2);
