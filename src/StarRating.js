import React from "react";
import Star from "./Star"
import './Star.css';
import './Color.css'


const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
    <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
                  selected={i<starsSelected}
                  onClick={() => onRate(i+1)}/>
        )}
        <p>{starsSelected} of {totalStars} stars</p>
    </div>;

const Color = ({title,color,rating=0,onRemove=f=>f,onRate=f=>f}) =>
    <section className="color">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color"
             style={{ backgroundColor: color , borderRadius: "10px" }}>
        </div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>
    </section>;

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) =>
    <div className="flex-container">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id}
            {...color}
            onRate={(rating) => onRate(color.id, rating)}
            onRemove={() => onRemove(color.id)} />
            )
        }
    </div>;

export default StarRating;
export {Color};
export {ColorList};