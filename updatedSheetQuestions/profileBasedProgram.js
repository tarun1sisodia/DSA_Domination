// Program 

// let role = ["admin", "developer", "manager", "intern"];

function accessLevel(role, exp) {
    if (role === "admin") {
        console.log("Full Access");
    }
    else if (role === "manager") {
        exp >= 5 ? console.log("High Access") : console.log("Low Access");
    }
    else if (role === "developer") {

        exp >= 3 ? console.log("High Access") : console.log("Low Access");
    }
    else if (role === "intern") {

        console.log("Limited Access");
    }
    else
        console.log("Invalid Role");
}

accessLevel("developer", 6);



