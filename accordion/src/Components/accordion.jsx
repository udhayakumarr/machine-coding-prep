import { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

function Accordion({ items, allowMultipleOpen = true }) {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      if (allowMultipleOpen) {
        return { ...prev, [id]: !prev[id] };
      }
      return { [id]: !prev[id] };
    });
  };

  return (
    <div className="accordion">
      <h1>Accordion Component</h1>

      {items.map((item) => {
        const isOpen = !!openItems[item.id];

        return (
          <div key={item.id} className="accordion-item">
            <button
              className="card"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`content-${item.id}`}
            >
              <span>{item.title}</span>
              {isOpen ? (
                <BiChevronUp size={30} />
              ) : (
                <BiChevronDown size={30} />
              )}
            </button>

            {isOpen && (
              <div
                id={`content-${item.id}`}
                role="region"
                className="content"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
