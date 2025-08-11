var experience = 40;
var startingSalary = 30000;

//here i have use compound interest formula which is p(1+r/100)^n

var finalSalary = startingSalary * Math.pow((1 + 0.05), experience);


console.log(finalSalary.toFixed(2));





