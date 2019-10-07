module.exports = function zeros(expression) {
  
  function multiply(first, second) {
    var rFirst = first.split('').reverse();
    var rSecond = second.split('').reverse();
    var result = [];

    for ( var i = 0; i < rFirst.length; i++){
        for ( var k = 0; k < rSecond.length; k++){
            var res = rFirst[i] * rSecond[k];
            if (result[i + k]){
                result[i + k] = result[i + k] + res;
            } else {
                result[i + k] = res;
            }
        }
    }
    // console.log('result 1 --', result);
    var length = result.length;
    for (var i = 0; i < length; i++){
        var resItem = result[i] % 10;
        var resForNext = Math.floor(result[i] / 10);
        result[i] = resItem;
        if (!result[i + 1]){
            if (resForNext > 0){
            result[i + 1] = resForNext;
            }
        }
        else{
            if (resForNext > 0){
                result[i + 1] = result[i + 1] + resForNext;
            }
        }
    }
    result = result.reverse();
    return result.join('');
  }
    var arr =[];
    var arrBig = [];
    arr = expression.split('*');
    for (var i = 0; i < arr.length; i++){
        var arrItem = arr[i].split('!');
        if(arrItem.length === 3){
            var item = arrItem[0];
            var itemMultyply = item;
            while(item > 2){
                itemMultyply = multiply(itemMultyply.toString(), (item - 2).toString())
               item = item - 2;
            }
            arrBig.push(itemMultyply);
        }
        if(arrItem.length === 2){
            var item = arrItem[0];
            var itemMultyply = item;
            while(item > 1){
              itemMultyply = multiply(itemMultyply.toString(), (item - 1).toString())
               item = item - 1;
            }
            arrBig.push(itemMultyply);
        }
    }
    var bigMultyplay = arrBig[0];
    for (var i = 1; i < arrBig.length; i++){
        bigMultyplay = multiply(bigMultyplay, arrBig[i])
    }
    bigMultyplay = bigMultyplay.toString();
    bigMultyplay = bigMultyplay.split('');
    var isZero = false;
    var zeroCounter = 0;
    do{
        if(bigMultyplay[bigMultyplay.length - 1] === '0'){
            isZero = true;
            zeroCounter = zeroCounter + 1;
            bigMultyplay.splice(bigMultyplay.length - 1)
        }else{
            isZero = false;
        }
    }
    while(isZero === true);
    return zeroCounter;
}
