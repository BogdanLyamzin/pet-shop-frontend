import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Breadcrumps from "../../modules/Breadcrumps/Breadcrumps";

import { getCategoryById } from "../../shared/api/categories-api";

const SingleCategoriesPage = () => {
  const [category, setCategory] = useState(null);
  const [path, setPath] = useState([]);
  const [current, setCurrent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getCategoryById(id);
      setCategory(data);
      setPath([
        {
          link: "/categories",
          text: "Categories",
        },
      ]);
      setCurrent(data.category.title);
    };

    fetchCategory();
  }, [id]);

  return (
    <div>
      <Breadcrumps path={path} current={current} />
      <h1>Categories Page</h1>
    </div>
  );
};

export default SingleCategoriesPage;
