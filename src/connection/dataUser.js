import { onValue, ref } from "firebase/database";
import { database } from "../connection/fireBaseConnection";

export default function readUser(setUser, uid) {
  const starCountRef = ref(database, "users/" + uid);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    setUser(data.user);
  });
}
