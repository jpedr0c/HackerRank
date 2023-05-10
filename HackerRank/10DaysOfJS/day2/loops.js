function vowelsAndConsonants(s) {
    const { vowels, consonants } = [...s].reduce((result, letter) => {
        if ('aeiou'.includes(letter.toLowerCase()))
            result.vowels.push(letter);
        else
            result.consonants.push(letter); 
        
        return result;      
    }, { vowels: [], consonants: []});
    const finalResult = vowels.join('\n') + "\n" + consonants.join('\n');
    console.log(finalResult);
}