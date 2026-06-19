document.addEventListener('DOMContentLoaded', () => {

    // --- Sidebar Navigation Logic ---
    const navItems = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('.content-section');
    const viewPdfBtn = document.getElementById('view-pdf-btn');
    const pdfSection = document.getElementById('pdf-section');

    function switchTab(targetElement, targetId) {
        navItems.forEach(nav => nav.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));
        if(targetElement) targetElement.classList.add('active');
        const targetSection = document.getElementById(targetId);
        if(targetSection) targetSection.classList.add('active');
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => switchTab(item, item.getAttribute('data-target')));
    });

    if (viewPdfBtn) {
        viewPdfBtn.addEventListener('click', () => switchTab(null, 'pdf-section'));
    }

   // --- PDF Viewer Logic (Dual PDF & Fullscreen Fix) ---
    const pdfIframe = document.getElementById('pdf-iframe');
    const btnPdf1 = document.getElementById('load-pdf-1');
    const btnPdf2 = document.getElementById('load-pdf-2');
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    if(btnPdf1 && btnPdf2 && pdfIframe) {
        btnPdf1.addEventListener('click', () => {
            // Using your correctly renamed file
            pdfIframe.src = "pdfs/Statistics_Analytics.pdf";
            btnPdf1.className = "btn primary-btn";
            btnPdf2.className = "btn secondary-btn";
        });

        btnPdf2.addEventListener('click', () => {
            // Using your correctly renamed file
            pdfIframe.src = "pdfs/Statistics_MCQs.pdf";
            btnPdf2.className = "btn primary-btn";
            btnPdf1.className = "btn secondary-btn";
        });
    }

    if(fullscreenBtn && pdfIframe) {
        fullscreenBtn.addEventListener('click', () => {
            window.open(pdfIframe.src, '_blank');
        });
    }

    if(fullscreenBtn && pdfIframe) {
        fullscreenBtn.addEventListener('click', () => {
            // Opens the current PDF in a new tab to bypass local file security blocks
            window.open(pdfIframe.src, '_blank');
        });
    }


    // --- All 30 MCQs Data ---
    const quizData = [
        { id: 1, question: "1. Normal curve is", options: ["A) J-shaped", "B) U-shaped", "C) Symmetric bell-shaped", "D) Rectangular"], answer: 2 },
        { id: 2, question: "2. 68-95-99.7 rule: 95% data lies in", options: ["A) μ ± σ", "B) μ ± 2σ", "C) μ ± 3σ", "D) μ ± 4σ"], answer: 1 },
        { id: 3, question: "3. In Normal dist, Mean = Median = Mode because", options: ["A) Skewed", "B) Symmetric", "C) Bimodal", "D) Uniform"], answer: 1 },
        { id: 4, question: "4. Excel function for Normal cumulative prob is", options: ["A) NORM.S.DIST", "B) NORM.DIST", "C) NORMAL", "D) GAUSS"], answer: 1 },
        { id: 5, question: "5. If μ=50, σ=10, then range for 68% data is", options: ["A) 40-60", "B) 30-70", "C) 20-80", "D) 45-55"], answer: 0 },
        { id: 6, question: "6. OR formula =", options: ["A) (a+b)/(c+d)", "B) (a×d)/(b×c)", "C) a/b + c/d", "D) a×b×c×d"], answer: 1 },
        { id: 7, question: "7. OR=1 means", options: ["A) Positive association", "B) Negative association", "C) No association", "D) Perfect association"], answer: 2 },
        { id: 8, question: "8. OR>1 means exposure", options: ["A) Decreases risk", "B) Increases risk", "C) No effect", "D) Removes risk"], answer: 1 },
        { id: 9, question: "9. Poisson used for", options: ["A) Height, weight", "B) Rare events/counts", "C) Categories", "D) Continuous data"], answer: 1 },
        { id: 10, question: "10. λ in Poisson = n × p where p is", options: ["A) Sample size", "B) Probability of success", "C) Mean", "D) SD"], answer: 1 },
        { id: 11, question: "11. Excel function for Poisson is", options: ["A) BINOM.DIST", "B) POISSON.DIST", "C) POISSONS", "D) EXP.DIST"], answer: 1 },
        { id: 12, question: "12. Poisson mean = variance =", options: ["A) n", "B) p", "C) λ", "D) σ"], answer: 2 },
        { id: 13, question: "13. Correlation coefficient r range is", options: ["A) 0 to 1", "B) -1 to 1", "C) -∞ to ∞", "D) 0 to ∞"], answer: 1 },
        { id: 14, question: "14. r = -0.8 indicates", options: ["A) Strong positive", "B) Weak negative", "C) Strong negative", "D) No correlation"], answer: 2 },
        { id: 15, question: "15. r = 0 means", options: ["A) Perfect correlation", "B) No linear correlation", "C) Curvilinear", "D) Negative correlation"], answer: 1 },
        { id: 16, question: "16. In y = a + bx, 'a' is", options: ["A) Slope", "B) Intercept", "C) Error", "D) Mean"], answer: 1 },
        { id: 17, question: "17. Dependent variable is also called", options: ["A) Predictor", "B) Independent", "C) Response/Outcome", "D) Constant"], answer: 2 },
        { id: 18, question: "18. Excel CORREL function returns", options: ["A) Slope", "B) Intercept", "C) Correlation coefficient", "D) Mean"], answer: 2 },
        { id: 19, question: "19. SLOPE function in Excel gives", options: ["A) 'a'", "B) 'b'", "C) r", "D) R²"], answer: 1 },
        { id: 20, question: "20. Regression predicts", options: ["A) Association only", "B) One variable from another", "C) Categories", "D) Outliers only"], answer: 1 },
        { id: 21, question: "21. IQR formula is", options: ["A) Q3+Q1", "B) Q3-Q1", "C) Q2-Q1", "D) Max-Min"], answer: 1 },
        { id: 22, question: "22. Lower whisker =", options: ["A) Q1 - 1.5×IQR", "B) Q3 + 1.5×IQR", "C) Min value", "D) Q1"], answer: 0 },
        { id: 23, question: "23. Boxplot is used to identify", options: ["A) Mean", "B) Outliers", "C) Mode", "D) Median only"], answer: 1 },
        { id: 24, question: "24. Listwise deletion removes", options: ["A) Only missing cell", "B) Entire row with any missing", "C) Entire column", "D) Nothing"], answer: 1 },
        { id: 25, question: "25. Pairwise deletion advantage is", options: ["A) Removes all data", "B) Uses maximum available data", "C) Adds data", "D) Slower"], answer: 1 },
        { id: 26, question: "26. Mean imputation is bad for", options: ["A) Normal data", "B) Skewed data with outliers", "C) Large data", "D) Categorical data"], answer: 1 },
        { id: 27, question: "27. Median imputation is best for", options: ["A) Symmetric data", "B) Skewed data", "C) Categorical", "D) Time series"], answer: 1 },
        { id: 28, question: "28. Mode imputation is used for", options: ["A) Numerical", "B) Categorical data", "C) Continuous", "D) Time series"], answer: 1 },
        { id: 29, question: "29. KNN stands for", options: ["A) K Nearest Neighbors", "B) Kernel Nearest Nodes", "C) Key Nearest Numbers", "D) Known Nearest Network"], answer: 0 },
        { id: 30, question: "30. KNN imputation advantage", options: ["A) Fastest method", "B) Uses similar records", "C) Always 100% correct", "D) No K value needed"], answer: 1 }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-quiz');
    const resetBtn = document.getElementById('reset-quiz');
    const resultsDiv = document.getElementById('quiz-results');
    const scoreSpan = document.getElementById('score');

    // Render Quiz
    function renderQuiz() {
        if (!quizContainer) return;
        quizContainer.innerHTML = '';
        quizData.forEach((q, index) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            
            let optionsHtml = '';
            q.options.forEach((opt, optIndex) => {
                optionsHtml += `
                    <label id="label-q${index}-o${optIndex}">
                        <input type="radio" name="q${index}" value="${optIndex}">
                        ${opt}
                    </label>
                `;
            });

            card.innerHTML = `
                <h3>${q.question}</h3>
                <div class="options" style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    ${optionsHtml}
                </div>
            `;
            quizContainer.appendChild(card);
        });
    }

    // Evaluate Quiz
    function evaluateQuiz() {
        let score = 0;
        
        quizData.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            const correctLabel = document.getElementById(`label-q${index}-o${q.answer}`);
            if(correctLabel) correctLabel.classList.add('correct-ans');

            if (selectedOption) {
                const selectedValue = parseInt(selectedOption.value);
                if (selectedValue === q.answer) {
                    score++;
                } else {
                    const wrongLabel = document.getElementById(`label-q${index}-o${selectedValue}`);
                    if(wrongLabel) wrongLabel.classList.add('wrong-ans');
                }
            }
        });

        if(scoreSpan) scoreSpan.textContent = score;
        if(resultsDiv) {
            resultsDiv.classList.remove('hidden');
            resultsDiv.scrollIntoView({ behavior: 'smooth' });
        }
        if(submitBtn) submitBtn.disabled = true;
    }

    function resetQuiz() {
        renderQuiz();
        if(resultsDiv) resultsDiv.classList.add('hidden');
        if(submitBtn) submitBtn.disabled = false;
        if(quizContainer) quizContainer.scrollIntoView({ behavior: 'smooth' });
    }

    if (submitBtn) submitBtn.addEventListener('click', evaluateQuiz);
    if (resetBtn) resetBtn.addEventListener('click', resetQuiz);

    renderQuiz();
});