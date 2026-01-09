<template>
  <section class="rft_page">
    <div class="container">
      <header class="rft_hero">
        <h1>Records of Ingot Loads in the Tower Melting Furnaces</h1>
        <p class="lead">A practical interface to replace paper records and simplify data entry for furnace loads and fusion tower discharges. Designed to be fast, accurate and to provide essential production metadata such as day-of-year for internal batch coding.</p>
      </header>

      <div class="rft_grid">
        <article class="rft_content">
          <h2>Simple and Intuitive Interface</h2>
          <p>Our graphical interface is designed to be straightforward and user-friendly. It consists of two independent panels: one for entering or editing <strong>Furnace Load</strong> records and another for <strong>Fusion Tower Discharge</strong> records. These panels operate independently and effectively replace traditional paper-based records.</p>

          <h3>Current Date Display</h3>
          <p>At the top of the interface, the current date is prominently displayed in the centre, along with the day number of the year (counting from 1 January). This number is crucial as it forms part of the internal production batch code.</p>

          <h3>Furnace Load Records</h3>
          <p>The process is simple:</p>
          <ul>
            <li>The operator clicks <strong>New</strong>, which activates all controls for selecting a furnace and updates the application date.</li>
            <li>Once a furnace is selected, the remaining fields become active for mandatory input.</li>
            <li>The system automatically generates the internal production batch code and a supplier batch code (based on the last recorded batch for that furnace).</li>
            <li>The operator fills in aluminium quantity, initial weight and final weight as required.</li>
          </ul>

          <h3>How the Internal Batch Code Works</h3>
          <p>The batch code is structured as follows:</p>
          <ol>
            <li><strong>First two digits:</strong> Year</li>
            <li><strong>Next three digits:</strong> Day of the year</li>
            <li><strong>Next digit:</strong> Selected furnace</li>
            <li><strong>Last digit:</strong> Sequence number for that furnace</li>
          </ol>
          <p>If the operator selects a different furnace, the last two digits update automatically, minimising manual input.</p>
        </article>

        <aside class="rft_side">
          <div class="card">
            <h3>Panels</h3>
            <ul>
              <li>Furnace Load records</li>
              <li>Fusion Tower Discharge records</li>
            </ul>
          </div>

          <div class="card">
            <h3>Batch Code Example</h3>
            <p><em>Example:</em> 26 032 2 3 → Year 2026, day 32, furnace 2, sequence 3</p>
          </div>

          <div class="card">
            <h3>Benefits</h3>
            <ul>
              <li>Eliminates paper-based errors</li>
              <li>Speeds up data entry and processing</li>
              <li>Standardises internal batch coding</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegistosCargasFornosTorreProject'
}
</script>

<style scoped>
:root{
  --accent: #0b1385;
  --muted: #6b7280;
  --card-bg: #fff;
}
.rft_page { padding: 28px 16px; }
.container { max-width: 1100px; margin: 0 auto; }
.rft_hero {
  background: linear-gradient(90deg, rgba(11,19,133,0.05), rgba(11,19,133,0.02));
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 18px;
}
.rft_hero h1 { margin: 0 0 8px 0; color: var(--accent); font-size: 28px; }
.lead { color: var(--muted); margin: 0; }
.rft_grid { display: grid; grid-template-columns: 1fr 320px; gap: 18px; }
.rft_content { background: var(--card-bg); padding: 18px; border-radius: 8px; box-shadow: 0 6px 20px rgba(11,19,133,0.04); }
.rft_content h2, .rft_content h3 { color: var(--accent); margin-top: 0; }
.rft_content p { color: #333; line-height: 1.6; }
.rft_side .card { background: var(--card-bg); padding: 14px; border-radius: 8px; box-shadow: 0 6px 18px rgba(11,19,133,0.04); margin-bottom: 14px; }
.rft_side h3 { color: var(--accent); margin-top: 0; }
.rft_side ul { padding-left: 18px; }
.rft_side li { margin-bottom: 8px; }
@media (max-width: 880px) { .rft_grid { grid-template-columns: 1fr; } .rft_side { order: 2; } }
</style>