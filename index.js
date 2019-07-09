class Polygon {
  constructor(array) {
    this._sides = array
  }

  get perimeter() {
    return this._sides.reduce((total, side) => {return total + side})
  }

  get countSides() {
    return this._sides.length
  }
}

class Triangle extends Polygon {
  get isValid() {
    for (let i = 0; i < this.countSides; i++) {
      if (this._sides[i] >= this._sides.filter((side, index) => { return index !== i }).reduce((total, side) => {return total + side})) {
        return false
      }
    }
    return true
  }
}

class Square extends Polygon {
  get isValid() {
    if (this._sides.every(side => side === this._sides[0])) {
      return true
    } else {
      return false
    }
  }

  get area() {
    return this._sides[0] * this._sides[0]
  }
}



