import React, { useState } from "react";

export type FileNode = {
  id: string;
  name: string;
  type: string;
  children?: FileNode[];
};

type ListProps = {
  list: FileNode[];
};

function List({ list }: ListProps) {
  return (
    <>
      {list.map((item) => (
        <MemoizedNode key={item.id} node={item} />
      ))}
    </>
  );
}

type NodeProps = {
  node: FileNode;
};

function Node({ node }: NodeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (node.type === "folder") {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div style={{ marginLeft: 16 }}>
      <span onClick={toggle} style={{ cursor: "pointer" }}>
        {node.type === "folder"
          ? isOpen
            ? "📂"
            : "📁"
          : "📄"}{" "}
        {node.name}
      </span>

      {node.type === "folder" && isOpen && node.children && (
        <List list={node.children} />
      )}
    </div>
  );
}

const MemoizedNode = React.memo(Node);

export default List;
