import React from "react";
import { Navigate, } from "react-router-dom";

const Wellcome = ({ auth }) => {

  console.log(auth);
  return (
    <div>
      {auth ? (
        <div> خوش آمدید</div>
      ) : (
        <Navigate to="/loggin" message={"شما مجوز ورود ندارید"} />
      )}
    </div>
  );
};

export default Wellcome;
