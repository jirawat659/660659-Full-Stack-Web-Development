const calculatePrice = (price, vat = 0.07) => {
return price + (price * vat);
};

const showOrderDetails = () => {
const customerName = "Jirawat Junlawatilert";
const item1 = "Apple";
const item2 = "ปลาบู่";
const item3 = "ไก่แจ้ แถมซุ้ม";
const item4 = "Ant";
const item5 = "Bottle";

const formatMessage = (customerName, ...items) => {
const totalPrice = 1000;
const netPrice = calculatePrice(totalPrice);

return `เรียนคุณ ${customerName}, <br>
คุณได้ทำการสั่งซื้อสินค้าจำนวนทั้งหมด ${items.length} รายการ <br>
ยอดชำระสุทธิ (รวมภาษีมูลค่าเพิ่ม 7%) คือ ${netPrice} บาท`;
};

const message = formatMessage(customerName, item1, item2, item3, item4, item5);
document.getElementById("result").innerHTML = message;
};