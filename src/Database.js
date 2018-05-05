import firebase from 'react-native-firebase';




class Database {


  constructor(){

    firebase.auth()
      .signInAnonymouslyAndRetrieveData()
      .then(credential => {
        if (credential) {
          console.log('default app user ->', credential.user.toJSON());
        }
      });

      console.log("LULL");

      this.dbRef = firebase.firestore().collection('users');
      this.dbRef.onSnapshot(this.onCollectionUpdate);
  }


  onCollectionUpdate = (snapshot) => {

    snapshot.forEach((doc) => {
        console.log(doc.data());

      });

  }





  load(){

    console.log("LOAD");
  }




}


export default new Database();
