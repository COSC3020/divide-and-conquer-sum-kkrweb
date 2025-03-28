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

Last Edited: 26 March 2025 

(waited so long to finalize and submit as I forgot I skipped over the explanation and recurrence solving in early Feb when I completed the reast of the exercise)

Feedback Request 1 Date: 26 March 2025


//


Feedback Request 2 Date: 27 March 2025


//


Feedback Request 3 Date: 28 March 2025


//


RESPONSE:

To determine the runtime of the implemented algorithm, first we can consider some of the step by step behavior of the implementation and functionality of particular parts of the code. 
The function divideAndConquerSum splits the array into three sub-arrays at each divide step, rather than two as in done within merge sort. 
This is shown from the code where the array is divided into three sections, being named sect1, sect2, and sect3.

The base cases handle input arrays of length 0 and 1.
For the base case handling an input array of length 0, simply 0 is returned.
For the base case handling an input array of length 1, the single element is instead returned.
Each of the base cases return in constant time.

For arrays of size 2 or greater, the function recursively solves the sum of the three subarrays and returns their combined sum, as directed within the exercise information.

A recurrence relation for Divide and Conquer's T(n) can be provided similar to that as was done for mergesort within the slides. 
For refrence, mergesort's recurrence relation is $T(n) = 2T(n/2) + n$.
This is due to behavior of mergesort, where the array is split into two halves, each sorted recursively, and then merged, resulting in proper sorting mergesort implementation.
This the example that was followed and solved within the slides using substitution.

For the divideAndConquerSum function, the recurrence relation is instead $T(n) = 3T(n/3) + c$, reflecting the division into three subarrays and the constant time (expressed by constant c) required to combine their sums. 
The initial relation for my Divide and Conquer implementation is given this way because at each step, the array is divided into three subarrays rather than two.
As could be assumed, the sum of these subarrays is computed recursively as is done with mergesort's two subarrays. 

The additional work noted to be c represents the constant time required to split the array into three subarrays and combine their sums, which remains the same constant work regardless of input size. 

To solve this recurrence relation by substitution, we start with the above initial relation $T(n) = 3T(n/3) + c$.

First, we substitute $T(n/3)$ with its own recurrence relation of $3T(n/9) + c$, in an attempt to break down the recurrence relation further (as desired for the substitution method).
This gives us $T(n) = 3(3T(n/9) + c) + c$.
Simplifying this, we get $T(n) = 9T(n/9) + 2c$.

Here, it can be seen that the original problem of size n has been reduced to a problem of size n/9, with constant additional work 2c.
The constant additional work comes from the c term in the original relation (representing the constant combination time of subproblem solutions).

Next, we substitute $T(n/9)$ with its recurrence relation, again continuing to attempt to break down the problem and how the problem size performs and reduces exponentially.
This results in $T(n) = 9(3T(n/27) + c) + 2c$.
Simplifying further, we get $T(n) = 27T(n/27) + 3c$.

At this point, the problem size has been reduced to $n/27$, with only constant additional work c accumulated.
The work accumulates as i*c, with i being the current depth of recursion.

Continuing this process, we can generalize the form of the recurrence relation based upon the behavior of the reduced equations above.

After i substitutions, the recurrence relation will become $T(n) = 3^i T(n/3^i) + i * c$.
To reach the base case T(1), we need $n/3^i = 1$.
T(1) represents the constant work to handle the base case (returning a single element).
Solving for i, i can be observed as $i = \log_3{n}$ in order to satisfy the statement.

Substituting i back into the general recurrence form, we get $T(n) = n * T(1) + c * \log_3{n}$.
Since T(1) is a constant, this can be further simplified into $T(n) \in Θ(n) + Θ(log{n}) = Θ(n)$.
The log bases of different values are disregarded in asymptotic notation because different log bases differ only through a difference in constant factor, ignored in the context of Big Θ notation.

The Θ bound is determined through analyzing the dominant term within the expression.
The linear term n dominates the logarithmic term, so asymptotically the result is $T(n) \in Θ(n)$.

Therefore, the overall growth rate of T(n) is linear, meaning $T(n) \in Θ(n)$.
This means the algorithm's time complexity grows at the same rate as n.

So, solving the T(n) recurrence relation gives a complexity of $T(n) \in Θ(n)$.


//



Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.



Citations:
Wanted to know the deeper workings if any of JS's math.floor, 
as well as the names of potentially relevant connected functions within the web page (i.e. math.round())
to make sure that me treating math.floor's functionality as if it was a different language was right.

“Math.floor() - JavaScript | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor](url)



For substitution recurrence solving help.

Some of it for the Cornell one is obviously not to applicable as you progress through the page / lecture:

“Substitution Method to Solve Recurrence Relations.” GeeksforGeeks, 18 Mar. 2024, www.geeksforgeeks.org/substitution-method-to-solve-recurrence-relations/.

“Using the Substitution and Master Methods.” Www.cs.cornell.edu, www.cs.cornell.edu/courses/cs3110/2014sp/recitations/24/using-the-substitution-and-master-method.html.
