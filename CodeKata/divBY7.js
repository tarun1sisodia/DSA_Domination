/* Check Divisibility by 7

Geekoin10
Easy
Topics
Problem Statement:
Given a number N, print yes if the number is a multiple of 7 else print no.


Input Description:
The input consists of a single integer N.


Output Description:
Print 'yes' if N is a multiple of 7, otherwise print 'no'.


Sample Input:
49


Sample Output:
yes */

function multiCheck(n) {
  return n % 7 === 0 ? "yes" : "no";
}

console.log(multiCheck(14));
