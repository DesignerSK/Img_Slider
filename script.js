let leftBtn = document.querySelector("#leftBtn");
let rightBtn = document.querySelector("#rightBtn");
let sliderBilder = document.querySelectorAll(".sliderBilder img");

let numBilder = 0;

// desni btn
const rightMove = () => {
            displayNone();
            numBilder ++;

            if(numBilder === sliderBilder.length){
                numBilder = 0;
            }
            sliderBilder[numBilder].style.display = "block";
}
rightBtn.addEventListener("click", rightMove);


// lijevi btn
const leftMove = () => {
            displayNone();
            numBilder--;

            if(numBilder === -1){
                numBilder = sliderBilder.length -1;
            }
            sliderBilder[numBilder].style.display = "block";
}

leftBtn.addEventListener("click", leftMove);


const displayNone = () => {
        sliderBilder.forEach(bild => {
                    bild.style.display = "none";
        });
}