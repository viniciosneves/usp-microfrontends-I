import './style.css'

const rotas = [
    {
        path: '/',
        source: '',
        nome: 'Home'
    },
    {
        path: '/produtos',
        source: '',
        nome: 'Produtos'
    },
    {
        path: '/clientes',
        source: '',
        nome: 'Clientes'
    },
]

const navIframe = document.querySelector('#mf-nav')
navIframe.onload = () => { // arrow function
    navIframe.contentWindow.postMessage({ type: 'INICIAR', rotas: rotas }, 'http://localhost:8000')
}


console.log(navIframe)