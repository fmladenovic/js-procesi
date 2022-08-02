(() => {
    console.log(1);
    setTimeout(() => {console.log(2)}, 0);
    new Promise((resolve) => {resolve(3);}).then((resolve) => {console.log(resolve);});    
    setTimeout(() => {console.log(4)}, 100);
    process.nextTick(() => {console.log(5)})
    console.log(6);
})();
