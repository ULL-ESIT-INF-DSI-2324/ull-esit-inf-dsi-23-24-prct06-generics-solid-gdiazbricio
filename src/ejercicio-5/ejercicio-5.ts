/**
 * Interface for a notification service.
 */
interface NotificationService {
  /**
   * Sends a notification with the given message.
   * @param message - The message of the notification.
   */
  notify(message: string): void;
}

/**
 * Class that allows notifications to be sent by email.
 */
export class EmailService implements NotificationService {
  /**
   * Sends a notification by email.
   * @param message - The message of the notification.
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

/**
 * Class that allows notifications to be sent by SMS.
 */
export class ShortMessageService implements NotificationService {
  /**
   * Sends a notification by SMS.
   * @param message - The message of the notification.
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

/**
 * Class that uses different types of notification services to send notifications.
 */
export class Notifier {
  /**
   * Creates an instance of Notifier.
   * @param notificationService - The notification service to use.
   */
  constructor(private notificationService: NotificationService) {
  }

  /**
   * Sends a notification using the configured notification service.
   * @param message - The message of the notification.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');
