// ส่งพารามิเตอร์ไม่ครบ → ได้ undefined
const Person = (firstname, lastname, age) => {
    return firstname + " " + lastname + " Age : " + age;
};
let result1 = Person("AAA", "3A", "20");
let result2 = Person("BBB", "B3");
console.log("Result1 is : " + result1); // AAA 3A Age : 20
console.log("Result2 is : " + result2); // BBB B3 Age : undefined

// แก้ไขด้วย Default Parameter
const Person2 = (firstname, lastname, age = 0) => {
    return firstname + " " + lastname + " Age : " + age;
};
let result3 = Person2("AAA", "3A", "20");
let result4 = Person2("BBB", "B3");
console.log("Result1 is : " + result3); // AAA 3A Age : 20
console.log("Result2 is : " + result4); // BBB B3 Age : 0

// ตัวอย่าง CalculatePrice
const CalculatePrice = (price, vat = 0.07) => {
    return price + (price * vat);
};
let r1 = CalculatePrice(1000, 0.1);
let r2 = CalculatePrice(1000);
console.log(r1); // 1100
console.log(r2); // 1070