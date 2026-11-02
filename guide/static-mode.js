'use strict';
// The public Pages site never receives company evidence or signed agreements.
const renderGuideStep=renderStartStep;
renderStartStep=function(index){
 if(index!==5){renderGuideStep(index);return;}
 document.getElementById('tutorial-player')?.pause();
 startStep=5;referenceIndex=0;
 document.querySelectorAll('[data-start-step]').forEach((button,i)=>{button.setAttribute('aria-selected',String(i===5));button.tabIndex=i===5?0:-1;});
 document.getElementById('flow-step-counter').textContent='6 / 6단계';
 const detail=document.getElementById('start-detail');
 detail.setAttribute('aria-labelledby','start-step-5');
 detail.innerHTML=`<div class="start-card"><div class="start-card-main"><p class="flow-current">현재 단계 6 / 6</p><h2>표준협약서 제출</h2><p class="flow-intro">HRD4U 신청서 작성 후, 담당자 확인을 거쳐 협약서를 작성·제출하세요.</p><ol class="flow-tasks"><li><span aria-hidden="true">1</span><strong>기업ID·신청 화면 증빙 제출</strong></li><li><span aria-hidden="true">2</span><strong>담당자 확인 후 협약서 다운로드</strong></li><li><span aria-hidden="true">3</span><strong>협약서 작성본 제출</strong></li></ol><div class="start-actions"><a class="primary" id="protected-portal-link" href="${escapeHtml(window.TRAINING_STATIC.protectedPortalUrl)}" target="_blank" rel="noopener noreferrer">협약서 접수 안내 열기 ↗</a></div></div><div class="reference-column"><div class="flow-approval-note"><h3>접수는 기존 사이트에서 진행합니다.</h3><p>열린 사이트에서 <strong>6단계 ‘표준협약서 제출’</strong>을 선택하세요. 기업ID와 증빙을 제출하고, 담당자가 허용한 뒤 협약서를 내려받을 수 있습니다.</p></div><p class="flow-intro" style="margin-top:20px">이 안내 홈페이지에는 파일을 업로드하지 않습니다. 신규 접수 가능 여부는 접수 사이트의 안내를 확인해주세요.</p></div></div><nav class="flow-step-navigation" aria-label="참여 단계 이동"><button class="outline" data-next-start="4">← 이전 단계</button><span>6 / 6</span><span class="flow-last-step">마지막 단계입니다.</span></nav>`;
};
renderStartStep(startStep);
