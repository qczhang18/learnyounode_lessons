console.log(count(process.argv));

function count (arr){
    var sum = 0;
    for (var i=2; i<arr.length; i++){
        sum = sum + Number(arr[i]);
    }

    return sum;
}