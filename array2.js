

// const num = [1,2,3,4,5,5,6,7,8,9];

// const findEl =num.findIndex((item) => item > 4);

// console.log(findEl);


// num.forEach((item) => {
//     console.log(item);
// })


// const incNum = num.includes(90);
// console.log(incNum);


// const result = num.indexOf(4);
// console.log(result);



// const array = [23,4,6,7,4,2,1,9,]

// const result =  array.sort((a,b) => a-b);
// console.log(result);

// const arrName= ["Aysel", "Gunay", "Celil", "Memmed","Nubar"]


// console.log(arrName.sort().reverse());


// let arr = [1,2,3,4,5,5,6,];


// const result = arr.some((item) => item >3)
// console.log(result);
// const result = arr.every((item) => item >3)
// console.log(result);



//   Ev tapsiriqlari

const athletes = [
    {
        name: "Usain Bolt",
        sport: "Track and Field",
        hasWorldRecord: true,
        gender: "Male",
        age: 35,
        totalMedals: 8,
        country: "Jamaica",
    },
    {
        name: "Simone Biles",
        sport: "Gymnastics",
        hasWorldRecord: false,
        gender: "Female",
        age: 25,
        totalMedals: 12,
        country: "United States",
    },
    {
        name: "Michael Phelps",
        sport: "Swimming",
        hasWorldRecord: true,
        gender: "Male",
        age: 37,
        totalMedals: 28,
        country: "United States",
    },
    {
        name: "Katie Ledecky",
        sport: "Swimming",
        hasWorldRecord: true,
        gender: "Female",
        age: 25,
        totalMedals: 10,
        country: "United States",
    },
    {
        name: "Allyson Felix",
        sport: "Track and Field",
        hasWorldRecord: false,
        gender: "Female",
        age: 36,
        totalMedals: 9,
        country: "United States",
    },
    {
        name: "Nadia Comăneci",
        sport: "Gymnastics",
        hasWorldRecord: true,
        gender: "Female",
        age: 60,
        totalMedals: 9,
        country: "Romania",
    },
    {
        name: "Birgit Fischer",
        sport: "Canoeing",
        hasWorldRecord: true,
        gender: "Female",
        age: 60,
        totalMedals: 12,
        country: "Germany",
    },
    {
        name: "Mariana Pajón",
        sport: "Cycling",
        hasWorldRecord: false,
        gender: "Female",
        age: 30,
        totalMedals: 4,
        country: "Colombia",
    },
    {
        name: "Wayne Gretzky",
        sport: "Ice Hockey",
        hasWorldRecord: false,
        gender: "Male",
        age: 61,
        totalMedals: 4,
        country: "Canada",
    },
    {
        name: "Yuna Kim",
        sport: "Figure Skating",
        hasWorldRecord: false,
        gender: "Female",
        age: 31,
        totalMedals: 6,
        country: "South Korea",
    },
];

// 4. Atletlərin adları və ölkələri olan obyektlərdən ibarət array yaratmaq.(map)

// 5. Bütün atletlərin ümumi medallarının sayını hesablamaq.(forEach), for ile de yazilsin

// 6. Atletlərin medallarının sayının artım sırasına görə sıralanmış array yaratmaq.(sort)

// 7. Atletlərin adlarının əlifba sırası ilə sıralanmış array yaratmaq.(map,sort)

// 8. Atletin adına əsasən spesifik obyekti tapıb console-a yazmaq.(find)

// 9. Hər hansı bir  atletin dünya rekordu olub olmamasını yoxlamaq.(find,if)

// // 10. Amerikalı və dünya rekordu olan atletlərin adlarından ibarət array yaratmaq.(filter,map)




// ------------------------------------

// 4. Atletlərin adları və ölkələri olan obyektlərdən ibarət array yaratmaq.(map)


//  const getAd = (arr)=>{
//     const array = arr.map((item) => {
//         return{ ad:item.name, olke:item.country}
//     })
//     return array;
//  }

//  console.log(getAd(athletes));


// 5. Bütün atletlərin ümumi medallarının sayını hesablamaq.(forEach), for ile de yazilsin



// num.forEach((item) => {
//     console.log(item);
// })


// const array = (arr) =>{
//     const totalMedals =arr.forEach(element => {
//         console.log(element.totalMedals);
//     });
//     return totalMedals;
// }
// console.log(array(athletes));


// for(let i=0; i<athletes.length; i++){
//     console.log(athletes[i].totalMedals);
// }


// 6. Atletlərin medallarının sayının artım sırasına görə sıralanmış array yaratmaq.(sort)



// const result =  array.sort((a,b) => a-b);
// console.log(result);


// const atletMedals = (arr) =>{
//     const medals =arr.map((item) => item.totalMedals).sort((a,b)=> a-b)
//     return medals;
// }

// console.log(atletMedals(athletes));


// 7. Atletlərin adlarının əlifba sırası ilə sıralanmış array yaratmaq.(map,sort)

// const getNames = (arr) => {
//     const names = arr.map((item) => item.name).sort()
//     return names;
// }

// console.log(getNames(athletes));

// 8. Atletin adına əsasən spesifik obyekti tapıb console-a yazmaq.(find)




// const result = athletes.find((item) => item.name === "Usain Bolt");

// console.log(result);



// 9. Hər hansı bir  atletin dünya rekordu olub olmamasını yoxlamaq.(find,if)

// const atlet = (arr, name) => {
//     const worldRecord = arr.find((person) => person.name === name )
//         if(worldRecord.hasWorldRecord){
//             console.log(` ${worldRecord.name} -  Bu sexsin ${worldRecord.totalMedals} recordu var`)
            
//         } else{
//             console.log(`${worldRecord.name} -Bu sexsin recordu yoxdu`)
//         }   
    
// }
// atlet(athletes, "Usain Bolt");




// // 10. Amerikalı və dünya rekordu olan atletlərin adlarından ibarət array yaratmaq.(filter,map)


// const getNames = (arr) => {
//     const filtered = arr.filter((item) => item.country === "United States" && item.hasWorldRecord === true).
//         map((person) => {
//             return { country: person.country, name: person.name, record: person.hasWorldRecord }
//         })
//     return filtered;
// }

// console.log(getNames(athletes));



// Dom

// const listGroup = document.querySelector(".list-group");

// const li = document.createElement("li");
// li.textContent ="Todo 1";
// li.classList = "list-group-item active";

// listGroup.appendChild(li);
// listGroup.style.color ="red";






