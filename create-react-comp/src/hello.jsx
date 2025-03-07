//Dynamic Components

function Hello(){

    let myName='Yashika';
    let fullName=()=>{
        return "Yashika Salonia";
    }
    let number=456;

    return <p>
        Hello, my name is {myName}.
        MessageNO: {number} My full name is {fullName()}.
        
    </p>
}
export default Hello;