import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn) {
    console.log("user logged in...");
    return <Navigate to="/auth/signup" />;
  }
  return <Outlet />;
}

export default App;
