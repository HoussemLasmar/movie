import React from 'react';

const Filter = ({ title, rating, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
