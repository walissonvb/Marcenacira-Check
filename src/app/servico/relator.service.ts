import { Injectable, inject } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment'; // Certifique-se de que este caminho está correto

export interface Relatorio {
  cliente: string;
}

@Injectable({
  providedIn: 'root'
})
export class RelatorService {

  private firebaseApp: FirebaseApp;
  private db: Firestore;

  constructor() {
    this.firebaseApp = initializeApp(environment.firebaseConfig); // Inicializa o Firebase com as configs do seu ambiente
    this.db = getFirestore(this.firebaseApp); // Obtém o Firestore vinculado ao app Firebase
  }

  async testFirestore() {
    try {
      const querySnapshot = await getDocs(collection(this.db, 'marcenariaCheck')); // Nome correto da coleção
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
      });
    } catch (error) {
      console.error('Erro ao acessar o Firestore:', error);
    }
  }
}
