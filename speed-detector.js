let spd = 135;

function speedDetector(speed) {
    if (speed < 70 && speed > 0 ) {
        console.log('OK')
    } else {
        let d = (speed -70)/ 5;
        // let d = diff / 5;
        d = Math.floor(d);

        if (d <= 12) {
            console.log(`Points: ${d}`);
            return `Points: ${d}`;
        } else {
            console.log(`License suspended`);
            return `License suspended`;
        }
    }
    
}

speedDetector(spd);