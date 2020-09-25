
const factors = num =>{
    const factor=[];

    for(var i=1; i<= num; i++) {
        if(num % i == 0) factor.push(i);
    }
    return factor;
}

const checkOdd = number =>{
    if(number % 2 == 0){
        return false; //even
    }else{
        return true; //odd
    }
}

const oddNumber = num =>{
    const odd = [];
    for(var i=1; i<= num; i++) {
        if(checkOdd(i)) odd.push(i);
    }
    return odd;
}

const prothCondition = (k, n) =>{
    //k < 2^n
    if (k < Math.pow(2, n)){
        return true;
    }
    return false;

}


const checkProth = number =>{
//create a list of first 10 odd numbers
const firstTenOddNum = oddNumber(10);

//subtract one from num, call it factorTemp
const factorTemp = number - 1;

//create a list of factors of factorTemp
const factorList = factors(factorTemp);

//loop through the list of factorTemp - foreach factor - iterate through odd number array and fix the equation, check if it is equal to num and if also k < 2^n

factorList.forEach(num =>{
    for(let i = 0; i<= firstTenOddNum.length; i++){
        if ((firstTenOddNum[i] * (Math.pow(2,num)) + 1) == number && prothCondition(firstTenOddNum[i], num)){
            console.log(`[n = k * 2^n + 1]. 
                for p = ${number}: k = ${firstTenOddNum[i]}, n = ${num}
                and (k < 2^n) = ${firstTenOddNum[i]} < ${Math.pow(2,num)}
                Hence, ${number} is a Proth Number.
            `);
            return;
        }
    }
    
})

}
checkProth(3);
checkProth(5);
checkProth(7);
checkProth(13);
checkProth(73); //will not return as it doesn't meet the criteria for k < 2^n

