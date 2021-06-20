import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { useStyles } from "./globalStyles";

const Accordion = ({ data, openAll }) => {
  const classes = useStyles();

  const [items, setItems] = useState(
    data.map((d) => ({
      ...d,
      open: false
    }))
  );

  const handleExpandMore = (accordion) => {
    if (openAll) {
      setItems(
        items.map((item) => {
          if (item.id === accordion.id) {
            return {
              ...item,
              open: true
            };
          }
          return item;
        })
      );
      return;
    }
    setItems(
      items.map((item) => {
        if (item.id === accordion.id) {
          return {
            ...item,
            open: true
          };
        }
        return {
          ...item,
          open: false
        };
      })
    );
  };

  const handleExpandLess = (accordion) => {
    setItems(
      items.map((item) => {
        if (item.id === accordion.id) {
          return {
            ...item,
            open: false
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={classes.accordion}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          open={item.open}
          handleExpandLess={handleExpandLess}
          handleExpandMore={handleExpandMore}
        />
      ))}
    </div>
  );
};

export default Accordion;
