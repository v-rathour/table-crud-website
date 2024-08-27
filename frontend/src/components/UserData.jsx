import './UserData.css';
const UserData = ({ users }) => {
    return (
        <>
            {users.map((curUser) => {
                const { id, name, email } = curUser;
                const { street, city, zipcode } = curUser.address;

                return (
                    <tr key={id} className="user-row">
                        <td className="user-id">{id}</td>
                        <td className="user-name">{name}</td>
                        <td className="user-email">{email}</td>
                        <td className="user-address">
                            {street}, {city}, , {zipcode}
                        </td>
                    </tr>
                );
            })}
        </>
    );
};
export default UserData;
