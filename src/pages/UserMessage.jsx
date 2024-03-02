import { useEffect, useState } from "react";

function UserMessage({ userMessage }) {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(false);
    }, 3000);
  }, []);

  return (
    <div>
      {showComponent && <h1 className="mt-10 h-12 text-xl">{userMessage}</h1>}
    </div>
  );
}

export default UserMessage;
