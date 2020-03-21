var name = "Aysha Bint Mahmud";
var courses = ["html", "css", "javascript", "php","c#", "flutter"];

 console.log("My name is: " + name + " and my courses are 6 (An even number), Namely " + courses);

// Since number of my courses is 6 which is an even number therefore my loop will find and display all even numbers
 const data = [];

  for (let i=1; i<=200; i++) {

    if (i%2===0) {

      data.push(i);

    }

  }

  console.log(data);
