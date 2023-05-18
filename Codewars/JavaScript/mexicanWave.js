function wave(str){
    const wave = [];
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
        wave.push(waveStr);
      }
    }
  
    return wave;
}