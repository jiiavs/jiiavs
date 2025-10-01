function incrementer(nums) {
  return nums.map((num, index) => (num + index + 1) % 10);
}

console.log(incrementer([]));           
console.log(incrementer([1, 2, 3]));    
console.log(incrementer([4, 6, 7, 1, 3]));
console.log(incrementer([3, 6, 9, 8, 9])); 
