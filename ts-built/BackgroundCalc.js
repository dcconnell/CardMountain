"use strict";
const parallaxElements = document.querySelectorAll('.background');
let xValue, yValue, rotateDegree;
window.addEventListener('mousemove', (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    parallaxElements.forEach((ele) => {
        let leftValue = parseFloat(getComputedStyle(ele).left), isInLeft;
        if (leftValue < (window.innerWidth / 2)) {
            isInLeft = 1;
        }
        else {
            isInLeft = -1;
        }
        let zValue = ((e.clientX - leftValue) * isInLeft) * 0.1;
        let speedx = parseFloat(ele.dataset.speedx);
        let speedy = parseFloat(ele.dataset.speedy);
        let speedz = parseFloat(ele.dataset.speedz);
        let rotation = parseFloat(ele.dataset.rotation);
        if (ele.id != "center-mountain") {
            ele.style.transform = `rotateY(${rotateDegree * rotation}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
        }
        else {
            ele.style.transform = `rotateY(${rotateDegree * rotation}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) )`;
        }
    });
});
