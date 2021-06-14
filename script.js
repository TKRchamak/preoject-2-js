const progress = document.getElementById('progress')
// const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let currentUpdate = 1;

next.addEventListener('click', ()=>{
    currentUpdate++;
    if (currentUpdate > circles.length) {
        currentUpdate = circles.length;
    }

    update();
})

prev.addEventListener('click', ()=>{
    currentUpdate--;
    if (currentUpdate < 1) {
        currentUpdate = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, idx) =>{
        if (idx < currentUpdate) {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active');
        }
    })
    const active = document.querySelectorAll('.active')

    if (active.length <= circles.length) {
        progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + "%";
    }

    if (active.length ==1) {
        prev.disabled = true;
    }else if (active.length == circles.length) {
        next.disabled = true;
    }else{
        next.disabled = false;
        prev.disabled = false;
    }
}

