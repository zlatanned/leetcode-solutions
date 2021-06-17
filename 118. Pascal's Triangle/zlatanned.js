function calculatePascal(numRows) {
  if (!numRows || numRows <= 0) return [];

  const pascal = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = pascal[pascal.length - 1];
    const shiftLeft = [...prevRow, 0];
    const shiftRight = [0, ...prevRow];
    
    const currentRow = shiftLeft.map((r, i) => r + shiftRight[i]);
    pascal.push(currentRow);
  }

  return pascal;
}

/*
  Approach used: 
      each row can be calculated by the offset sum of the previous row.

      1 2 1 0
    + 0 1 2 1
      -------
      1 3 3 1
      
      
*/
