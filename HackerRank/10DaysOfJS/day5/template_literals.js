function sides(literals, ...expressions) {
    const a = expressions[0];
    const p = expressions[1];
    const delta = Math.sqrt((p * p) - (16 * a));
    
    const s1 = (p - delta) / 4;
    const s2 = (p + delta) / 4;
    
    return [s1, s2];
}