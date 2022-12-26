import { onValue, ref, set } from "firebase/database";
import { database } from "../connection/fireBaseConnection";

export default function readDataChat(setMesages) {
    onValue(ref(database, "/chats"), (snapshot) => {
        setMesages([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((text) => {
            setMesages((oldArray) => [...oldArray, text]);
          });
        }
      });
}