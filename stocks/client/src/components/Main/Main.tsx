import React from "react";

/**
 * Wraps the chlders inside the main HTML Element
 * @param param0 childern
 * @returns Main Component
 */
export const Main: React.FC = ({ children }) => {
  return (
    <main>
      <div className="content-section implementation">{children}</div>
    </main>
  );
};
