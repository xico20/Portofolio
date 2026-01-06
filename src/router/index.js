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

const routes = [
  { path: '/', name: 'App', component: App },
  { path: '/Projects/PrintCard',  name: 'PrintCardProject', component: PrintCardProject },
  { path: '/Projects/DesignerCartoes', name: 'DesignerCartoesProject', component: DesignerCartoesProject },
  { path: '/Projects/Desgasificacao', name: 'DesgasificacaoProject', component: DesgasificacaoProject },
  { path: '/Projects/RegistosCargasFornosTorre', name: 'RegistosCargasFornosTorreProject', component: RegistosCargasFornosTorreProject },
  { path: '/Projects/SGI', name: 'SGIProject', component: SGIProject },
  { path: '/Projects/PortalSEGIN', name: 'PortalSEGINProject', component: PortalSEGINProject },
  { path: '/Projects/ContadoresGas', name: 'ContadoresGasProject', component: ContadoresGasProject },
  { path: '/Projects/AtualizaTabelasPrecosForn', name: 'AtualizaTabelasPrecosFornProject', component: AtualizaTabelasPrecosFornProject },
  { path: '/Projects/OutrosScriptsPython', name: 'OutrosScriptsPythonProject', component: OutrosScriptsPythonProject },
  { path: '/Projects/ProjetoTarefas', name: 'ProjetoTarefasProject', component: ProjetoTarefasProject },
  { path: '/Projects/EgmobileJava', name: 'EgmobileJavaProject', component: EgmobileJavaProject },
  { path: '/Projects/MyExpressGlassNet', name: 'MyExpressGlassNetProject', component: MyExpressGlassNetProject },
  { path: '/Projects/InspecktlabsZurichNet', name:'InspecktlabsZurichNetProject' ,component : InspecktlabsZurichNetProject},
  { path:'/Projects/LluniNet' ,name:'LluniNetproject' ,component : LluniNetproject},
  { path:'/Projects/Meta' ,name:'MetaProject' ,component : MetaProject}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

