/* N과 M
  난이도 ⭐️⭐️
  1. 아이디어
  - 백트래킹 재귀 함수 안에서 for 돌면서 숫자 선택(방문여부 확인하기)
  - 재귀 함수에서 M개를 선택할 경우 출력하기
  
  2. 시간 복잡도
  - N! > 가능

  3. 자료구조
  - 결과값 저장 int[]
  - 방문여부 체크 bool[]
  */

const fs = `4 2`;
const [n, m] = fs.split(' ').map(Number);
