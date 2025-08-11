//task 1
var area =11;
if (area>0 && area<=10**9)  {
area=(area/2);
console.log(area);}

else{console.log("Invalid area value");}



//task 2
var money=10000;
if (money>0 && money<=10**9)  {
if (money >=25000) {
    console.log("Laptop"); }
else if (money >= 10000 && money < 25000) {
    console.log("Cycle"); }  

else{ console.log("Chocolate"); }  }    


else{console.log("Invalid value");}




//task 3
var lastDay = 6 ;
if (lastDay>0 && lastDay<=30)  {

for(i=1; i<=lastDay; i++) {

    if (i % 3 === 0) {
        console.log(i+"-medicine");
        continue;

    }
    console.log(i+"-rest");

}

}
else{console.log("Invalid  value");}




//task 4
var fileName= "docx.pdf";

var val1 =fileName.slice(-5);
var val2 = fileName.slice(-4);


if (val1 === ".docx" || val2 === ".pdf" || fileName[0] === "#") {
    console.log("Store");
}
else {
    console.log("Delete");
}



//task 5
var student= { name: "mewo" , roll: 96 ,department: "cse"  };

var email=student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(email);




//task 6
var experience = 40;
var startingSalary = 30000;

//here i have use compound interest formula which is p(1+r/100)^n

var finalSalary = startingSalary * Math.pow((1 + 0.05), experience);


console.log(finalSalary.toFixed(2));



