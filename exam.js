function tune(arr) {
    const standard_frequencies = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];

    const responses = {"0": "OK", "1": ">•", "-1": "•<", "-2": "•<<", "2": ">>•", "100": "-"};
    const tune = [];
    for (let i = 0; i < standard_frequencies.length; i++) {
        tune.push(responses[decision_function(standard_frequencies[i], arr[i]).toString()]);
    }
    return tune;
}

function deviation(etalon, value) {
    return (etalon - value) / etalon * 100;
}

function decision_function(etalon, value) {

    const dev = deviation(etalon, value);
    if (dev === 100) {
        return 100;
    }
    return ((Math.abs(dev) >= 3? 1: 0) + 1) * Math.sign(dev);
}
















// console.log(Math.sign(0) * -10);