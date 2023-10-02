let inX = prompt('Enter your grade: ');

function inputReceiver(y) {
    let x = parseInt(y);

    // console.log(typeof x, x);

    if (x >= 0 && x <= 100) {

        if (x > 79) {
            console.log(`Congrats ${x}, thats an A`);
            return `Congrats ${x}, thats an A`;

        } else if (x >= 60) {
            console.log(`Congrats ${x}, thats an B`);
            return `Congrats ${x}, thats an B`;

        } else if (x >= 49) {
            console.log(`You can do better than ${x}, thats an C`);
            return `You can do better than ${x}, thats an C`;

        } else if (x >= 40) {
            console.log(`Work harder ${x}, thats an D`);
            return `Work harder ${x}, thats an D`;

        } else {
            console.log(`Work more harder ${x}, thats an E`);
            return `Work more harder ${x}, thats an E`;

        }

    } else if (typeof x !== 'number') {
        console.warn(`Enter a number and ${x} is not!`);

    } else {
        console.warn(`Enter a number between 0 and 100 and ${x} is not!`);

    }
}

inputReceiver(inX);
// inputReceiver(101);
// inputReceiver(80);
// inputReceiver(65);
// inputReceiver(55);
// inputReceiver(45);
// inputReceiver(35);
// inputReceiver(-1);