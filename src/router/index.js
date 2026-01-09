// src/router/index.js - routes for project pages


import App from '@/App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import PrintCardProject from '@/components/Projects/PrintCardProject.vue';
import DesignerCartoesProject from '@/components/Projects/DesignerCartoesProject.vue';
import DesgasificacaoProject from '@/components/Projects/DesgasificacaoProject.vue';
import RegistosCargasFornosTorreProject from '@/components/Projects/RegistosCargasFornosTorreProject.vue';
import SGIProject from '@/components/Projects/SGIProject.vue';
import PortalSEGINProject from '@/components/Projects/PortalSEGINProject.vue';
import ContadoresGasProject from '@/components/Projects/ContadoresGasProject.vue';
import AtualizaTabelasPrecosFornProject from '@/components/Projects/AtualizaTabelasPrecosFornProject.vue';
import OutrosScriptsPythonProject from '@/components/Projects/OutrosScriptsPythonProject.vue';
import ProjetoTarefasProject from '@/components/Projects/ProjetoTarefasProject.vue';
import EgmobileJavaProject from '@/components/Projects/EgmobileJavaProject.vue';
import MyExpressGlassNetProject from '@/components/Projects/MyExpressGlassNetProject.vue';
import InspecktlabsZurichNetProject from '@/components/Projects/InspecktlabsZurichNetProject.vue';
import LluniNetproject from '@/components/Projects/LluniNetproject.vue';
import MetaProject from '@/components/Projects/MetaProject.vue';
import MachinesAPIProject from '@/components/Projects/MachinesAPIProject.vue';

const routes = [
  { path: '/', name: 'App', component: App },
  { path: '/Projects/PrintCardProject',  name: 'PrintCardProject', component: PrintCardProject },
  { path: '/Projects/DesignerCartoesProject', name: 'DesignerCartoesProject', component: DesignerCartoesProject },
  { path: '/Projects/DesgasificacaoProject', name: 'DesgasificacaoProject', component: DesgasificacaoProject },
  { path: '/Projects/RegistosCargasFornosTorreProject', name: 'RegistosCargasFornosTorreProject', component: RegistosCargasFornosTorreProject },
  { path: '/Projects/SGIProject', name: 'SGIProject', component: SGIProject },
  { path: '/Projects/PortalSEGINProject', name: 'PortalSEGINProject', component: PortalSEGINProject },
  { path: '/Projects/ContadoresGasProject', name: 'ContadoresGasProject', component: ContadoresGasProject },
  { path: '/Projects/AtualizaTabelasPrecosFornProject', name: 'AtualizaTabelasPrecosFornProject', component: AtualizaTabelasPrecosFornProject },
  { path: '/Projects/OutrosScriptsPythonProject', name: 'OutrosScriptsPythonProject', component: OutrosScriptsPythonProject },
  { path: '/Projects/ProjetoTarefasProject', name: 'ProjetoTarefasProject', component: ProjetoTarefasProject },
  { path: '/Projects/EgmobileJavaProject', name: 'EgmobileJavaProject', component: EgmobileJavaProject },
  { path: '/Projects/MyExpressGlassNetProject', name: 'MyExpressGlassNetProject', component: MyExpressGlassNetProject },
  { path: '/Projects/InspecktlabsZurichNetProject', name:'InspecktlabsZurichNetProject' ,component : InspecktlabsZurichNetProject},
  { path: '/Projects/LluniNetproject' ,name:'LluniNetproject' ,component : LluniNetproject},
  { path: '/Projects/MetaProject' ,name:'MetaProject' ,component : MetaProject},
  { path: '/Projects/APIMachines' ,name:'MachinesAPIProject' ,component : MachinesAPIProject}

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

