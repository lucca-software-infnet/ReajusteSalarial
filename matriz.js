const matriz = [
    [1, 2, 3],
    [2, 4, 6],
    [2, 3, -1],
  ];
  
  function isSquare(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    return numRows === numCols;
  }
  
  function calculateRowSums(matrix) {
    return matrix.map(row => row.reduce((sum, value) => sum + value, 0));
  }
  
  function calculateColumnProducts(matrix) {
    const numCols = matrix[0].length;
  
    return Array.from({ length: numCols }, (_, colIndex) =>
      matrix.reduce((product, row) => product * row[colIndex], 1)
    );
  }
  
  if (isSquare(matriz)) {
    document.write('<p>A matriz é quadrada.</p>');
  
    const rowSums = calculateRowSums(matriz);
    document.write('<p>Soma dos valores de cada linha: ' + rowSums.join(', ') + '</p>');
  
    const colProducts = calculateColumnProducts(matriz);
    document.write('<p>Multiplicação dos valores de cada coluna: ' + colProducts.join(', ') + '</p>');
  } else {
    document.write('<p>A matriz não é quadrada.</p>');
  }