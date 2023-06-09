import React from "react";

const UserTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Roll</th>
          <th>Name</th>
          <th>Class</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => {
            const { roll, name, clas } = user;
            // const id = user.id;
            // const name = user.name;
            // const username = user.username;
            return (
              <tr>
                <td>{roll}</td>
                <td>{name}</td>
                <td>{clas}</td>
                <td>
                  <button onClick={() => props.deleteUser(roll)}>Delete</button>
                  <button onClick={() => props.editUser(roll, user)}>Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
