import "mocha"
import { expect } from "chai";
import { EmailService, ShortMessageService, Notifier } from "../src/ejercicio-5/ejercicio-5";

describe("exercise 5 tests", () => {
  let consoleOutput: string[];

  beforeEach(() => {
    // Capturar la salida de console.log en un buffer temporal
    consoleOutput = [];
    console.log = (...args: string[]) => {
      consoleOutput.push(...args);
    };
  });

  it("should send notification by email", () => {
    const emailService = new EmailService();
    const notifier = new Notifier(emailService);
    notifier.sendNotification("Hello World!");

    expect(consoleOutput).to.include("Sending notification by email: Hello World!");
  });

  it("should send notification by SMS", () => {
    const smsService = new ShortMessageService();
    const notifier = new Notifier(smsService);
    notifier.sendNotification("Hello World!");

    expect(consoleOutput).to.include("Sending notification by SMS: Hello World!");
  });
});
