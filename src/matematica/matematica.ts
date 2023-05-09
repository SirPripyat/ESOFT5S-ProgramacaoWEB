import { ErrorMessages } from "./matematica.enum";

class Matematica {

  private a : number;
  private b : number;

  public setA(a: number) {
    const verify = this.verifyNumber(a);

    return verify === true ? this.a = a : ErrorMessages.INVALID_INPUT;
  }

  public setB(b: number) {
    const verify = this.verifyNumber(b);

    return verify === true ? this.b = b : ErrorMessages.INVALID_INPUT;
  }

  private verifyNumber(x: number) {
    if (typeof x === 'number') {
      return true;
    } 
    return false;
  }

  public getA() {
    return this.a;
  }

  public getB() {
    return this.b;
  }

  private sum() {
    return Number(this.getA()) + Number(this.getB());
  }

  private minus() {
    return Number(this.getA()) - Number(this.getB());
  }

  public getSum() {
    console.log(this.sum())
    return this.sum();
  }

  public getMinus() {
    console.log(this.minus())
    return this.minus();
  }
  
}

export default Matematica