import { Link } from "react-router-dom";

const Breadcrumps = ({ path, current }) => {
  if (!path.length || !current) return null;

  const elements = path.map(({ link, text }) => (
    <>
      <Link to={link}>{text}</Link> -{" "}
    </>
  ));

  return (
    <div>
      <Link to="/">Main page</Link> - {elements}
      <span>{current}</span>
    </div>
  );
};

export default Breadcrumps;
