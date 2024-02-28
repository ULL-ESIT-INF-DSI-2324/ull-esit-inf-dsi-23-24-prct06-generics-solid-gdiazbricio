import 'mocha'
import { expect } from 'chai';
import { FileReader, FileWriter, FileManager } from '../src/ejercicio-3/ejercicio-3';

describe("FileManager tests", () => {
  const filePath = "/home/usuario/ull-esit-inf-dsi-23-24-prct06-generics-solid-gdiazbricio/src/ejercicio-3/example.txt";
  const fileManager = new FileManager(new FileReader(), new FileWriter(), filePath);

  it("should read the content of a file", () => {
    const content = fileManager.readFile();
    expect(content).to.be.a("string");
  });

  it("should write data to a file and update its content", () => {
    const newData = "This is new content to be written into the file.";
    fileManager.writeFile(newData);
    const updatedContent = fileManager.readFile();
    expect(updatedContent).to.equal(newData);
  });
});
