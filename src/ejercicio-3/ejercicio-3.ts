import * as fs from "fs";

/**
 * Utility class for reading files.
 */
export class FileReader {
  /**
   * Reads the content of a file.
   * @param filePath - The path of the file to read.
   * @returns The content of the file as a string.
   */
  public readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, "utf-8");
    } catch (error) {
      console.error("Error reading the file:", error.message);
      return "";
    }
  }
}

/**
 * Utility class for writing files.
 */
export class FileWriter {
  /**
   * Writes data to a file.
   * @param filePath - The path of the file to write.
   * @param data - The data to write to the file.
   */
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("File written successfully.");
    } catch (error) {
      console.error("Error writing to the file:", error.message);
    }
  }
}

/**
 * Utility class for managing files.
 */
export class FileManager {
  /**
   * Creates an instance of FileManager.
   * @param fileReader - The FileReader instance to use for reading files.
   * @param fileWriter - The FileWriter instance to use for writing files.
   * @param filePath - The path of the file to manage.
   */
  constructor(
    private fileReader: FileReader,
    private fileWriter: FileWriter,
    private filePath: string
  ) {}

  /**
   * Reads the content of the managed file.
   * @returns The content of the file as a string.
   */
  public readFile(): string {
    return this.fileReader.readFile(this.filePath);
  }

  /**
   * Writes data to the managed file.
   * @param data - The data to write to the file.
   */
  public writeFile(data: string): void {
    this.fileWriter.writeFile(this.filePath, data);
  }
}

// Client code
const fileReader = new FileReader();
const fileWriter = new FileWriter();
const fileManager = new FileManager(fileReader, fileWriter, "/home/usuario/ull-esit-inf-dsi-23-24-prct06-generics-solid-gdiazbricio/src/ejercicio-3/example.txt");

// Reading content
const currentContent = fileManager.readFile();
console.log("Current content:", currentContent);

// Writing content
const newData = "This is new content to be written into the file.";
fileManager.writeFile(newData);

// Updating content
const updatedContent = fileManager.readFile();
console.log("Updated content:", updatedContent);


// Se ha dividido la funcionalidad de leer y escribir en el fichero en dos clases distintas, de manera que se respete el principio de single responsabilty.
