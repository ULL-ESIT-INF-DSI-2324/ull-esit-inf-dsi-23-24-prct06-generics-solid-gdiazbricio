import { Box, Element } from "./box";

export class FindByNameInBox<T extends Element> {
  constructor(
    private box: Box<T>,
    public readonly name: string
  ) {}

  setBox(newBox: Box<T>): void {
    this.box = newBox;
  }

  find(): boolean {
    const found = this.box.getElements().find((element) => {
      return element.name === this.name;
    });
    return found === undefined ? false : true;
  }
}
