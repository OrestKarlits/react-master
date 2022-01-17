import React, {useEffect, useState} from 'react';

function Ships() {
    const [ships, setShips] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => {
                return value.json()
            })
            .then(item => {
                setShips(item.filter(get => get.launch_year !== '2020'));
            });
    },[])
    return (
        <div>
        {ships.map(value => <div className={'ships_wrap'} key={value.flight_number}> <div className={'ship_wrap'}>
  <div className={'ship_name'}>{value.mission_name}</div>  <div className={'ship_year'}>{value.launch_year}</div></div>
               <img className={'mission_patch'} src= {value.links.mission_patch} alt="mission_patch_small"/></div>)}
        </div>

    );
}

export default Ships;