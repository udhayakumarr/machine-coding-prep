import { useState } from "react";
import Breadcrumbs from "./breadcrumbs";

function FileExplorer({ fileSystem }) {
  const [viewStack, setViewStack] = useState([fileSystem]);

  const currentFolder = viewStack[viewStack.length - 1];
  const currentView = currentFolder.children ?? [];

  const handleFolderClick = (folder) => {
    if (folder.type !== "folder") return;
    setViewStack((prev) => [...prev, folder]);
  };

  const navigateTo = (index) => {
    setViewStack((prev) => prev.slice(0, index + 1));
  };

  return (
    <div>
      <h1>File Explorer Component - Tree</h1>

      <Breadcrumbs viewStack={viewStack} navigateTo={navigateTo} />

      {currentView.length === 0 ? (
        <p>Empty folder</p>
      ) : (
        <div style={{ display: "flex", gap: 10 }}>
          {currentView.map((item) =>
            item.type === "folder" ? (
              <div
                key={item.id}
                style={{ cursor: "pointer", marginRight: 20 }}
                onClick={() => handleFolderClick(item)}
              >
                📁 {item.name}
              </div>
            ) : (
              <div style={{ marginRight: 20 }} key={item.id}>
                📄 {item.name}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default FileExplorer;
