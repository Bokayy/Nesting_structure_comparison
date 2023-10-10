function isArray(element) {
    if (Array.isArray(element)) {
        return true;
    }
    return false;
  }


//let ligma = [1,1,1];
let ligma = [[[1]],[1],[]];
let depth = 0;

//recursive function, if element is an array, look into it's structure
/* ligma.forEach(x => {
    if (isArray(x)) {
        console.log("is array", x);
    }
}); */

function isArrayRecursive(element){    
    let depth = 0; 
    //escape condition
    element.forEach(el => {
        if(isArray(el)){
            console.log("is an array");
            console.log("depth: " + depth);
            depth++;
            isArrayRecursive(el);
        }
        else{
            console.log("isn't an array");
            return 0;
        }
    })
}

//isArrayRecursive(ligma);

function arrayAnalytics(el) {
    let numberOfArrays = 0;
    el.forEach(member => {
        //is it an array
        if (isArray(member)) {
            numberOfArrays++;
            //check if it has more arrays inside

        }
    })
}

function arraySingleElementRecursive(el) {
    if (isArray(el[0])) {
        console.log(`array depth ${depth} contains arrays`);
        depth++;
        arraySingleElementRecursive(el[0]);
    }
    else {
        console.log("no more arrays, resetting depth");
    }
}

arraySingleElementRecursive(ligma);

//to do: which element contains which number of arrays  at what depth

function numberOfArrays(el) {
    el.forEach((x,index) => {
        if (isArray(x)) {
            console.log(`index ${index} contains an array of value: ${x}`);
        }
    });
}

numberOfArrays(ligma);