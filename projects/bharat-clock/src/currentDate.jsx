function currentDate() {
  let currDate = new Date();
  return (
    <div className="lead">
      This is the current time: {currDate.toLocaleDateString()} - {currDate.toLocaleTimeString()}
    </div>
  );
}
export default currentDate;
