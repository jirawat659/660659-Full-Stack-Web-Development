// Function ปกติ
function add(x, y) {
    return x + y;
}
let result = add(10, 20);
console.log(result); // 30

// Arrow Function แบบเต็ม
const add2 = (x, y) => { return x + y };
let result2 = add2(200, 300);
console.log("Result is", result2); // 500

// Arrow Function แบบย่อ (บรรทัดเดียว)
const add3 = (x, y) => x + y;
let result3 = add3(200, 300);
console.log("Result is", result3); // 500

// Arrow Function พารามิเตอร์ตัวเดียว (ไม่ต้องมีวงเล็บ)
const add4 = x => x + 1000;
let result4 = add4(100);
console.log("Result is", result4); // 1100