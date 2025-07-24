import Breadcrumps from "../../modules/Breadcrumps/Breadcrumps";

const SingleProductPage = () => {
  const path = [
    {
      link: "/categories",
      text: "Categories",
    },
    {
      link: "/categories/1",
      text: "Dry & Wet Food",
    },
  ];

  return (
    <div>
      <Breadcrumps path={path} current={"Dry Dog Food"} />
      <h1>Single product Page</h1>
    </div>
  );
};

export default SingleProductPage;
