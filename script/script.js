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

