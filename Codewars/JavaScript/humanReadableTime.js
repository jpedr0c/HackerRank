function humanReadable (seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;
    let hours = Math.floor(minutes / 60);
    minutes %= 60;
    
    if (hours >= 100)
      throw new Error("Time is very big");
    
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
  
    return `${hours}:${minutes}:${seconds}`;
}