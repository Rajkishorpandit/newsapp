import React from "react";

const Preferences = ({
  selectedSources,
  setSelectedSources,
  selectedCategories,
  setSelectedCategories,
  selectedAuthors,
  setSelectedAuthors,
}) => {
 
  const sourceOptions = ["Source 1", "Source 2", "Source 3"];
  const categoryOptions = ["Category 1", "Category 2", "Category 3"];
  const authorOptions = ["Author 1", "Author 2", "Author 3"];

  const handleSelection = (option, type) => {
    switch (type) {
      case "sources":
        setSelectedSources((prevSources) =>
          prevSources.includes(option)
            ? prevSources.filter((source) => source !== option)
            : [...prevSources, option]
        );
        break;
      case "categories":
        setSelectedCategories((prevCategories) =>
          prevCategories.includes(option)
            ? prevCategories.filter((category) => category !== option)
            : [...prevCategories, option]
        );
        break;
      case "authors":
        setSelectedAuthors((prevAuthors) =>
          prevAuthors.includes(option)
            ? prevAuthors.filter((author) => author !== option)
            : [...prevAuthors, option]
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h3>Select Preferred Sources</h3>
      <div className="preference-buttons">
        {sourceOptions.map((option) => (
          <button
            key={option}
            className={selectedSources.includes(option) ? "selected" : ""}
            onClick={() => handleSelection(option, "sources")}
          >
            {option}
          </button>
        ))}
      </div>

      <h3>Select Preferred Categories</h3>
      <div className="preference-buttons">
        {categoryOptions.map((option) => (
          <button
            key={option}
            className={selectedCategories.includes(option) ? "selected" : ""}
            onClick={() => handleSelection(option, "categories")}
          >
            {option}
          </button>
        ))}
      </div>

      <h3>Select Preferred Authors</h3>
      <div className="preference-buttons">
        {authorOptions.map((option) => (
          <button
            key={option}
            className={selectedAuthors.includes(option) ? "selected" : ""}
            onClick={() => handleSelection(option, "authors")}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Preferences;