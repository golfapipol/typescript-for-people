export class Captcha {
  numberStrings: string[];
  operators: any;

  constructor() {
    this.numberStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    this.operators = { 1: '+', 2: '-', 3: '*' };
  }
  generate (pattern: number, left: number, right: number, operator: number) {
    let leftOperand: Operand;
    let rightOperand: Operand;
    let operatorOperand = new OperatorOperand(operator);
    if (pattern === 1) {
      leftOperand = new NumberOperand(left);
      rightOperand = new TextOperand(right);
    } else if (pattern === 2) {
      leftOperand = new TextOperand(left);
      rightOperand = new NumberOperand(right);
    }
    return `${leftOperand.toText()} ${operatorOperand.toText()} ${rightOperand.toText()}`
  }

  patternOne(left: number, right: number, operator: number) {
    return `${left} ${this.operators[operator]} ${this.numberStrings[right]}`
  }

  patternTwo(left: number, right: number, operator: number) {
    return `${this.numberStrings[left]} ${this.operators[operator]} ${right}`
  }
}

class Operand {
  n: number;

  constructor(n: number) {
    this.n = n;
  }
  toText ():string { return ''; }
}

class TextOperand extends Operand {
  numberStrings: string[];
  constructor (n: number) {
    super(n);
    this.numberStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    this.n = n;
  }

  toText (): string {
    return `${this.numberStrings[this.n]}`;
  }
}

class NumberOperand extends Operand {
  constructor (public n: number) {
    super(n);
  }

  toText (): string {
    return `${this.n}`;
  }
}

class OperatorOperand {
  operators: any;
  n: number;
  constructor (n: number) {
    this.operators = { 1: '+', 2: '-', 3: '*' };
    this.n = n
  }

  toText (): string {
    return this.operators[this.n];
  }
}
// export class Captcha {
//   numberStrings: string[];
//   operators: any;

//   constructor() {
//     this.numberStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//     this.operators = { 1: '+', 2: '-', 3: '*' };
//   }
//   generate (pattern: number, left: number, right: number, operator: number) {
//     if (pattern === 1) {
//       return this.patternOne(left, right, operator);
//     } else if (pattern === 2) {
//       return this.patternTwo(left, right, operator);
//     }
//   }

//   patternOne(left: number, right: number, operator: number) {
//     return `${left} ${this.operators[operator]} ${this.numberStrings[right]}`
//   }

//   patternTwo(left: number, right: number, operator: number) {
//     return `${this.numberStrings[left]} ${this.operators[operator]} ${right}`
//   }
// }
