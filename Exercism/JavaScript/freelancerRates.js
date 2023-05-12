export function dayRate(ratePerHour) {
    return (ratePerHour * 8);
}

export function daysInBudget(budget, ratePerHour) {
    let result = budget / dayRate(ratePerHour);
    return Math.floor(result);
}

export function priceWithMonthlyDiscount(ratePerHour, days, discount) {
    const months = Math.floor(days / 22);
    const daysRemainder = days % 22;
    const pricePerMonth = 22 * dayRate(ratePerHour);
    const priceWithDiscount = Math.ceil((pricePerMonth * months) * (1 - discount));
    const realPrice = priceWithDiscount + (daysRemainder * dayRate(ratePerHour));
    
    return Math.ceil(realPrice);
}