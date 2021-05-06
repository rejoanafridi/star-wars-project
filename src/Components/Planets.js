import React from "react";

const Planets = ({data}) => {
	return (
		<div className="box">
			{data.map((planets, i) => {
				return (<div key={i} className="item">
                    <h3> Name:{planets.name}</h3>
                    <h4> Diameter: {planets.diameter} </h4>
                    <p>Gravity: {planets.gravity}</p>
                  
                </div>);
			})}
		</div>
	);
};

export default Planets;
