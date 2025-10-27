    const pierre = document.getElementById('choice-stone');
    const feuille = document.getElementById('choice-paper');
    const ciseaux = document.getElementById('choice-scissor');
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

    const choices = ["pierre", "feuille", "ciseaux"];

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
            case 'feuille_ciseaux':
            case 'pierre_feuille':
            case 'ciseaux_pierre':
                loses += 1;
                gameScore.innerHTML = `Ton choix: <span>${userchoice}</span> & Choix du robot: <span>${computerChoice}</span>`;
                lose.style.display = 'unset';
                win.style.display = 'none';
                draw.style.display = 'none';  

                break;

            case 'feuille_pierre':
            case 'pierre_ciseaux':
            case 'ciseaux_feuille':
                wins += 1;
                gameScore.innerHTML = `Ton choix: <span>${userchoice}</span> & Choix du robot: <span>${computerChoice}</span>`;
                win.style.display = 'unset';
                lose.style.display = 'none';
                draw.style.display = 'none';
                break;

            case 'feuille_feuille':
            case 'pierre_pierre':
            case 'ciseaux_ciseaux':
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

    pierre.addEventListener('click', () => runGame('pierre'));
    feuille.addEventListener('click', () => runGame('feuille'));
    ciseaux.addEventListener('click', () => runGame('ciseaux'));
    