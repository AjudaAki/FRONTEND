import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { registerDataAluno, registerDataProf } from 'src/app/interfaces/request.interface';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css'],
})
export class CadastroUserComponent implements OnInit {
  currentStep = 1;
  tags: any[] = [];
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
    private apiService: ApiService,
    private authService: AuthService
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
      numero_casa: ['', Validators.required],
    });

    this.formStep3 = this.fb.group({
      img_perfil: ['', Validators.required],
    })

    this.formStep5 = this.fb.group({
      descricao_rapida: ['', Validators.required],
      descricao: ['', Validators.required],
      id_tag: ['', Validators.required],
      preco_minimo: ['', Validators.required],
      preco_maximo: ['', Validators.required]
    })

    this.formStep6 = this.fb.group({
      domingo: ['', Validators.required],
      segunda: ['', Validators.required],
      terca: ['', Validators.required],
      quarta: ['', Validators.required],
      quinta: ['', Validators.required],
      sexta: ['', Validators.required],
      sabado: ['', Validators.required],
      discord: ['', Validators.required],
      whatsapp: ['', Validators.required],
      teams: ['', Validators.required]
    })

    this.loadFormData();
    this.obterTags();
    this.saveFormData(this.currentStep)
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
      this.formStep3.setValue(JSON.parse(step3Data));
    }
    const step5Data = localStorage.getItem('formStep5');
    if (step5Data) {
      this.formStep5.setValue(JSON.parse(step5Data));
    }
    const step6Data = localStorage.getItem('formStep6');
    if (step6Data) {
      this.formStep6.setValue(JSON.parse(step6Data));
    }

    console.log('Step 1 Data:', this.formStep1.value);
    console.log('Step 2 Data:', this.formStep2.value);
    console.log('Step 3 Data:', this.formStep3.value);
    console.log('Step 5 Data:', this.formStep5.value);
    console.log('Step 6 Data:', this.formStep6.value);
  }

  saveFormData(step: number) {
    if (step === 1) {
      localStorage.setItem('formStep1', JSON.stringify(this.formStep1.value));
    } else if (step === 2) {
      localStorage.setItem('formStep2', JSON.stringify(this.formStep2.value));
    } else if (step === 3) {
      localStorage.setItem('formStep3', JSON.stringify(this.formStep3.value));
    } else if (step === 5) {
      localStorage.setItem('formStep5', JSON.stringify(this.formStep5.value)); 
    } else if (step === 6) {
      localStorage.setItem('formStep6', JSON.stringify(this.formStep6.value));
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
    } else if (this.currentStep === 3) {
      this.saveFormData(3);
    }else if (this.currentStep === 5) {
      this.saveFormData(5);
    }else if (this.currentStep === 6) {
      this.saveFormData(6);
    }

    if (this.currentStep < 6) {
      this.currentStep++;
      

    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.loadFormData();
      console.log(this.loadFormData())
    }
  }

  submitFormAluno() {
    const registerData: registerDataAluno = {
      ...this.formStep1.value,
      ...this.formStep2.value,
      ...this.formStep3.value,
    };
  
    console.log(registerData);
  
    this.apiService.cadastroUser(registerData).subscribe(
      response => {
        console.log('Cadastro realizado com sucesso', response);
        
        const formValue = {
          email: registerData.email,
          senha: registerData.senha
        };
  
        this.authService.login(formValue).subscribe(
          (post) => {
            console.log(post);
            var token = JSON.parse(JSON.stringify(post)).token;
            localStorage.setItem('token', token);
            this.router.navigate(['/professores']);
          },
          (error) => {
            console.error('Login falhou', error);
            // Mostrar mensagem de erro no login, se necessário
          }
        );
      },
      error => {
        console.error('Erro ao realizar cadastro', error);
        // Mostrar mensagem de erro no cadastro, se necessário
      }
    );
  }

  submitFormProf() {

    const idTagNumber = parseInt(this.formStep5.value.id_tag);
    const registerData: registerDataProf = {
      ...this.formStep1.value,
      ...this.formStep2.value,
      ...this.formStep3.value,
      ...this.formStep5.value,
      id_tag: idTagNumber, // Substituindo id_tag pela versão numérica
      ...this.formStep6.value,
    };
  
    console.log(registerData);
  
    this.apiService.cadastroProf(registerData).subscribe(
      response => {
        console.log('Cadastro realizado com sucesso', response);
        
        const formValue = {
          email: registerData.email,
          senha: registerData.senha
        };
  
        this.authService.login(formValue).subscribe(
          (post) => {
            console.log(post);
            var token = JSON.parse(JSON.stringify(post)).token;
            localStorage.setItem('token', token);
            this.router.navigate(['/professores']);
          },
          (error) => {
            console.error('Login falhou', error);
            // Mostrar mensagem de erro no login, se necessário
          }
        );
  
        // localStorage.clear();
        // this.router.navigate(['/login']);
        // Redirecionar ou mostrar mensagem de sucesso
      },
      error => {
        console.error('Erro ao realizar cadastro', error);
        // Mostrar mensagem de erro no cadastro, se necessário
      }
    );
  }

  obterTags(): void {
    this.apiService.tags().subscribe(
      (response: any) => {
        this.tags = response;
        console.log(this.tags);
      },
      (error: any) => {
        console.error('Erro ao buscar dados do usuário:', error);
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
