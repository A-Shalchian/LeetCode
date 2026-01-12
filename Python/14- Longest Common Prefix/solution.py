#https://leetcode.com/problems/longest-common-prefix

from typing import List

class Solution:
    def longestCommonPrefix(self, strs:List[str]) -> str:
        # if its empty return empty string
        if not strs:
            return ""

        # iterate over the first word
        for i in range(len(strs[0])):
            char = strs[0][i]

            # check the other words
            for j in range(1,len(strs)):
                # is current word too short, OR  does char not match? (also the len checker should be first or it will crash)
                if i == len(strs[j]) or char[j][i] != char:
                    # return the part of the word we matched so far
                    return strs[0][:i]

        # if loop finishes the whole first word is the prefix
        return strs[0]
