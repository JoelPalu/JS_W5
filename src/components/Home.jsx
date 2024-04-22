import MediaRow from "./MediaRow.jsx";
import {useEffect, useState} from "react";
import SingleView from './SingleView';
import {fetchData} from "../lib/fetchData.js";




const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    const response = await fetchData('test.json');
    setMediaArray(response);
  }

  useEffect(() => {
    getMedia();
  }, []);

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow item={item} key={item.media_id} setSelectedItem={setSelectedItem}/>
          ))}
        </tbody>
      </table>
      <SingleView selectedItem={selectedItem} setSelectedItem={setSelectedItem}></SingleView>
    </>
  );
};
export default Home;
