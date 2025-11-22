/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function(piles, h) {
    function isValid(piles, currentSpeed, h){
        let hours = 0;
        for(let i = 0; i < piles.length; i++){
            hours += Math.ceil(piles[i] / currentSpeed);
        }
        return hours <= h;
    }
    
    let f = 1, speed = 0;
    // the time and space complexity of this logic is O(n log m) where n is number of piles and m is max pile size.
    // how can we less the time complexity further?
    // we can do this by reducing the search space for binary search.
    // we can set the left pointer to max pile size instead of 1.
    let l = Math.max(...piles);
    
    while(f <= l){
        const mid = Math.floor(f + (l - f) / 2);
        if(isValid(piles, mid, h)){
            speed = mid;
            l = mid - 1;
        }
        else {
            f = mid + 1;
        }
    }
    return speed;
};

const piles1 = [3,6,7,11], h1 = 8;
console.log(minEatingSpeed(piles1, h1)); // Output: 4

const piles2 = [30,11,23,4,20], h2 = 5;
console.log(minEatingSpeed(piles2, h2)); // Output: 30
