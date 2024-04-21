// src/components/MediaRow.jsx
import PropTypes from 'prop-types';
import Button from "./UI/Button.jsx";
import {Link} from "react-router-dom";

const MediaRow = (props) => {
    const {item, setSelectedItem} = props;
    const handleClick = () => {
        setSelectedItem(item);
    };

    return (
        <tr>
          <td>
            <img src={item.thumbnail} alt={item.title} />
          </td>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
          <td>{item.filesize}</td>
          <td>{item.media_type}</td>
          <td>
              <Link to={`media/${item.media_id}`} />
          </td>
        </tr>
    );
};

MediaRow.propTypes = {
    item: PropTypes.object.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
};

export default MediaRow;
