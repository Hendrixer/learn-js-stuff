const data = [1, 2, 3, 4, 5, 6, 7, [8, [9, 10, 11]], 12, 13];

const findNum = (nums) => {
  // nums.forEach(num => {
  //   if (Array.isArray(num)) {
  //     num.forEach(num2 => {
  //       console.log(num2)
  //     })
  //   }
  // })

  console.log('a new bag to search')
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num === 11) {
      console.log('found 11')
      return true;
    }

    if (Array.isArray(num)) {
      return findNum(num);
    }
  }
};

console.log(findNum(data));
