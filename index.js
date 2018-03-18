function theBeatlesPlay(musician, instrument)
{
  var mArray = {};
  
  for (i = 0; i < instrument.length; i++)
  {
    mArray[i] = `John Lennon plays ${instrument} `;
  }
  
  return mArray;
}