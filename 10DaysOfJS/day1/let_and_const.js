function main() {
    const r = readLine();
    const PI = Math.PI;
    const area = PI * (r * r);
    const perimeter = 2 * PI * r;

    console.log(area);
    console.log(perimeter);
    
    
    // This part below is not to be changed, it comes by default from HackerRank
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}