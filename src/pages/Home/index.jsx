import React from "react";

import classes from "./style.module.scss";
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from "@mui/material";

import { deleteUser, getallUsers } from "..//../domain/api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const index = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await getallUsers();
    console.log(response);
    setUser(response.data);
  };

  const deleteData = async (id) => {
    await deleteUser(id);
    getUsers();
  };

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((data) => (
            <TableRow className={classes.trow}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.provider}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.password}</TableCell>
              <TableCell>{data.category}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" style={{ margin: "0px 20px" }} component={Link} to={`/edit/${data.id}`}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary" style={{ margin: "0px 20px" }} onClick={() => deleteData(data.id)}>
                  Cancel
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default index;
