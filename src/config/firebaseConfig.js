import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDHWxammxp1yYa0561vkhco6kcym4WbtBc',
  authDomain: 'user-management-4ba99.firebaseapp.com',
  projectId: 'user-management-4ba99',
  storageBucket: 'user-management-4ba99.appspot.com',
  messagingSenderId: '976408280757',
  appId: '1:976408280757:web:8dbaba08c6107eb37f48fc',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
