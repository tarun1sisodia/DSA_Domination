//Shop discount


let money = prompt('Enter the price To get the Discount..');

let dis = 0;
(() => {

    if (money >= 0 && money <= 5000) dis = 0;
    else if (money > 5000 && money <= 7000) dis = 5;
    else if (money > 7000 && money <= 10000) dis = 10;
    else if (money > 10000) dis = 25;
    else
        alert("invalid Input Please Check your Price.")

    let discountprice = money - (dis * money) / 100;
    
    alert(`Discount: ${discountprice} & Total Payable Amount is: ${money}`);
})();

