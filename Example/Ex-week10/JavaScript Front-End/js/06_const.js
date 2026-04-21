// const ปกติ แก้ไขไม่ได้
const price = 500;
console.log("Price is : ", price); // 500
// price = 1000; // Error: Assignment to constant variable

// const เป็น object แก้ไขค่าภายในได้
const data = { firstname: "AAA", lastname: "BBB" };
data.lastname = "CCC";
console.log("Data is: ", data); // lastname: CCC

// ใช้ Object.freeze() ล็อคไม่ให้แก้ไขได้เลย
const dataFrozen = { firstname: "AAA", lastname: "BBB" };
Object.freeze(dataFrozen);
dataFrozen.lastname = "CCC"; // ไม่มีผล
console.log("Data is: ", dataFrozen); // lastname: BBB (ไม่เปลี่ยน)