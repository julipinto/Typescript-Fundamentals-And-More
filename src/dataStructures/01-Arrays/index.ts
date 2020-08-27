/*
Why use Arrays?
When you need a list of items:
- Facebook is a list of posts 
- Instagram is a list of pictures
- Twitter is a list of tweets

I's one of the most common data structures
*/

//Javascript has Dynamic Arrays built in it
//Dynamic Arrays: Array that grows up according to it's value

// WRITE/UPDATE - 0(1)
const nums: Number[] = [];
nums[0] = 1;
nums[1] = 2;
nums[2] = 3;

//WRITE to the end - 0(1)
nums.push(4);
nums.push(5);

//WRITE to the beggining - 0(n)
//you have to shift all elements one by one to add to the beggining
nums.unshift(0);
nums.unshift(-1);

//DELETE - 0(n)
//Delete from 2° index 1 value
nums.splice(2, 1);

console.log(nums);
