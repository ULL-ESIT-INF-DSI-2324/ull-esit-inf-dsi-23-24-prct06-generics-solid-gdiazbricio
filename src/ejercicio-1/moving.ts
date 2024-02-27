import { Box, Element } from "./box";

export class Moving <T extends Element>{
  constructor(private boxes: Box<T>[]){}

  getBoxes(): Box<T>[] {
    return this.boxes;
  }

  numberOfBoxes(): number{
    return this.boxes.length;
  }

  addBox(box: Box<T>): void {
    this.boxes.push(box);
  }

  deleteBox(identifier: number): void {
    this.boxes = this.boxes.filter((element) => {
      return identifier !== element.identifier;
    })
  }
}