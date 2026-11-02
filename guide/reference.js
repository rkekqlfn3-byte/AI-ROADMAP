/* Images extracted from the user-provided HRD4U tutorial; timestamps are seconds. */
window.HRD4U_REFERENCE=[
 [
  {time:15,label:'기업회원 선택',caption:'회원유형 선택 화면에서 기업회원 가입하기를 선택합니다.'},
  {time:30,label:'약관 동의',caption:'약관 내용을 확인하고 동의 항목을 체크한 뒤 확인을 진행합니다.'},
  {time:40,label:'회원정보 입력',caption:'HRD4U 화면에서 기업ID·비밀번호와 기업 정보를 입력합니다.'},
  {time:60,label:'가입 완료',caption:'설립연도·업태·종목과 담당자 성명·연락처·이메일을 입력한 뒤 확인합니다.'}
 ],
 [
  {time:90,label:'기업 로그인',caption:'기업회원으로 로그인하고 HRD기초진단 신청으로 이동합니다.'},
  {time:100,label:'기초진단 실행',caption:'팝업에서 담당자 정보를 확인·입력하고 동의 후 기초진단 실행을 누릅니다.'},
  {time:120,label:'진단 결과 확인',caption:'HRD기초진단지에서 기업 기본정보와 훈련 현황을 확인합니다.'},
  {time:150,label:'출력·컨설팅 이동',caption:'필요하면 출력하기를 이용하고, HRD컨설팅 신청으로 다음 절차를 진행합니다.'}
 ],
 [
  {time:180,label:'기업현황',caption:'기업의 교육훈련 여건과 운영 현황에 맞게 수요설문지를 작성합니다.'},
  {time:195,label:'교육훈련 여건',caption:'전담인력·자체 프로그램·장비·공간·사내강사 보유 여부 등을 확인합니다.'},
  {time:225,label:'교육훈련 요구',caption:'필요한 교육 분야·직종·컨설팅 항목을 우선순위에 맞게 선택합니다.'},
  {time:240,label:'AI 인식·역량',caption:'AI 이해도와 활용 의지, 기업의 AI 역량 관련 항목을 확인하여 작성합니다.'},
  {time:260,label:'참여경로·신청',caption:'참여경로를 입력하고 작성 내용을 확인한 뒤 신청하기로 제출합니다. 운영기관의 참여경로 안내를 함께 확인하세요.'},
  {time:270,label:'신청 완료',caption:'필수 항목 누락 여부를 확인하고 신청 완료 안내를 확인합니다.'},
  {time:290,label:'발급내역 확인',caption:'기업HRD이음컨설팅 이력에서 진행 상태와 발급된 보고서를 확인합니다.'},
  {time:330,label:'보고서·HRD 제안',caption:'돋보기로 보고서와 HRD 제안을 확인합니다. 필요하면 출력하기를 이용합니다.'}
 ]
];

window.HRD4U_REFERENCE[1].unshift({type:'manual',page:4,time:90,src:'assets/hrd4u/manual-portal.png',label:'매뉴얼 · 지원시스템 이동',caption:'HRD4U의 기업직업훈련 지원시스템으로 이동한 뒤 로그인하여 기초진단을 진행합니다.'});
window.HRD4U_REFERENCE[2].unshift({type:'manual',page:7,time:240,src:'assets/hrd4u/manual-ai-required.png',label:'필수 · AI역량수준 진단',caption:'기업 AI인식확인의 AI역량수준 진단에서 진단 진행을 반드시 예로 선택하고 진단 문항까지 완료하세요.'},{type:'manual',page:6,time:170,src:'assets/hrd4u/manual-solution.png',label:'매뉴얼 · 솔루션 선택',caption:'현장 기술 혁신 또는 제품서비스 품질강화를 선택합니다. 매뉴얼상 솔루션 선택과 무관하게 진단 항목은 동일합니다.'},{type:'manual',page:7,time:260,src:'assets/hrd4u/manual-diagnosis.png',label:'매뉴얼 · 추천부서',caption:'이음컨설팅 추천부서는 직업능력개발부로 선택합니다. 이후 AI사업 신청의 참여경로 AI확산센터 선택과 구분해주세요.'});
window.HRD4U_REFERENCE[2].push({type:'manual',page:8,time:290,src:'assets/hrd4u/manual-approval.png',label:'매뉴얼 · 대기·승인·출력',caption:'신청 후 대기 상태와 기업ID를 운영기관에 전달합니다. 운영기관의 공단 승인 요청 후 완료 상태에서 보고서를 출력하여 코치 또는 AI확산센터로 전달합니다.'});

// Keep approval separate from the enterprise's I-eum application.
window.HRD4U_REFERENCE[3]=window.HRD4U_REFERENCE[2].filter(frame=>frame.time>=278).sort((a,b)=>Number(b.type==='manual')-Number(a.type==='manual'));
window.HRD4U_REFERENCE[2]=window.HRD4U_REFERENCE[2].filter(frame=>frame.time<278);
window.HRD4U_REFERENCE[3].forEach(frame=>{
 if(frame.type==='manual'){frame.src='assets/hrd4u/manual-approval-detail.png';frame.label='센터 연락·공단 승인';frame.caption='이음컨설팅 진행 후 기업이 센터에 연락합니다. 센터가 공단에 승인을 요청하고, 공단 승인 후 HRD4U에서 완료 상태를 확인합니다.';}
});
window.HRD4U_REFERENCE[4]=[
 {type:'manual',page:2,src:'assets/roadmap/application-menu.png',label:'신청서 열기',caption:'지원사업 → AI사업 컨설팅 → 컨설팅 신청 → 신청서 작성을 누릅니다.'},
 {type:'manual',page:3,src:'assets/roadmap/application-type.png',label:'AI훈련로드맵 선택',caption:'신청유형은 AI훈련로드맵을 선택하고 실제 신청배경을 작성합니다.'},
 {type:'manual',page:3,src:'assets/roadmap/application-center.png',label:'센터·담당자',caption:'AI확산센터는 경남경영자총협회로 선택하고 기업 담당자 정보를 입력합니다.'},
 {type:'manual',page:3,src:'assets/roadmap/application-expert.png',label:'내부전문가·재직증명서',caption:'기업 내부전문가 성명·직위를 작성하고 경력증빙란에 재직증명서를 첨부합니다.'},
 {type:'manual',page:3,src:'assets/roadmap/application-full.png',label:'신청서 확인·제출',caption:'신청유형, 센터, 담당자와 첨부파일을 확인하고 HRD4U에서 신청서를 제출합니다.'}
].map(frame=>({...frame,source:'제공된 HRD4U AI훈련로드맵 신청 매뉴얼'}));
