// ทดสอบ var (Global scope - มีปัญหา)
var data = "JS";
var point = 10;

if (point === 10) {
    var data = "C++";
    console.log("Internal : " + data); // C++
}
console.log("External : " + data); // C++ (ค่าถูกเขียนทับ!)

// ทดสอบ let (Local scope - ถูกต้อง)
let data2 = "JS";
let point2 = 10;

if (point2 === 10) {
    let data2 = "C++";
    console.log("Internal : " + data2); // C++
}
console.log("External : " + data2); // JS (ค่าถูกต้อง)