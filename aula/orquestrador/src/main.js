import './style.css'

const rotas = [
    {
        path: '/',
        source: 'http://localhost:8002/',
        nome: 'Home'
    },
    {
        path: '/produtos',
        source: 'http://localhost:8003/',
        nome: 'Produtos'
    },
    {
        path: '/clientes',
        source: 'http://localhost:8001/',
        nome: 'Clientes'
    },
]

const navIframe = document.querySelector('#mf-nav')
const containerIframe = document.querySelector('#container')

const pathAtual = window.location.pathname

const mfInicial = rotas.find(r => r.path == pathAtual)
if (mfInicial) {
    containerIframe.setAttribute('src', mfInicial.source)
}

navIframe.onload = () => { // arrow function
    navIframe.contentWindow.postMessage({ type: 'INICIAR', rotas: rotas }, 'http://localhost:8000')
}

window.addEventListener('message', (evento) => {
    // evento.origin = 'url.maliciosa.com
    if (evento.data.type == 'NAVEGACAO') {
        console.log('Hora de navegar para', evento.data.destino)
        const mfAlvoNavegacao = rotas.find(r => r.path == evento.data.destino.path)
        if (mfAlvoNavegacao) {
            containerIframe.setAttribute('src', mfAlvoNavegacao.source)
            window.history.pushState({}, '', mfAlvoNavegacao.path)
        }
    }
})

window.addEventListener('popstate', () => {
    const path = window.location.pathname
    const mfAlvoPop = rotas.find(r => r.path == path)
    if (mfAlvoPop) {
        containerIframe.setAttribute('src', mfAlvoPop.source)
        console.log('pop sendo feito')
    }
})