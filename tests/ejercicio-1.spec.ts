import Mocha from "mocha";
import { expect } from "chai";
import { Box } from "../src/ejercicio-1/box"
import { Moving } from "../src/ejercicio-1/moving";
import { FindInMoving } from "../src/ejercicio-1/findInMoving";
import { FindByNameInBox } from "../src/ejercicio-1/findByNameInBox";
import { PrintBox } from "../src/ejercicio-1/printBox";

const myBox1 = new Box([{name: "objeto 1", size: 7, description: "es un objeto que meto primero"}, {name: "objeto 2", size: 1}], 1,  10);
const myBox2 = new Box([{name: "objeto 4", size: 5}, {name: "objeto 5", size: 7}], 2, 20);

const myMoving = new Moving([myBox1, myBox2]);

describe('Exercise 1 tests', () => {
  it('printBox must return the elements inside a box', () => {
    const myBoxPrinter = new PrintBox(myBox1);
    expect(myBoxPrinter.print()).to.be.equal("- objeto 1 \n- objeto 2 \n");
  });

  it('findByNameInBox must returns true if the element is in the box', () => {
    const myFinderInBox = new FindByNameInBox(myBox2, "objeto 4");
    expect(myFinderInBox.find()).to.be.equal(true);
  });

  it('findByNameInBox must returns false if the element is not in the box', () => {
    const myFinderInBox = new FindByNameInBox(myBox1, "objeto 4");
    expect(myFinderInBox.find()).to.be.equal(false);
  });


});