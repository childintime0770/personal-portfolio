const burgerBar = document.getElementById("burger-bar");
const navigation = document.getElementById("nav-container");
const scrollButton = document.querySelectorAll(".client-opinion-button");
const clientOpinionContainer = document.querySelector(".client-opinion-container")

console.log(scrollButton)


let count = 0;

burgerBar.addEventListener("click", (event) => {
    count +=1

    if(count % 2 === 0) {
        burgerBar.classList.add("return");
        burgerBar.classList.remove("change");
        navigation.classList.add("hide");
        navigation.classList.remove("show");
    } else {
        burgerBar.classList.add("change");
        burgerBar.classList.remove("return");
        navigation.classList.add("show");
        navigation.classList.remove("hide");
    }
});

scrollButton.forEach((element, index) => {
    element.addEventListener("click", () => {
        if(index === 0) {
        }
    })
});