import React from "react";
import * as qs from "qs";
import { useState, useEffect } from "react";
import { cleanObject } from "../../utils";
import List from "./component/List";
import SearchPanel from "./component/SearchPanel";
const devApi = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    userId: "",
  });
  const [userList, setUserList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    fetch(`${devApi}/users`).then(async (response) => {
      if (response.ok) {
        setUserList(await response.json());
      }
    });
  }, []);

  useEffect(() => {
    fetch(`${devApi}/project?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setSearchList(await response.json());
        }
      }
    );
  }, [param]);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} userList={userList} />
      <List searchList={searchList} userList={userList} />
    </div>
  );
};
export default ProjectList;
