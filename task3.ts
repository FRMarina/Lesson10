// Добавить в задачу 1 валидацию на то, чтобы любая сторона была больше 0, если например ширина меньше 0 - выводим ошибку: ${sideName} must be greater than 0`
enum FigureType {
  Square = "square",
  Rectangle = "rectangle",
  Triangle = "triangle",
}

// Абстрактный класс Figure
abstract class Figure {
  constructor(protected readonly type: string) {}
  protected checkPositive(value: number, name: string): void {
    if (!Number.isFinite(value) || value <= 0) {
      throw new Error(`${name} must be greater than 0`);
    }
  }
  getType(): string {
    return this.type;
  }

  abstract getArea(): number;
  abstract getPerimeter(): number;

  getDescription(): string {
    return this.constructor.name;
  }
}

// Класс Square (квадрат)
class Square extends Figure {
  constructor(private readonly side: number) {
    super(FigureType.Square);
    this.checkPositive(side, "side");
  }

  getArea(): number {
    return this.side ** 2;
  }

  getPerimeter(): number {
    return this.side * 4;
  }

  getDescription(): string {
    return `Square with side ${this.side}`;
  }
}

// Класс Rectangle (прямоугольник)
class Rectangle extends Figure {
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {
    super(FigureType.Rectangle);
    this.checkPositive(width, "width");
    this.checkPositive(height, "height");
  }

  getArea(): number {
    return this.height * this.width;
  }

  getPerimeter(): number {
    return 2 * this.height + 2 * this.width;
  }

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
    this.checkPositive(side1, "side1");
    this.checkPositive(side2, "side2");
    this.checkPositive(side3, "side3");
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
const triangle2 = new Triangle(3, 4, NaN);
console.log(triangle.getArea()); // 6
console.log(triangle.getPerimeter()); // 12
console.log(triangle.getType()); // triangle
console.log(triangle.getDescription()); // Triangle with side1 3, side2 4 and side3 5
console.log(triangle2.getDescription());
