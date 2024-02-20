




const employees = [
    {
      id: 1,
      name: "Samir",
      department: "IT",
      salary: 3000,
    },
    {
      id: 2,
      name: "RIzvan",
      department: "HR",
      salary: 1100,
    },
    {
      id: 3,
      name: "Konul",
      department: "Finance",
      salary: 800,
    },
    {
      id: 4,
      name: "Abdulla",
      department: "Marketing",
      salary: 2500,
    },
    {
      id: 5,
      name: "Akif",
      department: "IT",
      salary: 3000,
    },
  ];


  // 1.Id'lərdən ibarər bir array yaratmaq(map)
// 2.ümumi maaşların cəmi(for)
// 3.IT bölməsində işləyənlərin adlarından ibarət array (birinci filter, filter etdiyinizi maplə adlarını yazdirmaq)
// 4.Idsi 4 olanın adını və departmentini yazdırmaq(filter, map)
// 5. Maaşı 1000 üzərində olanlar (filter)




// 1.

// function employeesId(arr) {
//   const arrId = arr.map((item) => {
//     return item.id
//   })
//   return arrId;
// }

// const result = employeesId(employees)
// console.log(result);

// const userId = (arr) => {
//     const getId = arr.map((person) => person.id);
//     return getId;

// };
// console.log(userId(employees));




// 2.ümumi maaşların cəmi(for)-----------------------


// function totalSalary(arr){
//   const salary = arr.map((item) => {
//     return item.salary
//   })
//   return salary;
// }

// const result = totalSalary(employees)
// let sum =0; 
// for(let i=0; i<result.length; i++){
//   sum = sum + result[i];
 
// }
// console.log(sum); 


// const getSalary = (arr) => {
//     let sum =0;

//     for(let i=0; i<arr.length; i++){
//         sum += arr[i].salary
//     }

//     return sum;
// };

// console.log(getSalary(employees));


// 3.IT bölməsində işləyənlərin adlarından ibarət array (birinci filter, filter etdiyinizi maplə adlarını yazdirmaq)

// const getIt = (arr) => {
//     const departIt = arr.filter((person) => person.department === "IT").map((item)=> item.name );
//     return departIt;
// }

// console.log(getIt(employees));
// function ItDepartment(arr){
//     const filteredName =arr.filter((item) => item.department ==="IT" 
//     )
  
//     return filteredName;
//   }
    
//   const result = ItDepartment(employees)
  
  
//   function ItName(arr){
//     const employeesName =arr.map((item) => item.name
//     )
  
//     return employeesName;
//   }
  
//   const final =ItName(result)
  
//   console.log(final);



// 4.Idsi 4 olanın adını və departmentini yazdırmaq(filter, map)


// const getID = (arr) =>{
//     const personID= arr.filter((person) => person.id === 4).map((person)=> {
//         return{ad:person.name, departament:person.department}
//     })
//     return personID;
// }


// console.log(getID(employees));



// function employessId(arr){
//   const IdNumber =arr.filter((item) => item.id === 4
//   ).map((item) => {
//     return {ad:item.name, departament:item.department}
//   })
//   return IdNumber;
// }

// let result = employessId(employees)
// console.log(result);



// 5. Maaşı 1000 üzərində olanlar (filter)


// const getSalary = (arr) => {
//     const filtered = arr.filter((item) => item.salary >1000)
//     return filtered;
// } 
// console.log(getSalary(employees));





