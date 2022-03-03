import React, { useState } from "react";
import { Userprops } from "../../Models/homeModel";
import { Link } from "react-router-dom";
import { adduser } from "../../Service/Api";
import axios from "axios";

  

const initialvalue = {
  key: "",
  value: "",
};

export default function Adduser() {
  const [user, setuser] = useState(initialvalue);
  const { key, value } = user;
 

  const onValueChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const adduserdetail = async () => {
   await adduser(user);
  };

  return (
    <main className="container mt-5">
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Key
            </label>
            <input
              onChange={onValueChange}
              name="key"
              value={key}
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Enter Value
            </label>
            <input
              onChange={onValueChange}
              name="value"
              value={value}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <Link to={`/`}>
            {
              <button
                onClick={() => adduserdetail()}
                type="submit"
                className="btn btn-primary"
              >
                Add
              </button>
            }
          </Link>
        </form>
      </div>
    </main>
  );
}
