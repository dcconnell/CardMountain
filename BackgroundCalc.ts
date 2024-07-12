const parallaxElements: NodeListOf<HTMLElement> = document.querySelectorAll('.background')

let xValue: number, yValue: number, rotateDegree:number

window.addEventListener('mousemove', (e) => {
    xValue = e.clientX - window.innerWidth / 2
    yValue = e.clientY - window.innerHeight / 2

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20

    parallaxElements.forEach( (ele: HTMLElement) => {
        let leftValue: number = parseFloat(getComputedStyle(ele).left), isInLeft: number
        if (leftValue < (window.innerWidth / 2)) {
            isInLeft = 1;
        }
        else {
            isInLeft = -1
        }
        let zValue: number = ((e.clientX - leftValue) * isInLeft) * 0.1
        let speedx: number = parseFloat(ele.dataset.speedx!)
        let speedy: number = parseFloat(ele.dataset.speedy!)
        let speedz: number = parseFloat(ele.dataset.speedz!)
        let rotation: number = parseFloat(ele.dataset.rotation!)
        if(ele.id != "center-mountain"){
            ele.style.transform = `rotateY(${rotateDegree * rotation}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px)`
        }
        else {
            ele.style.transform = `rotateY(${rotateDegree * rotation}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) )`
        }
    })
})