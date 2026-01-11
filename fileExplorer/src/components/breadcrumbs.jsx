const Breadcrumbs = ({ viewStack, navigateTo }) => {
  return (
    <div style={{ margin: 10 }}>
      {viewStack.map((folder, index) => (
        <span key={folder.id}>
          {index > 0 && <span style={{ paddingRight: 10 }}>{">"}</span>}
          <span
            style={{ cursor: "pointer", paddingRight: 10 }}
            onClick={() => navigateTo(index)}
          >
            {folder.name}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
