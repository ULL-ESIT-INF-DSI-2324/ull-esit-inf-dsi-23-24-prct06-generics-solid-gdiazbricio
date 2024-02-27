import { Box, Element } from "./box"

export class PrintBox<T extends Element> {
  constructor(private box:Box<T>) {}

  setBox(newBox: Box<T>): void {
    this.box = newBox;
  }

  print(): string {
    let resultingString = "";
    this.box.getElements().forEach((element) => {
      resultingString += `- ${element.name} \n`;
    })
    return resultingString
  }
}