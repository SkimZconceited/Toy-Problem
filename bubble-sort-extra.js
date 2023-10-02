let arrNum = [5,6,1,3,4,2];
function arraySort(x) {
    let swapped;

    console.log(x);
    
    do {
        swapped = false;
        for (let i = 0; i < x.length - 1; i++) {
            // compares every x[i] in the for loop and checks them if they are the same
            if (x[i] > x[i + 1]) {
                let temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log(x);
    return x;

}

arraySort(arrNum);

function printStairs(x) {
    for (let i = 1; i <= x; i++) {
      // Create a string with '#' characters for the current level
      const step = '#'.repeat(i);
      
      // Calculate the number of spaces needed for indentation
      const spaces = ' '.repeat(x - i);
      
      // Print the step with indentation
      console.log(spaces + step);
    }
  }
  
  // Example usage:
  printStairs(arraySort);