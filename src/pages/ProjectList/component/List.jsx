const List = ({ userList, searchList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {searchList.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {userList.find((user) => user.id === project.userId)?.name ?? ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default List;
