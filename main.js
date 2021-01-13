// Задание 1
function max(x,y) {
    if (x > y) return x;
    else return y;
}
console.log( max(5,10) );

// Задание 2
function Min (){
    let min = arguments[0]
    for(i=1; i<arguments.length; i++) {
        if (arguments[i]<min){
            min = arguments[i]
        }
    }

    return min
}
let a = Min(6, 3, 3, 4)
console.log(a)


// Задание 3
let users = [
    {id:1, firstname: "John",lastname: "Petrov", age: 15},
    {id:2, firstname: "Kate",lastname: "Voronina", age: 33},
    {id:3, firstname: "Bob",lastname: "Marli", age: 45},
    {id:4, firstname: "Jack",lastname: "Bens", age: 19},
    {id:5, firstname: "Alice",lastname: "Don", age: 43},
    {id:6, firstname: "leo",lastname: "Jons", age: 23},
    {id:7, firstname: "Marg",lastname: "Kref", age: 12},
    {id:8, firstname: "Rick",lastname: "Vasin", age: 17},
    {id:9, firstname: "Daniel",lastname: "Rich", age: 18},
    {id:10,firstname: "Lidiya",lastname: "Popova", age: 29},
];
let filterUsers = users.filter ((item)=> item.age <18)
console.log(filterUsers);
users.forEach((item)=>{
   item['fullName'] = item.firstname + " " + item.lastname
});
console.log(users);
let newUsers = users.map((user)=>{
return user.fullName
});
console.log(newUsers);

function FullName(users){
    users.forEach((item)=>{
        item['fullName'] = item.firstname + " " + item.lastname
    });
    return users
}
console.log(FullName(users))



// Задание 4
let arr =[1,2,3,4]
function del(myArr) {
    let deleted = myArr[0]
    myArr.splice(0,1)
    return deleted
}
a = del(arr)
console.log(a)
console.log(arr)

// Задание 5
let arr =[1,2,3,4]
function add (myArr) {
    for (i = 1; i < arguments.length; i++){
        myArr = myArr.concat(arguments[i])
    }
    return myArr
}
a = add(arr,3, 6, 9)
console.log(a)

// Задание 6
let source = {firstname: 'Tom', age: 10}
function extend (source) {
    for (i = 1; i < arguments.length; i++){
        for (key in arguments[i]){
            source[key] = arguments[i][key]
        }
    }
    return source
}
let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(s)

// Задание 7

function setComment (date, message, author = 'anonymous') {
    if (!date||!message) {
        return alert ("Данные переданы некорректно")

    }
    return console.log(author+ "," + date + "\n" + message )
}
setComment('', 'Everything is ok')

// Задание 8
function createTimer(){
    function innerFunction(){
        return console.log(performance.now())
    }
    return innerFunction
}

let timer = createTimer();
alert('!')
alert( timer() );

// Задание 9
function createAdder(){
   let param1 = arguments[0]
    function Adder(param){
return param1 + param
    }
    return Adder
}
let hello = createAdder('Hello, ');
alert( hello('John') );
alert( hello('Harry') );

let plus = createAdder(5);
alert( plus(1) );
alert( plus(5) );

