import useStore from "../Store/ClientStore";

function Admin(){

    const logout = useStore((state) => state.logout);


    return (
        <div>
        <h1>Admin</h1>
        <button onClick={() => {logout()}}>Logout</button>
        </div>
    );
}


export default Admin;