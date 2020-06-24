var maxArea = function(height) {
    let size = 0; 
    let newSize = 0;
    let len = height.length;
    for (let i = 0; i < len; i++) {
        for (let j = (len - 1); j > i ; j--){
            if (height[i] > height[j]){
                newSize = height[j] * (j-i); 
                console.log('i > j', newSize)
            } else {
                newSize = height[i] * (j-i); 
                console.log('j > i', newSize)
            }
            if (newSize > size){
                size = newSize; 
            }
            console.log('Size is: ', size);
        }
        console.log('One iteration ends');
    }
    return size; 
};

let arr = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(arr));