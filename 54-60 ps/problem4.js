const calculateDiscount = (price, discountPercent) => {
  let discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
};

// Shorter one-liner version:
// const calculateDiscount = (price, discountPercent) => price - (price * discountPercent) / 100;

// Test cases:
console.log(calculateDiscount(1000, 10)); // 900 (10% off of 1000)
console.log(calculateDiscount(500, 20));  // 400 (20% off of 500)
console.log(calculateDiscount(250, 50));  // 125 (50% off of 250)