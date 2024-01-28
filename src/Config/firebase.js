import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signOut} from "firebase/auth";
import { getFirestore ,setDoc ,doc ,getDoc ,collection ,addDoc} from "firebase/firestore";
import { getStorage, uploadBytes ,getDownloadURL ,ref } from "firebase/storage";
import { getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxybgHrRHNJHzmM5axA5rAGBtxFQsn0Bk",
  authDomain: "ecommerce-2a553.firebaseapp.com",
  projectId: "ecommerce-2a553",
  storageBucket: "ecommerce-2a553.appspot.com",
  messagingSenderId: "811147857800",
  appId: "1:811147857800:web:a3fcb8e119229ae980b43d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage();

export async function Register(userInfo){
  const {fullName , number , email,password,address} = userInfo
  const {user: {uid}} = await createUserWithEmailAndPassword(auth, email, password)
  try{
  const userRef = await setDoc(doc(db, "users", uid), {
    fullName,
    number,
    email,
    address,
  });
  console.log(uid)
}catch(e){
  console.log(e.message)
}
}

export async function SignIn(userInfo){
  const {email ,password} = userInfo
  await signInWithEmailAndPassword(auth, email, password)
}

export const getUser = async(uid) =>{
  const docRef = doc(db, "users", uid);
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  const user = docSnap.data()
   return user
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

 }


 export async function postAdToDb(ad) {
  /*
  1. Upload image to Storage
  2. Get the URL of the image
  3. Add all data with URL in database
  */ 

  let {productImg } = ad
  console.log(productImg)
  try {
      const storageRef = ref(storage, `Product/${productImg.name}`);
      console.log(storageRef)
      await uploadBytes(storageRef, productImg)  
      const url = await getDownloadURL(storageRef)
      console.log(url)
      ad.productImg = url 
      await addDoc(collection(db, `ProductsDetail`), ad)
    } catch (e) {
      console.log(e.message)
  } 
}

 export async function logout() {
  return await signOut(auth)
}