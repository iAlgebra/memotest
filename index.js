var cartaAnterior = ''

$(
  function () {
    $('div').click(
      function () {
        var cartaElegida = this.className
        if (cartaAnterior === '') {
          cartaAnterior = cartaElegida
        } else {
          if (cartaAnterior === cartaElegida) {
            alert('Las cartas son iguales')
          } else {
            alert('Las cartas son distintas')
          }
          cartaAnterior = ''
        }
      }
    )
  }
)
