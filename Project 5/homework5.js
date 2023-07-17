//////// Zadanie 1.

const Array1 = [
    { id: 1 , name: 'Penelope', surname: 'A' , pesel:'000000' , fieldOfStudy:'Law', grades: [1, 3, 5, 6, 3, 5] },
    { id: 2 , name: 'Brenda', surname: 'B' , pesel:'000001' , fieldOfStudy:'Architecture', grades: [5, 3, 5, 6, 2, 5] },
    { id: 3 , name: 'Celina', surname: 'C' , pesel:'000002' , fieldOfStudy:'Mathematics', grades: [3, 3, 4, 4, 4, 5] },
    { id: 4 , name: 'Harry', surname: 'D' , pesel:'000003' , fieldOfStudy:'Business', grades: [1, 1, 1, 1, 3, 1] },
    { id: 5 , name: 'Xavier', surname: 'E' , pesel:'000004' , fieldOfStudy:'Finances', grades: [2, 3, 2, 6, 6, 6] }
];

console.log(Array1);


//////// Zadanie 2.

const x = Math.floor(Math.random() * 6 + 1);
console.log(x);
const addNewStudent = Array1.push ({id: x , name1: 'Bianca', surname: 'F' , pesel:'000005' , fieldOfStudy:'Biology', grades: [2, 2, 2, 2, 2, 2]});
console.log(Array1);





////// Zadanie 3.

const x1 = Math.floor(Math.random() * 6 + 1);
console.log(x1);

const arrayLike = [
    { id: 1 , name: 'Penelope', surname: 'A' , pesel:'000000' , fieldOfStudy:'Law', grades: [1, 3, 5, 6, 3, 5] },
    { id: 2 , name: 'Brenda', surname: 'B' , pesel:'000001' , fieldOfStudy:'Architecture', grades: [5, 3, 5, 6, 2, 5] },
    { id: 3 , name: 'Celina', surname: 'C' , pesel:'000002' , fieldOfStudy:'Mathematics', grades: [3, 3, 4, 4, 4, 5] },
   { id: 4 , name: 'Harry', surname: 'D' , pesel:'000003' , fieldOfStudy:'Business', grades: [1, 1, 1, 1, 3, 1] },
    { id: 5 , name: 'Xavier', surname: 'E' , pesel:'000004' , fieldOfStudy:'Finances', grades: [2, 3, 2, 6, 6, 6] },
    {id: x1 , name: 'Bianca', surname: 'F' , pesel:'000005' , fieldOfStudy:'Biology', grades: [2, 2, 2, 2, 2, 2]}
];

console.log((Array.prototype.flat.call(arrayLike)));



////// Zadanie 4.


    function getMaxNote(array) {
        const bestGrades = array.map(({ grades }) =>
            grades.length > 0 ? Math.max(...grades) : 0
        );
        console.log(bestGrades);
    }
    
    getMaxNote([
        { 
            id: 1 , 
            name: 'Penelope',
            surname: 'A' , 
            pesel:'000000' , 
            fieldOfStudy:'Law', 
            grades: [1, 3, 5, 6, 3, 5] 
        },
    
                
        { 
            id: 2 , 
            name: 'Brenda', 
            surname: 'B' , 
            pesel:'000001' ,
            fieldOfStudy:'Architecture' ,
            grades: [5, 3, 5, 6, 2, 5] 
        },
    
       
        {       
            id: 3 ,
            name: 'Celina',
            surname: 'C' , 
            pesel:'000002' , 
            fieldOfStudy:'Mathematics',
            grades: [3, 3, 4, 4, 4, 5] 
        },
    
    
        { 
            id: 4 ,
             name: 'Harry', 
            surname: 'D' ,
             pesel:'000003' , 
             fieldOfStudy:'Business',
            grades: [1, 1, 1, 1, 3, 1] 
        },
    
    
            { 
                id: 5 ,
                 name: 'Xavier', 
                 surname: 'E' , 
                 pesel:'000004' , 
                 fieldOfStudy:'Finances', 
                  grades: [2, 3, 2, 6, 6, 6] 
            },
    
    
            {
                id: 6 , 
                name: 'Bianca',
                surname: 'F' , 
                pesel:'000005' , 
                fieldOfStudy:'Biology', 
                grades: [2, 2, 2, 2, 2, 2]
            },
    ]);



//


    const arr = [
        { 
            id: 1 , 
            name: 'Penelope',
            surname: 'A' , 
            pesel:'000000' , 
            fieldOfStudy:'Law', 
            grades: [1, 3, 5, 6, 3, 5] 
        },
    
                
        { 
            id: 2 , 
            name: 'Brenda', 
            surname: 'B' , 
            pesel:'000001' ,
            fieldOfStudy:'Architecture' ,
            grades: [5, 3, 5, 6, 2, 5] 
        },
    
       
        {       
            id: 3 ,
            name: 'Celina',
            surname: 'C' , 
            pesel:'000002' , 
            fieldOfStudy:'Mathematics',
            grades: [3, 3, 4, 4, 4, 5] 
        },
    
    
        { 
            id: 4 ,
             name: 'Harry', 
            surname: 'D' ,
             pesel:'000003' , 
             fieldOfStudy:'Business',
            grades: [1, 1, 1, 1, 3, 1] 
        },
    
    
            { 
                id: 5 ,
                 name: 'Xavier', 
                 surname: 'E' , 
                 pesel:'000004' , 
                 fieldOfStudy:'Finances', 
                  grades: [2, 3, 2, 6, 6, 6] 
            },
    
    
            {
                id: 6 , 
                name: 'Bianca',
                surname: 'F' , 
                pesel:'000005' , 
                fieldOfStudy:'Biology', 
                grades: [2, 2, 2, 2, 2, 2]
            },
    ];
    
        
        const getMinNote = (arr) =>
        arr.map((m) => {
          if (!m.grades.length) {
            return 0;
          }
          return Math.min(...m.grades);
        });
      console.log(getMinNote(arr));
    
       ///

       const student1 =  [{ 
        id: 1 , 
        name: 'Penelope',
        surname: 'A' , 
        pesel:'000000' , 
        fieldOfStudy:'Law', 
        grades: [1, 3, 5, 6, 3, 5] 
    }];

    function getMaxNote1(){
        let array = [1, 3, 5, 6, 3, 5]
        let max = array[0]
        for(let i=0; i<array.length;i++){
            if (array [i]>max){
                max = array[i]
            }
        }
        console.log(`Max note for student Penelope A is ${max}`)
    }
    getMaxNote1();


function getMinNote1(){
let array = [1, 3, 5, 6, 3, 5]
let min = array[0]
for(let i=0; i<array.length;i++){
    if (array [i]< min){
        min = array[i]
    }
}
console.log(`Min note for student Penelope A is ${min}`)
}
getMinNote1();



const student2 =  [{ 
        
    id: 2 , 
    name: 'Brenda', 
    surname: 'B' , 
    pesel:'000001' ,
    fieldOfStudy:'Architecture' ,
    grades: [5, 3, 5, 6, 2, 5] 
},
];

function getMaxNote2(){
let array = [5, 3, 5, 6, 2, 5]
let max = array[0]
for(let i=0; i<array.length;i++){
if (array [i]>max){
    max = array[i]
}
}
console.log(`Max note for student Brenda B is ${max}`)
}
getMaxNote2();


function getMinNote2(){
let array = [5, 3, 5, 6, 2, 5]
let min = array[0]
for(let i=0; i<array.length;i++){
if (array [i]< min){
min = array[i]
}
}
console.log(`Min note for student Brenda B is ${min}`)
}
getMinNote2();


const student3 =  [{ 
        
    id: 3 ,
    name: 'Celina',
    surname: 'C' , 
    pesel:'000002' , 
    fieldOfStudy:'Mathematics',
    grades: [3, 3, 4, 4, 4, 5] 
    },
];

function getMaxNote3(){
let array = [3, 3, 4, 4, 4, 5] 
let max = array[0]
for(let i=0; i<array.length;i++){
    if (array [i]>max){
        max = array[i]
    }
}
console.log(`Max note for student Celina C is ${max}`)
}
getMaxNote3();


function getMinNote3(){
let array = [3, 3, 4, 4, 4, 5] 
let min = array[0]
for(let i=0; i<array.length;i++){
if (array [i]< min){
min = array[i]
}
}
console.log(`Min note for student Celina C is ${min}`)
}
getMinNote3();


const student4 =  [
         
        
    {   id: 4 ,
        name: 'Harry', 
        surname: 'D' ,
        pesel:'000003' , 
        fieldOfStudy:'Business',
        grades: [1, 1, 1, 1, 3, 1] }
];

function getMaxNote4(){
    let array = [1, 1, 1, 1, 3, 1]
    let max = array[0]
    for(let i=0; i<array.length;i++){
        if (array [i]>max){
            max = array[i]
        }
    }
    console.log(`Max note for student Harry D is ${max}`)
}
getMaxNote4();


function getMinNote4(){
let array = [1, 1, 1, 1, 3, 1]
let min = array[0]
for(let i=0; i<array.length;i++){
if (array [i]< min){
    min = array[i]
}
}
console.log(`Min note for student Harry D is ${min}`)
}
getMinNote4();


const student5 =  [
         
        
    {  
        id: 5 ,
        name: 'Xavier', 
        surname: 'E' , 
        pesel:'000004' , 
        fieldOfStudy:'Finances', 
        grades: [2, 3, 2, 6, 6, 6]  }
];

function getMaxNote5(){
    let array = [2, 3, 2, 6, 6, 6]
    let max = array[0]
    for(let i=0; i<array.length;i++){
        if (array [i]>max){
            max = array[i]
        }
    }
    console.log(`Max note for student Xavier E is ${max}`)
}
getMaxNote5();


function getMinNote5(){
let array = [2, 3, 2, 6, 6, 6]
let min = array[0]
for(let i=0; i<array.length;i++){
if (array [i]< min){
    min = array[i]
}
}
console.log(`Min note for student Xavier E is ${min}`)
}
getMinNote5();


const student6 =  [
         
        
    {  
        id: 6 , 
        name: 'Bianca',
        surname: 'F' , 
        pesel:'000005' , 
        fieldOfStudy:'Biology', 
        grades: [2, 2, 2, 2, 2, 2] }
];

function getMaxNote6(){
    let array = [2, 2, 2, 2, 2, 2]
    let max = array[0]
    for(let i=0; i<array.length;i++){
        if (array [i]>max){
            max = array[i]
        }
    }
    console.log(`Max note for student Bianca F is ${max}`)
}
getMaxNote6();


function getMinNote6(){
let array = [2, 2, 2, 2, 2, 2]
let min = array[0]
for(let i=0; i<array.length;i++){
if (array [i]< min){
    min = array[i]
}
}
console.log(`Min note for student Bianca F is ${min}`)
}
getMinNote6();