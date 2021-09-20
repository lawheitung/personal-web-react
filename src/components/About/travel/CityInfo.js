  
import * as React from 'react';
import './cityinfo.scss';


function CityInfo(props) {
  const {info} = props;
  const displayName = `${info.city}, ${info.country}`;
  const description = `${info.description}`

  return (
    <div className="travel-info-box">
      <div>
      </div>
        <b>{displayName}</b>
        <br />
        <p>{description}</p>
      {/* <img width={240} src={info.image} /> */}
    </div>
  );
}

export default React.memo(CityInfo);