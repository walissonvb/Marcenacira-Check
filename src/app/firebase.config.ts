import { initializeApp } from "firebase/app";
import { environment } from "src/environments/environment";

export const FirebaseApp = initializeApp(environment.firebaseConfig)
