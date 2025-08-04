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