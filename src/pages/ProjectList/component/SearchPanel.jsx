import { useEffect, useState } from "react";

const SearchPanel = ({ param, setParam, userList }) => {
  const onProjectChange = (e) => {
    setParam({ ...param, name: e.target.value });
  };
  const onPersonChange = (e) => {
    setParam({ ...param, userId: e.target.value });
  };

  return (
    <form>
      <input type="text" value={param.name} onChange={onProjectChange}></input>
      <select value={param.userId} onChange={onPersonChange}>
        <option value={""}>{"负责人"}</option>
        {userList.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
export default SearchPanel;
