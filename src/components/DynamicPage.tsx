import { useParams } from "react-router-dom";

function DynamicPage() {
  //   const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  return (
    <div className="flex">
      i am a dynamic router
      {params.id}
    </div>
  );
}

export default DynamicPage;
