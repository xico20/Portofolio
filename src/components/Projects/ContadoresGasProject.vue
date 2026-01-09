<template>
  <section class="project_page">
    <div class="container">
      <header class="hero">
        <h1>Gas Meters</h1>
        <p class="lead">Tools and systems for gas meter management and integration.</p>
      </header>

      <div class="grid">
        <article class="content">
          <h2>Overview</h2>
          <p>This is the Gas Meters project page.</p>
        </article>

        <aside class="side">
          <div class="card">
            <h3>Notes</h3>
            <ul>
              <li>Integration details</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'ContadoresGasProject' }
</script>

<style scoped>
:root{ --accent: #0b1385; --muted: #6b7280; --card-bg: #fff; }
.project_page{ padding: 28px 16px; }
.container{ max-width:1100px; margin:0 auto; }
.hero{ background: linear-gradient(90deg, rgba(11,19,133,0.05), rgba(11,19,133,0.02)); border-radius:10px; padding:20px; margin-bottom:16px; }
.hero h1{ margin:0; color:var(--accent); }
.lead{ color:var(--muted); }
.grid{ display:grid; grid-template-columns:1fr 320px; gap:18px; }
.content{ background:var(--card-bg); padding:16px; border-radius:8px; box-shadow:0 6px 20px rgba(11,19,133,0.04); }
.side .card{ background:var(--card-bg); padding:12px; border-radius:8px; margin-bottom:12px; box-shadow:0 6px 18px rgba(11,19,133,0.04); }
@media (max-width:880px){ .grid{ grid-template-columns:1fr; } .side{ order:2; } }
</style>