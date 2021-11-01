# 💊 MEDI READY 💊

약사 와 환자간의 커뮤니케이션을 원활하게 해주기 위한 서비스 메디레디 입니다!
약사가 처방한 약과 복약지도를 환자 본인의 핸드폰으로 확인이 가능하며 약 먹을 시간에 알림이 울리는 서비스 입니다.

<br>

## 🔗 관련 링크

- [Frontend](https://github.com/Medi-Ready/medi-ready-frontend)
- [React-Native](https://github.com/Medi-Ready/medi-ready-rn)
- [Backend](https://github.com/Medi-Ready/medi-ready-backend)
- [Push-Notification-Server](https://github.com/Medi-Ready/medi-ready-push-notification)

<br>

# 📚 Table of Contents

- [💊 MEDI READY 💊](#-medi-ready-)
  - [🔗 관련 링크](#-관련-링크)
- [📚 Table of Contents](#-table-of-contents)
- [👨‍⚕️ Motivation](#️-motivation)
- [🎬 Getting Started](#-getting-started)
  - [Client](#client)
    - [Web](#web)
    - [Mobile Application](#mobile-application)
  - [Server](#server)
    - [Main Server](#main-server)
    - [Notification Server](#notification-server)
- [📅 Schedule](#-schedule)
- [🖥 Tech Stacks](#-tech-stacks)
  - [Client](#client-1)
    - [Web](#web-1)
    - [Mobile Application](#mobile-application-1)
    - [Testing](#testing)
  - [Server](#server-1)
    - [Main Server](#main-server-1)
    - [Push Notification Server](#push-notification-server)
    - [Testing](#testing-1)
- [❓ Why?](#-why)
    - [React Native (Expo)](#react-native-expo)
    - [Redux Saga](#redux-saga)
    - [React query](#react-query)
    - [SQL](#sql)
    - [Crone](#crone)
- [🤯 Issues && Solutions](#-issues--solutions)
    - [Push Notification](#push-notification)
    - [Search Algorithms](#search-algorithms)

<br>

# 👨‍⚕️ Motivation

약국에서 약을 처방 받는 환자들이 제시간에 약을 먹을 수 있도록 지정된 시간에 알림을 받을 수 있으면 좋겠다고 생각해서 시작된 아이디어 입니다.

단순한 약 알림 어플이 아닌 약국에서 약을 처방 받을때 직접 약사에게 약과 복약지도 등 유용한 정보들이 담긴 카드를 어플로 받아 복약시간에 알림을 받고 복약 기록을 할 수 있는 서비스 입니다.

<br>

# 🎬 Getting Started

Local 환경에서 실행시 아래와 같이 준비가 필요합니다.

## Client

### Web

Root 디렉토리에 .env 파일을 만들고 다음과 같이 설정해주세요

```

```

### Mobile Application

Root 디렉토리에 environment.js 파일을 만들고 다음과 같이 설정해주세요

```
import Constants from "expo-constants";

const ENV = {
  dev: {
    IOS_CLIENT_ID: <Google OAuth IOS client ID>,
    ANDROID_CLIENT_ID: <Google OAuth Android client ID>,
    API_SERVER_URL: <YOUR_IP_ADDRESS_WITH_PROT>,
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  }
};

export default getEnvVars;
```

## Server

### Main Server

### Notification Server

<br>

# 📅 Schedule

  <details>
    <summary>
      1 주차
    </summary>

    - 아이디어 기획 & 목업
    - 기술 스택 학습 (React Native & SQL)

  </details>

  <br>

  <details>
    <summary>
      2주차
    </summary>

    - 개발 진행

  </details>

  <br>

  <details>
    <summary>
      3주차
    </summary>

    - 배포
    - readme 작성
    - 테스트 코드 작성
    - 코드 refactoring

  </details>

  <br>
  <br>

# 🖥 Tech Stacks

## Client

### Web

- React
- React Query
- Styled-Component

### Mobile Application

- React Native (Expo)
- Redux Toolkit
- Redux Saga

### Testing

- Jest
- React Testing Library

## Server

### Main Server

- Node JS
- Express
- MySQL
- Json Web Token Authentication

### Push Notification Server

- Express
- Crone (scheduling)

### Testing

- Mocha + Chai

# ❓ Why?

### React Native (Expo)

- Learning curve 가 낮아 비교적 개발시간이 많이 없었던 해당 프로젝트에 쓰기 적합하다고 판단했습니다.
- 초기설정시간을 절약하고 배포가 용이하다는점에서 Expo 를 사용하였습니다.

### Redux Saga

- Generator 와 같은 어려운 개념 때문에 Learning Curve 가 높다는 장벽이 있었지만, Data Fetching 같은 여러 Side Effect 를 효율적으로 관리하고 에러핸들링 및 testing 이 비교적 쉽다는 장점 때문에 사용하기로 했습니다.

### React query

- 비동기 처리 및 캐싱기능

### SQL

- Database

### Crone

- Push Notification 을 설정된 시간에 동작시키기 위해서 사용하였습니다.

# 🤯 Issues && Solutions

### Push Notification

### Search Algorithms
