console.log(8 * null); // equals 0
console.log("5" - 1);//left associative operator: -, / => 5 StringToNum then cal (string concatenation -> type correction)
console.log("5" + 1); // right associative operator: +, * => 1 NumToString then cal
console.log("five" * 2); 
console.log(false == 0);
console.log(null == undefined); // true
console.log(null === undefined);// When you do not want any type conversions to happen, there are two additional operators: === and !==. 
console.log(null || "user");
/*Function*/
const square = function(x) {
    return x*x;
};
console.log(square(12));
const makeNoise = function() { console.log("Pling!"); };
makeNoise();
/* shorter
function square(x) {
    return x*x;
}*/
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) { result *= base; } 
    return result;
};/*Arrow function: When there is only one parameter name, you can omit the parentheses around the parameter list. 
ex: const square2 = x => x * x;*/
const horn = () => { console.log("Toot"); };
//Call stack
/*
function chicken() { return egg(); } 
function egg() { return chicken(); } 
console.log(chicken() + " came first."); => Out of stack space*/
//Optional argument
function Power(base, exponent = 2) { 
    let result = 1; 
    for (let count = 0; count < exponent; count++) { 
        result *= base; 
    } 
    return result; 
}
console.log(Power(4)); // → 16 console.log(power(2, 6)); // → 64
//Closure: The ability to treat functions as values
function multiplier(factor) {
    return number => number * factor; 
}
let twice = multiplier(2); 
console.log(twice(5));
function name(n) {
    return function(a) {
        return `${n} likes ${a}`;
    };
}
var j = name('John');
var c = name('Cindy');
j;
console.log(j('dog'));
console.log(c('cat'));
//Recusion
/*
function power(base, exponent) {
    if (exponent == 0) { return 1; } 
    else {
        return base * power(base, exponent - 1); } 
}
console.log(power(2, 3)); 
*/
function findSolution(target) {
    function find(current, history) { 
        if (current == target) { return history; } 
        else if (current > target) { return null; } 
        else { 
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`); 
        } 
    } 
    return find(1, "1"); 
}
console.log(findSolution(24)); 
//Growing function
function zeroPad(number, width) { 
    let string = String(number); 
    while (string.length < width) { 
        string = "0" + string; 
    } return string; 
}
function printFarmInventory(cows, chickens, pigs) { 
    console.log(`${zeroPad(cows, 3)} Cows`); 
    console.log(`${zeroPad(chickens, 3)} Chickens`); 
    console.log(`${zeroPad(pigs, 3)} Pigs`); 
}
printFarmInventory(7, 16, 3);
//Functions and side effects 
//Practice func
min_num = (num1, num2) => {return num1<num2?num1:num2};
console.log(min_num(1, 2));
function checkEvenOrOddNum(numberChecking) {
    if (!numberChecking) return `Even num`;
    if (numberChecking == -1) return `Odd num`;
    return checkEvenOrOddNum(numberChecking-2);
}

let resultChecked = checkEvenOrOddNum(50);
console.log(resultChecked);
let countChar = (stringChecking, charChecking) => {
    let count = 0;
    for (let i = 0; i < stringChecking.length; ++i) {
        if (stringChecking[i] == charChecking) {
            count++;
        }
    }
    return count;
}
console.log(countChar("aBcBdCDB", 'B'));

//DATA STRUCTURES: OBJECTS AND ARRAYS
//Properties
//Method
let doh = "Doh"; 
console.log(typeof doh.toUpperCase); 
// → function 
console.log(doh.toUpperCase()); 
// → DOH
//Objects
//Values of the type object are arbitrary collections of properties. One way to create an object is by using braces as an expression.
let day1 = { 
    squirrel: false, events: ["work", "touched tree", "pizza", "running"] 
}; console.log(day1.squirrel); 
// → false console.log(day1.wolf); 
// → undefined 
//day1.wolf = false; 
//console.log(day1.wolf); 
// → false

let anObject = {left: 1, right: 2}; 
console.log(anObject.left); 
// → 1 delete anObject.left; 
console.log(anObject.left); 
// → undefined 
console.log("left" in anObject); 
// → false 
console.log("right" in anObject); 
// → true
console.log(Object.keys({x: 0, y: 0, z: 2})); 
// → ["x", "y", "z"]
//Object.assign
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4}); 
console.log(objectA); 
// → {a: 1, b: 3, c: 4}

//Mutability
let object1 = {value: 10}; 
let object2 = object1; 
let object3 = {value: 10};
console.log(object1 == object2); 
// → true console.log(object1 == object3); // → false
object1.value = 15; 
console.log(object2.value); 
// → 15 
console.log(object3.value); 
// → 10

//The lycanthrope's log 
//Computing correlation
//Array loops 
/*
for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
}
*/

// The final analysis 

// Strings and their properties 
console.log("coconuts".slice(4, 7)); 
// → nut 
console.log("coconut".indexOf("u")); 
// → 5
console.log("one two three".indexOf("ee")); 
// → 11
console.log(" okay \n ".trim()); 
// → okay
let sentence = "Secretarybirds specialize in stomping"; 
let words = sentence.split(" "); console.log(words); 
// → ["Secretarybirds", "specialize", "in", "stomping"] 
console.log(words.join(". ")); 
// → Secretarybirds. specialize. in. stomping
console.log("LA".repeat(3)); 
// → LALALA

//Rest parameters
function max(...numbers) { 
    let result = -Infinity; 
    for (let number of numbers) { 
        if (number > result) result = number; 
    } return result; 
} 
console.log(max(4, 1, 9, -2)); 
// → 9
let numbers = [5, 1, 7]; 
console.log(max(...numbers)); 
// → 7
let wordss = ["never", "fully"]; 
console.log(["will", ...wordss, "understand"]); 
// → ["will", "never", "fully", "understand"]

//The Math object 
function randomPointOnCircle(radius) { 
    let angle = Math.random() * 2 * Math.PI; 
    return {
        x: radius * Math.cos(angle), 
        y: radius * Math.sin(angle)
    }; 
} 
console.log(randomPointOnCircle(2)); 
// → {x: 0.3667, y: 1.966}
console.log(Math.floor(Math.random() * 10)); 
// → 2

//Destructuring

//JSON
let string = JSON.stringify({squirrel: false, events: ["weekend"]}); 
console.log(string); 
// → {"squirrel":false,"events":["weekend"]} 
console.log(JSON.parse(string).events); 
// → ["weekend"]

//Dùng phương thức JSON.parse() để tạo ra object javascript:
//Dùng phương thức JSON.stringify() để tạo chuỗi JSON từ Object Javascript
var str = JSON.stringify({
    "company":"facebook",
    "CEO":"Mark Zuckerberg",
    "employees":[{"name": "John","age": 25},{"name": "Anna","age": 29}]
    });

var obj = JSON.parse(str); // đây là object javascript được tạo từ chuỗi JSON

/* truy cập vào thuộc tính JSON bằng tên thuộc tính */
console.log(obj.company) ;           // facebook
console.log(obj.employees[0].name) ; // John
console.log(obj.employees[1].name) ; // Anna
//Có thể thay đổi giá trị thuộc tính của JSON bằng cách truy cập tên thuộc tính.
obj.employees[0].name = "Mesto";
console.log(obj.employees[0].name);
//JSON.parse () có thể nhận thêm tham số thứ 2 để kiểm tra mỗi thuộc tính trước khi trả về giá trị.
var text = '{"name":"John", "birth":"1996-05-15", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});
console.log(obj.birth);
//Nếu muốn giữ lại function làm giá trị thì phải chuyển function thành chuỗi trước khi chạy phương thức JSON.stringify().
//Exercises
//The sum of a range 
function range(start, end, step) {
    let arr = [];
    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;
}
let arr = range(1, 10, 2);
function sum(arr) {
    let res = 0;
    for (let i of arr) {
        res += i;
    }
    return res;
}
let res = sum(arr);
console.log(res);
//Reversing an array 
let arr1 = [1, 2, 6, 7, 3];
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; --i) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray(arr1));
console.log(arr1.reverse());
//A list
let arr2 = [1, 2, 3];
function arrayToList(array) {
    var list = null;
    for (var i = array.length-1; i >= 0; i--)
        list = {
            value: array[i], 
            rest:list
        };
    return list;
}
let list1 = arrayToList(arr2);
console.log(list1);

function listToArray(list) {
    let arr = [];
    while(list.rest!=null) {
        arr.push(list.value);
        list = list.rest;
    }
    arr.push(list.value);
    return arr;
}
console.log(listToArray(list1));

function nth(list, position) {
    let count = 0;
    while (list.rest != null) {
        count++;
        if (count == position) {
            console.log(list.value);
        }
        list = list.rest;
    }
}
nth(list1, 2);
//Deep comparison 
function deepEqual(obj1, obj2) {
    if (typeof obj1 == 'object' && obj1 != null && typeof obj2 == 'object' && obj2 != null) {
        let count1 = [0, 0];
        for (let i in obj1) count1[0]++;
        for (let i in obj2) count1[1]++;
        if (count1[0] != count1[1]) return false;
        for (let i in obj1) {
            if (!(i in obj2) || !deepEqual(obj1[i], obj2[i])) return false;
        }
        return true;
    } else return obj1 === obj2;
}
let obj1 = {
    here: 2
};
console.log(deepEqual(obj1, obj1));
// → true
console.log(deepEqual(obj1, {here: 1}));
// → false
console.log(deepEqual(obj1, {here: 2}));
// → true
console.log(obj1 === { here:2 });
// → false

//HIGHER-ORDER FUNCTIONS
//Abstraction
//Abstracting repetition 
function repeat(n, action) { 
    for (let i = 0; i < n; i++) { 
        action(i); 
    } 
}
let labels = []; 
repeat(5, i => { 
    labels.push(`Unit ${i + 1}`); 
});
console.log(labels); 
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
//Higher-order functions 
function greaterThan(n) { 
    return m => m > n; 
} 
let greaterThan10 = greaterThan(10); 
console.log(greaterThan10(11)); 
// → true
//And we can have functions that change other functions
function noisy(f) { 
    return (...args) => { 
        console.log("calling with", args); 
        let result = f(...args); 
        console.log("called with", args, ", returned", result); 
        return result; 
    }; 
}
noisy(Math.min)(3, 2, 1); 
// → calling with [3, 2, 1] 
// → called with [3, 2, 1] , returned 1
//We can even write functions that provide new types of control flow.
function unless(test, then) { 
    if (!test) then(); 
}
repeat(3, n => { 
    unless(n % 2 == 1, () => { 
        console.log(n, "is even"); 
    }); 
}); 
// → 0 is even 
// → 2 is even
["A", "B"].forEach(l => console.log(l));
//Script data set 
/*
function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");
  
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
  
    return scripts.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
  }
  
 console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));*/
//Filtering arrays 
function filter(arr, test) {
    let pass = [];
    for (let i of arr) {
        if (test(i)) pass.push(i);
    }
    return pass;
}
console.log(filter([1, 2, -1, 0], (i) => {if (i > 0) return true}));
console.log([1, 2, -1, 0].filter((i) => {return (i < 0)}));

//Transforming with map 
function map(array, transform) { 
    let mapped = []; 
    for (let element of array) { 
        mapped.push(transform(element)); 
    } 
    return mapped; 
}
console.log(map([1, 5, 7, -2], (ele) => {return ++ele;}));

//Summarizing with reduce
function reduce(array, combine, start) {
    let current = start; 
    for (let element of array) { 
        current = combine(current, element); 
    } return current; 
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); 
// → 10
console.log([1, 2, 3, 4].reduce((a, b) => a + b)); 
// → 10

//Composability
const t = value => {
    const fn = () => value;
    fn.toString = () => `t(${ value })`;
    return fn;
};
    const someValue = t(2);
    console.log(someValue.toString() // "t(2)"
    );

//Strings and character codes
//Recognizing text 
function countBy(items, groupName) { 
    let counts = []; 
    for (let item of items) { 
        let name = groupName(item); 
        let known = counts.findIndex(c => c.name == name); 
        if (known == -1) { 
            counts.push({name, count: 1}); 
        } else { 
            counts[known].count++; 
        } 
    } 
    return counts; 
}
console.log(countBy([1, 2, 3, 4, 5], n => n > 2)); // → [{name: false, count: 2}, {name: true, count: 3}]

//Exercise
//Flattening
let arr2D = [[1, 2, 3], [2, -1, 4], [3, 6, 9]];
console.log([].concat(...arr2D)); //using concat
let flattened = arr.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []); //using reduce and concat
//your own loop
function myOwnLoop(start, testFunc, bodyFunc, updateFunc) {
    for (let value = start; testFunc(value); value = updateFunc()) {
        bodyFunc(value);
    }
}
myOwnLoop(1, n => n>0, console.log, n => --n);

//The Secret Life of Objects
//Encapsulation
//Methods
function speak(line) { 
    console.log(`The ${this.type} rabbit says '${line}'`); 
} 
let whiteRabbit = {type: "white", speak}; 
let hungryRabbit = {type: "hungry", speak};
whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!"); 
// → The white rabbit says 'Oh my ears and whiskers, how 
// late it's getting!' 
hungryRabbit.speak("I could use a carrot right now."); 
// → The hungry rabbit says 'I could use a carrot right now.'
speak.call(hungryRabbit, "Burp!"); // → The hungry rabbit says 'Burp!'

//Prototypes
let empty = {}; 
console.log(empty.toString); 
// → function toString()…{} 
console.log(empty.toString()); 
// → [object Object]
console.log(Object.getPrototypeOf({}) == Object.prototype); 
// → true 
console.log(Object.getPrototypeOf(Object.prototype)); 
// → null
console.log(Object.getPrototypeOf(Math.max) == Function.prototype); 
// → true 
console.log(Object.getPrototypeOf([]) == Array.prototype); 
// → true
let protoRabbit = { 
    speak(line) { 
    console.log(`The ${this.type} rabbit says '${line}'`); 
    } 
}; 
let killerRabbit = Object.create(protoRabbit); 
killerRabbit.type = "killer"; 
killerRabbit.speak("SKREEEE!");

//Classes
function makeRabbit(type) { 
    let rabbit = Object.create(protoRabbit); 
    rabbit.type = type; return rabbit; 
}
function Rabbit(type) { 
    this.type = type; 
} 
Rabbit.prototype.speak = function(line) { 
    console.log(`The ${this.type} rabbit says '${line}'`); 
};
let weirdRabbit = new Rabbit("weird");
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype); 
// → true 
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype); 
// → true

//Classes notation
/*
class Rabbit {
    constructor(type) { 
        this.type = type; 
    } 
    speak(line) { 
        console.log(`The ${this.type} rabbit says '${line}'`); 
    }
}
let killerRabbit = new Rabbit("killer"); 
let blackRabbit = new Rabbit("black");*/
let object = new class { getWord() { return "hello"; } }; console.log(object.getWord()); // → hello

//Overriding derived properties 
Rabbit.prototype.teeth = "small"; console.log(killerRabbit.teeth); // → small 
killerRabbit.teeth = "long, sharp, and bloody"; 
console.log(killerRabbit.teeth); 
// → long, sharp, and bloody 
console.log(Rabbit.prototype.teeth); 
// → small
console.log(Array.prototype.toString == Object.prototype.toString); 
// → false 
console.log([1, 2].toString()); 
// → 1,2
console.log(Object.prototype.toString.call([1, 2])); 
// → [object Array]

//Maps
let agess = { Boris: 39, Liang: 22, Júlia: 62 };
console.log(`Júlia is ${agess["Júlia"]}`); 
// → Júlia is 62 
console.log("Is Jack's age known?", "Jack" in agess); 
// → Is Jack's age known? false 
console.log("Is toString's age known?", "toString" in agess); 
// → Is toString's age known? true
console.log("toString" in Object.create(null)); // → false
let ages = new Map(); 
ages.set("Boris", 39); 
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(`Júlia is ${ages.get("Júlia")}`); // → Júlia is 62 
console.log("Is Jack's age known?", ages.has("Jack")); // → Is Jack's age known? false 
console.log(ages.has("toString")); // → false
console.log({x: 1}.hasOwnProperty("x")); // → true 
console.log({x: 1}.hasOwnProperty("toString")); // → false

//Polymorphism
Rabbit.prototype.toString = function() { 
    return `a ${this.type} rabbit`; 
};
//console.log(String(blackRabbit)); 
// → a black rabbit

//Symbols
let sym = Symbol("name"); 
console.log(sym == Symbol("name")); 
// → false 
Rabbit.prototype[sym] = 55; 
//console.log(blackRabbit[sym]); 
// → 55
const toStringSymbol = Symbol("toString"); 
Array.prototype[toStringSymbol] = function() { 
    return `${this.length} cm of blue yarn`; 
};
console.log([1, 2].toString()); 
// → 1,2 
console.log([1, 2][toStringSymbol]()); 
// → 2 cm of blue yarn
let stringObject = { 
    [toStringSymbol]() { 
        return "a jute rope"; 
    } 
}; 
console.log(stringObject[toStringSymbol]()); 
// → a jute rope

//The iterator interface 
let okIterator = "OK"[Symbol.iterator](); 
console.log(okIterator.next()); 
// → {value: "O", done: false} 
console.log(okIterator.next()); 
// → {value: "K", done: false} 
console.log(okIterator.next()); 
// → {value: undefined, done: true}
class Matrix { 
    constructor(width, height, element = (x, y) => undefined) { 
        this.width = width; 
        this.height = height; 
        this.content = [];
        for (let y = 0; y < height; y++) { 
            for (let x = 0; x < width; x++) { 
                this.content[y * width + x] = element(x, y); 
            } 
        }
    }
    get(x, y) { return this.content[y * this.width + x];
    } set(x, y, value) { this.content[y * this.width + x] = value; }
}
class MatrixIterator { 
    constructor(matrix) { 
        this.x = 0; 
        this.y = 0; 
        this.matrix = matrix; 
    }
    next() {
        if (this.y == this.matrix.height) return {done: true};
        let value = {
            x: this.x, 
            y: this.y, 
            value: this.matrix.get(this.x, this.y)}; 
            this.x++; 
            if (this.x == this.matrix.width) { 
                this.x = 0; 
                this.y++; 
            } return {value, done: false};
    }
}

Matrix.prototype[Symbol.iterator] = function() { 
    return new MatrixIterator(this); 
};
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`); 
for (let {x, y, value} of matrix) { 
    console.log(x, y, value); 
} 
// → 0 0 value 0,0 
// → 1 0 value 1,0 
// → 0 1 value 0,1 
// → 1 1 value 1,1

//Getters, setters, and statics 
let varyingSize = { 
    get size() { 
        return Math.floor(Math.random() * 100); 
    }
};
console.log(varyingSize.size); 
// → 73 
console.log(varyingSize.size); 
// → 49
class Temperature { 
    constructor(celsius) { 
        this.celsius = celsius; 
    } 
    get fahrenheit() { 
        return this.celsius * 1.8 + 32; 
    } set fahrenheit(value) { 
        this.celsius = (value - 32) / 1.8; 
    }
static fromFahrenheit(value) { 
    return new Temperature((value - 32) / 1.8); 
}
}
let temp = new Temperature(22); 
console.log(temp.fahrenheit); 
// → 71.6 
temp.fahrenheit = 86; 
console.log(temp.celsius); 
// → 30

//Inheritance
class SymmetricMatrix extends Matrix { 
    constructor(size, element = (x, y) => undefined) { 
        super(size, size, (x, y) => { 
            if (x < y) return element(y, x); 
            else return element(x, y); 
            }
        ); 
    }
    set(x, y, value) { 
        super.set(x, y, value); 
        if (x != y) { 
            super.set(y, x, value); 
        } 
    }
}
let matrix1 = new SymmetricMatrix(5, (x, y) => `${x},${y}`); 
console.log(matrix1.get(2, 3)); // → 3,2

//The instanceof operator
console.log( new SymmetricMatrix(2) instanceof SymmetricMatrix); 
// → true 
console.log(new SymmetricMatrix(2) instanceof Matrix); 
// → true 
console.log(new Matrix(2, 2) instanceof SymmetricMatrix); 
// → false 
console.log([1] instanceof Array);
// → true

//Exercises
//A vector type 
class Vec {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    get length() {
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
    minus(vec) {
        let new_x = this.x - vec.x;
        let new_y = this.y - vec.y;
        return new Vec(new_x, new_y);
    }
    plus(vec) {
        let new_x = this.x + vec.x;
        let new_y = this.y + vec.y;
        return new Vec(new_x, new_y);
    }
}

let v = new Vec(6, 9);
console.log(v.length);
console.log(v.minus(new Vec(1, 2)));
console.log(v.plus(new Vec(1, -1)));

//Groups and Iterable groups 
class Group {
    constructor (value) {
        this.group = [];
    }
    add(value) {
        if (!this.group.indude(value))
            this.group.push(value);
    }
    has(value) {
        if (this.group.indexOf(value) != -1) return true;
        else return false;
    }
    delete(value) {
        let index = this.group.indexOf(value);
        if (index != -1) {
            this.group.splice(index, 1);
        }
    }
    static fromNomalArray(arr) {
        let g = [];
        for (let ele of arr) {
            if (!g.includes(ele)) {
                g.push(ele);
            }
        }
        return g;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}
class GroupIterator {
    constructor (g) {
        this.i = 0;
        this.group = g.group;
    }

    next() {
        if (this.i == this.group.length) return {done: true};
        
        let value = this.group[this.i];
        this.i++;
        return {value, done: false};
    }
}
for (let value of Group.fromNomalArray([1, 2, 2 ,3])) {
    console.log(value);
}

//Borrowing a method 
let map1 = {one: true, two: true, hasOwnProperty: true};
console.log(map.hasOwnProperty("one"));
// Fix this call
console.log(hasOwnProperty.call(map1, 'one'));
// → true

//BUGS AND ERRORS
// Strict mode 
function canYouSpotTheProblem() { 
    "use strict"; 
    for (counter = 0; counter < 10; counter++) { 
        console.log("Happy happy"); 
    } 
}
canYouSpotTheProblem(); 
// → ReferenceError: counter is not defined
function Person(name) { 
    this.name = name; 
} 
let ferdinand = Person("Ferdinand"); 
// oops 
console.log(name); 
// → Ferdinand












    












    


















  















