//or we can directly use props in function initialization
//const Items = ({foodItems}) => {
const Items = (props) =>{

    //destructuring of the items/array - now we dont need to use prop
    let {foodItems}=props;

    return (
        <li className="list-group-item">
            {/* {props.foodItems} */}
            {foodItems}
        </li>
    );
};

export default Items;