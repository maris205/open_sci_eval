# **OpenSciEval: An Open-Ended Framework for Evaluating Scientific Creativity in AI Agents**

## **Abstract**

Current AI evaluations largely focus on knowledge recall, making it difficult to measure the original scientific creativity required to propose novel concepts and forge cross-domain connections. To address this, we introduce OpenSciEval (OSE), an open-ended evaluation framework designed to quantify AI's evolution from mere problem-solver to researcher. In our inaugural "Prime–Chaos Challenge," frontier models like Gemini and Qwen not only established non-trivial links between arithmetic and dynamics but also spontaneously introduced physics-inspired concepts to interpret mathematical structures, demonstrating remarkable potential for scientific modeling. Independent of domain-specific priors, OSE offers a universal, standardized tool for tracking AI's scientific creativity across disciplines.

## **Prime–Chaos Challenge**
To construct a physical model of prime number distribution, we establish a logical chain from arithmetic sieves to nonlinear dynamics: first, we transform the static sieving process into a dynamic symbolic sequence, and then, using symbolic dynamics theory, map it onto trajectories of a low-dimensional chaotic attractor
<img src='prime_chaos.png' />

## **Surprising results of Gemini3 Pro**
In testing, Gemini 3 Pro demonstrated exceptional insight and experimental design capabilities, provided clear directions for extension, and constructed a complete framework of prime-number chaotic dynamics along with numerical validation results, as detailed in the table below:

Table 1: Comparison of Stochastic Models and Chaotic Dynamic Models in Simulating Prime Distribution Characteristics

| Feature Dimension | Real Primes (Ground Truth) | Traditional Stochastic Model (Cramér Model) | This Chaos Model (Logistic + Aging) |
| :--- | :--- | :--- | :--- |
| **1. Core Mechanism** | Arithmetic Sieve | Random Dice Throwing | Deterministic Chaotic Orbit |
| **2. Microscopic Structure** | Discrete Needle Spectrum | ❌ Smooth Exponential Curve | ✅ Discrete Needle Spectrum |
| **3. Parity Rigidity** | Strictly Even Gaps | ❌ None (Allows Odd) | ✅ Spontaneously Emergent (No Odd) |
| **4. Memory Properties** | Short-range Repulsion (Lag-1 < 0) | ❌ No Memory (Lag-1 = 0) | ✅ Short-range Repulsion (Lag-1 < 0) |
| **5. Twin Events** | Critical Intermittency (Power Law) | ❌ Poisson Process (Exponential Law) | ✅ Critical Intermittency (Power Law) |
| **6. Dynamic Classification** | Weak Chaos ($\lambda \approx 0.1$) | ❌ White Noise ($\lambda \to \infty$) | ✅ Weak Chaos ($\lambda \approx 0.1$) |
| **7. Quantitative Verification** | Twin Constant 0.66016... | ⚠️ Requires Manual Correction | ✅ Naturally Converges to 0.66... |

* Detailed Gemini 3 Pro Research Report. wang, . liang . (2025). The Emergence of Prime Distribution from Low-Dimensional Deterministic Chaos (v1.0). Zenodo. https://doi.org/10.5281/zenodo.17939240


## **Evaluation Results**

Table 1:Scores of AI agents on the Prime-Chaos Challenge evaluation (As the evaluation involves subjective elements, it is for reference only)

| Model     | Comprehensive Rating           | Total Score | P1 Logic | P2 Numerical | P3 Innovation | Breakthrough |
|-----------|-------------------------------|-------------|----------|--------------|---------------|--------------|
| Gemini 3  | Intermediate Research Assistant | 33          | 15       | 8            | 10            | 0            |
| Doubao    | Junior Research Assistant       | 28          | 13       | 7            | 8             | 0            |
| Qwen 3    | Junior Research Assistant       | 22          | 10       | 6            | 6             | 0            |
| Hunyuan   | Junior Research Assistant       | 21          | 9        | 6            | 6             | 0            |
| Grok4.1   | Intern                          | 14          | 6        | 4            | 4             | 0            |
| GPT5.1    | Intern                          | 10          | 4        | 3            | 3             | 0            |


## **Evaluation Methodology**

To reproduce the evaluation or test other models, follow these steps:

1. Upload the evaluation document **Guide for Evaluating the Innovative Capabilities of AI Agents-OSE.prime_chaos.v1.pdf** to the Large Language Model like Gemini, please select Deep Research or Agent mode.  
2. Use the following prompt to initiate the inquiry:
```
"You are a research agent participating in the OpenSciEval scientific creativity assessment. Please carefully read and understand the attached complete assessment guide, then proceed according to the 3 steps defined in '4. Step-by-Step Execution Path'.
Please organize your response in the form of a complete scientific exploration report, including clear section titles, logical deductions, code (if applicable), and conclusions."
```
*For specific evaluation criteria and scoring details, please refer to the main paper.*


## **File Descriptions**

### **Documents**

* **Main Paper:** paper-Humanity's Final Conjecture\_ Evaluation of AI Innovation Capability Based on Prime Number Distribution.pdf  
  * *The core research paper detailing the theory and evaluation framework.*  
* **Test Content (English):** Guide for Evaluating the Innovative Capabilities of AI Agents-OSE.prime_chaos.v1.pdf 
  * *The material used for testing the LLMs (upload this file to the AI).*  
* **Test Content (Chinese):** AI智能体创新能力评测指南-OSE.prime_chaos.v1.pdf 
  * *The Chinese version of the test material.*
* **Gemini Results:** gemini result-The Emergence of Prime Distribution from Low-Dimensional Deterministic Chaos.pdf
  * *Test results of Gemini 3 Pro.*

### **Code**

* **src\gemini\_\***: Verification code generated by the Gemini model during the testing process.  
* **src\paper\_\* & logistic\_\***: Source code used to generate the figures and visualizations found in the main paper.

### **Chat link**
* Gemini chat link: https://gemini.google.com/share/a24a7cae9bbf
* Qwen3 chat link: https://www.qianwen.com/share?shareId=2a126d23-87cc-42ba-af24-9fc8410b0ea7
* Qwen3 chat link: https://www.qianwen.com/share?shareId=0791d863-b6bd-441d-ac79-c7042a0f1649
* doubao：https://www.doubao.com/thread/w3ff03cd43cc3ca5a
* openai：https://chatgpt.com/share/693b9ae6-3638-8006-8c89-24a056b3241c
* yuanbao-Hunyuan：https://yb.tencent.com/s/wC1urJRiNaIY
* grok：https://x.com/i/grok/share/t1WhY425y3akvZgutb52hwAIh

## **Citation**
* Evaluation Guidelines for prime chaos problem. wang, . liang . (2025). Humanity's Final Conjecture: Evaluation of AI Innovation Capability Based on Prime Number Distribution. https://doi.org/10.5281/zenodo.17832139
* Evaluation Methodology.  wang, . liang . (2025). OpenSciEval: An Open-Ended Framework for Evaluating Scientific Creativity in AI Agents (v1.0). Zenodo. https://doi.org/10.5281/zenodo.17926196
* Gemini 3 Pro Research Report.  wang, . liang . (2025). The Emergence of Prime Distribution from Low-Dimensional Deterministic Chaos (v1.0). Zenodo. https://doi.org/10.5281/zenodo.17939240
