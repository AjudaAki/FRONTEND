import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { registerDataAluno } from 'src/app/interfaces/request.interface';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css'],
})
export class CadastroUserComponent implements OnInit {
  currentStep = 1;
  formStep1!: FormGroup;
  formStep2!: FormGroup;
  formStep3!: FormGroup;
  formStep5!: FormGroup;
  formStep6!: FormGroup;
  currentCard: string | null = null;
  imagePreview: string | ArrayBuffer | null = '';

  savedTimes: { [key: string]: { start: string, end: string } } = {};
  
  constructor(
    private router: Router, 
    private fb: FormBuilder, 
    private apiService: ApiService 
  ) {}

  ngOnInit(): void {

    this.formStep1 = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required],
      data_nascimento: ['', Validators.required],
    });

    this.formStep2 = this.fb.group({
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      bairro: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
    });

    this.formStep3 = this.fb.group({
      img_perfil: ['', Validators.required],
    })

    // Carregar dados do localStorage se disponíveis
    this.loadFormData();
  }

  loadFormData() {
    const step1Data = localStorage.getItem('formStep1');
    if (step1Data) {
      this.formStep1.setValue(JSON.parse(step1Data));
    }
    const step2Data = localStorage.getItem('formStep2');
    if (step2Data) {
      this.formStep2.setValue(JSON.parse(step2Data));
    }
    const step3Data = localStorage.getItem('formStep3');
    if (step3Data) {
      this.formStep2.setValue(JSON.parse(step3Data));
    }
  }

  saveFormData(step: number) {
    if (step === 1) {
      localStorage.setItem('formStep1', JSON.stringify(this.formStep1.value));
    } else if (step === 2) {
      localStorage.setItem('formStep2', JSON.stringify(this.formStep2.value));
    }
    else if (step === 3) {
      localStorage.setItem('formStep3', JSON.stringify(this.formStep3.value));
    }
  }

  routerLogin() {
    this.router.navigate(['/login']);
  }

  nextStep() {
    if (this.currentStep === 1) {
      this.saveFormData(1);
    } else if (this.currentStep === 2) {
      this.saveFormData(2);
    }

    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitFormAluno() {
    const registerData: registerDataAluno = {
      ...this.formStep1.value,
      ...this.formStep2.value,
      ...this.formStep3.value,
    };


  // submitFormProf() {
  //   const registerDataProf: registerDataAluno = {
  //     ...this.formStep1.value,
  //     ...this.formStep2.value,
  //     ...this.formStep3.value,
  //     ...this.formStep5.value,
  //     ...this.formStep6.value,
  //   };



    console.log(registerData);

    this.apiService.cadastroUser(registerData).subscribe(
      response => {
        console.log('Cadastro realizado com sucesso', response);
        localStorage.clear();
        this.router.navigate(['/login']);
        // Redirecionar ou mostrar mensagem de sucesso
      },
      error => {
        console.error('Erro ao realizar cadastro', error);
        // Mostrar mensagem de erro
      }
    );
  }

  openCard(card: string) {
    this.currentCard = card;
  }

  closeCard() {
    this.currentCard = null;
  }

  getCardTitle(card: string): string {
    const titles: { [key: string]: string } = {
      monday: 'Segunda',
      tuesday: 'Terça',
      wednesday: 'Quarta',
      thursday: 'Quinta',
      friday: 'Sexta',
      saturday: 'Sábado',
      sunday: 'Domingo'
    };
    return titles[card] || '';
  }

  saveTime(card: string, start: string, end: string) {
    this.savedTimes[card] = { start, end };
    this.closeCard();
  }

  // onImageChange(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.imagePreview = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
        this.formStep3.patchValue({ img_perfil: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }


  changeImage() {
    const input = document.getElementById('imageInput') as HTMLInputElement;
    input.value = ''; // Limpa o valor atual do input de arquivo
    input.click(); // Simula um clique no input de arquivo para abrir a caixa de diálogo
}
}
