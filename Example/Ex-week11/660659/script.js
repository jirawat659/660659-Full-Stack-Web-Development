const output = document.getElementById("output");

// ฟังก์ชันช่วยแสดงผลทั้ง 2 ที่
function showResult(title, data) {
  // แสดงบนหน้าเว็บ
  output.textContent = title + "\n" + data;

  // แสดงใน console
  console.log(title);
  console.log(data);
}

// =========================
// ข้อที่ 1
// =========================
function showQ1() {
  let fruits = ["ส้ม", "มะม่วง", "ลำไย"];
  fruits.push("แตงโม");
  fruits.unshift("แอปเปิ้ล");

  showResult("ข้อที่ 1:", fruits.join(", "));
}

// =========================
// ข้อที่ 2
// =========================
function showQ2() {
  let employees = [
    { name: "กรภัทร", job: "นักบิน", salary: 150000 },
    { name: "วารี", job: "นักพัฒนา", salary: 55000 },
    { name: "นรินทร์", job: "นักวิเคราะห์ระบบ", salary: 45000 },
    { name: "กิตติ", job: "พยาบาล", salary: 35000 },
    { name: "สิตา", job: "แพทย์", salary: 75000 }
  ];

  let filtered = employees.filter(emp => emp.salary >= 50000);
  let names = filtered.map(emp => emp.name);

  showResult("ข้อที่ 2:", names.join(", "));
}

// =========================
// ข้อที่ 3
// =========================
function showQ3() {
  let data = ["Avocado", "Banana", "Coconut", "Durian", "Kiwi"];
  data.splice(1, 2, "Lemon");

  showResult("ข้อที่ 3:", data.join(", "));
}

// =========================
// ข้อที่ 4
// =========================
function showQ4() {
  let scores = [70, 5, 75, 10, 80, 95, 25, 30, 15, 45];
  let result = "";

  console.log("ข้อที่ 4:");
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 50) {
      result += scores[i] + " : ผ่าน\n";
      console.log(scores[i] + " : ผ่าน");
    } else {
      result += scores[i] + " : ไม่ผ่าน\n";
      console.log(scores[i] + " : ไม่ผ่าน");
    }
  }

  output.textContent = "ข้อที่ 4:\n" + result;
}

// =========================
// ข้อที่ 5
// =========================
function showQ5() {
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

  let student1 = new Student(
    "660001",
    "กิตติ",
    "วิทยาการคอมพิวเตอร์",
    "วิทยาศาสตร์และเทคโนโลยี"
  );

  let result =
    "รหัส: " + student1.stdID + "\n" +
    "ชื่อ: " + student1.stdName + "\n" +
    "สาขา: " + student1.dept + "\n" +
    "คณะ: " + student1.fac + "\n" +
    "สถานะ: " + student1.study();

  showResult("ข้อที่ 5:", result);
}