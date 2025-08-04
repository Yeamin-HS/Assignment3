var fileName= "docx.pdf";

var val1 =fileName.slice(-5);
var val2 = fileName.slice(-4);


if (val1 === ".docx" || val2 === ".pdf" || fileName[0] === "#") {
    console.log("Store");
}
else {
    console.log("Delete");
}
