import React, { useCallback } from 'react';


function ListItem (props) {
  const handleClick = useCallback((e) => {
    if (e) e.preventDefault();
    props.onClick(props.index);
  }, [props]);

  return (
    <div className="list-item" onClick={handleClick} style={{ backgroundColor: props.color }}>
      <span>{props.color}</span>
      <span>{props.id}</span>
    </div>
  );
}


export default React.memo(ListItem);
