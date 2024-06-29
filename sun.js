const modal  = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// model open
const openModal = () =>{
    console.log("model is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// model close
const closeModal = () =>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};


var sum = 1;
function f(x){
    sum=sum*x;
    x--;
    while(x>=1){
        f(x);
    }
    return sum;
}
console.log("hii");

