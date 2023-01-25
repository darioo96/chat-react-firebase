
import { doc, getDoc } from "firebase/firestore";
import { db } from "../connection/fireBaseConnection";

export default async function readUser(setUser, uid) {
  const docUser = await getDoc(doc(db,"users", uid))
  const user = (docUser._document.data.value.mapValue.fields.name.stringValue);
  setUser(user);
}
