const userInput = () => {
    Input = prompt('Enter : ');
    Input = Input.toLowerCase();

    if (Input === 'rock' || Input === 'paper' || Input === 'sissors') {
        return Input;
    } else {
        console.log('Invalid! Enter rock, paper or sissors.')
    }
}

const randomNum = () => {
    num = Math.ceil(Math.random() * 3);

    switch (num) {
        case 1:
            num = 'rock';
            break;
        case 2:
            num = 'paper';
            break;
        case 3:
            num = 'sissors';
            break;
    }
}

const matchResults = () => {

    userInput();
    randomNum();
    console.log(`You : ${Input}\nComputer : ${num}`);

    const won = 'You Won';
    const lose = 'You Lose';
    const draw = 'Draw';

    if (Input === num) {
        console.log(draw);
    } else if (Input === 'rock') {
        if (num === 'paper') {
            console.log(lose);
        } else {
            console.log(won);
        }
    } else if (Input === 'paper') {
        if (num === 'rock') {
            console.log(won);
        } else {
            console.log(lose);
        }
    } else {
        if (num === 'rock') {
            console.log(lose);
        } else {
            console.log(won);
        }
    }
}

matchResults();

