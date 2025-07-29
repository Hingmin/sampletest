// HTML 요소 가져오기
const video = document.getElementById('video');     // <video> 태그
const status = document.getElementById('status');   // "분석중" 상태 표시용 <p>
const result = document.getElementById('result');   // 결과 표시용 <p>

/**
 * startCamera()
 * 브라우저가 사용자 카메라에 접근해서 실시간 영상을 보여주는 함수
 */
async function startCamera() {
  // navigator.mediaDevices.getUserMedia()
  // 사용자의 카메라나 마이크에 접근할 수 있는 Web API
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  // 가져온 카메라 영상을 <video> 태그에 연결
  video.srcObject = stream;
}

/**
 * startAnalysis()
 * 버튼을 눌렀을 때 실행되는 함수
 * 카메라를 켜고, 분석 상태 문구를 바꾸고, 분석을 실행(여기선 가상으로)
 */
function startAnalysis() {
  // 상태 문구를 "분석 중..."으로 변경
  status.textContent = '분석 중...';

  // 카메라 시작
  startCamera();

  // 분석을 하는 척! (실제 모델 없이 3초 대기 후 결과 출력)
  setTimeout(() => {
    // 상태를 "분석 완료!"로 변경
    status.textContent = '분석 완료!';

    // 분석 결과를 표시
    result.textContent = '결과: 잘생긴 사람 얼굴이 감지되었습니다.';
  }, 5000); // 3초 후에 실행 (3000 밀리초 = 3초)
}
