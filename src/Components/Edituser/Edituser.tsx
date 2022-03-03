import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Editusers, Getusers } from "../../Service/Api";
import { Userprops } from "../../Models/homeModel";
import axios from "axios";

const initialvalue = {
  key: "",
  value: "",
};

export default function Edituser() {
  const [user, setuser] = useState(initialvalue);
  const { key, value } = user;
  const { id } = useParams();

  useEffect(() => {
    loaduserdata();
  }, []);

  const loaduserdata = async () => {
    const response = await axios.get(`http://localhost:3003/users/${id}`);
    setuser(response.data);
  };

  const onvaluechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const edituserdetail = async () => {
    await Editusers(user);
    
  };

  return (
    <Fragment> 
        <main className="container mt-5">
          <div>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Enter Key
                </label>
                <input
                  onChange={onvaluechange}
                  name="key"
                  value={key}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Enter Value
                </label>
                <input
                  onChange={onvaluechange}
                  name="value"
                  value={value}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              {
                <Link to={`/`}>
                  <button
                    style={{ marginRight: 10 }}
                    onClick={() => edituserdetail()}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </Link>
              }
              {
                <Link to={`/`}>
                  <button type="button" className="btn btn-primary">
                    Cancel
                  </button>
                </Link>
              }
            </form>
          </div>
        </main>
    </Fragment>
  );
}
