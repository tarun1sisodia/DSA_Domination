/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    findPages(arr, k) {
        // code here
        const n = arr.length;
        let ans =-1;
        if(k>n) return -1;
        let sum = 0;
        for(let i =0; i<n;i++){
            sum += arr[i];
        }
        let start = 0, end = sum;
        function isValid(arr,n,k,maxAllowedPages){
            let count = 1, pages =0;
            for(let i=0;i<n;i++){
                
            if(arr[i]>maxAllowedPages) return false;
            if(arr[i]+pages <= maxAllowedPages)  pages += arr[i];
            else count++,pages = arr[i];
            }
            return count > k?false:true;
        }
        while(start<=end){
            const mid = Math.floor(start+(end-start)/2);
            if(isValid(arr,n,k,mid)){
                ans = mid; 
                end = mid-1;
            }
            else
            {
                start = mid+1;
            }
        }
        return ans;
        
    }
}

const SolutionInstance = new Solution([12, 34, 67, 90], 2);    
console.log(SolutionInstance.findPages([12, 34, 67, 90], 2));
console.log(SolutionInstance.findPages([15,17,20], 2));