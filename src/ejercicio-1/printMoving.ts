import { Moving } from "./moving";
import { Element } from "./box";
import { PrintBox } from "./printBox";

export class PrintMoving<T extends Element> {
  constructor(private moving: Moving<T>) {}

  print(): string {
    const printer = new PrintBox(this.moving.getBoxes()[0]);
    let resultingString = "";
    this.moving.getBoxes().forEach((box) => {
      printer.setBox(box);
      resultingString +=
        `La caja ${box.identifier} contiene: \n` + printer.print();
    });
    return resultingString;
  }
}
