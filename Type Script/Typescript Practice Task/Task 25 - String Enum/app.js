"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "Placed";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
const statusChecker = (status) => {
    return `Current status: ${status.toUpperCase()}`;
};
console.log(statusChecker(OrderStatus.Shipped));
