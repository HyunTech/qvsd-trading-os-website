# QVSD Trading OS Website

벤치마크 zip을 바탕으로 만든 QVSD 정적 웹사이트 초안입니다.

## 실행

`index.html`을 브라우저에서 직접 열면 됩니다.

## 구성

- `index.html`: QVSD Trading OS 랜딩, 지표 라이브러리, 상세 패널
- `styles.css`: 반응형 다크 UI 스타일
- `script.js`: 지표 데이터, 필터, 상세 화면, 차트 프리뷰 렌더링
- `assets/qvsd-cafe.png`: 벤치마크에 포함된 QVSD 카페 이미지
- `downloads/*.zip`: 다운로드 흐름 확인용 임시 패키지

## 실제 지표 파일 교체

현재 zip 파일은 임시 패키지입니다. 실제 NinjaScript Add-On 파일이 준비되면 `downloads` 폴더의 같은 파일명으로 교체하면 다운로드 버튼을 그대로 사용할 수 있습니다.
