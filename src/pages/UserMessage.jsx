import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function UserMessage({ userMessage }) {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(false);
    }, 4000);
  }, []);

  return (
    <div>
      {showComponent && <h1 className="mt-10 h-12 text-xl">{userMessage}</h1>}
      {!showComponent && <Navigate to="/" />}
    </div>
  );
}

export default UserMessage;
