//Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)

let nameOfVoter = prompt('Name of Voter: ');
let ageOfVoter = parseInt(prompt('Age of Voter: '));

if (ageOfVoter >= 18 && ageOfVoter <= 90) alert('You are a valid Voter.');
else
    alert("You are not Voter now..");

