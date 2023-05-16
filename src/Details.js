import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Details(props) {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(props.listOfItems);
  }, []);
  console.log("list", displayList);
  return (
    <div>
      {displayList && displayList.payload && (
        <p>{displayList.payload.blend_name}</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listOfItems: state,
  };
};

export default connect(mapStateToProps)(Details);
