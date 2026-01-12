# https://leetcode.com/problems/palindrome-number/

class Solution:
    def isPalindrome(self, x:int) -> bool:
        # first check if the number is negative (can't be palindrome) or if it ends with a 0 (other than 0 itself)
        if x < 0 or (x % 10 == 0 and x != 0):
            return False

        reversed_half = 0
        while reversed_half < x:
            # for example for reversing 121 we first do 121 % 10, which is 1 and then
            # for 2 its (1 * 10) + 2 = 12
            # for 1 its (12 * 10) + 1 = 121
            last_digit = x % 10
            reversed_half = (reversed_half * 10) + last_digit
            x //= 10

        return x == reversed_half or x == reversed_half // 10
