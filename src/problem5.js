function problem5(money) {
    let arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    let result = [];



    for(let i of arr){
        result.push(Math.floor(money/i));
        money = money % i;

    }

    return result;

}

module.exports = problem5;
