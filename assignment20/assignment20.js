class Employee {
    constructor(name, age, basic) {
        this.name = name;
        this.age = age;
        this.basic = basic;
    }
}
Employee.prototype.getSalary = function(salary) {
    this.salary = salary;
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Basic Salary:", this.basic);
    console.log("Actual Salary:", this.salary);
}

let e1 = new Employee("siri", 19, 10000);
e1.getSalary(20000);

let e2 = new Employee("suresh", 45, 90000);
e2.getSalary(200000);

let e3 = new Employee("suri", 23, 40000);
e3.getSalary(700000);

let e4 = new Employee("sara", 54, 70000);
e4.getSalary(300000);

let e5 = new Employee("ramesh", 78, 80000);
e5.getSalary(900000);

class Product {
    constructor(brand, price, model) {
        this.brand = brand;
        this.price = price;
        this.model = model;
    }
}
Product.prototype.getDiscountPrice = function(dis) {
    this.dis = dis;
    this.d=(this.dis*this.price)/100;
    this.actual=this.price-this.d;
    console.log("brand:", this.brand);
    console.log("price:", this.price);
    console.log("model:", this.model);
    console.log("Discount:", this.d);
    console.log("Actual after Discountprice:", this.actual);
}

let p1 = new  Product("puma", 190000, "1");
p1.getDiscountPrice(20);

let p2 = new  Product("ponds", 190000, "2");
p2.getDiscountPrice(15);

let p3 = new  Product("denver", 190000, "3");
p3.getDiscountPrice(10);

let p4 = new  Product("jockey", 190000, "4");
p4.getDiscountPrice(30);

let p5 = new  Product("calvin", 190000, "5");
p5.getDiscountPrice(25);

