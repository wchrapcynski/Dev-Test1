import React, { useState, useEffect } from "react";
import table from "./../images/table_example.png";
import "./QuestionThree.scss";

function QuestionThree() {
  const [data, setData] = useState();
  const dataUrl = "http://bpbuild.com/devtest/data.php";

  const getData = url => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log("Data received.");
        setData(
          res.map((data, key) => {
            return (
              <tr key={key}>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
              </tr>
            );
          })
        );
      })
      .catch(err => {
        console.log("There was an error retreiving the data.");
      });
  };

  useEffect(() => {
    getData(dataUrl);
  }, []);

  return (
    <div className="Question-three">
      <p>
        3. Fetch and parse the json data at http://bpbuild.com/devtest/data.php
        to produce the following table:
      </p>
      <p>
        Example:
        <br />
        <img className="table-example" src={table} alt="table example" />
      </p>
      <p>Fetched Data:</p>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
}

export default QuestionThree;
