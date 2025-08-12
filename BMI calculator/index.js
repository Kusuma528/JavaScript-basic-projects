const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results');
    if(height===''|| height<=0 || isNaN(height)){
        results.innerHTML=`please enter a valid value 😑 `;
    }
    else if(weight===''|| weight<0 || isNaN(weight)){
        results.innerHTML=`please enter a valid value  😑`;
    }
    else{
      const bmi=  (weight/((height*height)/10000)).toFixed(2);
      console.log("valid value");
      results.innerHTML=`<span>your body mass index is ${bmi}😁</span>`;
      if(bmi<18.6){
        conclusion.innerHTML="under weight";

      }else if(bmi>18.6 && bmi< 24.9){
        conclusion.innerHTML="normal range";
      }else{
        conclusion.innerHTML="over weight";
      }
    }
});