///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let fujiAcresTotal = 0;
for(let i = 0; i < fujiAcres.length; i++) {
    fujiAcresTotal += fujiAcres[i];
}
let galaAcresTotal = 0;
for(let i = 0; i < galaAcres.length; i++) {
    galaAcresTotal += galaAcres[i];
} 
let pinkAcresTotal = 0;
for(let i = 0; i < pinkAcres.length; i++) {
    pinkAcresTotal += pinkAcres[i];
} 
let totalAcres = galaAcresTotal + fujiAcresTotal + pinkAcresTotal;
console.log(totalAcres);

// extracredit: for these problems i want to state that i did not use pseudocode because i kinda took the problem explanation as my pseudocode because it pretty much outlined exactly what i did, before creating a for loop i thoght it would be easier to create a variable for fuji, gala, and pink seperately rather than trying to come up with a way to add all of it up together at once, then i create my for loops and itterated over each array to get the total for each and finished by adding those totals up to create the total for all of them

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / 7;
console.log(averageDailyAcres);

// ectra credit: not much to say about this one, i took my added total acres of apples gathered on each field over 7 days and divided it by 7 to get how many acres of apples were picked each day over all three fields together


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while(acresLeft > 0) {
    days += 1;
    acresLeft -= averageDailyAcres;
}
console.log(days);

// extra credit: for this one again was pretty simple, with the variables already created i just needed to increase the number of days by one while at the same time subtracting the daily average from the total acres to give me how many days it would take yo pick every acre

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = [];
let galaTons =[];
let pinkTons =[];
for(let i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i] * 6.5);
}
for(let i = 0; i < galaAcres.length; i++) {
    galaTons.push(galaAcres[i] * 6.5);
} 
for(let i = 0; i < pinkAcres.length; i++) {
    pinkTons.push(pinkAcres[i] * 6.5);
} 
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);

// extra credit: after seeing this problem i took a minute to understand what it was asking, then since i thought it would be easiest to push to an empty array rather than create a copy of the previous one i created a for loop to itterate over the original array and multiple the number of acres each day by 6.5 to get the number of tons picked each day and pushed the new values to my new array

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

let fujiTonsTotal = 0
for(let i = 0; i < fujiTons.length; i++) {
    fujiTonsTotal += (fujiTons[i]);
    fujiPounds += fujiTonsTotal * 2000;
} 
let galaTonsTotal = 0
for(let i = 0; i < galaTons.length; i++) {
    galaTonsTotal += (galaTons[i]);
    galaPounds += galaTonsTotal * 2000;
} 
let pinkTonsTotal = 0
for(let i = 0; i < pinkTons.length; i++) {
    pinkTonsTotal += (pinkTons[i]);
    pinkPounds += pinkTonsTotal * 2000;
} 
console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);

// extra credit: i took a similar approach to this one by combining my idea from the first problem and problem 4, i created new variables to create what the total tons for each field over all 7 days and the multiplied that total by 2000 to turn those tons into pounds


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55
// CODE HERE

let fujiProfit = fujiPounds * .89;
let galaProfit = galaPounds * .64;
let pinkProfit = pinkPounds * .55;
console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);

// extra crdit: this one was pretty simple, i copied the prices and commented them out so i didn't have to scroll all the way up, then used simple math to multiply the total pounds of the last problem by the price per pound to get the total price for the apples that week for each field



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit =(fujiProfit + galaProfit + pinkProfit);
console.log(totalProfit);

// extra credit: definitely the easiest problem assuming that all the previous problems were done correctly, i simply took the total profit of each field and added them together to get the final total, and if i did it correctly i just wanna say dang this guy or these guys are making bank on these apples