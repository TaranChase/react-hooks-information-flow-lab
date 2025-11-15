// Filter.js
function Filter({ onCategoryChange, selectedCategory }) {
  function handleChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div className="Filter">
      <select name="filter" onChange={handleChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
