// Your code here
function mapToNegativize(sourceArray)
{
    let newA =[];
    for (let i=0; i< sourceArray.length; i++)
    {
        newA.push(sourceArray[i]*-1);
    }
    return newA;
}

function mapToNoChange(sourceArray)
{
    let newB = [];
    for (let i=0; i< sourceArray.length; i++)
    {
        newB.push(sourceArray[i]);
    }
    return newB;
}

function mapToDouble(sourceArray)
{
    let newC = [];
    for (let i = 0; i < sourceArray.length; i++)
    {
        newC.push(sourceArray[i]*2);
    }
    return newC
}

function mapToSquare(sourceArray)
{
    let newD = [];
    for (let i = 0; i < sourceArray.length; i++)
    {
        newD.push(sourceArray[i]**2);
    }
    return newD;
}



function reduceToTotal(sourceArray, startingPoint=0)
{
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++)
    {
        total = sourceArray[i] + total
    }
    return total;
}


function reduceToAllTrue(sourceArray)
{
    for (let i = 0; i < sourceArray.length; i++)
    {
        if (!sourceArray[i])
            return false
    }
    return true;
}


function reduceToAnyTrue(sourceArray)
{
    for (let i = 0; i < sourceArray.length; i++)
    {
        if (sourceArray[i])
            return true
    }
    return false;
}