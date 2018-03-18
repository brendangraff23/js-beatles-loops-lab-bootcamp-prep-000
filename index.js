function theBeatlesPlay(musician, instrument)
{
  var mArray = {};
  
  for (i = 0; i < instrument.length; i++)
  {
    mArray[i] = `${musician} plays ${instrument}`;
  }
  
  return mArray;
}

function johnLennonFacts(array) {
  
  var mArray = {};
  
  for( i = 0; i < array.length; i++) {
    mArray[i] = array[i] + "!!!";
    
  }
  
  return mArray
  
}

function iLoveTheBeatles(number)
{
  var mArray = {};
  
  do {
    mArray.push('I love the Beatles');
    number++;
  } while (number < 15)
}