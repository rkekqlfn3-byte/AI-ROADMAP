/*
 * 사업·단계별 참고 영상과 이미지.
 * program: 0=로드맵, 1=과정개발, 2=훈련, 3=종료 후.
 * step: 각 사업의 steps 배열 인덱스. 생략하면 해당 사업 모든 단계에 표시.
 * type: image | video | youtube.
 * src: 로컬 assets 경로 또는 https URL. youtube는 영상 페이지 URL.
 * 선택 항목: thumbnail, caption, alt, captions(영상 자막 .vtt 경로).
 * 예: { program: 0, step: 0, type: 'image', title: '신청 화면 안내', src: 'assets/application.png', alt: '신청서 작성 화면' }
 * 실제 자료를 받은 뒤 아래 목록에 추가합니다.
 */
window.TRAINING_MEDIA = [];
