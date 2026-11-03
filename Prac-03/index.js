// Клас Point — точка на площині (x, y).
// Методи: distance_to(other) — відстань до іншої точки,
// move(dx, dy) — зсув точки, is_origin() — чи це початок координат.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance_to(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    is_origin() {
        return this.x === 0 && this.y === 0;
    }
}

// Приклад використання класу Point
const p1 = new Point(3, 4);
const p2 = new Point(0, 0);

console.log(`Відстань між p1 та p2: ${p1.distance_to(p2)}`); // Відстань між p1 та p2: 5
console.log(`Чи p1 знаходиться в початку координат? ${p1.is_origin()}`); // Чи p1 знаходиться в початку координат? false

module.exports = { Point };
