export const BlockContent = ({ children }) => {
  return (
    <>
      <div className="cv-block-content">
        <div>{children}</div>
      </div>
    </>
  );
};

export const BlockColumns = ({ children }) => {
  return (
    <>
      <div className="cv-block-columns">{children}</div>
    </>
  );
};
