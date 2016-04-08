/**
 * Created by ramon.cambeses on 4/8/2016.
 */
//Dynamic content functions & variables
var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

exports.getFortune = function() {
    return(fortuneCookies[ Math.floor(Math.random() * fortuneCookies.length)])
};

