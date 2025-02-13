# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

//
RESPONSE:
not complete

// 1/30/2025
// Edits made prior to feedback request 1, still going as of 13 Feb 2025.
I am not good at naturally doing these runtime analyses. Love it.



Name: Kane Kriz

Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

Citation:
Wanted to know the deeper workings if any of JS's math.floor, 
as well as the names of potentially relevant connected functions within the web page (i.e. math.round())
to make sure that me treating math.floor's functionality as if it was a different language was right.

“Math.floor() - JavaScript | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor](url)

Solving recurrence relations resources? If I decide to eventually use any
