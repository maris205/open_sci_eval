
**URL:** http://www.scholarpedia.org/article/Kneading_theory

---

Typesetting math: 29%

Scholarpedia is supported by Brain Corporation

Kneading theory
Toby Hall (2010), Scholarpedia, 5(11):3956.	doi:10.4249/scholarpedia.3956	revision #91403 [link to/cite this article]
Post-publication activity


Curator: Toby Hall

Dr. Toby Hall, Department of Mathematical Sciences, University of Liverpool

Kneading theory is a tool, developed by Milnor and Thurston, for studying the topological dynamics of piecewise monotone self-maps of an interval.

Associated to such an interval map 
f
 is its kneading matrix 
N(t) ,
 whose entries are elements of 
Z[[t]] ,
 the ring of formal power series with integer coefficients. This matrix contains information about important combinatorial and topological invariants of 
f .

Milnor and Thurston's work was eventually published in Milnor and Thurston 1988, although the majority of their article had been widely circulated in preprint form since 1977. The use of symbolic dynamics in the study of interval maps, which is the starting point of their work, was developed earlier (see for example Parry 1966, Metropolis Stein and Stein 1973).

Quite often notation different from Milnor and Thurston's is used, see Alternative notation.




Contents [hide] 
1 The unimodal case
1.1 The cutting invariant and the lap invariant: topological entropy
1.2 The kneading determinant
1.3 Homtervals
1.4 The relationship between the kneading determinant and the cutting invariant
1.5 Topological entropy
1.6 The Artin-Mazur zeta function
1.7 Semi-conjugacy to piecewise-linear models
1.8 Renormalization
2 The multimodal case
2.1 Introduction
2.2 The cutting invariant, lap invariant, and growth number
2.3 The kneading matrix and kneading determinant
2.4 Theorems
2.5 Example
3 Other directions
4 Alternative notation
5 References
6 Recommended reading
The unimodal case
Figure 1: A unimodal map

The theory is most easily understood in the special case of unimodal maps, which is also the most common area of application. In this section 
f:[0,1]→[0,1]
 is a fixed continuous map (so the dependence of objects on 
f
 will not be explicitly noted), with the properties that

there is some 
c∈(0,1)
 such that 
f
 is strictly increasing on 
[0,c]
 and strictly decreasing on 
[c,1] ,
 and
f(0)=f(1)=0 .

A rich source of examples is provided by the logistic family 
f
μ
(x)=μx(1−x) ,
 where 
0<μ≤4 .

The cutting invariant and the lap invariant: topological entropy

Let 
Γ
 be the set of preimages of 
c ,
 i.e.
Γ={x∈[0,1]:
f
i
(x)=c for some i≥0}.
Γ
 can be written as the disjoint union of the sets 
Γ
i
 (
i≥0
), where elements 
x
 of 
Γ
i
 satisfy 
f
i
(x)=c
 but 
f
j
(x)≠c
 for 
j<i .
 Let 
γ
i
 denote the cardinality of 
Γ
i
 (so 
γ
i
≤
2
i
 for all 
i
). The cutting invariant of 
f
 is the formal power series
γ(t)=
∑
i=0
∞
γ
i
t
i
∈Z[[t]].

Constructing formal power series from sequences of integers in this way will be a common process: where appropriate, these formal power series will be regarded as complex power series without further comment. A closely related construction is of the lap invariant 
ℓ(t) :
 let 
ℓ
i
 denote the number of monotone pieces (or laps) of 
f
i
 for 
i≥1 ,
 and write
ℓ(t)=
∑
i=0
∞
ℓ
i+1
t
i
∈Z[[t]].
Since 
ℓ
i
=1+
∑
i−1
j=0
γ
j
 it follows that 
ℓ(t)=
1
1−t
(1+γ(t)).
(1)


Let 
s=
lim sup
i→∞
ℓ
1/i
i
∈[1,2] ,
 the reciprocal of the radius of convergence of 
ℓ(t) ,
 and hence also of 
γ(t) .
 Misiurewicz and Szlenk 1977 show that the topological entropy 
h(f)
 of 
f
 is given by 
h(f)=logs .
 This quantity 
s