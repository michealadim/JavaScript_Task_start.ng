/*Stores the name Adim Ekene Micheal with the variable, name*/
let name = "Adim Ekene Micheal";


/*stores a list of my courses in an array, Courses*/
let Courses = ["HTML", "Css", "Javascript"];


/*Displays the name Adim Ekene Micheal on the console*/
console.log("My name is: " + name);


/*Displays the Courses HTML, Css, Javascript on the console*/
console.log("My Courses are: " + Courses);


/* Finds and displays the array with the array name Courses on the console */
for(i = 0; i < Courses.length; i++) {
console.log(Courses[i]);
}

/* Declaring the empty array with the name data */
const data = [];
/* Finding odd numbers from 1 - 200(inclusive) */
 for (let i=1; i<=200; i++) {

   if (i% 2 !==0) {

     data.push(i);

   }

 }
/* Displaying the numbers on the console */
 console.log(data);
