/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function(piles, h) {
    function isValid(piles, currentSpeed, h){
        let hours = 0;
        for(let i = 0; i < piles.length; i++){
            // using Math.ceil to round up the hours needed for each pile at current speed of eating bananas 
            // because Koko can't eat partial bananas in an hour
            // each pile will take ceil(pileSize / currentSpeed) hours to finish
            // for example, if pile size is 10 and speed is 3, it will take ceil(10/3) = 4 hours
            // similarly, if pile size is 5 and speed is 2, it will take ceil(5/2) = 3 hours
            // thus we sum up all these hours to get total hours needed at current speed
            // this helps us determine if Koko can finish all piles within h hours at this speed
            // this is crucial for the binary search logic to find the minimum valid speed
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
