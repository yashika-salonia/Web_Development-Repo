const ErrorMessage = ({items}) => {
    return (
        <>
            {items.length === 0 && <h3>No food items added.</h3>}
        </>
    );
};

export default ErrorMessage;