// Написать класс Square, Rectangle и Triangle

// Перечисление типов фигур
enum FigureType {
  Square = "square",
  Rectangle = "rectangle",
  Triangle = "triangle",
}

// Абстрактный класс Figure
abstract class Figure {
  // Добавление защитного свойства type при создании класса
  constructor(protected readonly type: string) {}

  // Добавление публичного метода получения type
  getType(): string {
    return this.type;
  }

  // Добавление публичных абстрактный методов для фигур - получение площади и периметра
  abstract getArea(): number;
  abstract getPerimeter(): number;

  // Добавление публичного метода описание класса
  getDescription(): string {
    return this.constructor.name;
  }
}

// Класс Square (квадрат)
class Square extends Figure {
  //  Добавление приватного свойства side
  constructor(private readonly side: number) {
    // Указание типа при создании класса
    super(FigureType.Square);
  }

  // Получение площади
  getArea(): number {
    return this.side ** 2;
  }

  // Получение периметра
  getPerimeter(): number {
    return this.side * 4;
  }

  // Получение описания
  getDescription(): string {
    return `Square with side ${this.side}`;
  }
}

// Класс Rectangle (прямоугольник)
class Rectangle extends Figure {
  //  Добавление приватных свойств ширина и высоты
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {
    // Указание типа при создании класса
    super(FigureType.Rectangle);
  }

  // Получение площади
  getArea(): number {
    //const
    return this.height * this.width;
  }

  // Получение периметра
  getPerimeter(): number {
    return 2 * this.height + 2 * this.width;
  }

  // Получение описания
  getDescription(): string {
    return `Rectangle with width ${this.width} and height ${this.height}`;
  }
}

//Класс Triangle

class Triangle extends Figure {
  constructor(
    private readonly side1: number,
    private readonly side2: number,
    private readonly side3: number,
  ) {
    super(FigureType.Triangle);
  }
  getPerimeter(): number {
    return this.side1 + this.side2 + this.side3;
  }
  getArea(): number {
    const semiPerimeter: number = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(
      semiPerimeter * (semiPerimeter - this.side1) * (semiPerimeter - this.side2) * (semiPerimeter - this.side3),
    );
  }
  getDescription(): string {
    return `Triangle with ${this.side1}, ${this.side2} and ${this.side3}`;
  }
}

// Пример использования
const square = new Square(5);
console.log(square.getArea()); // 25
console.log(square.getPerimeter()); // 20
console.log(square.getType()); // square
console.log(square.getDescription()); // Square with side 5

console.log("-----------");

const rectangle = new Rectangle(4, 6);
console.log(rectangle.getArea()); // 24
console.log(rectangle.getPerimeter()); // 20
console.log(rectangle.getType()); // rectangle
console.log(rectangle.getDescription()); // Rectangle with width 4 and height 6

console.log("-----------");

const triangle = new Triangle(3, 4, 5);
console.log(triangle.getArea()); // 6
console.log(triangle.getPerimeter()); // 12
console.log(triangle.getType()); // triangle
console.log(triangle.getDescription()); // Triangle with side1 3, side2 4 and side3 5
