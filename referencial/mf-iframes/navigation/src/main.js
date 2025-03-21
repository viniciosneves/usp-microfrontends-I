import './style.css'

const navUl = document.querySelector('#app nav ul')

window.addEventListener('message', (event) => {
    if (event.data.type === 'INIT') {
        event.data.routes.forEach(route => {
            const li = document.createElement('li')
            const anchor = document.createElement('a')
            anchor.innerText = route.name
            anchor.setAttribute('href', route.path)
            
            anchor.addEventListener('click', (e) => {
                e.preventDefault()
                window.parent.postMessage({ type: 'NAVIGATE', path: route.path }, '*')
            })

            li.appendChild(anchor)
            navUl.appendChild(li)

        })
    }
    console.log('Dados recebidos do shell:', event.data);
});
