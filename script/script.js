function projetos () {
    let display = document.getElementById ("display-none")
    let button = document.getElementById ('mais-projetos')
    if (display.style.display == 'flex') {
        display.style.display = 'none'
        button.value = 'Mais Projetos'
    } else {
        display.style.display = 'flex'
        button.value = 'fechar'
    }
}

const modedark = document.getElementById ('lua')
const main = document.getElementById('main')

modedark.addEventListener ("click", () => {
    if (modedark.classList.contains ('fa-moon')) {
        modedark.classList.remove ('fa-moon')
        modedark.classList.add ('fa-sun')
        main.classList.add ('light')
    }else {
        modedark.classList.remove ('fa-sun')
        modedark.classList.add ('fa-moon')
        main.classList.remove ('light')
    }
}) 

const btn = document.getElementById ('button-arrow')

btn.addEventListener ('click', function(){
    window.scrollTo (0,0)
})

function ocultar() {
    if (window.scrollY > 10) {
        btn.style.display = 'flex'
    } else {
        btn.style.display = 'none'
    }
}

document.addEventListener('scroll', ocultar)

const hamburguer = document.getElementById ('icon-hamburguer')
const backhamburguer = document.getElementById ('background-hamburguer')
const lua = document.getElementById ('lua')

hamburguer.addEventListener ('click', () => {
    if (hamburguer.classList.contains ('fa-bars')) {
        hamburguer.classList.remove ('fa-bars')
        hamburguer.classList.add ('fa-outdent')
        backhamburguer.style.display = 'flex'
        lua.style.display = 'inline-block'

        
    } else {
        hamburguer.classList.add ('fa-bars')
        hamburguer.classList.remove ('fa-outdent')
        backhamburguer.style.display = 'none'
        lua.style.display = 'none'
        
    }
})