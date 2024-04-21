import {useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "./UI/Button.jsx";

const Single = () =>{
  const location = useLocation().state.item;
  const navigate = useNavigate();
  return (
    <>
      <button className={"bg-blue-400 p-3 rounded-2xl"} onClick={() => navigate(-1)}>Go back</button>
      <h2 className={"text-3xl"}>ID: {location.media_id}</h2>
      {location && (
        <>
          {location.media_type.includes('video') ?
            <video controls
                   className='h-3/5 m-auto'>
              <source src={location.filename} type={location.media_type}/>
            </video> :
            <img src={location.filename} alt={location.title}
                 className='h-3/5 m-auto'/>
          }
          <h2>{location.title}</h2>
          <p>{location.description}</p>
          <p>Created: {new Date(location.created_at).toLocaleString('fi-FI')}</p>
          <p>Size: {location.filesize}</p>
        </>
      )}
    </>

  )
}
export default Single;
