# 기업훈련 지원안내 — GitHub Pages 버전

현재 승인된 디자인과 기업 참여 6단계를 담은 정적 홈페이지입니다. Google Drive·스프레드시트·Apps Script 연동은 포함하지 않았습니다.

## 포함한 내용

- 기업회원 가입 → 기초진단 → 이음컨설팅 → 센터 연락·공단 승인 → HRD4U 신청서 작성 → 표준협약서 제출
- 실제 매뉴얼 화면, 이미지 확대, 모바일 화면
- 기존 서버의 공개 영상을 이용한 단계별 재생
- 협약서 접수는 기존 보호된 접수 사이트로 이동
- 다른 사업 안내와 브라우저 체크리스트

협약서 원본·기업 증빙·작성본·비밀번호·API 키는 포함하지 않습니다. 이 정적 홈페이지는 기업 파일을 접수하거나 다운로드 자격을 판정하지 않습니다.

## GitHub에서 배포

권장 저장소 이름: `gn-training-guide`

1. GitHub에서 새 저장소를 만들고 이 폴더의 **내용물**을 `main` 브랜치에 올립니다. 저장소 최상위에 `index.html`과 `guide/`가 있어야 합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source**를 **Deploy from a branch**로 선택합니다.
3. **main / (root)**를 선택하고 **Save**를 누릅니다.
4. Pages 설정 화면에 표시되는 홈페이지 주소로 접속합니다.

GitHub Free 계정의 Pages 배포에는 공개 저장소를 사용합니다. 소스와 공개 매뉴얼 이미지도 누구나 볼 수 있으므로, 기업별 접수 자료를 이 저장소에 넣지 마세요.

배포 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

`deploy.yml.example`은 GitHub Actions 배포 방식을 선택할 때 사용하는 선택 예시입니다. 기본 안내대로 브랜치에서 배포한다면 사용하지 않습니다.

## 로컬에서 확인

프로젝트 최상위에서 다음 명령을 실행합니다.

```sh
python -m http.server 4173
```

`http://localhost:4173/`에서 확인합니다. 별도 패키지 설치나 빌드가 필요하지 않습니다.

## 수정할 파일

| 파일 | 용도 |
| --- | --- |
| `guide/onboarding.js` | 1~5단계 설명과 실제 화면 보기 |
| `guide/static-mode.js` | 6단계의 접수 사이트 연결 |
| `guide/static-config.js` | 공개 영상 주소와 접수 사이트 주소 |
| `guide/readable.css` | 큰 글씨와 단계별 디자인 |
| `guide/reference.js` | 단계별 매뉴얼 이미지 |
| `guide/assets/` | 공개 안내 이미지 |

## 외부 기능 연결

현재 영상과 협약서 접수는 기존 운영 사이트를 사용합니다. 해당 사이트의 주소나 운영 상태가 바뀌면 `guide/static-config.js`를 수정합니다. 접수 사이트의 실제 접수 활성화 여부와 운영 정책도 해당 사이트에서 확인합니다.

이 저장소만으로 파일 접수 서버가 생성되지는 않습니다. 추후 독립 접수 서버를 만들 경우 이 설정과 연결 화면을 교체하면 됩니다.
