<template>
  <section class="project_page">
    <div class="container">
      <header class="hero">
        <h1>Designer Card</h1>
        <p class="lead">This project is a full-stack web application designed to create and customize card templates, offering an intuitive drag-and-drop interface and data-driven printing workflows.</p>
      </header>

      <div class="grid">
        <article class="content">
          <h2>Overview</h2>
          <p>The frontend was developed using HTML, CSS, and JavaScript, providing an intuitive drag-and-drop interface that allows users to arrange geometric shapes, text boxes, QR codes, and background images to build personalized card layouts. The backend, built with Node.js and integrated with SQL Server, enables dynamic data handling and secure communication with the database via ODBC. This functionality allows users to populate card templates with real data for printing purposes. Additionally, the application supports exporting the finalized card designs as .PNG files, ensuring easy download and sharing.</p>

          <h3>Why it helps</h3>
          <p>The solution combines flexibility in design with robust data integration, making it ideal for scenarios where customized cards need to be generated efficiently and accurately.</p>
        </article>

        <aside class="side">
          <div class="card">
            <h3>Features</h3>
            <ul>
              <li>Drag & Drop editor</li>
              <li>Template library</li>
              <li>Data binding for printing</li>
              <li>Export to PNG</li>
            </ul>
          </div>

          <div class="card">
            <h3>Benefits</h3>
            <ul>
              <li>Fast template creation</li>
              <li>Consistent prints</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DesignerCartoesProject'
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