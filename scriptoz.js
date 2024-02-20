



// const hello = () => {
//     console.log("hello");
// }
// hello();

// const  hello = (x) =>  console.log(x);

// hello ("hello");

// const arr = [1,2,3,4,,5]

// arr.forEach(() =>{

// })


// const  arr = [1,2,3,4,5,6,7]
// const result  = arr.pop()
// const result2  = arr.pop()

// console.log(arr);
// console.log(result);
// console.log(result2);


// const arrStr = ["Sema", "Zubeyde", "Huseyn", "Arzu"]

// const result  =  arr.push(20);
// const result = arr.shift();
// const result = arr.unshift(20);

// const newStr = arrStr.join();
//  const news = arrStr.toString();



// console.log(news);
// console.log(result);


// const arr1 = [1,2]
// const arr2 = [3,4]

// const newArr = arr1.concat(arr2)
// console.log(newArr);



// const arr = [1,2,3,4,5,6,7]

// const newArr = arr.slice(1,3);

// console.log(newArr);

// const arr  = [1,2,3,4,5,6,7]
// const newArr = arr.splice(0,4)

// console.log(newArr);
// console.log(arr);


// const arr = [
//   [  [1,2],
//     [9,10],
//   ]
//   [3,4],
//   [5,6],

// ]

// const result =arr.flat();
// console.log(result);
// console.log(arr);


// const athletes = [
//   {
//     name: "Usain Bolt",
//     sport: "Track and Field",
//     hasWorldRecord: true,
//     gender: "Male",
//     age: 35,
//     totalMedals: 8,
//     country: "Jamaica",
//   },
//   {
//     name: "Simone Biles",
//     sport: "Gymnastics",
//     hasWorldRecord: false,
//     gender: "Female",
//     age: 25,
//     totalMedals: 12,
//     country: "United States",
//   },
//   {
//     name: "Michael Phelps",
//     sport: "Swimming",
//     hasWorldRecord: true,
//     gender: "Male",
//     age: 37,
//     totalMedals: 28,
//     country: "United States",
//   },
//   {
//     name: "Katie Ledecky",
//     sport: "Swimming",
//     hasWorldRecord: true,
//     gender: "Female",
//     age: 25,
//     totalMedals: 10,
//     country: "United States",
//   },
//   {
//     name: "Allyson Felix",
//     sport: "Track and Field",
//     hasWorldRecord: false,
//     gender: "Female",
//     age: 36,
//     totalMedals: 9,
//     country: "United States",
//   },
//   {
//     name: "Nadia Comăneci",
//     sport: "Gymnastics",
//     hasWorldRecord: true,
//     gender: "Female",
//     age: 60,
//     totalMedals: 9,
//     country: "Romania",
//   },
//   {
//     name: "Birgit Fischer",
//     sport: "Canoeing",
//     hasWorldRecord: true,
//     gender: "Female",
//     age: 60,
//     totalMedals: 12,
//     country: "Germany",
//   },
//   {
//     name: "Mariana Pajón",
//     sport: "Cycling",
//     hasWorldRecord: false,
//     gender: "Female",
//     age: 30,
//     totalMedals: 4,
//     country: "Colombia",
//   },
//   {
//     name: "Wayne Gretzky",
//     sport: "Ice Hockey",
//     hasWorldRecord: false,
//     gender: "Male",
//     age: 61,
//     totalMedals: 4,
//     country: "Canada",
//   },
//   {
//     name: "Yuna Kim",
//     sport: "Figure Skating",
//     hasWorldRecord: false,
//     gender: "Female",
//     age: 31,
//     totalMedals: 6,
//     country: "South Korea",
//   },
// ];


// function hasRecord(arr){
//   const filteredAthlete = arr.filter((item) => item.hasWorldRecord)
//   return filteredAthlete;
// }

// const result  = hasRecord(athletes);

// console.log(result);


// function medal(arr){
//   const filteredMedals = arr.map(
//     (item) =>  item.name

//     )
//   return filteredMedals;
// }

// const result = medal(athletes);
// console.log(result);





// bir arrayin en boyuk elementi
// bir arrayin en kicik elementi
// arrayin tek elementleri kvadrati cemi
// arrayin cut elementleri cub cemi
// arrayin tek elementleri sayi



// let number = [1, 2, 3, 4, 5,]


// let max = number[0]
// let min = number[0]

// let sum = 0;

// for (let i = 1; i < number.length; i++) {
//   if (number[i] > max){
//     max = number[i]
//   }
// }


// for (let i = 1; i < number.length; i++) {
//   if (number[i] < min){
//     min = number[i]
//   }
// }

// for (let i = 1; i < number.length; i++) {
//   if (number[i] % 2 === 1){
//     sum = sum + number[i]**2;
//   }


// }

// sum= sum+1;
// console.log(sum);

// for (let i = 1; i < number.length; i++) {
//   if (number[i] % 2 === 0){
//     sum = sum + number[i]**3;
//   }


// }

// console.log(sum);




// const numbers = [8, 19, 5, 6, 14, 9, 13,23,49,33];

// const odds = numbers.filter((num) => num % 2 === 1);

// console.log(odds);
// console.log(odds.length);


// --------------------------------------------------------------------------------------------------------
// const employees = [
//   {
//     id: 1,
//     name: "Samir",
//     department: "IT",
//     salary: 3000,
//   },
//   {
//     id: 2,
//     name: "RIzvan",
//     department: "HR",
//     salary: 1100,
//   },
//   {
//     id: 3,
//     name: "Konul",
//     department: "Finance",
//     salary: 800,
//   },
//   {
//     id: 4,
//     name: "Abdulla",
//     department: "Marketing",
//     salary: 2500,
//   },
//   {
//     id: 5,
//     name: "Akif",
//     department: "IT",
//     salary: 3000,
//   },
// ];
// 1.Id'lərdən ibarər bir array yaratmaq(map)


// function employeesId(arr) {
//   const arrId = arr.map((item) => {
//     return item.id
//   })
//   return arrId;
// }

// const result = employeesId(employees)
// console.log(result);


// 2.ümumi maaşların cəmi(for)


// function totalSalary(arr){
//   const salary = arr.map((item) => {
//     return item.salary
//   })
//   return salary;
// }

// const result = totalSalary(employees)
// let sum =0; 
// for(let i=0; i<result.length; i++){
//   sum = sum+ result[i];
 
// }
// console.log(sum); 


//  3.IT bölməsində işləyənlərin adlarından ibarət array (birinci filter, filter etdiyinizi maplə adlarını yazdirmaq)

// function ItDepartment(arr){
//   const filteredName =arr.filter((item) => {
//     return item.name ==="IT";
//   })

//   return filteredName;
// }
  
// const result = ItDepartment(employees)


// function ItName(arr){
//   const employeesName =arr.map((item) => item.name
//   )

//   return employeesName;
// }

// const final =ItName(result)

// console.log(final);



// 4.Idsi 4 olanın adını və departmentini yazdırmaq(filter, map)


// function employessId(arr){
//   const IdNumber =arr.map((item) => {
//     return item.id === 4;
//   })
//   return IdNumber;
// }

// const result = employessId(employees)

// if(result =="true"){
//   function person(arr){
//     const filteredPerson = arr.filter((person) => {
//       return person.department && person.name
//     })
//     return filteredPerson;    
//   } 
//   const final = person(result)   
// }

// console.log(result);


// 5. Maaşı 1000 üzərində olanlar (filter)

// function salary(arr){
//   const filteredSalary =arr.filter(
//     (item) => item.salary >=1000
//   )
//   return filteredSalary;
// }
// const salaryResult= salary(employees);
// console.log(salaryResult);



// ul li 
// text content olur 


