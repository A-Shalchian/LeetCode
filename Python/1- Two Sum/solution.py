# https://leetcode.com/problems/two-sum/
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # we use a hash map to store key value pairs
        hash_map = {}

        # put all the numbers in the list in the hash map
        for i in range(len(nums)):
            hash_map[nums[i]] = i

        # go over the values and check if we can find the complement
        for i in range(len(nums)):
            complement = target - nums[i]

            # if the complement was in the hash map and also we should check
            # if its not same with the index were checking, then we return
            if complement in hash_map and hash_map[complement] != i:
                return [i, hash_map[complement]]

        # we have this in case nothing was found
        return []