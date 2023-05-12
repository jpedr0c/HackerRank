export function timeToMixJuice(name) {
    switch(name){
      case "Pure Strawberry Joy":
        return 0.5;
        break;
      case "Energizer":
      case "Green Garden":
        return 1.5;
        break;
      case "Tropical Island":
        return 3;
        break;
      case "All or Nothing":
        return 5;
        break;
      default:
        return 2.5;
        break;
    }
}

export function limesToCut(wedgesNeeded, limes) {
    let count = 0;
    for (let result = 0; count < limes.length; count++){
      if (result >= wedgesNeeded)
        return count;
      else if (limes[count] == "small")
        result += 6;
      else if (limes[count] == "medium")
        result += 8;
      else
        result += 10;
    }
    return count;
}

export function remainingOrders(timeLeft, orders) {
    while (timeLeft > 0){
      timeLeft -= timeToMixJuice(orders[0]);
      orders.shift();
    }
    return orders;
}