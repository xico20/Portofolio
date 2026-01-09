<template>
  <section class="dg_page">
    <div class="container">
      <header class="dg_hero">
        <h1>Degassing</h1>
        <p class="lead">With technological advancements, companies are constantly seeking to improve their IT systems to optimise processes and increase operational efficiency. In the industrial sector, this evolution is essential to ensure quality and minimise errors. It is within this context that the Desgasificação software was developed – an innovative solution designed to automate and simplify the analysis of aluminium sample quality.</p>
      </header>

      <div class="dg_grid">
        <article class="dg_content">
          <h2>Context</h2>
          <p>With technological advancements, companies are constantly seeking to improve their IT systems to optimise processes and increase operational efficiency. In the industrial sector, this evolution is essential to ensure quality and minimise errors. It is within this context that the Desgasificação software was developed – an innovative solution designed to automate and simplify the analysis of aluminium sample quality.</p>

          <h3>What is Degassing?</h3>
          <p>Desgasificação is a system created to assist operators in managing and analysing aluminium samples, ensuring greater accuracy and faster decision-making. Through automated calculations, the software determines whether a sample is acceptable, borderline, or should be rejected. Additionally, it offers advanced features such as access to historical data, filtering options for specific analyses, controlled data export, and screen configuration including dark mode for improved visual comfort. All of this is presented in a simple, intuitive, and secure interface, designed to make daily tasks easier for users.</p>

          <section class="why_replace">
            <h3>Why replace the old system?</h3>
            <p>The previous system relied on daily Excel files where operators recorded sample values. This method had several limitations:</p>
            <ul>
              <li>No automation in determining sample quality;</li>
              <li>Difficulty accessing historical data;</li>
              <li>Higher risk of errors due to lack of validation;</li>
              <li>Slow and impractical processes.</li>
            </ul>
            <p>The new system eliminates these issues by providing full automation in quality assessment, quick search and editing of historical data, enhanced security through data validation, and a modern and intuitive interface.</p>
          </section>
        </article>

        <aside class="dg_side">
          <div class="card">
            <h3>Key Features</h3>
            <ul>
              <li>Automatic decision-making – The system calculates and indicates whether a sample should be considered;</li>
              <li>Clear and practical visualisation – View samples tested on a specific day;</li>
              <li>Advanced filtering – Search historical data from 2020 onwards;</li>
              <li>Controlled export – Only with Production Department authorisation;</li>
              <li>Data editing – Possible with Administrator approval;</li>
              <li>Dark mode – For greater visual comfort and flexibility.</li>
            </ul>
          </div>

          <div class="card">
            <h3>Benefits for the organisation</h3>
            <ul>
              <li>Reduced human error;</li>
              <li>Faster analysis and decision-making;</li>
              <li>Improved organisation and process management;</li>
              <li>A more pleasant and productive user experience.</li>
            </ul>
          </div>

        </aside>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DesgasificacaoProject'
}
</script>

<style scoped>
:root{
  --accent: #0b1385;
  --muted: #6b7280;
  --card-bg: #fff;
}
.dg_page {
  padding: 28px 16px;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.dg_hero {
  background: linear-gradient(90deg, rgba(11,19,133,0.05), rgba(11,19,133,0.02));
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 18px;
}
.dg_hero h1 {
  margin: 0 0 8px 0;
  color: var(--accent);
  font-size: 28px;
}
.lead {
  color: var(--muted);
  margin: 0;
}
.dg_grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 18px;
}
.dg_content {
  background: var(--card-bg);
  padding: 18px;
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(11,19,133,0.04);
}
.dg_content h2, .dg_content h3 {
  color: var(--accent);
  margin-top: 0;
}
.dg_content p { color: #333; line-height: 1.6; }
.why_replace ul { margin-left: 18px; }
.dg_side .card {
  background: var(--card-bg);
  padding: 14px;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(11,19,133,0.04);
  margin-bottom: 14px;
}
.dg_side h3 { color: var(--accent); margin-top: 0; }
.dg_side ul { padding-left: 18px; }
.dg_side li { margin-bottom: 8px; }

@media (max-width: 880px) {
  .dg_grid { grid-template-columns: 1fr; }
  .dg_side { order: 2; }
}
</style>