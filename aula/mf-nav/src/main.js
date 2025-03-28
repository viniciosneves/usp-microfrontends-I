const listaDeLinks = document.querySelector('#lista-de-links')

window.addEventListener('message', (evento) => {
    if (evento.data.type == 'INICIAR') {
        // console.log(evento.data)
        evento.data.rotas.forEach(rota => {
            console.log(rota)
            const li = document.createElement('li')
            const ancora = document.createElement('a')
            ancora.setAttribute('href', rota.path)
            ancora.innerText = rota.nome

            ancora.addEventListener('click', (evt) => {
                evt.preventDefault()
                window.parent.postMessage({ type: 'NAVEGACAO', destino: rota }, '*')
            })

            li.appendChild(ancora)
            listaDeLinks.appendChild(li)
        });
    }
})