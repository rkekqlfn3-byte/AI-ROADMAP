'use strict';
const programMenu=document.createElement('details');
programMenu.className='program-menu';
const menuLabel=document.createElement('summary');menuLabel.textContent='다른 사업 안내';
programMenu.append(menuLabel,document.querySelector('.program-navigation'));
document.querySelector('.header-actions').append(programMenu);
const centerHelp=document.createElement('button');centerHelp.className='center-help';centerHelp.textContent='센터 문의';
centerHelp.onclick=()=>{chooseBusiness(0);renderStartStep(3);document.getElementById('start-detail').focus({preventScroll:true});};
document.querySelector('.header-actions').append(centerHelp);
document.querySelector('.program-tabs').addEventListener('click',e=>{if(e.target.closest('[data-program]'))programMenu.open=false;});
document.addEventListener('click',e=>{if(!programMenu.contains(e.target))programMenu.open=false;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&programMenu.open){programMenu.open=false;menuLabel.focus();}});
// START and Business 01 share one enterprise journey, with no parallel procedure.
const otherBusinessRenderer=renderBusiness;
function showEnterpriseFlow(){
 selected=0;activeView='guide';
 document.body.dataset.screen='start';
 document.querySelector('.print').hidden=true;
 document.getElementById('getting-started').hidden=false;
 document.getElementById('business-workspace').hidden=true;
 document.getElementById('start-tab').setAttribute('aria-selected','false');
 document.querySelectorAll('[data-program]').forEach((button,i)=>{button.setAttribute('aria-selected',String(i===0));button.tabIndex=i===0?0:-1;});
 document.title='AI훈련로드맵 참여 신청 | 기업훈련 지원안내';
 renderStartStep(startStep);
 window.scrollTo({top:0,behavior:'instant'});
}
showStart=showEnterpriseFlow;
renderBusiness=function(index,...args){if(index===0)showEnterpriseFlow();else otherBusinessRenderer(index,...args);};
const otherBusinessChooser=chooseBusiness;
chooseBusiness=function(index){if(index===0){showEnterpriseFlow();pushRoute();}else otherBusinessChooser(index);};
const sourceLabel=referenceSourceLabel;
referenceSourceLabel=function(frame){return frame.source?frame.source+' · '+frame.page+'쪽':sourceLabel(frame);};
if(!location.hash||location.hash.startsWith('#start')||location.hash==='#home'||location.hash.startsWith('#business-1/')){
 showEnterpriseFlow();
 history.replaceState(null,'','#business-1/guide');
}
