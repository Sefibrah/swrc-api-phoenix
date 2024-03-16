function getLatestPriceColumn(carGroup, days) {
  let price = null;
  if (carGroup.prices.length > 0) {
    let closestPriceColumn = null;
    for (let i = 0; i < carGroup.prices.length; i++) {
      const priceColumn = carGroup.prices[i];
      if (
        days >= carGroup.prices[i + 1]?.minDays &&
        i <= carGroup.prices.length
      ) {
        continue;
      }
      closestPriceColumn = priceColumn;
      break;
    }
    priceColumn = carGroup.prices.find(
      (price) => closestPriceColumn.minDays === price.minDays
    );
    if (!priceColumn.isFixed) {
      price = priceColumn.amount * days;
    } else {
      price = priceColumn.amount;
    }
  }
  return parseFloat(price);
}

module.exports = {
  getLatestPriceColumn,
};
