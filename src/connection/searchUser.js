import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../connection/fireBaseConnection";

export default async function searchUsersFirebase(nameUser) {

  const usersRef = collection(db, "users");
  getDocs(usersRef)
    .then((snapshot) => {
      const usersSerch =[]
      snapshot.docs.forEach((doc) => {
        usersSerch.push({...doc.data(), id : doc.id})
      })
      console.log(usersSerch);
    })

}
