import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBgxpjlDE4MUo0swKS6quE6DNVPg3XBH1c',
  authDomain: 'react-commerce-91fc3.firebaseapp.com',
  databaseURL: 'https://react-commerce-91fc3.firebaseio.com',
  projectId: 'react-commerce-91fc3',
  storageBucket: 'react-commerce-91fc3.appspot.com',
  messagingSenderId: '501200869184',
  appId: '1:501200869184:web:1aba7d79d48e6dea594ca5',
  measurementId: 'G-3QLD2093DC'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const fireStore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
