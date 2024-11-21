let textElement = document.querySelector('.text');
let textContent = textElement.textContent;
textElement.innerHTML = '';

let spans = [];
for(let char of textContent){
    let span = document.createElement('span');
    span.textContent = char;
    textElement.appendChild(span); 
    spans.push(span);
}

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    spans.forEach((span, index) => {
        if(scrollDistance >= (index + 1) * 50){
            span.style.transform = `translate(${index * 20}px,0)`;
            span.classList.add('active');
        }
        else{
            span.style.transform = `translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh)`;
            span.classList.remove('active');
        }
    })
})

window.dispatchEvent(new Event('scroll'));