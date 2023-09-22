import { LinhaTabelaType } from "@/app/model/linha-tabela";
import { initializeApp } from "firebase/app";
import { DataSnapshot, child, get, getDatabase, ref } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: import.meta.env["NG_APP_FIREBASE_DATABASEURL"],
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


export const getTimes = async () => {
  const dbRef = ref(getDatabase());
  let retorno: LinhaTabelaType[] = [];
  await get(child(dbRef, `times`)).then((snapshot)=>{
    if(snapshot.exists()){
      retorno =  snapshot.val();
    }else{
      console.log("Nenhum retorno");
    }

    
  }).catch((error)=>{
      throw error;
  });
  return retorno;
}