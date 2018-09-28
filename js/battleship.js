for(let y = 1; y < 12; y++){
    $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    for(let x = 11; x > 0; x--){
        const gameSquare = $('<div/>')
        gameSquare.addClass('square')
        gameSquare.addClass(`square-${y}-${x}`)
        $(`.game-column-${y}`).append(gameSquare)
    }
}