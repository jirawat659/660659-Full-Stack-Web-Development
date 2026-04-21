// Rest Parameter รับหลายค่า
const data = (fullname, ...language) => {
    return fullname + " " + language;
};
console.log("ข้อมูลลูกค้า: " + data("AAA 3A", "Java", "C++", "C#"));
// AAA 3A Java,C++,C#

// ใช้ map() อ่านทีละรายการ
const data2 = (fullname, ...language) => {
    return language.map(l => fullname + " ชอบภาษา: " + l);
};
console.log(data2("AAA 3A", "Java", "C++", "C#"));
// ["AAA 3A ชอบภาษา: Java", "AAA 3A ชอบภาษา: C++", "AAA 3A ชอบภาษา: C#"]