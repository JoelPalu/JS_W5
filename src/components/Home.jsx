import MediaRow from "./MediaRow.jsx";
import {useMedia} from "../hooks/ApiHooks.js";


const Home = () => {
  // const [selectedItem, setSelectedItem] = useState(null);
  const {mediaArray} = useMedia();

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>

            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Owner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow item={item} key={item.media_id}
                      //setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>

    </>
  );
};
export default Home;
