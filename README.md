# Toy-Problem

## STUDENT GRADE GENERATION
### First it prompts the user to enter a number in the variable inX
### then inX is passed to the function inputReceiver(inX)
### the function then does the first comparison on whether the passed value is a number and its between 0 and 100
### if it meets the conditions then it is passed to the nested if statement
### which checks where the inX which is x at this point, and where it falls then eventually prints the grade to the user.

# SPEED DETECTOR
### The program collects the variable with its value and invoked next
### where the function speedDetector(), first checks if the speed is below (program prints OK!) and above (else)
### if it is above takes the speed subtract speed limit then that value is divided to 5 for the 5km/hr increase - rounds with Math.floor()
### then checked if the the speed leads to the licence suspention if it exceeds 12 points and if below it displays the points
 
# NET SALARY CALCULATOR
### Starts with the salary intake then
### 3 functions to help with the calculation and the reusability of the code
### nssfTax, nhifTax, payeeTax all are in the global scope they are then used in the calcSalary() to make the computations
### all the values are passed to calcTax() which computes and gives the result