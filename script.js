console.log('Hello!');

class User {
  // Tên class viết hoa chữ cái đầu tiên
  address;
  constructor(nameTruyenVao, ageTruyenVao) {
    // Khai báo các thuộc tính của lớp
    this.name = nameTruyenVao;
    this.age = ageTruyenVao;
  }
}

let user = new User('hungnv91', 27);
let user1 = new User('test', 20);

console.log(user, user1);

let a = 'name';
console.log(user[a]);

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let circleTest = new Circle(10, 'red');
console.log(circleTest.getArea());
