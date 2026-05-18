export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A deeper look into what I do and where I'm headed.</p>
        <div className="about-main" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="about-intro" style={{ marginBottom: '24px' }}>
            I'm a Computer Science (Data Science) undergraduate who builds ML systems that are meant to run in the real world — not just in notebooks.
          </p>
          <p className="about-intro" style={{ marginBottom: '24px' }}>
            My work sits at the intersection of machine learning engineering, explainable AI, and full-stack development. I don't just train models — I build the infrastructure around them. Monitoring pipelines that detect when a model silently breaks. Risk engines that quantify uncertainty. LLM-powered assistants that turn raw computation into human decisions.
          </p>
          <p className="about-intro" style={{ marginBottom: '24px' }}>
            My flagship project is an ML Model Monitoring & Drift Detection system — 8 statistical drift methods unified through a SHAP-weighted explainability layer, outperforming tools like Evidently AI and NannyML with a perfect F1 score. An IEEE research paper is currently under preparation.
          </p>
          <p className="about-intro" style={{ marginBottom: '24px' }}>
            Outside of that, I've built a full-stack AI Financial Copilot with XGBoost, FinBERT, and RAG — an F1 race strategy optimizer powered by Dynamic Programming and Gemini — and a cross-platform invoicing platform with an ML payment prediction service.
          </p>
          <p className="about-intro" style={{ marginBottom: '24px' }}>
            I care deeply about systems that are not just accurate, but explainable and reliable under real conditions. That's the thread connecting everything I build.
          </p>
          <p className="about-intro" style={{ marginBottom: '0' }}>
            <strong>Currently planning to pursue a Master's abroad in AI/ML.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
