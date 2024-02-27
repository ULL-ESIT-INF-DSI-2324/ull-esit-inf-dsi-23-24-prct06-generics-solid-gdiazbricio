import { Moving } from "./moving";
import { Element } from "./box";
import { PrintBox } from "./printBox";

export class PrintMoving<T extends Element> {
  constructor(private moving: Moving<T>){}

  print(): void {
    const printer = new PrintBox(this.moving.getBoxes()[0]);
    this.moving.getBoxes().forEach((box) => {
      printer.setBox(box);
      console.log(`La caja ${box.identifier} contiene: \n` + printer.print());
    })
  }
}