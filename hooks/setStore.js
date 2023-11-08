import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import getMonth from "./getMonth";

const setStore = (newdb) => {
  const db = firebase.default.database();
  console.log("hook db", newdb);

  db.ref(getMonth()).update(newdb);
};
export default setStore;
