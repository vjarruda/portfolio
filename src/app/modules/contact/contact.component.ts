import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm!: FormGroup
  isLoading: boolean = false;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  private emailJsPublicKey = 'J5RMpJ_XRHjhuZuTQ';
  private emailJsServiceID = 'service_574n36v';
  private emailJsTemplateID = 'template_ahfw51w';
  private emailJsToEmail = 'arrudavini25@gmail.com';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    emailjs.init(this.emailJsPublicKey);

    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  }


  async sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const templateParams = {
      from_name: this.contactForm.value.nome,
      from_email: this.contactForm.value.email,
      message: this.contactForm.value.mensagem,
      to_email: this.emailJsToEmail
    };

    try {
      const response: EmailJSResponseStatus = await emailjs.send(
        this.emailJsServiceID,
        this.emailJsTemplateID,
        templateParams
      );

      console.log('SUCCESS!', response.status, response.text);
      alert('Mensagem enviada com sucesso!');
      this.contactForm.reset();
    } catch (err) {
      console.error('FAILED...', err);
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    } finally {
      this.isLoading = false;
    }
  }
}
