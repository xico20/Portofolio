
<template>
  <section class="project_page">
    <div class="container">
      <header class="hero">
        <h1>Print Card</h1>
        <p class="lead">A Windows Forms application that enables users to design and print custom cards, integrating with a print server for reliable printing workflows.</p>
      </header>

      <div class="grid">
        <article class="content">
          <h2>Overview</h2>
          <p>This project is a Windows Forms application developed in C# that enables users to design and print custom cards. It allows users to upload images, choose from predefined card styles, and customize layouts according to their preferences. Once the design is finalized, the system connects to a print server, which manages communication with the physical printer to ensure accurate and efficient card printing.</p>

          <p>The solution was designed to streamline the card creation process, providing an intuitive interface for image handling and style selection while maintaining secure and reliable integration with the printing infrastructure.</p>
        </article>

        <aside class="side">
          <div class="card">
            <h3>Features</h3>
            <ul>
              <li>Template-based designs</li>
              <li>Image upload & layout</li>
              <li>Print server integration</li>
            </ul>
          </div>

          <div class="card">
            <h3>Benefits</h3>
            <ul>
              <li>Reliable printing</li>
              <li>Fast design-to-print flow</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrintCardProject'
}
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