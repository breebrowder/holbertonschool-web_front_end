console.log("Start of the execution queue");
setTimeout(function(){ console.log("Final code block to be executed"); }, 0);

for (var idx = 1; idx <= 100; idx++)  {
    console.log(idx);
}
console.log("End of loop printing");
