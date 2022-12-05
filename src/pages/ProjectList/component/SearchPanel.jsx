import { useEffect, useState } from "react";
const devApi = process.env.COMMON_URL;

const SearchPanel = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);

  const onProjectChange = (e) => {
    setParam({ ...param, name: e.target.value });
  };
  const onPersonChange = (e) => {
    setParam({ ...param, personId: e.target.value });
  };

  useEffect(() => {
    fetch(`${devApi}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, [param]);

  return (
    <form>
      <input type="text" value={param.name} onChange={onProjectChange}></input>
      <select value={param.personId} onChange={onPersonChange}>
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
    </form>
  );
};
export default SearchPanel;
