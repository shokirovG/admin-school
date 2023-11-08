import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const getMonth = () => {
  const db = firebase.default.database();
  const month = db.ref("month");
  let a;
  month.on("value", (m) => {
    a = m.val().month;
  });
  return a;
};
export default getMonth;
