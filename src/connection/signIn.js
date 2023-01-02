import { signInWithEmailAndPassword } from "firebase/auth";
import readUser from "./dataUser";
import { auth } from "./fireBaseConnection";

export async function signIn(email, password, setUser, toast) {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    toast({
        title: `BIENVENIDO`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    readUser(setUser, credentials.user.uid);
  } catch (error) {
    console.log(error);
    toast({
      title: `ERROR`,
      description: `${error.code}`,
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  }
}
