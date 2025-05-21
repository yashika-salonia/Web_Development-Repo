import styles from "../App.module.css";

//or we can directly use props in function initialization
//const Items = ({foodItems}) => {
const Items = (props) => {
  //destructuring of the items/array - now we dont need to use prop
  let { foodItems } = props;

  return (
    <li className={`${styles.colorItem} list-group-item `}>
      {/* {props.foodItems} */}
      <span className={styles.spanItem}>{foodItems}</span>
    </li>
  );
};

export default Items;
