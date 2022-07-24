const container = document.querySelector('.container')
const sizeEl = document.querySelector('.size')
let size = sizeEl.value
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.btn')
const rainbowBtn = document.querySelector('.rainbow')



let draw = false

function populate(size){
    container.style.setProperty('--size', size);
    for (let i = 0; i < size * size; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');

        div.addEventListener('mouseover', function(){
            if (!draw) return;
            div.style.backgroundColor = color.value;
        })
        div.addEventListener('mousedown', function(){
            div.style.backgroundColor = color.value;
        })

        rainbowBtn.addEventListener('click', function(){
            div.style.backgroundColor = getRandomColor();
        })


      

        container.appendChild(div)        
    }
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}




window.addEventListener("mousedown", function(){
    draw = true
})
window.addEventListener("mouseup", function(){
    draw = false
})

function reset(){
    container.textContent = ''
    populate(size)
}


resetBtn.addEventListener("click", reset);

sizeEl.addEventListener("keyup", function(){
    size = sizeEl.value;
    reset();
})

populate(size);

