const burgerBar = document.getElementById("burger-bar");
const navigation = document.getElementById("nav-container");
const scrollButton = document.querySelectorAll(".client-opinion-button");
const clientOpinionContainer = document.querySelector(".client-opinion-container");
const programSkills = document.getElementById("program-skills")

const firstCircle = document.getElementById("first-circle");
const firstContext = firstCircle.getContext("2d");

const secondCircle = document.getElementById("second-circle");
const secondContext = secondCircle.getContext("2d");

const thirdCircle = document.getElementById("third-circle");
const thirdContext = thirdCircle.getContext("2d");

const fourthCircle = document.getElementById("fourth-circle");
const fourthContext = fourthCircle.getContext("2d");

const fifthCircle = document.getElementById("fifth-circle");
const fifthContext = fifthCircle.getContext("2d");



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

console.log(document.body.clientWidth)

scrollButton.forEach((element, index) => {
    element.addEventListener("click", () => {
        
        if(index === 0) {
            clientOpinionContainer.classList.add("left-side")
            clientOpinionContainer.classList.remove("right-side")
            clientOpinionContainer.classList.remove("center")
        } else {
            if(index === 1) {
                clientOpinionContainer.classList.remove("left-side")
                clientOpinionContainer.classList.remove("right-side")
                clientOpinionContainer.classList.add("center")
            } else {
                clientOpinionContainer.classList.remove("left-side")
                clientOpinionContainer.classList.add("right-side")
                clientOpinionContainer.classList.remove("center")
            }
        }
    })
});



// canvas


let x = 85;
    y = 85;
    radius = 75;
    lineWidth = 15;
    maxPoints = 200;
    angle = 0 - Math.PI / 2;
    points = 0;
    colorRatio = 0;
    

function pickHex(color1, color2, weight) {
    let w1 = weight;
    let w2 = 1 - w1;
    let rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
    return rgb;
}



function drawBackgroundCircle(context) {
    context.beginPath();
    context.arc(x, x, radius, 0, 2*Math.PI, false);
    context.lineWidth = 15;
    context.strokeStyle = 'rgba(200,200,200, 0.2)'
    context.stroke();
}

function drawMainCircle(context, percentage, startColor, endColor) {
    
    let maxAngle = percentage * (2 * Math.PI) / 100 - Math.PI / 2;

    if(angle <= maxAngle){
        const color = pickHex(startColor, endColor, colorRatio)
        context.beginPath();
        context.lineWidth = 1;
        context.arc(x + radius * Math.cos(angle), y + radius * Math.sin(angle), lineWidth / 2, 0, 2*Math.PI);
        context.fillStyle = 'rgb('+color.join()+')';
        context.fill();
        context.strokeStyle = 'rgb('+color.join()+')';
        context.stroke();
        
        angle += Math.PI / 360;
        colorRatio += 1 / 360 * (percentage / 100);   
    }
}

drawBackgroundCircle(firstContext)
drawBackgroundCircle(secondContext)
drawBackgroundCircle(thirdContext)
drawBackgroundCircle(fourthContext)
drawBackgroundCircle(fifthContext)




window.addEventListener("scroll", function (){
    if(window.scrollY > 2180){
        setInterval(function (){
            drawMainCircle(firstContext, 75, [255,104,164], [245,49,127], colorRatio)
        }, 30)
        setInterval(function (){
            drawMainCircle(secondContext, 70, [255,181,240], [177,34,229], colorRatio)
        }, 30)
        setInterval(function (){
            drawMainCircle(thirdContext, 95, [87, 193, 255], [18, 112, 226], colorRatio)
        }, 30)
        setInterval(function (){
            drawMainCircle(fourthContext, 60, [109,242,188], [44,191,199], colorRatio)
        }, 30)
        setInterval(function (){
            drawMainCircle(fifthContext, 85, [255,227,91], [255,131,89], colorRatio)
        }, 30)
    }
})



