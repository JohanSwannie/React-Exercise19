import React from "react";

function UserMessage({ userMessage }) {
  return (
    <div>
      <h1 className="mt-10 h-12 text-xl">{userMessage}</h1>
    </div>
  );
}

export default UserMessage;
