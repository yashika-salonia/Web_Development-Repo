const form=document.querySelector('form');
//this usecase will give you empty
// const weight =parseInt(document.querySelector('#weight').value) //this use case will also give you empty value

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height =parseInt(document.querySelector('#height').value); //value in string
    const weight =parseInt(document.querySelector('#weight').value); //value in string
    const result=document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML=`Please give valid height, it's ${height}`; 
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML=`Please give valid weight, it's ${weight}`; 
    }
    else{
        const bmi=(weight / ((height*height)/10000)).toFixed(2);
        //show the results
        // result.innerHTML=`<span>${bmi}</span>`;
        if(bmi<18.6){
            //show the results
            result.innerHTML=`<span>${bmi}</span> <br> <span>You are Under Weight </span>`;
        }
        else if(bmi>=18.6 && bmi<=24.9){
            //show the results
            result.innerHTML=`<span>${bmi}</span> <br> <span>Your BMI is in normal range </span>`;
        }
        else if(bmi>24.9){
            //show the results
            result.innerHTML=`<span>${bmi}</span> <br> <span>You are Over Weight </span>`;
        }
    }
});
