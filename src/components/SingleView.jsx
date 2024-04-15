import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import Button from "./UI/Button.jsx";
const SingleView = (props) => {
  const {selectedItem, setSelectedItem} = props;
  const modal = useRef(null);
  const handleClick = () => {
    setSelectedItem(null);
  };
  useEffect(() => {
    if (selectedItem) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [selectedItem]);

  return (
    <>
      <dialog ref={modal}
              className=' fixed top-0 h-dvh w-dvw bg-black bg-opacity-80 text-stone-100'>
        <p>
          <Button text={'Close'} handleClick={handleClick} />
        </p>
        {selectedItem && (
          <>
            {selectedItem.media_type.includes('video') ?
              <video controls
              className='h-3/5 m-auto'>
                <source src={selectedItem.filename} type={selectedItem.media_type}/>
              </video> :
              <img src={selectedItem.filename} alt={selectedItem.title}
              className='h-3/5 m-auto'/>
            }
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <p>Created: {new Date(selectedItem.created_at).toLocaleString('fi-FI')}</p>
            <p>Size: {selectedItem.filesize}</p>
          </>
        )}
      </dialog>
    </>
  );
};

SingleView.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func,
}
export default SingleView;
