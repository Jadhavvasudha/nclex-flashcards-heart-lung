const flashcardsData = [
    {
        front: `Angina Pectoris`,
        definition: `Chest pain or discomfort due to reduced blood flow to the heart.`,
        signsSymptoms: `<b>Cardiovascular Disease</b><br><br>Chest pain (tightness, pressure, squeezing), often radiating to left arm, jaw, or shoulder; Shortness of breath, diaphoresis, nausea.`,
        diagnosis: `ECG (ST depression or T-wave inversion during pain), Stress test (ECG or imaging), Coronary angiography.`,
        treatment: `Nitroglycerin (sublingual), Beta-blockers, Calcium channel blockers, Aspirin, Statins, Lifestyle changes (diet, exercise, smoking cessation), Coronary angioplasty (PCI) or CABG.`,
        exacerbation: `Increased frequency, intensity, or duration of angina; Occurring at rest or with minimal exertion.`
    },
    {
        front: `Myocardial Infarction (MI)`,
        definition: `Heart attack; damage to the heart muscle due to blocked blood flow.`,
        signsSymptoms: `<b>Cardiovascular Disease</b><br><br>Severe, prolonged chest pain (unrelieved by nitroglycerin), diaphoresis, dyspnea, nausea/vomiting, anxiety, palpitations.`,
        diagnosis: `ECG (ST elevation, Q waves, T-wave inversion), Elevated cardiac enzymes (Troponin, CK-MB).`,
        treatment: `MONA (Morphine, Oxygen, Nitroglycerin, Aspirin), Thrombolytics (if within window), PCI (angioplasty/stenting), Anticoagulants (Heparin), Beta-blockers, ACE inhibitors.`,
        exacerbation: `MI is the exacerbation; Goal is to prevent re-infarction and complications.`
    },
    {
        front: `Heart Failure (HF)`,
        definition: `The heart's inability to pump enough blood to meet the body's needs.`,
        signsSymptoms: `<b>Cardiovascular Disease</b><br><br><b>Left-Sided:</b> Dyspnea, orthopnea, paroxysmal nocturnal dyspnea (PND), crackles, S3 heart sound, fatigue, decreased urine output. <br><br><b>Right-Sided:</b> Peripheral edema (ankles, legs), JVD, ascites, hepatomegaly, weight gain.`,
        diagnosis: `Echocardiogram (to assess EF), Chest X-ray (cardiomegaly, pulmonary congestion), BNP (B-type natriuretic peptide) levels.`,
        treatment: `Diuretics (Lasix), ACE inhibitors or ARBs, Beta-blockers (carefully), Digoxin (use declining), Vasodilators (Nitrates, Hydralazine), Sodium and fluid restriction, Oxygen therapy.`,
        exacerbation: `Worsening dyspnea, increased edema, sudden weight gain, orthopnea, PND. Often triggered by medication non-adherence, dietary indiscretion, infection, or uncontrolled hypertension.`
    },
    {
        front: `Atrial Fibrillation (A-Fib)`,
        definition: `Irregular and rapid heart rate originating from the atria.`,
        signsSymptoms: `<b>Cardiovascular Disease</b><br><br>Palpitations, irregular pulse, fatigue, shortness of breath, dizziness, chest pain (sometimes asymptomatic).`,
        diagnosis: `ECG (irregularly irregular rhythm, absence of P waves).`,
        treatment: `Rate control (Beta-blockers, Calcium channel blockers, Digoxin), Rhythm control (Cardioversion, Antiarrhythmics), Anticoagulation (Warfarin, DOACs) to prevent stroke, Ablation.`,
        exacerbation: `Rapid heart rate, increased palpitations, shortness of breath, chest pain, lightheadedness/dizziness.`
    },
    {
        front: `Chronic Obstructive Pulmonary Disease (COPD)`,
        definition: `Progressive lung disease causing airflow obstruction.`,
        signsSymptoms: `<b>Lower Respiratory Disease</b><br><br>Chronic cough, excessive sputum production, dyspnea (especially on exertion), wheezing, barrel chest, prolonged expiratory phase, use of accessory muscles.`,
        diagnosis: `Spirometry (FEV1/FVC ratio <0.70), Chest X-ray (hyperinflation, flattened diaphragm), ABGs (hypoxemia, hypercapnia).`,
        treatment: `Bronchodilators (Beta-agonists, Anticholinergics), Inhaled corticosteroids (often combined with bronchodilators), Oxygen therapy (titrate to 88-92% SpO2), Pulmonary rehabilitation, Smoking cessation, Vaccinations (flu, pneumonia).`,
        exacerbation: `Increased dyspnea, increased sputum production (often purulent), increased wheezing, fever, change in mental status. Often triggered by respiratory infections.`
    },
    {
        front: `Asthma`,
        definition: `Chronic inflammatory disease of the airways causing reversible airflow obstruction.`,
        signsSymptoms: `<b>Lower Respiratory Disease</b><br><br>Wheezing, shortness of breath, chest tightness, cough (especially at night or early morning), reversible airflow obstruction.`,
        diagnosis: `Pulmonary function tests (PFTs) showing reversible airflow obstruction (FEV1 improvement >12% after bronchodilator), History and physical exam, Allergy testing (to identify triggers).`,
        treatment: `<b>Reliever (Rescue):</b> Short-acting beta2-agonists (SABA) like Albuterol. <br><br><b>Controller (Maintenance):</b> Inhaled corticosteroids (ICS) like Fluticasone, Long-acting beta2-agonists (LABA) like Salmeterol (always combined with ICS), Leukotriene modifiers (Montelukast).`,
        exacerbation: `Increased wheezing, shortness of breath, chest tightness, coughing; Decreased peak flow readings; Use of accessory muscles; Difficulty speaking in full sentences; Status asthmaticus (severe, prolonged exacerbation unresponsive to initial treatment).`
    },
    {
        front: `Pulmonary Embolism (PE)`,
        definition: `Blockage of a pulmonary artery by a blood clot or other material.`,
        signsSymptoms: `<b>Pulmonary Vascular Disease</b><br><br>Sudden onset of dyspnea, chest pain (pleuritic), cough, hemoptysis, tachypnea, tachycardia, anxiety, syncope.`,
        diagnosis: `CT pulmonary angiogram (gold standard), V/Q scan (if CTPA contraindicated), D-dimer (elevated in PE, but not specific), ABGs (hypoxemia, hypocapnia).`,
        treatment: `Anticoagulation (Heparin, LMWH, DOACs, Warfarin), Thrombolytics (for massive PE with hemodynamic instability), Embolectomy (rare), IVC filter (if anticoagulation contraindicated).`,
        exacerbation: `PE is the exacerbation; Goal is to prevent further emboli and complications (pulmonary hypertension, right heart failure).`
    },
    {
        front: `Pneumonia`,
        definition: `Infection of one or both lungs causing inflammation.`,
        signsSymptoms: `<b>Lower Respiratory Infection</b><br><br>Cough (productive or nonproductive), fever, chills, dyspnea, chest pain (pleuritic), tachypnea, crackles or decreased breath sounds.`,
        diagnosis: `Chest X-ray (infiltrates), Sputum culture (to identify organism), Blood cultures (if bacteremia suspected), CBC (elevated WBC).`,
        treatment: `Antibiotics (for bacterial pneumonia), Antivirals (for viral pneumonia), Oxygen therapy, Bronchodilators, Analgesics, Antipyretics, Increased fluid intake, Rest.`,
        exacerbation: `Worsening respiratory distress, sepsis, ARDS (acute respiratory distress syndrome), pleural effusion, empyema.`
    },
    {
        front: `Pneumothorax`,
        definition: `Air accumulation in the pleural space causing lung collapse.`,
        signsSymptoms: `<b>Pulmonary Disease</b><br><br>Sudden chest pain, shortness of breath, decreased or absent breath sounds on affected side, tachypnea, tracheal deviation (in tension pneumothorax), hyperresonance on percussion.`,
        diagnosis: `Chest X-ray (visualizes air in pleural space).`,
        treatment: `Observation (for small pneumothoraces), Chest tube insertion (to remove air), Needle aspiration (for tension pneumothorax as temporary measure).`,
        exacerbation: `Tension pneumothorax (life-threatening emergency), increasing size of pneumothorax.`
    },
    {
        front: `Pulmonary Hypertension`,
        definition: `High blood pressure in the pulmonary arteries.`,
        signsSymptoms: `<b>Pulmonary Vascular Disease</b><br><br>Dyspnea (especially on exertion), fatigue, chest pain, syncope, edema, cyanosis, right ventricular hypertrophy (RVH) signs.`,
        diagnosis: `Right heart catheterization (gold standard to measure pulmonary artery pressure), Echocardiogram (estimate PAP), Pulmonary function tests, Chest X-ray, CT scan.`,
        treatment: `Vasodilators (Pulmonary artery specific), Endothelin receptor antagonists, Phosphodiesterase-5 inhibitors, Prostacyclin analogs, Diuretics, Oxygen therapy, Anticoagulants, Lung transplant (in severe cases).`,
        exacerbation: `Worsening dyspnea, increased fatigue, peripheral edema, chest pain, or syncope.`
    }
];

const flashcardContainer = document.getElementById("flashcard-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const cardNumberSpan = document.getElementById("card-number");

let currentCardIndex = 0;

function createFlashcard(index) {
    const cardData = flashcardsData[index];
    const flashcard = document.createElement("div");
    flashcard.classList.add("flashcard");

    flashcard.innerHTML = `
        <h2>${cardData.front}</h2>
        <p>${cardData.definition}</p>
        <div class="category-buttons">
            <button class="category-button" data-category="signsSymptoms">Signs/Symptoms</button>
            <button class="category-button" data-category="diagnosis">Diagnosis</button>
            <button class="category-button" data-category="treatment">Treatment</button>
            <button class="category-button" data-category="exacerbation">Exacerbation</button>
        </div>
        <div class="category-content" id="signsSymptoms">
            <h3>Signs/Symptoms</h3>
            <p>${cardData.signsSymptoms}</p>
        </div>
        <div class="category-content" id="diagnosis">
            <h3>Diagnosis</h3>
            <p>${cardData.diagnosis}</p>
        </div>
        <div class="category-content" id="treatment">
            <h3>Treatment</h3>
            <p>${cardData.treatment}</p>
        </div>
        <div class="category-content" id="exacerbation">
            <h3>Exacerbation</h3>
            <p>${cardData.exacerbation}</p>
        </div>
    `;

    const categoryButtons = flashcard.querySelectorAll(".category-button");
    const categoryContents = flashcard.querySelectorAll(".category-content");

    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.dataset.category;

            // Hide all content
            categoryContents.forEach(content => {
                content.style.display = "none";
            });

            // Show selected content
            const contentToShow = flashcard.querySelector(`#${category}`);
            if (contentToShow) {
                contentToShow.style.display = "block";
            }
        });
    });

    return flashcard;
}

function showCard(index) {
    flashcardContainer.innerHTML = "";
    const flashcard = createFlashcard(index);
    flashcardContainer.appendChild(flashcard);
    cardNumberSpan.textContent = `${index + 1}/${flashcardsData.length}`;
}

prevBtn.addEventListener("click", () => {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showCard(currentCardIndex);
});

nextBtn.addEventListener("click", () => {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    showCard(currentCardIndex);
});

showCard(currentCardIndex);