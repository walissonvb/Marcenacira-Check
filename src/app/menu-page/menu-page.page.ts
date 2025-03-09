import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption, IonCheckbox, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { FirebaseApp } from '../firebase.config';
import { RelatorService } from '../servico/relator.service';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
  standalone: true,
  imports: [
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonCheckbox,
    IonButton,
    IonLabel,
    IonItem,
    IonInput,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class MenuPagePage implements OnInit {
  formCheck: FormGroup;
  sections: boolean[] = [true, false, false, false, false];


  constructor(
    private fb: FormBuilder,
    private relatorService: RelatorService,

  ) {
    this.formCheck = this.fb.group({
      cliente: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      ambiente: ['', [Validators.required]],
      movel: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      montador:  ['', [Validators.required]],
      riscos: [''],
      riscosObs: [''],
      esgoto: [''],
      esgotoObs: [''],
    });

   }

  ngOnInit() {
    console.log('Firebase App Inicializado:', FirebaseApp);
    this.relatorService.testFirestore();
    console.log(this.relatorService)
  }



  toggleSection(index: number) {
    this.sections = this.sections.map((val, i) => i === index);
  }

  onCheckboxChange(event: any, controlName: string, textValue: string) {
    if (event.detail.checked) {
      this.formCheck.get(controlName)?.setValue(textValue); // Define a frase quando marcado
    } else {
      this.formCheck.get(controlName)?.setValue(''); // Define como string vazia quando desmarcado
    }
  }

  async formPost() {
    const Relatorio = {
      cliente: this.formCheck.value.cliente,
      endereco: this.formCheck.value.endereco,
      ambiente: this.formCheck.value.ambiente,
      movel: this.formCheck.value.movel,
      telefone: this.formCheck.value.telefone,
      riscos: this.formCheck.value.riscos || "Não informado", // Evita valores nulos
      riscosObs: this.formCheck.value.riscosObs,
      esgoto: this.formCheck.value.esgoto ||"Não informado",
      esgotoObs: this.formCheck.value.esgotoObs,
    };

    console.log(Relatorio);
  }


}
