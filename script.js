let bloco = document.getElementById('bloco')
bloco.addEventListener('click', click)
bloco.addEventListener('mouseenter', entro)
bloco.addEventListener('mouseout', saiu)

function click(){
    bloco.style.backgroundColor = 'red'
    bloco.innerText = 'clicou'
}

function entro(){
    bloco.style.backgroundColor = 'yellow'
    bloco.innerText = 'entrou'
}

function saiu(){
    bloco.style.backgroundColor = 'gray'
    bloco.innerText = 'interaja'
}