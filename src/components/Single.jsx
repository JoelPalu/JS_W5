import {useLocation, useNavigate, useParams} from "react-router-dom";

const Single = () =>{
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <button className={"bg-blue-400 p-3 rounded-2xl"} onClick={() => navigate(-1)}>Go back</button>
      <h2 className={"text-3xl"}>ID: {params.id}</h2>
    </>

  )
}
export default Single;
