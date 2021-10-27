const firebaseConfig = {
    apiKey: "AIzaSyATXnljZTL5JlJVaUYBhXG64Z2HmBBcGXw",
    authDomain: "ecosistemas-de-aplicacio-4f3b5.firebaseapp.com",
    databaseURL: "https://ecosistemas-de-aplicacio-4f3b5-default-rtdb.firebaseio.com",
    projectId: "ecosistemas-de-aplicacio-4f3b5",
    storageBucket: "ecosistemas-de-aplicacio-4f3b5.appspot.com",
    messagingSenderId: "909457144955",
    appId: "1:909457144955:web:4b266bed49d4bc2ec976de",
    measurementId: "G-5PMVK5WHNH"
  };

  export function getFirebaseConfig(){
      if(!firebaseConfig || !firebaseConfig.apiKey){
          throw new Error("Firebase Configuration Error");
      } else{
          return firebaseConfig;
      }
  }