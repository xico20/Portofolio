<template>
  <header id="header" aria-orientation="horizontal" role="banner">
     
    
        <nav id="header_nav" aria-orientation="horizontal" role="navigation">
      <div class="logo">
        <!-- Replace /logo.png with your actual logo file in /public or use text -->
        <router-link to="/" aria-label="Home">
          <img v-if="!logoMissing" src="/logo.png" alt="Logo" class="logo-img" @error="onLogoError" />
          <div v-else class="logo-fallback">FC</div>
          <div class="site-title">
            
            <strong>Francisco Carvalho</strong>
            <small>Portfolio Projects</small>

          </div>

        </router-link>

      </div>

      <div class="projects">
        <button class="projects-button" :class="{ open: menuOpen }" @click="toggleMenu" :aria-expanded="menuOpen.toString()" aria-controls="projects-dropdown" aria-haspopup="true" aria-label="Open projects menu" type="button">
          Projects
          <svg class="caret" width="12" height="12" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>

        <div v-if="menuOpen" id="projects-dropdown" class="projects-dropdown" role="menu" aria-labelledby="projects-button">
          <div class="projects-header"><span class="section-title">Projects</span></div>
          <ul id="menu-header-portfolio" class="menu" role="menubar">
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/PrintCardProject">Print Card</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/DesignerCartoesProject">Designer Card</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/DesgasificacaoProject">Degassing</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/RegistosCargasFornosTorreProject">Records of Ingot Loads in the Tower Melting Furnaces</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/SGIProject">SGI Project</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/PortalSEGINProject">SEGIN Portal</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/ContadoresGasProject">Gas Meters</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/AtualizaTabelasPrecosFornProject">Daily Update of Supplier Price Tables</router-link></li>
             <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/APIMachines">API Machines</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/OutrosScriptsPythonProject">Other Scripts Python</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/ProjetoTarefasProject">Task Management</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/EgmobileJavaProject">Egmobile</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/MyExpressGlassNetProject">My Express Glass</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/InspecktlabsZurichNetProject">Inspecktlabs Zurich</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/LluniNetproject">Lluni</router-link></li>
            <li role="none"><router-link role="menuitem" @click="closeMenu" to="/Projects/MetaProject">Meta</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    
       
    
  </header>
</template>

<script>

export default {
  name: 'HeaderPortofolio',
  data() {
    return {
      menuOpen: false,
      logoMissing: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        this.$nextTick(() => {
          const first = this.$el.querySelector('#projects-dropdown a');
          if (first) first.focus();
        });
      }
    },
    closeMenu() {
      this.menuOpen = false;
    },
    onLogoError() {
      this.logoMissing = true;
    },
    handleDocumentClick(e) {
      if (!this.$el.contains(e.target)) this.closeMenu();
    },
    handleKeydown(e) {
      if (e.key === 'Escape') this.closeMenu();
    }
  },
  mounted() {
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('keydown', this.handleKeydown);
  }
};
</script> 

<style>
:root{ --header-h:100px; --accent:#0b1385; --muted:#6b7280; --card-bg:#fff; }
#header{ position:fixed; top:0; left:0; width:100%; height:var(--header-h); background:rgba(11,19,133,0.85); z-index:1000; display:flex; align-items:center; }
body{ padding-top:var(--header-h); margin:0; }
#header_nav{ width:100%; max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:16px; }
.logo-link{ display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit; }
.logo-img{ height:50px; width:44px; object-fit:contain; border-radius:8px; background:rgba(255,255,255,0.04); padding:6px; }
.logo-fallback{ height:44px; width:44px; border-radius:8px; display:flex; align-items:center; justify-content:center;
background:rgba(255,255,255,0.06); color:#fff;
font-weight:700;
}
.site-title strong{ display:block; font-size:15px; }
.site-title small{ display:block; font-size:11px; color:rgba(255,255,255,0.9); }

.projects{ position:relative; }
.projects-button{ background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)); border:none; color:#fff; padding:10px 14px; border-radius:12px; cursor:pointer; font-weight:700; display:inline-flex; align-items:center; gap:8px; transition:transform .12s ease, box-shadow .12s ease; }
.projects-button:focus{ outline: 3px solid rgba(11,19,133,0.14); outline-offset:3px; }
.projects-button:hover{ transform: translateY(-3px); box-shadow: 0 10px 30px rgba(2,6,23,0.12); }
.projects-button.open{ background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04)); }
.caret{ transition: transform .18s ease; }
.projects-button.open .caret{ transform: rotate(180deg); }
.projects-dropdown{ position:absolute; right:0; top: calc(100% + 12px); background:var(--card-bg); color:#111827; border-radius:12px; padding:10px; width:360px; box-shadow: 0 18px 40px rgba(2,6,23,0.18); border:1px solid rgba(2,6,23,0.04); }
.projects-header{ padding:6px 8px 10px 8px; }
.section-title{ font-weight:700; color:var(--accent); }
#menu-header-portfolio{ list-style:none; margin:0; padding:6px; display:block; gap:6px; }
#menu-header-portfolio li a{ text-decoration:none; color:#0b1220; font-weight:600; padding:10px 12px; display:block; border-radius:8px; }
#menu-header-portfolio li a:hover, #menu-header-portfolio li a:focus{ background:#f3f4f6; color:var(--accent); }
#menu-header-portfolio li a:focus-visible{ box-shadow: 0 0 0 3px rgba(11,19,133,0.12); }

@media (prefers-reduced-motion: reduce){ .projects-button, .caret, .projects-dropdown, .fade-slide-enter-active, .fade-slide-leave-active{ transition:none !important; } }
@media (max-width:700px){ #header{ height:60px; } body{ padding-top:60px; } .site-title{ display:none; } .projects-dropdown{ width:92vw; right:4vw; } }
</style>