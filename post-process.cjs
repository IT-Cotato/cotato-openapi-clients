const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "src"); // 작업 디렉토리 경로 설정

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // `import` 및 `import type` 문에서 잘못된 CotatoCotato를 찾아 올바르게 수정
  const modifiedContent = content.replace(
    /import(?:\s+type)?\s+\{[^}]+\}\s+from\s+['"](\.\/CotatoCotato[^'"]+)['"]/g,
    (match, p1) => {
      console.log("Matched import statement:\n", match);
      const updatedPath = p1.replace("CotatoCotato", "Cotato");
      return match.replace(p1, updatedPath);
    }
  );

  // 파일이 변경된 경우에만 덮어쓰기
  if (content !== modifiedContent) {
    fs.writeFileSync(filePath, modifiedContent, "utf8");
    console.log(`Updated imports in: ${filePath}`);
  }
}

function walkDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDirectory(fullPath); // 재귀적으로 하위 디렉토리 탐색
    } else if (fullPath.endsWith(".ts")) {
      processFile(fullPath); // .ts 파일 처리
    }
  });
}

// 디렉토리 탐색 및 파일 수정 시작
walkDirectory(directoryPath);
