let inputS =[1,`no`];
let outputS=[0]; 
function enqueue(input, item){
   return input.push(item)
}
const dequeue =(input,output)=>{
if(output.length<=0){
    while(input>=0){
     let elementToOutput =input.pop();
     output.push(elementToOutput);

    }

}return output.pop();
}
console.log(enqueue(inputS,'last'));
console.log(dequeue(inputS,outputS));