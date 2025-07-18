const readline = require("readline");

const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sc.question('Gender Name: ', (userGender) => {
    sc.question('Enter Experience. in numbers: ', (userExperience) => {
        sc.question('Enter Study: ug and pg: ', (userStudy) => {
            const gen = userGender.toLowerCase();
            const exp = parseInt(userExperience);
            const study = userStudy.toLowerCase();
            // salary(gen, exp, study);
            getSalary(gen, exp, study);
            sc.close();
        });
    });
});


function salary(gen, exp, study) {
    if (gen == 'm' || gen == 'M') {
        if (exp >= 0 && exp >= 10 && study == 'pg') {
            console.log(`Qualifications: Post Graduate, Salary: 15000`);
        }
        if (exp >= 0 && exp >= 10 && study == 'ug') {
            console.log(`Qualifications: Under Graduate, Salary: 10000`);
        }
        if (exp >= 0 && exp < 10 && study == 'pg') {
            console.log(`Qualifications: Post Graduate, Salary: 10000`);
        }
        if (exp >= 0 && exp < 10 && study == 'ug') {
            console.log(`Qualifications: Under Graduate, Salary: 7000`);
        }
    }
    if (gen == 'f' || gen == 'F') {
        if (exp >= 0 && exp >= 10 && study == 'pg') {
            console.log(`Qualifications: Post Graduate, Salary: 12000`);
        }
        if (exp >= 0 && exp >= 10 && study == 'ug') {
            console.log(`Qualifications: Under Graduate, Salary: 9000`);
        }
        if (exp >= 0 && exp < 10 && study == 'pg') {
            console.log(`Qualifications: Post Graduate, Salary: 10000`);
        }
        if (exp >= 0 && exp < 10 && study == 'ug') {
            console.log(`Qualifications: Under Graduate, Salary: 6000`);
        }
    }
}
function getSalary(gen, exp, study) {
    const salaries = {
        m: {
            ug: exp >= 10 ? 15000 : 10000,
            pg: exp > 10 ? 19000 : 15000
        },
        f: {
            ug: exp >= 10 ? 12000 : 10000,
            pg: exp > 10 ? 15000 : 15000,
        }
    }
    study === 'pg' ? 'Post Graduate' : 'Under Graduate';
    console.log(salaries[gen]?.[study]);

}