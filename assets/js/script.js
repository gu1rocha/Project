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

        if(!!box.querySelector('.next'))
            box.querySelector('.next').addEventListener('click', () =>{
                box.classList.toggle('hidden')
                box.nextElementSibling.classList.toggle('hidden')
                window.scrollTo(0,0)
        })

        if(!!box.querySelector('.prev'))
            box.querySelector('.prev').addEventListener('click', () =>{
                box.classList.toggle('hidden')
                box.previousElementSibling.classList.toggle('hidden')
                window.scrollTo(0,0)
        })
    
    }
}
