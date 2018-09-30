for(let y = 1; y < 12; y++){
    $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    for(let x = 11; x > 0; x--){
        const gameSquare = $('<div/>')
        gameSquare.addClass('square')
        gameSquare.addClass(`square-${y}-${x}`)
        $(`.game-column-${y}`).append(gameSquare)
    }
}

const letters = ['J','I','H','G','F','E','D','C','B','A'];
const nums = ['1','2','3','4','5','6','7','8','9','10'];


//adds letters to board rows
for(let i=0; i<letters.length; i++) {
    $(`.square-1-${i+1}`).text(letters[i]);
}

//adds numbers to board columns
for(let j=0; j<nums.length; j++) {
    $(`.square-${j+2}-11`).text(nums[j]);
}

var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
};

$('.rotate').click(function() {
    rotation += 90;
    $(this).rotate(rotation);
});
