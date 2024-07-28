    const stone = document.getElementById('choice-stone');
    const paper = document.getElementById('choice-paper');
    const scissors = document.getElementById('choice-scissor');
    const play = document.getElementById('play-button');
    const choiceMoment = document.getElementById('choice-moment');
    const score = document.getElementById('score');
    const gameScore = document.getElementById('game-score');
    const choiceButton = document.querySelectorAll('.choice');
    const result = document.getElementById('result');


    const win = document.getElementById('win');
    const lose = document.getElementById('lose');
    const draw = document.getElementById('draw');

    let wins = 0;
    let loses = 0;

    const choices = ["stone", "paper", "scissors"];

    play.addEventListener('click', function () {
        beginGame();
    });

 

    // FONCTION POUR COMMENCER LE JEU 
    function beginGame() {
        play.style.display = 'none';
        choiceMoment.style.display = 'unset';
        choiceButton.forEach(button => {
            button.disabled = false;
        });

    };

    // FONCTION POUR LANCER LE JEU
    function runGame(userchoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(userchoice, computerChoice);
        switch(userchoice + '_' + computerChoice) {
            case 'paper_scissors':
            case 'stone_paper':
            case 'scissors_stone':
                loses += 1;
                gameScore.innerHTML = `Ton choix: <span>${userchoice}</span> & Choix du robot: <span>${computerChoice}</span>`;
                lose.style.display = 'unset';
                win.style.display = 'none';
                draw.style.display = 'none';  

                break;

            case 'paper_stone':
            case 'stone_scissors':
            case 'scissors_paper':
                wins += 1;
                gameScore.innerHTML = `Ton choix: <span>${userchoice}</span> & Choix du robot: <span>${computerChoice}</span>`;
                win.style.display = 'unset';
                lose.style.display = 'none';
                draw.style.display = 'none';
                break;

            case 'paper_paper':
            case 'stone_stone':
            case 'scissors_scissors':
                gameScore.innerHTML = `Ton choix: <span>${userchoice}</span> & Choix du robot: <span>${computerChoice}</span>`;
                draw.style.display = 'unset';
                win.style.display = 'none';
                lose.style.display = 'none';
                break;
        }
        choiceMoment.style.display = 'none';
        result.style.display = 'unset';
        score.innerHTML = `<span>Moi:</span> ${wins} & <span>Robot:</span> ${loses}`;
    };

    stone.addEventListener('click', () => runGame('stone'));
    paper.addEventListener('click', () => runGame('paper'));
    scissors.addEventListener('click', () => runGame('scissors'));
    