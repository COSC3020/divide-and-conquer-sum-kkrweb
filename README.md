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

Name: Kane Kriz

Start Date: 30 Jan 2025

Last Edited: 26 March 2025 (waited so long as I forgot I skipped over this). 
All other elements of the exercise besides the runtime analysis and response unchanged since mid Feb.

Feedback Request 1 Date: X


//


RESPONSE:

To determine the runtime of the implemented algorithm, first we can consider some of the step by step behavior of the implementation and functionality of particular parts of the code. 
The function divideAndConquerSum splits the array into three sub-arrays at each divide step, rather than two as in done within merge sort. 
This is shown from the code where the array is divided into three sections, being named sect1, sect2, and sect3.

The base cases handle input arrays of length 0 and 1.
For the base case handling an input array of length 0, simply 0 is returned.
For the base case handling an input array of length 1, the single element is instead returned.
For arrays of size 2 or greater, the function recursively solves the sum of the three subarrays and returns their combined sum, as directed within the exercise information.

A recurrence relation for Divide and Conquer's $T(n)$ can be provided similar to that as was done for mergesort within the slides. 
For refrence, mergesort's recurrence relation is $T(n) = 2T(n/2) + n$.
This is due to behavior of mergesort, where the array is split into two halves, each sorted recursively, and then merged, resulting in proper sorting mergesort implementation.
This the example that was followed and solved within the slides using substitution.

For the divideAndConquerSum function, the recurrence relation is instead $T(n) = 3T(n/3) + n$, reflecting the division into three subarrays and the linear time required to combine their sums. 
The initial relation for my Divide and Conquer implementation is given this way because at each step, the array is divided into three subarrays rather than two.
As could be assumed, the sum of these sub arrays is computed recursively as is done with mergesort's two subarrays. 
The additional work noted to be $n$ represents the linear time required to combine the sums of the three subarrays, scaling with the input length of the original input list provided.

To solve this recurrence relation by substitution, we start with the above initial relation $T(n) = 3T(n/3) + n$.

First, we substitute $T(n/3)$ with its own recurrence relation of $3T(n/9)$, in an attempt to break down the recurrence relation further (as desired for the substitution method).
This gives us $T(n) = 3(3T(n/9) + n/3) + n$.
Simplifying this, we get $T(n) = 9T(n/9) + 2n$. 

Here, it can be seen that the original problem of size n has been reduced to a problem of size n/9, with the additional work of 2n. 
The additional work of 2n is solved through summing the linear work done at each level of recursion, being n via the initial relation and n/3 from the first substitution performed.

Next, we substitute $T(n/9)$ with its recurrence relation, again continuing to attempt to break down the problem and how the problem size performs and reduces exponentialy.
This results in $T(n) = 9(3T(n/27) + n/9) + 2n$.
Simplifying further, we get $T(n) = 27T(n/27) + 3n + 2n = 27T(n/27) + 5n$.

At this point, the problem size has been reduced to $n/27$, with the additional work of $5n$. 
The additional work of 5n is again taken by summing the linear work done at each level of recursion, being $2n$ from the previous step and n/9 from the second substitution.

Continuing this process, we can generalize the form of the recurrence relation based upon the behavior of the reduced equations above. 

After i substitutions, the recurrence relation will become $T(n) = 3^i T(n/3^i) + in$. 
To reach the base case $T(1)$, we need $n/3^i = 1$.
Solving for i, i can be obersved as $i = \log_3{n}$ in order to satisfy the statement.

Substituting i back into the general form, we get $T(n) = n T(1) + n \log_3{n}$.
Since $T(1)$ is a constant, we can simplify this to $T(n) = n + n \log_3{n}$, which is in $θ(n \log n)$.

So, the $T(n)$ recurrence relation can be solved to have a theta complexity of $θ(n \log n)$.


//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations:
Wanted to know the deeper workings if any of JS's math.floor, 
as well as the names of potentially relevant connected functions within the web page (i.e. math.round())
to make sure that me treating math.floor's functionality as if it was a different language was right.

“Math.floor() - JavaScript | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor](url)

Solving recurrence relations resources? If I decide to eventually use any
