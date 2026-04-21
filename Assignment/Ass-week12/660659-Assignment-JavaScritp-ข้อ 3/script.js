// ข้อ 1: ระบบตัดเกรด
class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }
  calculateAverage() {
    return this.scores.reduce((a, s) => a + s, 0) / this.scores.length;
  }
  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    if (avg >= 50) return "D";
    return "F";
  }
}

function runQ1() {
  const name = document.getElementById('s1-name').value.trim() || "นักเรียน";
  const scores = document.getElementById('s1-scores').value.split(',').map(Number).filter(n => !isNaN(n));
  if (!scores.length) return show('out1', 'กรุณากรอกคะแนน');
  const s = new Student(name, scores);
  show('out1', `ชื่อ: ${s.name}\nคะแนน: [${scores.join(', ')}]\nเฉลี่ย: ${s.calculateAverage().toFixed(2)}\nเกรด: ${s.getGrade()}`);
}

// ข้อ 2: ปริมาตรทรงกลม
function sphereCalculator(radius) {
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  return parseFloat(volume.toFixed(2)).toLocaleString("th-TH");
}

function runQ2() {
  const r = parseFloat(document.getElementById('s2-r').value);
  if (isNaN(r) || r <= 0) return show('out2', 'กรุณากรอกรัศมีที่ถูกต้อง');
  show('out2', `ปริมาตรทรงกลม รัศมี ${r} = ${sphereCalculator(r)} หน่วยลูกบาศก์`);
}

// ข้อ 3: ระบบจัดการสต็อกสินค้า 
const warehouse = {
  products: [{ name: "Laptop", price: 30000, stock: 5 }],

  addItem(itemName, amount) {
    const item = this.products.find(p => p.name === itemName);
    if (!item) return "ไม่พบสินค้า";
    item.stock += amount;
    return `เพิ่ม ${itemName} ${amount} ชิ้น → stock: ${item.stock}`;
  },

  sellItem(itemName, amount) {
    const item = this.products.find(p => p.name === itemName);
    if (!item) return "ไม่พบสินค้า";
    if (amount > item.stock) {
      alert("สินค้าไม่พอ");
      return "สินค้าไม่พอ";
    }
    item.stock -= amount;
    return `ขาย ${itemName} ${amount} ชิ้น → stock: ${item.stock}`;
  },

  getTotalValue() {
    const total = this.products.reduce((acc, p) => acc + p.price * p.stock, 0);
    return total.toLocaleString("en-US");
  }
};

function runQ3(action) {
  const itemName = document.getElementById('s3-name').value.trim();
  const amount = parseInt(document.getElementById('s3-amount').value, 10);

  let r = "";
  if (action === 'total') {
    r = "มูลค่ารวม: " + warehouse.getTotalValue() + " บาท";
  } else {
    if (!itemName) return show('out3', "กรุณากรอกชื่อสินค้า");
    if (isNaN(amount) || amount <= 0) return show('out3', "กรุณากรอกจำนวนให้ถูกต้อง");

    if (action === 'add') {
      r = warehouse.addItem(itemName, amount);
    } else if (action === 'sell') {
      r = warehouse.sellItem(itemName, amount);
    }
  }
  show('out3', r);
}

// ข้อ 4: คำนวณค่าปรับคืนหนังสือ
function calculateFine(dueDateStr) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const due = new Date(dueDateStr); due.setHours(0, 0, 0, 0);
  const diff = Math.floor((today - due) / (1000 * 60 * 60 * 24));
  if (diff <= 0) return "คืนในเวลา ไม่มีค่าปรับ";
  return `เลยกำหนดมาแล้ว ${diff} วัน ค่าปรับรวม ${diff * 5} บาท`;
}

function runQ4() {
  const d = document.getElementById('s4-date').value;
  if (!d) return show('out4', 'กรุณากรอกวันที่');
  show('out4', calculateFine(d));
}

// ข้อ 5: ระบบตรวจคนเข้า
function checkEntry() {
  const age = parseInt(prompt("กรุณากรอกอายุ:"));
  if (isNaN(age)) return;
  if (age < 20) { alert("อายุไม่ถึงเกณฑ์"); return; }
  const hasCard = confirm("พกบัตรประชาชนมาด้วยใช่หรือไม่?");
  alert(hasCard ? "เชิญเข้างานได้" : "ไม่อนุญาตให้เข้าหากไม่มีบัตร");
}

// ข้อ 6: คำนวณราคาสุทธิพร้อมภาษี
function calcPrice() {
  const price = parseFloat(prompt("ราคาสินค้า:"));
  if (isNaN(price)) return;
  const disc = confirm("คุณมีคูปองส่วนลด 100 บาท ใช่หรือไม่?");
  const afterDisc = disc ? price - 100 : price;
  const total = afterDisc + afterDisc * 0.07;
  alert(`ราคาก่อน VAT: ${afterDisc.toFixed(2)} บาท\nราคาสุทธิ: ${total.toFixed(2)} บาท`);
}

// ข้อ 7: ระบบสั่งกาแฟ
const coffeeMenu = { "Latte": 50, "Espresso": 40 };

function orderCoffee() {
  const order = prompt("เมนูที่ต้องการ: Latte หรือ Espresso");
  if (!(order in coffeeMenu)) { alert("ขออภัย เราไม่มีเมนูนั้น"); return; }
  const cold = confirm("รับแบบเย็น (+10 บาท) หรือไม่?");
  const price = coffeeMenu[order] + (cold ? 10 : 0);
  alert(`สรุปเมนู: ${order} ${cold ? "เย็น" : "ร้อน"}\nราคาสุทธิ: ${price} บาท`);
}

// helper
function show(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.display = 'block';
  console.log(`[${id}]`, msg);
}
