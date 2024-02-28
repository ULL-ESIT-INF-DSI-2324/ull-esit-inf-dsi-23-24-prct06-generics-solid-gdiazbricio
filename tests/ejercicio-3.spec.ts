import 'mocha'
import { expect } from 'chai';
import { FileReader, FileWriter, FileManager } from '../src/ejercicio-3/ejercicio-3';

describe("FileManager tests", () => {
  const filePath = "/home/usuario/ull-esit-inf-dsi-23-24-prct06-generics-solid-gdiazbricio/src/ejercicio-3/example.txt";
  const fileManager = new FileManager(new FileReader(), new FileWriter(), filePath);

  it("should read the content of a file", () => {
    const content = fileManager.readFile();
    // Verificar que la llamada a readFile se realizó correctamente
    expect(content).to.be.a("string");
  });

  it("should write data to a file and update its content", () => {
    const newData = "This is new content to be written into the file.";
    fileManager.writeFile(newData);
    // Verificar que la llamada a writeFile se realizó correctamente
    const updatedContent = fileManager.readFile();
    expect(updatedContent).to.equal(newData);
  });

  it("should handle errors when reading a file", () => {
    const errorFilePath = "/path/to/nonexistent/file.txt";
    const errorFileManager = new FileManager(new FileReader(), new FileWriter(), errorFilePath);
    const content = errorFileManager.readFile();
    expect(content).to.equal("");
  });

  it("should handle errors when writing to a file", () => {
    const newData = "This is new content to be written into the file.";
    const errorFilePath = "/path/to/readonly/file.txt";
    const errorFileManager = new FileManager(new FileReader(), new FileWriter(), errorFilePath);
    errorFileManager.writeFile(newData);
    const updatedContent = errorFileManager.readFile();
    expect(updatedContent).to.not.equal(newData);
  });
});

