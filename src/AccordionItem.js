import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useStyles } from "./globalStyles";

const AccordionItem = ({ item, open, handleExpandMore, handleExpandLess }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.titleContainer}>
        <h3 className={classes.title}>{item.title.slice(0, 30)}</h3>
        {open ? (
          <ExpandLessIcon
            className={classes.expandBtn}
            onClick={() => handleExpandLess(item)}
          />
        ) : (
          <ExpandMoreIcon
            className={classes.expandBtn}
            onClick={() => handleExpandMore(item)}
          />
        )}
      </div>
      {open && <p className={classes.desc}>{item.description} </p>}
    </div>
  );
};

export default AccordionItem;
