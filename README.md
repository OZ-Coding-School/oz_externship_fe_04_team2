# StudyHub StudyGroup

> 온라인 강의와 스터디 문화를 결합한 IT 학습 플랫폼

- [StudyHub StudyGroup 배포 링크](https://study.ozcoding.site/)

<br>

| GitHub      | 이름   |
| ----------- | ------ |
| @miloupark  | 박혜빈 |
| @Jay-klmnop | 윤지예 |

<br>

## ✨ 주요 기능

### 스터디 그룹

- 검색
- 리뷰
- 강의 검색

### 스터디 그룹 상세

- 스케줄
- 기록
- 멤버 권한

### 기타

- 공통 컴포넌트
- 마크다운 에디터
- 채팅

<br>

## 🎬 화면 데모

| 스터디그룹 조회                                     | 스터디그룹 검색                                        | 스터디그룹 리뷰                                     |
| --------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------- |
| <img src="./docs/studygrouplist.gif" width="240" /> | <img src="./docs/studygroup-search.gif" width="240" /> | <img src="./docs/studygrouplist.gif" width="240" /> |

| 스터디그룹 생성                                        | 스터디그룹 수정                                      | 마크다운 에디터                                |
| ------------------------------------------------------ | ---------------------------------------------------- | ---------------------------------------------- |
| <img src="./docs/studygroup-create.gif" width="240" /> | <img src="./docs/studygroup-edit.gif" width="240" /> | <img src="./docs/studynote.gif" width="240" /> |

| 스터디그룹 스케줄                                   | 스터디그룹 기록                                | 채팅                                      |
| --------------------------------------------------- | ---------------------------------------------- | ----------------------------------------- |
| <img src="./docs/study-schedule.gif" width="240" /> | <img src="./docs/studynote.gif" width="240" /> | <img src="./docs/chat.gif" width="240" /> |

<br>

## 🛠 기술 스택

### FE

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
<br>
![Zustand](https://img.shields.io/badge/Zustand-181717?style=for-the-badge&logo=redux&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
<br>
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![MSW](https://img.shields.io/badge/MSW-FF6A33?style=for-the-badge&logo=mockserviceworker&logoColor=white)

<br>

## 📏 Project Convention

### Git Branch

| 종류        | 설명                 | 예시              | 설명               |
| ----------- | -------------------- | ----------------- | ------------------ |
| **main**    | 메인 브랜치          | main              | 그대로 사용        |
| **develop** | 배포 전 개발 브랜치  | develop           | 그대로 사용        |
| **feature** | 기능 개발 브랜치     | feature/10-signin | 로그인 기능 브랜치 |
| **hotfix**  | 디버깅 브랜치        | hotfix-1.1.4      | 1.1버전 디버깅     |
| **release** | 배포하기 위한 브랜치 | release-1.1       | 1.1 버전           |

<br>

### Commit Message

| Type         | 설명                                                 |
| ------------ | ---------------------------------------------------- |
| **feat**     | 새로운 기능 추가                                     |
| **fix**      | 버그 수정                                            |
| **refactor** | 리팩토링                                             |
| **design**   | CSS 및 사용자 UI 디자인 변경                         |
| **style**    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우    |
| **test**     | 테스트(테스트 코드 추가, 수정, 삭제)                 |
| **chore**    | 기타 변경사항 (빌드 스크립트 수정, 패키지 매니저 등) |
| **init**     | 프로젝트 초기 생성                                   |
| **rename**   | 파일 혹은 폴더명 수정 또는 이동                      |
| **remove**   | 파일을 삭제하는 작업만 수행한 경우                   |
