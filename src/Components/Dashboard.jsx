import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  const [Auth, { handleSignIn, handleSignOut }] = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome to Dashboard!</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Dashboard;
