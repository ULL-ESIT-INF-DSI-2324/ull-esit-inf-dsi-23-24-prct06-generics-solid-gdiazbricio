import { Moving } from "./moving";
import { Element } from "./box";
import { FindByNameInBox } from "./findByNameInBox";

export class FindInMoving<T extends Element> {
  constructor(private moving: Moving<T>, public readonly name: string){}

  find(): string {
    const finder = new FindByNameInBox(this.moving.getBoxes()[0], this.name);
    let resultingString: string = "";
    this.moving.getBoxes().forEach((box) => {
      finder.setBox(box);
      if (finder.find()) resultingString = (`${this.name} se encuentra en la caja ${box.identifier}`);
    })
    return resultingString;
  }
}