import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "./fireBaseConnection";
import { doc, setDoc } from "firebase/firestore"; 


export default async function signAuth(user,email,password,onClose,setLoading,toast){
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        writeToDataBaseUser(user,userCredentials.user.uid)
        setLoading(false)
        toast({
            title: `Bienvenido ${user}`,
            description: "Se creo la cuenta correctamente",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        onClose()

    } catch (error) {
        setLoading(false)
        toast({
            title: 'Error',
            description: `${error.code}`,
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
    }
}

const writeToDataBaseUser = async (user,uid) => {
  await setDoc(doc(db, "users", uid), {
    name: user
  })
  }

