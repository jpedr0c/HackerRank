export function totalBirdCount(birdsPerDay) {
    let result = 0;
    for (let i = 0; i < birdsPerDay.length; i++)
      result += birdsPerDay[i];

    return result
}

export function birdsInWeek(birdsPerDay, week) {
    const startDay = (week - 1) * 7;
    const endDay = startDay + 7;
    let result = 0;
    
    for (let i = startDay; i < endDay; i++)
      result += birdsPerDay[i];

    return result;
}

export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2)
      birdsPerDay[i]++;

    return birdsPerDay;
}