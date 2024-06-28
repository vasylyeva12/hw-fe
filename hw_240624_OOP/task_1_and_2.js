// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс Users, который наследуется от класса Permissions. Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.


//Входные данные:
class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}

class Users extends Permissions{
    constructor(name){
        super()
        this.name = name;
    }
}

// Создайте класс Object2. в котором будет определен статический метод entries().
// Метод должен будет получить в качестве аргумента объект и вернуть результат, аналогичный результату работы метода Object.entries(). 
// В решении использовать методы объекта Object нельзя. 

class Object2{
    static entries(obj){
        let result = [];
        for (let key in obj) {            
            result.push([key, obj[key]]);                
            
        }
return result
    }
    // * Доп задание 
    // К данному классу добавьте метод asign(), который будет реализован по такому же принципу, как вышеуказанный метод.

    // 1 вариант
    
    // static assign(target, ...sources) {
    //     sources.forEach(source => {
    //         for (let key in source) {
    //             if (source.hasOwnProperty(key)) {
    //                 target[key] = source[key];
    //             }
    //         }
    //     });
    //     return target;
    // }

    // 2 вариант
    
    static assign(target, source) {
           
                for (let key in source) {                   
                    target[key] = source[key];                    
                }          
            return target;
        }
}



const user1 = new Users('Maksym');
console.log(user1.name); 

const new_object = {userName: 'Maksym', age: 11, class: 4}
console.log(Object2.entries(new_object));

const target = {a: 1};
const source1 = {b: 2};
const source2 = {c: 3, a: 4};
console.log(Object2.assign(target, source1, source2))
