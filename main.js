
// 1. Создайте функцию isPrime(n) которая будет проверять число n на "простое число" 
// https://ru.wikipedia.org/wiki/Простое_число. 
// Результат ее работы true если число простое и false если нет.

// Наивный перебор
// Наиболее наивный подход к поиску простых чисел заключается в следующем. Будем брать по очереди натуральные числа, 
// начиная с двойки, и проверять их на простоту. Проверка на простоту заключается в следующем: перебирая числа 
// из диапазона от  до , будем делить  на  с остатком. Если при каком-то  обнаружится нулевой остаток, значит, 
// делится на  нацело, и число  составное. Если же при делении обнаруживались только ненулевые остатки, значит, 
// число простое; в этом случае выводим его на экран. Ясно, что, получив нулевой остаток (тем самым обнаружив, 
// что  составное), следует отказаться от дальнейших проб на делимость.

// Заметим, что все простые числа, за исключением двойки, нечётные. Если обработать особо случай, 
// то все последующие числа  можно перебирать с шагом . Это даст приблизительно двукратное увеличение 
// производительности программы.

let arr = [];

function isPrime(n) {
    if (n <= 1) {
        return 'Простое число должно быть целым и быть больше 1';
    } else if (n == 2) {
        return true;
    } else if (n % 2 == 0) {
        return false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}

for(let i = 0; i < 200; i++) {
    if (i > 1 && isPrime(i)) {
        arr.push(i);
    }
}

console.log(arr);

console.log('');
console.log('=========');
console.log('');

// 2. Создайте функцию getSumm([n1, n2, nn...]) которая будет суммировать все простые числа 
// (для проверки используйте функцию из первой задачи) по модулю, переданные массивом. 
// Используйте метод .reduce();

function getSumm(arr) {
    let primeArray = arr.filter(function(el) {
        return isPrime(el) == true;
    });

    let summ = primeArray.reduce(function(acc, el) {
        return acc + el;
    });

    return summ;
}

console.log(getSumm([2, 3, 5, 7, 11]));
console.log(getSumm([-4, 0, 2, 3, 5, 6, 20]));

console.log('');
console.log('=========');
console.log('');

// 3. Напишите функцию getRange(arr, a, b), которая будет возвращать НОВЫЙ массив чисел из переданного arr, 
// которые попадут в диапазон от a до b. И отсортирует их в порядке возрвстания 
// (изучите и используйте метод массива .sort()). Например: 
// let arr = [5, 3, 8, 1];
// let filtered = getRange(arr, 1, 4);

// filtered; // [1, 3]

function getRange(arr, a, b) {
    
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    
    let sorted = arr.sort(compareNumeric);
    
    return ranged = sorted.filter(function(el) {
        return el >= a && el <= b;
    });

}

console.log(getRange([10, 5, -4, -7, 8, -20], -10, 10));
console.log(getRange([20, 1, 6, 8], 5, 10));

console.log('');
console.log('=========');
console.log('');


// 4. Напишите функцию toLess(arr), которая будет сортировать (метод .sort()) 
// числа в переданном массиве arr в порядке убывания. Например:
// let arr = [5, 2, 1, -10, 8];
// toLess(arr);

// arr; // [8, 5, 2, 1, -10]

function toLess(arr) {
    function compareNumeric(a, b) {
        if (a < b) return 1;
        if (a == b) return 0;
        if (a > b) return -1;
    }

    return arr.sort(compareNumeric);
}

console.log(toLess([11, 6, -4, -5, 3, -30]));
console.log(toLess([56, -4, 2, 7, 15, -22]));

// 5. Напишите функцию sortByAge(users), которая принимает массив 
// с именем и возрастом и сортирует их по возрасту. Например:
// let bill = ["Билл", 25];
// let mark = ["Марк", 30];
// let linus = ["Линус", 28];

// let arr = [ bill, mark, linus ];
 
// sortByAge(arr); // [bill, masha, linus]