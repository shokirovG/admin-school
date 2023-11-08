import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const getStore = () => {
  const db = firebase.default.database();
  const month = db.ref("month");
  let a;
  month.on("value", (m) => {
    const store = db.ref(m.val().month);
    store.on("value", (elem) => {
      a = elem.val();
    });
  });
  return a;
};

export default getStore;
