// Restaurant.


function elevatedHotel() {
    let total = 0;
    return function hotel() {
        let n;
        do {
            n = +prompt('Enter 1 for Indian\n 2 for Russian\n 3 for Chiness');
            switch (n) {
                case 1:
                    alert("Welcome to India");
                    let indianMaal = +prompt('For Chole-Kulche 1\n for dal roti 2');
                    switch (indianMaal) {
                        case 1:
                            alert('Your Chole is ready and kulche is on the highway.');
                            total += 200;
                            break;
                        case 2:
                            alert('Dal m ghee aur roti with raiyata.');
                            total += 500;
                            break;

                        default:
                            break;
                    }
                    alert(`Pay the Amount ${total}`);
                    break;
                case 2:
                    alert("Welcome to Russia");
                    let russianMeal = +prompt('Enter 1 for pelmi & 2 for rasgulaa');

                    switch (russianMeal) {
                        case 1:
                            alert('Pelmi ye h ye baby');
                            total += 1000;
                            break;
                        case 2:
                            alert('Hayy mera RasGulla.');
                            total += 50;
                            break;

                        default:
                            break;
                    }
                    alert(`Pay the Amount ${total}`);
                    break;
                case 3:
                    alert("Welcome to China");
                    let nihaochina = +prompt('Enter 1 for Noodles & 2 for Manchurian');

                    switch (nihaochina) {
                        case 1:
                            alert('bs 2 Min for maggi');
                            total += 100;
                            break;
                        case 2:
                            alert('aaahaha Manchurian.');
                            total += 500;
                            break;

                        default:
                            break;

                    }
                    alert(`Pay the Amount ${total}`);
                default:
                    break;
            }
        } while (n !== 0)
    }
}

const food = elevatedHotel();

food();
food();