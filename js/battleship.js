
var player1Positions = [];
var player1FiredAt = [];

//initializes gameboard


for(let y = 0; y < 12; y++){
    if (y > 0) {
        $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    } else {
        $('.game').append(`<div class='game-column'></div>`)
    }
    
    for(let x = 0; x < 11; x++){
        const gameSquare = $(`<div>${x},${y-1}</div>`)
        gameSquare.addClass('square')
        gameSquare.addClass(`square-${x}-${y-1}`)
        gameSquare.attr('x', x)
        gameSquare.attr('y', y-1)
        if (x < 10) {
            //creates new array of ship positions based on user clicking on squares
            gameSquare.click(function() {
            board[y-1][x].setShip = true;
            if (setShip = true) {
                
                //console.log(gameSquare.attr('x'));
                //console.log(gameSquare.attr('y'));
                console.log(player1Positions);
                
           }
            $(`.square-${x}-${y-1}`).css('background-color', '#000000');
            console.log(board);
            });
        }
        $(`.game-column-${y}`).append(gameSquare)
        
    }
   
}
$('#playerOneSet').click(function() {
    $('.square').css('background-color', '');
    // $('.square').css('background-color', 'dodgerblue');
    // $('#number-column').css('background-color', 'silver');
    // $('#letter-column').css('background-color', 'silver');
    console.log(board);  
});

//adds id's to columns not in the playing area
for(let i=0; i<11; i++) {
    $(`.square-10-${i}`).attr('id', 'letter-column');
    $(`.square-${i}-10`).attr('id', 'number-column');  
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
// allows rotation of game pieces on double click
// var rotation = 0;

// jQuery.fn.rotate = function(degrees) {
//     $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
//                  '-moz-transform' : 'rotate('+ degrees +'deg)',
//                  '-ms-transform' : 'rotate('+ degrees +'deg)',
//                  'transform' : 'rotate('+ degrees +'deg)'});
// };

// $('.rotate').dblclick(function() {
//     rotation += 90;
//     $(this).rotate(rotation);
// });

//firing buttons push values to player1FiredAt array
       
    // $('#player-one-letters button').click(function() {       
    //     player1FiredAt.push($(this).val());
    //         console.log(player1FiredAt);
    //         console.log(player1FiredAt[0]);
    //         console.log(player1FiredAt[1]);
    // });

      



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





