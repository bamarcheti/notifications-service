import { MailService } from './mail.service';

export class SMTPMail implements MailService {
  sendEmail(): string {
    return 'SMTP Mail!';
  }
}
