//Accept a day number between 1-7 and print the corresponding day name.

let day = prompt('Enter the Day:. ');
day = day.toLowerCase();
switch (day) {
    case 'sunday':
        alert('Aaj to m GTA 6 khelunga.. pure din...');
        break;
    case 'monday':
        alert('Aaj Puja Krte h Chalo..');
        break;
    case 'tuesday':
        alert('Hamuna Ji ki puja');
        break;
    case 'wednesday':
        alert('Kuch nhi bs Time Kat rha h');
        break;
    case 'thursday':
        alert('Thursday...');
        break;
    case 'friday':
        alert('Friday');
        break;
    case 'saturday':
        alert('Bs Ek aur din aur sunday.. phir.')
        break;

    default:
        break;
}
