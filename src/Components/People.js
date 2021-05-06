import React from "react";

const People = ({ data }) => {
	return (
		<div className="box">
			{data.map((people, i) => {
				return (<div key={i} className="item">
                    <h3> Name:{people.name}</h3>
                    <h4> Height:{people.height}</h4>
                    <h4>Mass {people.mass}</h4>
                    <h4>Hair Color: {people.hair_color}</h4>
                </div>);
			})}
		</div>
	);
};

export default People;
