
const routes = {
  '/': 'mf-search',
  '/order': 'mf-order',
}

const container = document.querySelector('#app')

async function navigateTo (path) {
  const mf = routes[path]
  if (mf) {
    const { render } = await import(mf)
    render(container)
  }
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    const path = this.getAttribute('href')
    console.log(`Navegando para: ${path}`)
    navigateTo(path)
  })
})
