import { Moving } from "./moving";
import { Element } from "./box";
import { FindByNameInBox } from "./findByNameInBox";

export class FindInMoving<T extends Element> {
  constructor(private moving: Moving<T>, public readonly name: string){}

  find(): void {
    const finder = new FindByNameInBox(this.moving.getBoxes()[0], this.name);
    this.moving.getBoxes().forEach((box) => {
      finder.setBox(box);
      if (finder.find()) console.log(`${this.name} se encuentra en la caja ${box.identifier}`);
    })
  }
}