import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import { Userprops } from "../../Models/homeModel";


interface Homeprops {
  users: Userprops;
}

export default function Table() {
  const [users, setusers] = useState<Userprops[]>([]);

  useEffect(() => {
    getall();
  }, []);

  const getall = async () => {
    const response = await axios.get("http://localhost:3003/users");
    console.log(response.data);
    setusers(response.data);
  };
  const deleteuserdata = async (users: Userprops) => {
    await axios.delete(`http://localhost:3003/users/${users.id}`);
    getall();
  };
  return (
    <Fragment>
      <main className="container mt-5">
        <div className="Post">
          <div className="row">
            <div className="col-4 p-3">
              <h3>key</h3>
            </div>
            <div className="col-3 p-3">
              <h2>Value</h2>
            </div>
            <div className="col-2 p-3">
              <h2> Actions</h2>
            </div>
          </div>

          {users.map((user: Userprops) => {
            return (
              <>
                <div className="row">
                  <div className="col-4 p-3">{user.key}</div>
                  <div className="col-3 p-3">{user.value}</div>
                  <div className="col-2">
                    <div className="p-3">
                       <Link to={`/Edituser/${user.id}`}> 
                      <button type="button" className="btn btn-primary">
                        View
                      </button>
                       </Link> 
                    </div>
                  </div>
                  <div className="col-1 p-3">
                    <button
                      onClick={() => deleteuserdata(user)}
                      type="button"
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </Fragment>
  );
}
