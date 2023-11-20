
### 팬레터 만들기
props-drilling-> context -> redux순으로 기능구현하기
전역상태관리 라이브러리 익숙해지기

### component구성
Header => title , 분류버튼
Form => 편지 추가 
letterBox => letters정렬
letters => data Read
Footer => 장식

### Router page
Home => 전체 컴포넌트를 가짐 (LetterBox에 하위요소인 Letters 제외)
detail => data에서 선택한 카드와 일치한 아이디를 가진 데이터로 상세페이지를 읽어냄

### 주요기능(CRUD)
#### 편지 추가하기 Create

1. Form만들기 input, selector, button
2. input state선언하기 value onChange
`<input value={nickname} onChange={nicknameHanldler} />`
3. 클릭이벤트 만들기 필요한 요소 객체로 넣기
4. state변경 로직 작성

   
#### 편지 출력하기 Read
1. data state 선언하기
2. writeTo로 filter
3. map() chaninig

#### 편지 수정하기 Update
1. state 선언
 `const [isEdit, setIsEdit] = useState(false)` `const [editLetter, setEditLetter] = useState(foundLetter.content)` 
2.  isEdit의 상태를 바꾸는 클릭이벤트
 `<button onClick={() => { setIsEdit(!isEdit) }}>수정</button>`
3.  isEdit ? textarea 수정완료 : p 수정, 삭제 삼항연산자 활용
4.  `...item, content: item.id === id ? editLetter : item.content` 불변성유지
5.  수정된 부분없으면 alert 띄우기

#### 편지 삭제하기 Delete
1. `const filteredLetter = letters.filter(to => to.id !== id)`
2. state 바꿔주는 로직실행

#### Detail
1. 라우터에 추가
 `<Route path="detail/:id" element={<Detail />} />`
2. useParams를 이용해 데이터 읽어오기



Uploading 제목 없는 동영상 - Clipchamp로 제작 (4).mp4…




### 네이밍 문법
module을 제외하고 camelCase 이용하기 

### 수정이 필요한 부분
#### Header 버튼 활성화 시 색 변하는 로직 리팩토링 필요 
버튼 별 state 선언 후 set으로 변경했으나 하드코딩인듯

#### layout 을 활용해서 리렌더링 줄이기
 Header에서 버튼을 따로 빼서 Header와 Footer를 layout으로 감싸 children 을 이용하면 좋을 듯하다. 

#### 불필요한 렌더링 
 아직 뭐가 불필요한 렌더링인지 모르겠다. 그래서 useCallback이라던가 메모리제이션을 제대로 활용을 못한다.  
 
#### modal 
 page에 모달 인척하는 애만 넣어둠. 모양만 모달임



