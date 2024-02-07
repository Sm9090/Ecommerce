import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc, collection, addDoc ,getDocs, query } from "firebase/firestore";
import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";
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

export async function Register(userInfo) {
  const { fullName, number, email, password, address } = userInfo
  const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
  try {
    const userRef = await setDoc(doc(db, "users", uid), {
      fullName,
      number,
      email,
      address,
    });
    console.log(uid)
  } catch (e) {
    console.log(e.message)
  }
}

export async function SignIn(userInfo) {
  const { email, password } = userInfo
  await signInWithEmailAndPassword(auth, email, password)
}

export const getUser = async (uid) => {
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
  let { productImg ,productType } = ad
  try {
    const storageRef = ref(storage, `Product-${productImg.name}`);
    await uploadBytes(storageRef, productImg)
    const url = await getDownloadURL(storageRef)
    ad.productImg = url
    const collectionRef = collection(db, `Products-${productType.charAt(0).toUpperCase()}${productType.slice(1).toLowerCase()}` );
    await addDoc(collectionRef, ad)
  } catch (e) {
    console.log(e.message)
  }
}

export async function logout() {
  return await signOut(auth)
}



export async function getProduct(props) {
  try {
    const path = `Products-${props.type}`;
    const querySnapshot = await getDocs(collection(db, path));
    const productsArr = [];

    querySnapshot.forEach((doc) => {
      productsArr.push({ ...doc.data(), id: doc.id });
    });
    // console.log(productsArr)

    return productsArr;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getSingleAd(){
  
}