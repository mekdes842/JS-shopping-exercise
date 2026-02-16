const age=22;
const subtotal=150;
let discountedSubtotal;
let salesTax;
let region=prompt("Enter your region(East/West/South/North)");
let eligibility;
let finalPrice;
if (region=="East"){
    eligibility="yes";
    discountedSubtotal=subtotal-15
    salesTax=0.08*discountedSubtotal
    finalPrice=discountedSubtotal+salesTax;
    console.log("You are eligible for the region discount");
    console.log("Final price to pay", finalPrice);
}
else{
    eligibility="No";
    salesTax=0.08*subtotal
    finalPrice=subtotal+salesTax;
    console.log("You are not eligible for the region discount");
    console.log("Final price to pay", finalPrice);
}