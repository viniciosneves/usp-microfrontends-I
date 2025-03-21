import './style.css'

const microFrontendsByRoute = [
    {
        path: '/',
        source: 'http://localhost:8003/',
        name: 'Home'
    },
    {
        path: '/order',
        source: 'http://localhost:8001/',
        name: 'Pedidos'
    },
    {
        path: '/profile',
        source: 'http://localhost:8002/',
        name: 'Perfil'
    },
]

const navIframe = document.querySelector('#micro-frontend-navigation')
const mainIframe = document.querySelector('#outlet')

const currentPath = window.location.pathname
const initialMF = microFrontendsByRoute.find(m => m.path === currentPath)

if (initialMF) {
    mainIframe.setAttribute('src', initialMF.source)
}

navIframe.onload = () => {
    navIframe.contentWindow.postMessage({ type: 'INIT', routes: microFrontendsByRoute }, 'http://localhost:8000/');
};

window.addEventListener('message', (event) => {
    if (event.data.type === 'NAVIGATE') {
        const mf = microFrontendsByRoute.find(m => m.path === event.data.path)
        if (mf) {
            mainIframe.setAttribute('src', mf.source)
            window.history.pushState({}, '', mf.path)
        }
    }
})

window.addEventListener('popstate', () => {
    const mf = microFrontendsByRoute.find(m => m.path === window.location.pathname)
    if (mf) {
        mainIframe.setAttribute('src', mf.source)
    }
})