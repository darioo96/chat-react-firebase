import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./fireBaseConnection";

export async function signIn(email, password, setUser, toast){
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        setUser(credentials.user);
    } catch (error) {
        console.log(error)
        toast({
            title: `ERROR`,
            description: `${error.code}`,
            status: 'error',
            duration: 4000,
            isClosable: true,
        })
    }
    
}