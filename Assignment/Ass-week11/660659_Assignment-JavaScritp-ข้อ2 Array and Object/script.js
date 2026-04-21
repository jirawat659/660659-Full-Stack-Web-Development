// ==========================================
// ข้อที่ 1: การจัดการข้อมูลพื้นฐานใน Array
// แปลงเป็น Arrow Function
// ==========================================
const runExercise1 = () => {
    // ใช้ let เพราะข้อมูลใน Array มีการเปลี่ยนแปลง
    let fruits = ["ส้ม", "มะม่วง", "ลำไย"];
    fruits.push("แตงโม");
    fruits.unshift("แอปเปิ้ล");

    // ใช้ Template Literals (``) ในการสร้างข้อความ
    document.getElementById("output1").innerHTML = `ผลไม้ใน Array: ${fruits.join(", ")}`;

    // แสดงผลใน Console
    console.log("=== ข้อที่ 1: การจัดการข้อมูลพื้นฐานใน Array ===");
    console.log("ผลไม้ใน Array:", fruits);
};

// ==========================================
// ข้อที่ 2: การกรอง (Filter) และการอ่านข้อมูล (Map)
// ==========================================
const runExercise2 = () => {
    // ใช้ const เพราะข้อมูลพนักงานตั้งต้นไม่มีการเปลี่ยนแปลง
    const employees = [
        { name: "กรภัทร์", job: "นักบิน", salary: 150000 },
        { name: "จารวี", job: "มัณฑนากร", salary: 55000 },
        { name: "นารีรัตน์", job: "นักวิเคราะห์ระบบ", salary: 45000 },
        { name: "ภริตา", job: "พยาบาล", salary: 35000 },
        { name: "รลิตา", job: "แพทย์", salary: 75000 }
    ];

    // Arrow Function ซ้อนใน filter และ map
    const highSalaryNames = employees
        .filter(emp => emp.salary >= 50000)
        .map(emp => emp.name);

    document.getElementById("output2").innerHTML = `พนักงานเงินเดือน >= 50,000 บาท: <br>${highSalaryNames.join(", ")}`;

    // แสดงผลใน Console
    console.log("=== ข้อที่ 2: การกรอง (Filter) และการอ่านข้อมูล (Map) ===");
    console.log("ข้อมูลพนักงานทั้งหมด:", employees);
    console.log("พนักงานเงินเดือน >= 50,000:", highSalaryNames);
};

// ==========================================
// ข้อที่ 3: การแก้ไขและถอดข้อมูลด้วย Splice
// ==========================================
const runExercise3 = () => {
    let data = ["Avocado", "Banana", "Coconut", "Durian", "Kiwi"];
    console.log("=== ข้อที่ 3: การแก้ไขและถอดข้อมูลด้วย Splice ===");
    console.log("Array ก่อนใช้ splice():", [...data]);

    data.splice(1, 2, "Lemon");

    document.getElementById("output3").innerHTML = `ข้อมูลใน Array หลังใช้ splice(): <br>${data.join(", ")}`;

    // แสดงผลใน Console
    console.log("Array หลังใช้ splice():", data);
};

// ==========================================
// ข้อที่ 4: การวนลูปและการตรวจสอบเงื่อนไข (Loop & If-else)
// ==========================================
const runExercise4 = () => {
    const scores = [70, 5, 75, 10, 80, 95, 25, 30, 15, 45];
    let scoreResults = "";

    console.log("=== ข้อที่ 4: การวนลูปและการตรวจสอบเงื่อนไข ===");

    for (const score of scores) {
        // นำเงื่อนไข If-else มาเขียนร่วมกับ Template Literals
        if (score >= 50) {
            scoreResults += `คะแนน ${score}: <span style="color: green;">ผ่าน</span> <br>`;
            console.log(`คะแนน ${score}: ผ่าน`);
        } else {
            scoreResults += `คะแนน ${score}: <span style="color: red;">ไม่ผ่าน</span> <br>`;
            console.log(`คะแนน ${score}: ไม่ผ่าน`);
        }
    }

    document.getElementById("output4").innerHTML = scoreResults;
};

// ==========================================
// ข้อที่ 5: การเขียนโปรแกรมเชิงวัตถุ (OOP) เบื้องต้น
// ==========================================
const runExercise5 = () => {
    class Student {
        constructor(stdID, stdName, dept, fac) {
            this.stdID = stdID;
            this.stdName = stdName;
            this.dept = dept;
            this.fac = fac;
        }

        study() {
            return "นักศึกษากำลังเรียน";
        }
    }

    const student1 = new Student("660001", "กิตติ", "วิทยาการคอมพิวเตอร์", "วิทยาศาสตร์และเทคโนโลยี");

    // จัดรูปแบบหลายบรรทัดด้วย Template Literals
    const resultMessage = `
        ผลการเรียก Method: ${student1.study()} <br>
        ข้อมูล Object: รหัสนักศึกษา ${student1.stdID}, ชื่อ ${student1.stdName}, สาขา${student1.dept}, คณะ${student1.fac}
    `;

    document.getElementById("output5").innerHTML = resultMessage;

    // แสดงผลใน Console
    console.log("=== ข้อที่ 5: การเขียนโปรแกรมเชิงวัตถุ (OOP) ===");
    console.log("ผลการเรียก study():", student1.study());
    console.log("ข้อมูล Object:", student1);
};