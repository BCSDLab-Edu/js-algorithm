function problem1(pobi, crong) {
    if (pobi[0] + 1 === pobi[1] && crong[0] + 1 === crong[1]){
        const po = compare(pobi);
        const cr = compare(crong);
        if (po > cr) {
            return 1;
        } else if (po < cr) {
            return 2;
        } else if (po === cr) {
            return 0;
        }
    } else return -1;
}

function compare(lst) {
    let ans = 0;
    
    for (let i = 0; i < lst.length; i++) {
        let a = 0;
        let b = 1;
        let num = lst[i];
        
        while (num !== 0) {
            const digit = num % 10;
            a += digit;
            b *= digit;
            num = Math.floor(num / 10);
        }
        ans = Math.max(ans, Math.max(a, b));
    }
    return ans;
}

module.exports = problem1;
