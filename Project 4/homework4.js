//Zadanie 1 - 1 punkt
//Stwórz funkcję 'add', która przyjmuje 2 parametry - 'a' i 'b' oraz zwraca ich sumę. 
//Funkcja powinna sprawdzić, czy oba parametry są typu 'number' (podpowiedź: operator typeof)

function sum(a, b) {
	return a + b;
}

const a = 2;
const b = 3;
const myAddedNumbers = sum(a, b);

console.log(myAddedNumbers);
console.log(typeof (myAddedNumbers))

// Zadanie 2 - 3 punkty
// Wykonaj funkcje odejmującą, mnożącą oraz dzielącą 2 wartości przekazane w parametrze (3 funkcje).

// Wynik arytmetyczny powinien wyświetlić się na konsoli Jeżeli któryś z zadanych parametrów nie będzię liczbą, funkcja powinna zwrócić napis: "Niepoprawny parametr". 
// Jeżeli funkcja zostanie uruchomiona tylko z jednym parametrem, powinien zostać on wyświetlony jako wynik działania funkcji.

function subtraction(e, f) {
	return e - f;
}

const e = 2;
const f = 1;
const myNumbers = subtraction(e, f)
console.log(myNumbers);


if (isNaN(e) || isNaN(f)) {
    console.log("Niepoprawny parametr");
  } else {
    console.log("");
  }

  if (console.log(e)||console.log(f)){
    console.log(myNumbers);
} else {console.log("");

}



function multiplication(h, j){
    return h * j;
}
const h = 2;
const j = 2;
const myNumbers2 = multiplication(h, j);
console.log(myNumbers2);
console.log(typeof(myNumbers2))

if (isNaN(h) || isNaN(j)) {
    console.log("Niepoprawny parametr");
  } else {
    console.log("");
  }


  if (console.log(h)||console.log(j)){
    console.log(myNumbers);
} else {console.log("");

}




function division(k, l){
    return k / l;
}
const k = 10;
const l = 2;
const myNumbers3 = division(k, l);
console.log(myNumbers3);
console.log(typeof(myNumbers3))

if (isNaN(k) || isNaN(l)) {
    console.log("Niepoprawny parametr");
  } else {
    console.log("");
  }

  if (console.log(k)||console.log(l)){
    console.log(myNumbers);
} else {console.log("");

}


//Zadanie 3 - 3 punkty
//Stwórz funkcje która przyjmie 3 argument (a,b,c). Na podstawie wprowadzonych danych, wypisz w konsoli komunikat: 'Największa liczba to: liczba'


function maximum(){
    let array = [1,2,3]
    let max = array[0]
    for(let i=0; i<array.length;i++){
        if (array [i]>max){
            max = array[i]
        }
    }
    console.log(`Największa liczba to ${max}`)
}
maximum();

// Zadanie 4 - 3 punkty
// Stwórz funkcje która przyjmie 3 argumenty (age,height, weight). Na podstawie wprowadzonych danych, Oblicz i wyświelt w konsoli BMI dna podanych danych. 
// Nalezy sprawdzić czy nasze wprowadzne dane są liczbami, jeśli jakakolwiek z nich nie jest nalezy wyświetlić komunikat: 'Błędne dane ${dane}'

    function BMI(age, height, weight) {
        return weight / (height**2);
    }
    
    const age = 24;
    const height = '1.7 m';
    const weight = 60;
    const myBMI = (weight / (height**2));
    
    console.log(myBMI);
    console.log(typeof (age));
    console.log(typeof (height));
    console.log(typeof (weight));

if (isNaN(height) || isNaN(weight)) {
    console.log(`Błędne dane ${height}`);
  } else {
    console.log("Poprawe dane");
  }