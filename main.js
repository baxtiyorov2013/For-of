const arrayName = ['non', 'olma', 'aziza', 'Gul','mashina'];
const palindrom = [];
const palindromMas = [];

for (element of arrayName) {
    if (element.split("").reverse().join("") === element) {
        palindrom.push(element);
    }else {
        palindromMas.push(element);
    }
}
console.log(palindrom , "palindrom sozli massiv");   
console.log(palindromMas, "palindrom bolmagan sozli massiv");   