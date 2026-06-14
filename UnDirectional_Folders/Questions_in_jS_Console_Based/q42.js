// print  weekday using switch

let week = prompt('Weekday.').toLowerCase();
switch (week) {
    case 'sunday':
        alert(`It's Funday`);

        break;
    case 'monday':
        alert(`It's monday`);

        break;
    case 'tuesday':
        alert(`It's tuesday`);

        break;
    case 'wednesday':
        alert(`It's wednesday`);
        break;
    case 'thursday':
        alert(`It's tursday`);
        break;
    case 'friday':
        alert(`It's friday`);
        break;
    case 'saturday':
        alert(`It's saturday`);
        break;
    default:
        break;
}