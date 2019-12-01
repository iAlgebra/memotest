const $squares = document.querySelectorAll('.square');
const colors = ['pink', 'green'];

$squares.forEach(function(square) {
  square.onclick = function() {
    this.classList.remove('hidden');
    this.classList.add('visible');
    const $visibleSquares = document.querySelectorAll('.visible');
    if ($visibleSquares.length === 2) {
      // check if they match or not
      if ($visibleSquares[0].className === $visibleSquares[1].className) {
        // make them gone if they match
        $visibleSquares.forEach(function(square) {
          square.classList.remove('visible');
          setTimeout(function() {
            square.classList.add('gone');
            if ($squares.length === document.querySelectorAll('.gone').length) {
              setTimeout(function() {
                alert('YOU WON THE GAME!!!');
              }, 500);
            }
          }, 500);
        });
      } else {
        // hide them if they don't match
        $visibleSquares.forEach(function(square) {
          square.classList.remove('visible');
          setTimeout(function() {
            square.classList.add('hidden');
          }, 500);
        });
      }
    }
  };
});

function assignColors(colors, squares) {
  const $squaresClone = [...squares];
  colors.forEach(function(color) {
    for (let i = 0; i < 2; i++) {
      let index = Math.floor(Math.random() * $squaresClone.length);
      let $squareChosen = $squaresClone[index];
      $squareChosen.classList.add(color);
      $squaresClone.splice(index, 1);
    }
  });
}

assignColors(colors, $squares);
