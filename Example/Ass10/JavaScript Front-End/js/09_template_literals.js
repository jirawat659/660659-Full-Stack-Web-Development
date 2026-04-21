// แบบเดิม ใช้ + ต่อกัน
function ShowData(firstname, lastname) {
    return firstname + " " + lastname;
}
let data = ShowData("AAA", "3A");
console.log("Data is : " + data); // AAA 3A

// Template Literals
const ShowData2 = (firstname, lastname) => {
    return `Mr.${firstname} ${lastname}`;
};
let data2 = ShowData2("AAA", "3A");
console.log("Data is : " + data2); // Mr.AAA 3A

// คำนวณตัวเลขใน Template Literals
const ProcessData = (num1, num2) => {
    return `Summation is : ${num1 + num2}`;
};
let result = ProcessData(100, 200);
console.log("Result is : ", result); // Summation is : 300