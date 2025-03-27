// Kane Kriz
// COSC 3020
// 30 January 2025


//


function divideAndConquerSum(a) 
{
var sum;
    
    if(a.length == 0)
    {
        sum = 0;
        return sum;
    }
    
    else if(a.length == 1)
    {
        sum = a[0];
        return sum;
    }
    
    var arrLen;
    var splitPos1; 
    var splitPos2; 
    
    arrLen = a.length;
    splitPos1 = Math.floor( (arrLen-1) / 3);
    splitPos2 = Math.floor(2 * arrLen / 3);
        
    var sect1 = a.slice(0, splitPos1);
    var sect2 = a.slice(splitPos1, splitPos2);
    var sect3 = a.slice(splitPos2);

return divideAndConquerSum(sect1) + divideAndConquerSum(sect2) + divideAndConquerSum(sect3);
    
}

