

const sortArray = function(nums) {
    if(nums.length <= 1) return nums
    let mid = Math.floor(nums.length/2)
    let left = nums.slice(0,mid)
    let right = nums.slice(mid)
    return merge(sortArray(left),sortArray(right))
}

const merge = (left,right) => {
    let res = []
    while(left.length && right.length) {
        if(left[0] > right[0]) {
            res.push(right.shift())
        } else {
            res.push(left.shift())
        }
    }
    while(left.length) {
        res.push(left.shift())
    }
    while(right.length) {
        res.push(right.shift())
    }
    return res
}
let nums = [5,2,3,1]
console.log(sortArray(nums));
