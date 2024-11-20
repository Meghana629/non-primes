num=prompt("enter a number")
primes="",nonprimes=""
function checkprime(n){
    for(i=2;i<n;i++){
        if(n%i==0)
        return false
    }
    return true
}

for(j of num){
    if(j>1){
     if(checkprime(j)){
         primes+=j+""
     }else{
         nonprimes=nonprimes+j+""
     }
    }
}

console.log("nonprimes in "+num+" : "+nonprimes)
min = nonprimes[0]
for(i=0;i<nonprimes.length;i++){
if(nonprimes[i]<min)
min=nonprimes[i]
}
console.log("min number is: "+min)


// 2) WAP to print the prime sum is more or non prime sum is more
// input: Enter number: 6655
// output: Non prime sum is more

num=prompt("Enter a number:")
primesum=0,nonprimesum=0
function checkprime(n){
    for(k=2;k<n;k++){
        if(n%2==0)
        return false
    }
    return true
}
for(l of num){
    if(l>1){
        if(checkprime(l)){
            primesum=Number(l)
        }
        else{
            nonprimesum=Number(l)
        }
    }
}
res=(primesum>nonprimesum)?"primesum is more":(primesum==nonprimesum)?"Both are equal":"nonprimesum is more"
console.log(res)


// 3)
// Problem Statement: Check if the number is a Harshad(or Niven) number or not.

// Examples:

// Example 1:
// Input: 378
// Output: Yes it is a Harshad number.
// Explanation: 3+7+8=18. 378 is divisible by 18. Therefore 378 is a harshad number.

originalnum="378"
digitsum=0
for(m of originalnum){
    digitsum+=Number(m)
}
result=(originalnum % digitsum==0)?"harshad number":"not a harshad number"
console.log(result)