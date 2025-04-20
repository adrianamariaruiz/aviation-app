

export const paginationNumbers = (currentPage: number, totalPages: number ) => {
  if(totalPages <= 7){
    return Array.from({length: totalPages}, (_, i) => i + 1);
  };

  if(currentPage <= 3) {
    return [1, 2, 3, 4, '...', totalPages -1, totalPages];
  }

  if(currentPage >= totalPages - 3) {
    return [1, 2, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }
 
  return [
    1, 
    2, 
    '...', 
    currentPage - 2,
    currentPage - 1, 
    currentPage, 
    currentPage + 1, 
    currentPage + 2,
    '...', 
    totalPages - 1, 
    totalPages
  ]
}
