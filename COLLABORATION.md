# GitHub 협업 진행 방법

## 기본 흐름

1. 변경 전에 `main` 브랜치를 최신 상태로 받습니다.
2. 작업별로 새 브랜치를 만듭니다.
3. 수정 후 커밋하고 GitHub에 푸시합니다.
4. Pull Request를 열어 변경 내용을 확인합니다.
5. 확인이 끝나면 `main`에 병합합니다.
6. `main`에 병합되면 GitHub Pages 배포가 자동으로 실행됩니다.

## 자주 쓰는 명령

```bash
git pull origin main
git switch -c 작업-브랜치명
git add .
git commit -m "변경 내용 요약"
git push -u origin 작업-브랜치명
```

## 협업자

- GitHub username: `o2postspace`
- 초대가 수락되면 저장소에 직접 접근할 수 있습니다.

## 배포

이 저장소는 `.github/workflows/pages.yml`을 통해 GitHub Pages에 배포됩니다.
`main` 브랜치에 푸시되면 정적 사이트 파일이 자동으로 배포됩니다.
