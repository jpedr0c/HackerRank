function getDayName(dateString) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = new Date(dateString).getDay();
    const dayName = daysOfWeek[dayIndex];
    
    return dayName;
}