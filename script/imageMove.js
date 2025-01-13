const exampleImages = document.querySelectorAll('#exampleImage');
const heroSection = document.querySelector('.hero-section');



exampleImages.forEach(example => {
    const elementStyle = window.getComputedStyle(example);
    const xPosition = elementStyle.getPropertyValue("left");
    const yPosition = elementStyle.getPropertyValue("top");     
    heroSection.addEventListener('mousemove', (e) => {
       let mouseX = e.pageX;
        let mouseY = e.pageY;
        let offSetX = example.getBoundingClientRect().width / 2;
        let offSetY = example.getBoundingClientRect().height / 2;
        example.style.left = `calc(${xPosition} - ${mouseX - offSetX}px * 0.03)`;
        example.style.top = `calc(${yPosition} - ${mouseY - offSetY}px * 0.03)`;
        console.log(String(xPosition));
    });
    
})

