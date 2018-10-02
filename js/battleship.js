
var player1Positions = [];


for(let y = 0; y < 12; y++){
    if (y > 0) {
        $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    } else {
        $('.game').append(`<div class='game-column'></div>`)
    }
    
    for(let x = 0; x < 11; x++){
        const gameSquare = $(`<div>${x},${y-1}</div>`)
        gameSquare.addClass('square')
        gameSquare.addClass(`square-${y-1}-${x}`)
        if (x < 10) {
            gameSquare.click(function() {
            board[x][y-1].setShip = true;
            if (setShip = true) {
                player1Positions.push(gameSquare);
                console.log(player1Positions);
           }
            $(`.square-${y-1}-${x}`).css('background-color', '#000000');
            console.log(board);
            });
        }
        $(`.game-column-${y}`).append(gameSquare)
        
    }
   
}

$('.game-column').droppable( {
    drop:function(){
        $(this).append
    }
});

const letters = ['A','B','C','D','E','F','G','H','I','J'];
const nums = ['1','2','3','4','5','6','7','8','9','10'];


//adds letters to board rows
for(let i=0; i<letters.length; i++) {
    $(`.square-10-${i}`).text(letters[i]);
}

//adds numbers to board columns
for(let j=0; j<nums.length; j++) {
    $(`.square-${j}-10`).text(nums[j]);
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





var board = [
    [{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{}]
];

console.log(board[9][9]);



