const removeFromArray = function(array,...num) {
  /*   array.forEach(number => {
        if(number === num) {
            let index = array.indexOf(num)
            array.splice(index,1)

        } else return

    })
    return array */
 /*    for(let i = 0; i < array.length; i++) {
        if(array[i] === num) array.splice(i,1)
        
    }
    return array */
    return array.filter(element => !num.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
