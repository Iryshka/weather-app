import { useParams } from "react-router";

const DetailsId = () => {
  const params = useParams();
  console.log(params);
  return <div>here is DetailsId</div>;
};

export default DetailsId;
