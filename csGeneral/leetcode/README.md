- [1. Median of Two Sorted Arrays](#1-median-of-two-sorted-arrays)
  - [1.1. Description](#11-description)
  - [1.2. Solution](#12-solution)

---

# 1. Median of Two Sorted Arrays
[4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)

## 1.1. Description
Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

Example 1:

Input: `nums1 = [1,3]`, `nums2 = [2]`
Output: `2.00000`
Explanation: merged `array = [1,2,3]` and median is `2`.
Example 2:

Input: `nums1 = [1,2]`, `nums2 = [3,4]`
Output: `2.50000`
Explanation: merged array = [1,2,3,4] and median is `(2 + 3) / 2 = 2.5`.

## 1.2. Solution

1. Divide and conquer
   1. big question: Find `K`th smallest number in two sorted array `A`, `B`.
   2. Divide big question into smaller question: find `(K-ak)th` smallest number in two sorted array `A[aK~aLength]`, `B`.
2. The target must be between `A[k/2]` and `B[k/2]`, inclusive.
3. We keep the `A` list shorter and focus on eliminating the left part of the median of list `A` if it's less than the median of list `B`. 
4. If `A[k/2]` < `B[k/2]`, We can remove the left part of `A` as `A' = A.slice(k / 2, A.length)`.
5. Consider the total number of elements in 2 arrays (`num1` and `num2`) is `odd` or `even`.

<img src="./imgs/4_median_of_two_sorted_arrays.png">

- `k` - kth smallest number
- `A` - number list 1 `num1`
- `B` - number list 2 `num2`
- `aL` - left border (index) of List `A` 
- `bL` - left border (index) of List `B`
- `a` - length of `A` list (`a == A.length`)
- `b` - length of `B` list (`b == B.length`)

```ts
// typescript

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mn = nums1.length + nums2.length;
  const boundary = setBoundary(nums1, 0, nums1.length, nums2, 0, nums2.length);

  const res = boundary(Math.ceil(mn / 2));
  if (mn % 2) return res;
  return (res + boundary((mn + 2) / 2)) / 2;
}

const setBoundary = (A: number[], aL: number, a: number, B: number[], bL: number, b: number,) => {
    return (k: number) => FindKthSmallList(A, aL, a, B, bL, b, k);
}

const FindKthSmallList = (A: number[], aL: number, a: number, B: number[], bL: number, b: number, K: number): number => {
  if (a > b) return FindKthSmallList(B, bL, b, A, aL, a, K);

  if (a === 0) return B[bL + K - 1];
  if (K === 1) return Math.min(A[aL], B[bL]);

  const aK = Math.min(a, Math.ceil(K / 2));   // A+K/2 > A length
  const bK = K - aK;   // aK+bK=K (K/2+K/2=K or a+bK=K)

  if (A[aL + aK - 1] < B[bL + bK - 1]) { // array index include 0 so index=length-1
    return FindKthSmallList(A, aL + aK, a - aK, B, bL, b, K - aK); 
  } else {
    return FindKthSmallList(A, aL, a, B, bL + bK, b - bK, K - bK);
  }
};
```