const boxs = document.querySelector('.boxs')

for (const key in textos) {
    if (Object.hasOwnProperty.call(textos, key)) {
        const element = textos[key];

        const box = document.createElement('div');
        box.classList.add(`${key}`,'box')
        if(key !== 'apresentacao'){
            box.classList.add('hidden')
        }
        box.style.backgroundImage = `url(./assets/img/${element.img.fundo})`
        const cardContent = `
                            <div class="top">
                            <img src="./assets/img/${element.img.icon}" ${element.img.icon === 'barco.png' ? "class='barco'" : ''} alt="">
                            <div>
                                <h1>${element.titulo}</h1>
                                <p>${element.paragrado}</p>
                            </div>
                            </div>
                            <div class="bottom">
                                <div class="boxbtn">
                                    ${key === 'apresentacao' ? 
                                    '<button class="next">NAVEGAR<span class="material-symbols-sharp nav">navigation</span></button>' :
                                    key === 'agradecimento' ? '<button class="prev"><span class="material-symbols-sharp">arrow_back</span>VOLTAR</button>' :
                                    '<button class="prev"><span class="material-symbols-sharp">arrow_back</span>VOLTAR</button><button class="next">PRÓXIMO<span class="material-symbols-sharp">arrow_forward</span></button>'
                                }
                                    
                                </div>
                            </div>
                            `
        box.innerHTML = cardContent;
        boxs.appendChild(box);
    }
}

window.addEventListener('DOMContentLoaded', function(event){

const btnsNext = document.querySelectorAll('.next')

for (const btn of btnsNext) {
    btn.addEventListener('click', function(el){
        el.path[3].classList.toggle('hidden')
        el.path[3].nextElementSibling.classList.toggle('hidden')
        window.scrollTo(0, 0);
    })
}

const btnsPrev = document.querySelectorAll('.prev')

for (const btn of btnsPrev) {
    btn.addEventListener('click', function(el){
        el.path[3].classList.toggle('hidden')
        el.path[3].previousElementSibling.classList.toggle('hidden')
        window.scrollTo(0, 0);
    })
}
})
