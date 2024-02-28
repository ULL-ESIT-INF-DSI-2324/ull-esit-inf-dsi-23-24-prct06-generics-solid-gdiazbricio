import "mocha";
import { expect } from "chai";
import { Box } from "../src/ejercicio-1/box";
import { Moving } from "../src/ejercicio-1/moving";
import { FindInMoving } from "../src/ejercicio-1/findInMoving";
import { FindByNameInBox } from "../src/ejercicio-1/findByNameInBox";
import { PrintBox } from "../src/ejercicio-1/printBox";
import { PrintMoving } from "../src/ejercicio-1/printMoving";

const myBox1 = new Box(
  [
    { name: "objeto 1", size: 7, description: "es un objeto que meto primero" },
    { name: "objeto 2", size: 1 },
  ],
  1,
  10
);
const myBox2 = new Box(
  [
    { name: "objeto 4", size: 5 },
    { name: "objeto 5", size: 7 },
  ],
  2,
  20
);

const myMoving = new Moving([myBox1, myBox2]);

describe("Exercise 1 tests", () => {
  it("getElements returns the elements inside a box", () => {
    expect(myBox2.getElements()).to.be.deep.equal([
      { name: "objeto 4", size: 5 },
      { name: "objeto 5", size: 7 },
    ]);
  });

  it("getElementsNumber returns the number of elements inside a box", () => {
    expect(myBox2.getElementsNumber()).to.be.equal(2);
  });

  it("addElement adds an element  to a box", () => {
    myBox2.addElement({ name: "objeto 6", size: 3 });
    expect(myBox2.getElements()).to.be.deep.equal([
      { name: "objeto 4", size: 5 },
      { name: "objeto 5", size: 7 },
      { name: "objeto 6", size: 3 },
    ]);
  });

  it("deleteObject deletes an element in a box", () => {
    myBox2.deleteObject({ name: "objeto 6", size: 3 });
    expect(myBox2.getElements()).to.be.deep.equal([
      { name: "objeto 4", size: 5 },
      { name: "objeto 5", size: 7 },
    ]);
  });

  it("addElement does not add an element  to a box if does not fit", () => {
    myBox2.addElement({ name: "objeto 5", size: 9 });
    expect(myBox2.getElements()).to.be.deep.equal([
      { name: "objeto 4", size: 5 },
      { name: "objeto 5", size: 7 },
    ]);
  });

  it("printBox return a string with the elements names inside a box", () => {
    const myBoxPrinter = new PrintBox(myBox1);
    expect(myBoxPrinter.print()).to.be.equal("- objeto 1 \n- objeto 2 \n");
  });

  it("printBox must have a setter for boxes", () => {
    const myBoxPrinter = new PrintBox(myBox1);
    myBoxPrinter.setBox(myBox2);
    expect(myBoxPrinter.print()).to.be.equal("- objeto 4 \n- objeto 5 \n");
  });

  it("findByNameInBox must returns true if the element is in the box", () => {
    const myFinderInBox = new FindByNameInBox(myBox2, "objeto 4");
    expect(myFinderInBox.find()).to.be.equal(true);
  });

  it("findByNameInBox must returns false if the element is not in the box", () => {
    const myFinderInBox = new FindByNameInBox(myBox1, "objeto 4");
    expect(myFinderInBox.find()).to.be.equal(false);
  });

  it("findByNameInBox have a setter for boxes", () => {
    const myFinderInBox = new FindByNameInBox(myBox1, "objeto 4");
    myFinderInBox.setBox(myBox2);
    expect(myFinderInBox.find()).to.be.equal(true);
  });

  it("getBoxes returns the boxes of a moving", () => {
    expect(myMoving.getBoxes()).to.be.deep.equal([myBox1, myBox2]);
  });

  it("numberOfBoxes returns the number of boxes of a moving", () => {
    expect(myMoving.numberOfBoxes()).to.be.equal(2);
  });

  it("deleteBox deletes a boxes of a moving", () => {
    myMoving.deleteBox(1);
    expect(myMoving.getBoxes()).to.be.deep.equal([myBox2]);
  });

  it("addBox adds a boxes of a moving", () => {
    myMoving.addBox(myBox1);
    expect(myMoving.getBoxes()).to.be.deep.equal([myBox2, myBox1]);
  });

  it("findInMoving returns a string with the box that contains the element", () => {
    const myMovingFinder = new FindInMoving(myMoving, "objeto 1");
    expect(myMovingFinder.find()).to.be.equal(
      "objeto 1 se encuentra en la caja 1"
    );
  });

  it("printMoving returns a string with the boxes that contains the moving and its elements", () => {
    const myMovingPrinter = new PrintMoving(myMoving);
    expect(myMovingPrinter.print()).to.be.equal(
      "La caja 2 contiene: \n- objeto 4 \n- objeto 5 \nLa caja 1 contiene: \n- objeto 1 \n- objeto 2 \n"
    );
  });
});
