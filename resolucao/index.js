var containerPaises = document.querySelector( '[data-country="container"]' )

function gerarTemplate ( pais ) {
    return `<div class="country">
<div class="country__flag">
  <img
    width="100%"
    src="${pais.flags.png}"
    alt="flag"
  />
</div>
<div class="container__info">
  <h2>${pais.name.common}</h2>
  <p><span class="bold">Population:</span> ${pais.population}</p>
  <p><span class="bold">Region:</span> ${pais.region}</p>
  <p><span class="bold">Capital:</span> ${pais.capital[0]}</p>
</div>
</div>`
}

function pegarDados () {
    fetch( 'https://restcountries.com/v3.1/all' )
        .then( ( resposta ) => {
            return resposta.json()
        } )
        .then( ( dados ) => {
            var somente10Paises = dados.slice( 0, 10 )
            var templatesGerados = []
            somente10Paises.forEach( ( pais ) => {
                var templateGerado = gerarTemplate( pais )
                templatesGerados.push( templateGerado )

            } )

            var templatesUnidos = templatesGerados.join( ' ' )
            containerPaises.innerHTML = templatesUnidos
        } )
}

pegarDados()
