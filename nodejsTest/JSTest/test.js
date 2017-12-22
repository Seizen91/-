/**
 * Created by DELL on 2017/8/28.
 */

var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url != '/favicon.ico'){
        res.write("hahah");
        add(10);
        res.end();
    }

})

server.listen(8080);

function add() {
    if(arguments.length == 1){
        console.log(arguments[0]);
    }else if(arguments.length == 2){
        console.log(arguments[0] + arguments[1])
    }

    //数组实例
    console.log("数组实例----------------");
    var arr = new Array();
    arr.push(1, 2, 3);
    console.log(arr.pop());
    console.log(arr.shift());

    var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    //every()函数，所有项必须都满足才能返回true
    var everyResult = numbers.every(function (item, index, array) {
        return item > 2;
    });
    console.log("everyResult=" + everyResult);

    //some()函数，只需要一项满足就能返回true
    var someResult = numbers.some(function (item, index, array) {
        return item > 2;
    });
    console.log("someResult=" + someResult);

    //filter()函数，返回满足条件的数组
    var filterResult = numbers.filter(function (item, index, array) {
        return item > 2;
    });
    console.log(filterResult);

    //map()函数，返回原数组的每一项运行传入函数之后的结果
    var mapResult = numbers.map(function (item, index, array) {
        return item*2;
    });
    console.log(mapResult);

    //forEach()函数，对数组每一项传入运行的函数
    numbers.forEach(function (item, index, array) {
        console.log("------------");
        console.log(item);
    });

    var values = [1, 2, 3, 4, 5];
    /*
    * reduce()函数
    * 参数：前一个值，当前值，项的索引，数组对象
    * 函数返回的任何值都会作为第一个参数自动传给下一项，第一次迭代发生在数组的第二项上，
    * 所以第一个参数是数组的第一项，第二个参数就是数组的第一项
    */
    var reduceResult = values.reduce(function (prev, cur, index, array) {
        return prev + cur;
    });
    console.log("reduceResult=" + reduceResult);

    /*
    * reduceRight()函数，与reduce()函数相反
    * reduce函数是从数组的第一项开始，reduceRight函数是从数组的最后一项开始
    */
    var reduceRightResult = values.reduceRight(function (prev, cur, index, array) {
        return  prev + cur;
    });
    console.log("reduceRightResult=" + reduceRightResult);

    //Date类型实例
    console.log("Date类型实例------------------");

    /*
     * Date.parse()方法
     * 参数：月，日，年
     */
    var date1 = new Date(Date.parse("May,25,2004"));
    console.log(date1);

    /*
     * Date.UTC()方法
     * 参数：年，月，日；在字面基础上减1
     */
    var date2 =  new Date(Date.UTC(2006,5,0));
    console.log(date2);

    /*
     * 直接创建日期
     * 参数：年，月，日；月份从0开始
     */
    var date3 = new Date(2006,0);
    console.log("date3=" + date3);

    var date4 = new Date(2005,4,5,17,55,55);
    console.log("date4=" + date4);

    /*
     * 日期格式化
     * toDateString()，以特定于实现的格式显示星期几、月、日和年
     * toTimeString()，以特定于实现的格式显示时、分、秒和时区
     * toLocalDateString()，以特定于地区的格式显示星期几、月、日和年
     * toLocalTimeString()，以特定于实现的格式显示时分秒
     * toUTCString()，以特定于实现的格式显示完整的UTC日期
     * /


    /*
    * 自定义排序
    */
    function createComparisonFunction(propertyName) {
        return function (object1, object2) {
            var value1 = object1[propertyName];
            var value2 = object2[propertyName];

            if(value1  < value2){
                return -1;
            }else if(value1 > value2){
                return 1;
            }else {
                return 0;
            }
        }
    }

    data = [
        {name: "Zachary", age: 28},
        {name: "Nicholas", age: 29}
    ];
    console.log("data1:" + data[0].name);
    data.sort(createComparisonFunction("name"));
    console.log("data2:" + data[0].name);
    data.sort(createComparisonFunction("age"));
    console.log("data3:" + data[0].name);

    console.log("递归函数--------------------");
    //原始递归函数
    function factorial(num) {
        if(num <= 1){
            return 1;
        }else {
            return num*factorial(num-1);
        }
    }

    //使用callee属性的递归函数，但是在严格模式下不能通过脚本访问arguments.callee
    function factorial1(num) {
        if(num <= 1){
            return 1;
        }else {
            return num*arguments.callee(num-1);
        }
    }

    //使用函数表达式也可得到相同的结果，这种不管在严格模式还是非严格模式都行的通
    var factorial2 = (function f(num) {
        if(num <= 1){
            return 1;
        }else {
            return num*f(num-1);
        }
    });
    console.log(factorial2(3));

    console.log(factorial(5));
    console.log(factorial1(5));

    /*
    * 每个函数都包含两个非继承而来的方法：apply()和call()
    * 这两个方法是在特定的作用域中调用函数实际上等同于设置函数体内this对象的值
     */
    function sum(num1, num2) {
        return num1 + num2;
    }

    //apply函数使用实例
    function applySum1(num1, num2) {
        return sum.apply(this, arguments);
    }
    function applySum2(num1, num2) {
        return sum.apply(this, [num1, num2]);
    }
    console.log("applySum1=" + applySum1(1,2));
    console.log("applySum2=" + applySum2(1,2));

    //call函数使用实例，与apply第一个参数this一样，其余的参数都直接传递给函数
    function callSum(num1, num2) {
        return sum.call(this, num1, num2);
    }
    console.log("callSum=" + callSum(1,2));

    //使用call()（apply()）来扩充作用域的最大好处，就是对象不需要与方法有任何耦合关系
    var color = "red";
    var o = {color: "blue"};
    function sayColor() {
        console.log(this.color);
    }
    sayColor.call(this);
    //sayColor.call(window);
    sayColor.call(o);

    var objectValue = sayColor.bind(o);
    console.log(objectValue());

    /*
    * 字符串操作
    * concat():拼接字符串的方法
    * slice()、substring()、substr()
    * 以上三个方法在使用的时候，第一个参数都是字符串的起始位置，
    * 第二个参数，对于slice和substring来说，是结束位置；对于substr，是截取的字符串长度
    */
    var str = "hello ";
    var str1 = str.concat("world", "!");
    console.log("str:" + str);
    console.log("str1:" + str1);
    console.log(str1.slice(3));
    console.log(str1.substring(3));
    console.log(str1.substr(3));
    console.log(str1.slice(3,7));
    console.log(str1.substring(3,7));
    console.log(str1.substr(3,7));

    /*
    * slice():当参数为负数时，其方法会将传入的负值与字符串的长度相加
    * substring():把所有负值参数都转换为0
    * substr():将负的第一个参数与字符串的长度相加，将负的第二个参数转换为0
    */
    console.log(str1.slice(-3));
    console.log(str1.substring(-3));
    console.log(str1.substr(-3));
    console.log(str1.slice(3, -4));
    console.log(str1.substring(3, -4));
    console.log(str1.substr(3, -4));


    //面向对象函数
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    //把通用方法作为全局函数就没有封装性可言了
    function sayName() {
        console.log(this.name);
    }

    var person1 = new Person("sz", 20, "student");
    var person2 = new Person("szqq", 29, "doctor");
    sayName.call(person1);
    sayName.apply(person2);

    //采用原型模式
    function Person1() {

    }
    /*Person1.prototype.name = "sss";
    Person1.prototype.age = 20;
    Person1.prototype.job = "teacher";
    Person1.prototype.sayName = function () {
        console.log(this.name);
    };*/
    Person1.prototype = {
        name: "sss",
        age: 20,
        job: "hhaha",
        sayName: function () {
            console.log(this.name);
        }
    };

    var person3 = new Person1();
    person3.sayName();
    var person4= new Person1();
    person4.sayName();

    console.log(person3.sayName == person4.sayName);
    

    /*
    * 组合继承（伪经典继承）：指的是将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式
    * 其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
    * 这样，即通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性
    */
    console.log("组合继承---------------");
    function SuperType(name) {
        this.name = name;
        this.colors = ["red", "blue", "green"];
    }

    SuperType.prototype.sayName = function () {
        console.log("sayName:" + this.name);
    };

    function SubType(name, age) {

        //继承属性
        SuperType.call(this, name);
        this.age = age;
    }

    //继承方法
    SubType.prototype = new SuperType();
    SubType.prototype.sayAge = function () {
        console.log("sayAge:" + this.age);
    };

    //创建实例
    var instance1 = new SubType("Tom", 21);
    instance1.colors.push("black");
    console.log(instance1.colors);
    instance1.sayName();
    instance1.sayAge();

    var instance2 = new SubType("Bob", 11);
    console.log(instance2.colors);
    instance2.sayName();
    instance2.sayAge();

    /*
    * 原型式继承
    * 借助原型可以基于已有的对象创建新对象，同时还不必创建 自定义类型
    *
    * ECMAScript 5通过新增Object.create()方法规范了原型式继承
    * 这个方法接收来两个参数：一个作为新对象原型的对象和（可选的）一个为新对象定义额外属性的对象
    * 在传入一个参数的情况下，Object.create()和object()方法的行为相同
    */
    console.log("原型式继承---------------");
    function object(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }
    var person = {
        name: "Seizen",
        friends: ["Shelby", "Court", "Van"]
    };

    //var anotherPerson = object(person);
    var anotherPerson = Object.create(person);
    anotherPerson.name = "sss";
    anotherPerson.friends.push("Rob");

    //var yetAnotherPerson = object(person);
    var yetAnotherPerson = Object.create(person);
    yetAnotherPerson.name = "Linda";
    yetAnotherPerson.friends.push("Barbie");

    console.log(person.friends);

    /*
    * 寄生组合式继承：
    * 通过借用构造函数来继承属性，通过原型链的混成形式来继承方法
    * 基本思路：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。
    */
    console.log("寄生组合式继承------------");
    function inheritPrototype(subType, superType) {
        var prototype = object(superType.prototype);  //创建对象
        prototype.constructor = subType;  //增强对象
        subType.prototype = prototype;  //指定对象
    }

    inheritPrototype(SubType, SuperType);
    //SubType.prototype.sayAge1


    /*
    * 函数表达式
    * 定义函数的方式有两种：函数声明和函数表达式
    */
    function a() {

    }

    var b = function () {

    }


    console.log("window对象，全局作用域--------------");
    //window对象，全局作用域
    var age = 29;
   /* function sayAge() {
        console.log(this.age);
    }
    console.log(window.age);*/


   console.log("间歇调用和超时调用-----------");
    /*
    * 间歇调用：setInterval()
    * 超时调用：setTimeout()
    */
    //间歇调用：setInterval()
    var num = 0;
    var max = 10;
    var intervalId = null;

    function incrementNumber() {
        num++;

        //如果执行次数达到了max设定的值，则取消后续尚未执行的调用
        if(num == max){
            clearInterval(intervalId);
            console.log("取消间歇调用")
        }
    }
    intervalId = setInterval(incrementNumber, 500);

    //超时调用：setTimeout()，上面的模式也可使用出超时模式来调用
    function incrementNumber1() {
        num++;
        if(num < max){
            setTimeout(incrementNumber1, 500);
        }else {
            console.log("超时调用结束");
            alert("1111");
        }
    }
    setTimeout(incrementNumber1, 500);



}