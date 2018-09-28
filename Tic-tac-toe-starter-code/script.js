document.addEventListener('DOMContentLoaded', () => {
  // Your code here

  let player = 0;
  const player_one = [];
  const player_two = [];
  let counter1 = 0;

  class Game {
    constructor() {
      this.reset = document.getElementById('reset');
      this.playerTurn = document.getElementById('playerTurn');
      this.squares = document.getElementsByTagName('td');
    }

     check(arr, player){
      const winner = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6']
      ];


        for(var i=0; i<winner.length; i++){
          if (winner[i].every((val) => arr.includes(val)))
          {
            document.getElementById('playerTurn').innerHTML = "Player " + player + " Wins!";
            location.reload();
            alert("player " + player + " Wins!");
          }
        }
    }


    setClicks(){
      for (let i = 0; i < this.squares.length; i++) {
        this.squares[i].addEventListener('click', (e) => {
          console.log(e.srcElement.dataset.num);
          if (this.squares[i].innerHTML == ''){
            if(player === 1){
              this.squares[i].style.background = 'red';
              this.squares[i].innerHTML = 'X';
              player_one.push(e.srcElement.dataset.num);
              this.playerTurn.innerHTML = "It is O's turn";
              console.log(player_one);
              player = 0;
              this.check(player_one, "X");
            }
            else{
              this.squares[i].style.background = 'green';
              this.squares[i].innerHTML = 'O';
              player_two.push(e.srcElement.dataset.num);
              this.playerTurn.innerHTML = "It is X's turn";
              console.log(player_two);
              player = 1;
              counter1 += 1;
              this.check(player_two, "O");
              console.log(counter1);
              if (counter1 === 5){
                alert('draw');
              }
            }
          }
          this.reset.addEventListener('click', () => {
            location.reload();
          });
        })
      }
    }
  }

  const tictactoe = new Game();
  tictactoe.setClicks();
  tictactoe.check(player_one, "O");
  console.log(tictactoe);

});
