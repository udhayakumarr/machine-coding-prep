import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const cacheRef = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      if (!value) {
        setSearchList([]);
        return;
      }
      if (cacheRef.current[value]) {
        setSearchList(cacheRef.current[value]);
        return;
      }
      const data = await fetch(
        `https://dummyjson.com/recipes/search?q=${value}`
      );

      const searchData = await data.json();
      setSearchList(searchData.recipes);
      const currentCache = { ...cacheRef.current, [value]: searchData.recipes };
      cacheRef.current = currentCache;
    };

    const timer = setTimeout(fetchData, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="container">
      <input
        name="search"
        className="search-input"
        value={value}
        onFocus={() => setShowResult(true)}
        onBlur={() => setShowResult(false)}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {searchList && showResult && (
        <div className="list">
          {searchList.length === 0 ? (
            <span className="lits-item">no result</span>
          ) : (
            searchList.map((item, index) => {
              return (
                <span className="lits-item" key={index}>
                  {item.name}
                </span>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default App;
