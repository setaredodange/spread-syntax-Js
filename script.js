
// spread syntax Array

let numbers =[1, 2, 3, 4, 5, 6]

// numbers.forEach(number=> console.log(number))



// let copyNumbers = numbers


// copyNumbers.push(7);

// console.log('numbers:', numbers);
// console.log('copy numbers:', copyNumbers);

console.log(...numbers) // 1 2 3 4 5 6

let copyNumbers = [...numbers]

// console.log(copyNumbers);


copyNumbers.push(7);

console.log('numbers:', numbers);
console.log('copy numbers:', copyNumbers);

console.log(copyNumbers);


///// 
let nums1 = [1, 2, 3, 4]
let nums2 = [5, 6, 7, 8]

let allNumbers = [...nums1, ...nums2]

console.log(allNumbers); // 1 2 3 4 5 6 7 8
 


// spread syntax Objects

let user = {id:1, name:'Ali', age:22}
let newUsers = {... user}


newUsers.age = 24
console.log('user:', user);
console.log('newUsers:', newUsers);


