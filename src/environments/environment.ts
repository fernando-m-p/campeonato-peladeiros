export const environment = {
  firebase: {
    projectId:  import.meta.env["NG_APP_FIREBASE_PROJECTID"],
    appId: import.meta.env["NG_APP_FIREBASE_APPID"],
    databaseURL: import.meta.env["NG_APP_FIREBASE_DATABASEURL"],
    storageBucket: import.meta.env["NG_APP_FIREBASE_STORAGEBUCKET"],
    apiKey: import.meta.env["NG_APP_FIREBASE_APIKEY"],
    authDomain:import.meta.env["NG_APP_FIREBASE_AUTHDOMAIN"],
    messagingSenderId: import.meta.env["NG_APP_FIREBASE_MESSAGINGSENDERID"],
    measurementId: import.meta.env["NG_APP_FIREBASE_MEASUREMENTID"],
  },
};