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


      this.dbRef = firebase.firestore().collection('exercises');
      this.dbRef.onSnapshot(this.onCollectionUpdate);
  }


  onCollectionUpdate = (snapshot) => {

    snapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.id);

      });

  }





  load(){

    console.log("LOAD");
  }

  addExercise(json){
    this.dbRef.add(json);
  }




}


export default new Database();
