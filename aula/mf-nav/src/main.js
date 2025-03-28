const listaDeLinks = document.querySelector('#lista-de-links')

window.addEventListener('message', (evento) => {
    if (evento.data.type == 'INICIAR') {
        // console.log(evento.data)
        evento.data.rotas.forEach(element => {
            console.log(element)
            const li = document.createElement('li')
            const ancora = document.createElement('a')
            ancora.setAttribute('href', element.path)
            ancora.innerText = element.nome
            li.appendChild(ancora)
            listaDeLinks.appendChild(li)
        });
    }
})