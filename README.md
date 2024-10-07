<h1>EN</h1>

<h1>Overview</h1>

This is a library that automatically generates types based on the Cotato backend API server, allowing these types to be used for API requests and responses.

All types and enums are generated with the prefix Cotato. For example, CotatoMemberInfoResponse.

If you type Cotato in the code editor, you will see the importable Request/Response types as defined in Swagger, as shown in the image below.

![image](https://github.com/user-attachments/assets/fb4125fd-3e12-4f23-ae45-5e27b54a6bd3)


<h1>Use Cases</h1>

<h3>Example Usage</h3>

You can find example usage easily in the COTATO-FE codebase.

Let’s assume we need to fetch session information. You can easily find the relevant endpoint in the Backend Swagger.

![image](https://github.com/user-attachments/assets/02c2dfb3-d162-4808-873f-38808311368b)


Remember the following when using this:

	1.	All types are generated with names relevant to the endpoint. Since the endpoint includes session and info, type CotatoSession in the code editor.

![image](https://github.com/user-attachments/assets/6c471f11-897a-4324-a28b-a914e60752a5)


As shown above, you can import the CotatoSessionListResponse type.

To see which fields are included in the type, go to the definition by pressing ctrl + click on Windows or cmd + click on Mac.

![image](https://github.com/user-attachments/assets/b4b9c6ea-2418-487a-829f-0d9e79496bed)

From the response of the v1/api/session endpoint, you can see variables like sessionId, sessionNumber, etc. This doesn’t need to be manually checked, as the fields will be auto-completed during type inference.

![image](https://github.com/user-attachments/assets/ec52d276-0076-4747-bfb2-20cf1f1c4a10)

Usage with axios or swr

```jsx
// When there are no request params (only applying response type)
const { data } = useSWR<CotatoProjectDetailResponse>(
    `/v2/api/projects/${projectId}`,
    fetcher,
);
  
// When applying both request and response types
api.post<CotatoJoinResponse>('/v1/api/auth/join', {
  email: id,
  password: password,
  name: name,
  phoneNumber: tel,
  policies: policiesData,
} as CotatoJoinRequest);
```
Using Typescript helps ensure safety and type inference. If a type exists, make sure to apply it. If it doesn’t exist, you can proceed without it.

Important Notes

	1.Occasionally, some types may not exist, especially for request types (if no parameters are required).
	2.This will be fixed, but in the meantime, check for the existence of types and apply them where available.

<h1>Maintenance</h1>

<h3>Package Management</h3>

If there are changes to the backend API specifications that require updates, follow these guidelines:

	1.Clone the cotato-openapi-clients repository.
	2.In the terminal, enter the following commands:

```
yarn install && yarn add cross-env

yarn open-api // This is the script for auto-generating types.

yarn build // If you encounter a 'permission denied' error
```

1.	If there have been changes to the backend, there will be modified files after running yarn open-api. Commit these changes without modification (e.g., feat: update API spec).

![image](https://github.com/user-attachments/assets/6aa49629-9de1-471e-b39c-5287f94bde41)

2.	Next, update the package.json file.

![image](https://github.com/user-attachments/assets/307a44c5-76e8-45bf-bb14-f9a4f3857886)

```
  // Assuming today is July 11, 2024

  // Current package.json
  "version": "2.240701.0",

  // For a type update needed in a test branch, keep the original date
  "2.240701.0" -> "2.240701.0-{sprintName}.0" // Example: "2.240701.0-attendance.0"
  
  // For changes to be applied to the main branch, update the version with the current date
  "2.240701.0" -> "2.240711.0"
  
  // Increment the version if necessary
  "2.240711.0" -> "2.240711.1"
```

<h2>NPM Deployment</h2>

	1.Run npm publish in the terminal. If you do not have the necessary permissions, please contact the front-end lead.

You can check the published versions on npm.

Once published, update the version in package.json in other repositories such as cotato-fe and apply it using yarn install.

Summary of Process

	1.Run yarn open-api to update the API specs.
	2.Commit the changes with feat: update API spec and push two commits (including the package.json version update).
	3.Deploy to npm using npm publish with the updated version name.
	4.In other repositories, update the package.json to the same version and apply it using yarn install.

<h1>KO</h1>

## 개요

코테이토 백엔드 API 서버를 기반으로 타입을 자동 생성하며, 이를 API 요청 응답 간 사용하기 위하여 구성된 라이브러리입니다.

모든 타입과 Enum들은 `Cotato`라는 prefix가 붙어 생성됩니다.  ex. `CotatoMemberInfoResponse`

Cotato라고 코드에디터에 입력해보면 아래 사진과 같이 Swagger에 정의되어 있는 Request / Response 타입들을 import 해올 수 있는 것을 볼 수 있습니다.

![image](https://github.com/user-attachments/assets/fb4125fd-3e12-4f23-ae45-5e27b54a6bd3)

# 사용처

### 사용 예시

COTATO-FE 코드에서 쉽게 사용 예시를 찾을 수 있습니다.

우리는 현재 세션 정보를 불러와야 한다고 가정해봅시다. 엔드포인트는 [백엔드 스웨거](http://43.201.196.189:8082/swagger-ui/index.html#/%EC%84%B8%EC%85%98%20%EC%A0%95%EB%B3%B4/findSessionsByGenerationId)에서 쉽게 찾을 수 있습니다.

![image](https://github.com/user-attachments/assets/02c2dfb3-d162-4808-873f-38808311368b)

사용 시 기억할 것은 다음과 같습니다.

1. 모든 타입은 **엔드포인트**와 관련된 이름으로 생성됩니다**.** 엔드포인트에 session, info라는 정보가 있으니 코드 에디터에 CotatoSession 이라고 쳐봅시다.

![image](https://github.com/user-attachments/assets/6c471f11-897a-4324-a28b-a914e60752a5)

위와 같이 `CotatoSessionListResponse`라는 타입을 import 해올 수 있습니다.

어떤 해당 타입에 어떤 필드가 담겨 있는지 알아보기 위해  Window: `ctrl + 클릭` / MAC: `cmd + 클릭`  을 통해 정의로 가봅시다.

![image](https://github.com/user-attachments/assets/b4b9c6ea-2418-487a-829f-0d9e79496bed)

v1/api/session의 응답으로는 sessionId, sessionNumber 등등.. 다양한 변수가 담겨온다는 걸 알 수 있습니다. 이는 일일히 직접 확인하지 않아도 되며, 타입 추론 과정에서 자동완성됩니다.

![image](https://github.com/user-attachments/assets/ec52d276-0076-4747-bfb2-20cf1f1c4a10)

세션에 담긴 변수가 자동완성되는 모습

1. axios 혹은 swr과의 사용

```jsx
// request params가 없는 경우 (response 타입만 적용)

const { data } = useSWR<CotatoProjectDetailResponse>(
    `/v2/api/projects/${projectId}`,
    fetcher,
);
  
  
// reqpuest, response 타입 모두 적용하는 경우

api.post<CotatoJoinResponse>('/v1/api/auth/join', {
  email: id,
  password: password,
  name: name,
  phoneNumber: tel,
  policies: policiesData,
} as CotatoJoinRequest);

```

Typescript의 이점을 누리기 위해 (안전성, 타입 추론 등) 사용하는 것이며, 타입이 존재하지 않는 경우 사용하지 않아도 무방하지만 존재한다면 꼭 적용시키기 바랍니다!

### 유의사항

1. 가끔 없는 타입도 존재할 수 있습니다. 

request type의 경우 특히! 존재하지 않을 수 있습니다. (필요한 parameter가 없는 경우)

이는 수정 예정이며, 대부분의 타입은 존재하니 존재여부 확인 후 사용해주세요!

# 관리

## 패키지 관리

백엔드 API 스펙에 변동이 생겨 수정이 필요한 경우의 가이드라인입니다.

우선 아래 두 과정을 수행합니다.

1. cotato-openapi-clients 레포지토리 clone
2. 터미널에서 다음과 같이 입력

```jsx
 // 터미널
yarn install && yarn add cross-env
 
yarn open-api // 타입 자동 생성 스크립트입니다.

yarn build // permission denied 에러 시 chmod +x fixup.sh를 입력합니다.

```

1. 백엔드 변경사항이 있었다면 yarn open-api 이후 수정된 파일들이 있을 텐데, 이를 건들지 않고 그대로 커밋합니다. feat: update api spec 등 . . .

![image](https://github.com/user-attachments/assets/6aa49629-9de1-471e-b39c-5287f94bde41)

1. 이휴 package.json 파일을 수정합니다. 

![image](https://github.com/user-attachments/assets/307a44c5-76e8-45bf-bb14-f9a4f3857886)

여기서 수정할 것은 version이며, 컨벤션은 다음과 같습니다.

<aside>
💡

1. Cotato-FE 리포지토리의 `main` 브랜치에 바로 적용되어 배포될 사안 → 날짜로만 버저닝

ex) 오늘이 2024년 9월 18일일 경우, 2.240918.0으로 수정

ex) 이미 2.240918.0이라면, 맨 뒤 숫자를 올리는 방식. 2.240918.0 → 2.240918.1

1. QA에서 사용할 사안, 테스트용 api 수정 → 날짜는 변경하지 않으며, 뒤에 태그를 붙여 버저닝

ex) 출석 관련 api  테스트 수정사항의 경우, `2.240904.0-attendance.0`으로 수정

</aside>

예시

```jsx
  // 현재 날짜가 2024년 7월 11일이라 가정
  
  // 아래는 기존 package.json
  "version": "2.240701.0",
  
  // 테스트 브랜치에 필요한 타입 업데이트의 경우, 기존 앞 날짜는 변경하지 않음
  "2.240701.0" -> "2.240701.0-{sprintName}.0" // ex) "2.240701.0-attendance.0"
  
  // main 브랜치에 적용될 버젼 수정의 경우, 현재 날짜로 변경
  "2.240701.0" -> "2.240711.0" 
  
  "2.240711.0" -> "2.240711.1"

```

5. npm 배포

1. 터미널에 `npm publish` 를 입력합니다. 권한이 없을 경우 프론트짱에게 문의합니다.

https://www.npmjs.com/package/cotato-openapi-clients?activeTab=versions

배포가 잘 되었다면 위에서 확인할 수 있으며, cotato-fe 등 다른 레포지토리에서

package.json의 버젼을 배포된 버젼으로 수정 후 yarn install을 통해 적용시킬 수 있습니다.

간략 정리

1. `yarn open-api` 를 통해 api 스펙 업데이트
2. feat: update api spec 커밋, pacakge.json 버젼 수정 후 총 두 개 커밋 푸시
3.  `npm publish` 를 통해 npm 배포 이 때 2번에서 수정한 버젼 이름으로 배포됨 
4. 사용처에서도 동일 버젼으로 package.json 수정 및 yarn install, 확인







