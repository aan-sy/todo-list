# 1 Day Planner
visite here: https://unrivaled-otter-abc467.netlify.app/

## 프로젝트 설명
React 공부를 위해 [Create React App](https://create-react-app.dev/)을 이용해서 만든 [1 Day Planner](https://unrivaled-otter-abc467.netlify.app/) 이며 웹/모바일 브라우저에서 사용 가능합니다.

Dream Coding의 React 강의 중 To do List 프로젝트를 통해 만들게 되었습니다.

강의 내용 외 목록 별로 소요 시간을 나타낼 수 있는 기능을 추가해 Planner로 사용할 수 있도록 해보았습니다.

오늘 날짜가 표시되며 목록 별 시작 시간, 완료 시간, 소요 시간을 나타낼 수 있습니다.

이번 프로젝트를 통해 웹 페이지를 여러 Component로 분리해서 관리하는 연습과

다른 component와 상태 데이터를 공유하기 위해 component tree를 어떻게 구성해야 하는지 고민하는 연습을 해볼 수 있었습니다.

추후에 목록 별 추가 메모 남기기, 내용 및 시간 수정, 카테고리(공부, 휴식, 운동 등)별로 구분하고 총 시간 나타내기,

날짜 별로 이전 목록 불러오기 기능을 추가 해보고 싶습니다.

## 개발 환경

- Code Editor: VS Code
- Develop, Build: Create-react-app
- Package Manager: Yarn
- version control: GitHub
- Deployment: Netlify

### Front-end

- Language: HTML, CSS, JavaScript
- UI Library: React
- CSS Tool: Post CSS

## 플래너 기능

### Header Component
- 오늘 날짜 표시
- darkMode, light Mode 지원

### Nav Component
- 목록 필터링 (모든 목록 보기, 해야 할 목록만 보기, 완료한 목록만 보기)

### TodoList Component
- 해야할 목록 개수, 완료한 목록 개수 나타내기
- 휴지통 버튼 클릭 시 체크된 목록 모두 삭제

#### Todo Component
- '시작 시간 저장' 버튼 click 시 시작 시간 나타내기
- 목록이 check되면 완료된 목록으로 나타내기
- 시작 시간이 표시된 목록이 check되면 완료 시간, 소요 시간 나타내기
- x 버튼 클릭 시 해당 목록 삭제

#### Add Component
- 할 일 입력 후 enter key 입력 혹은 추가 버튼 click 시 목록 추가하기

## 플래너 GIF

pc

<img width="50%" alt="game preview" src="https://github.com/leesoyeonnn/1day-planner/assets/52520202/22d69f5f-f24d-4208-ac14-f89d11aecf20" />

mobile

<img width="50%" alt="game preview" src="https://github.com/leesoyeonnn/1day-planner/assets/52520202/d908fc7b-e498-402b-b4c8-0b0577a4bf75" />