//Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong input.

let gender = prompt("Enter the M,m or f,F: ");

if (gender == 'm' || gender == 'M') alert('Good Moring Sir..');
else if (gender == 'f' || gender == 'F') alert('Good Morning Mam...');

alert('Please Enter the Correct Data.');
