import { useParams } from "react-router-dom";
import { listOfBlogs } from "../data/data";

function DynamicBlog() {
  const { id } = useParams();
  const product = listOfBlogs.find((blog) => blog.id === id);

  return (
    <div className="px-4 mt-22 md:px-10 md:mt-25">
      <h1 className=" text-lg lg:text-4xl font-bold  mb-10 py-5 px-10 bg-white rounded-xl text-center">
        {product?.title}
      </h1>
      <img
        src={product?.image}
        alt={product?.title}
        loading="lazy"
        className="w-[90%] h-fit lg:h-150 object-cover mx-auto mb-10 rounded-2xl"
      />
      <p className="lg:text-lg">{product?.content}</p>
      <br />
      <p className="lg:text-lg">{product?.content}</p>
    </div>
  );
}

export default DynamicBlog;
