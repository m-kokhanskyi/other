class Square {
  constructor(
    public width: number,
    public height: number,
  ) {}
}

class Triangle {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

class AreaCalculator {
  calculate(shapes: (Square | Triangle)[]): number {
    const area: number[] = [];

    shapes.forEach((shape) => {
      if (shape instanceof Square) {
        area.push(shape.width * shape.height);
      } else if (shape instanceof Triangle) {
        area.push(shape.radius * shape.radius * Math.PI);
      }
    });

    return area.reduce((sum, current) => sum + current, 0);
  }
}

// Приклад використання
const shapes = [new Square(10, 20), new Triangle(5), new Square(5, 5)];

const calculator = new AreaCalculator();
console.log(calculator.calculate(shapes)); // Виведе загальну площу всіх фігур
