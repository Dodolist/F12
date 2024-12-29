import {
  API_ENDPOINTS,
  COMMON_HEADERS,
  LINK_NAMES,
  EMAIL,
} from "./constants.js";
import { makeApiCalls } from "./api.js";
import { UIComponents } from "./ui-components.js";

document.addEventListener("DOMContentLoaded", async () => {
  const body = document.body;
  const section = document.getElementById("section");
  const buttonContent = document.getElementById("buttonContent");

  // 현재 활성화된 탭의 URL 가져오기
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab.url;

  if (!url.startsWith(LINK_NAMES.WISE)) {
    section.classList.add("warning");
    section.innerHTML = "⚠️ WISE 포털(wise.uos.ac.kr)에 접속한 후 사용해주세요";
    buttonContent.innerHTML = `
      <button id="openWise" class="button">WISE로 이동</button>
    `;

    document.getElementById("openWise").addEventListener("click", () => {
      chrome.tabs.create({ url: LINK_NAMES.WISE });
    });
    return;
  }

  // 올바른 페이지일 경우 버튼 표시
  buttonContent.innerHTML =
    '<button id="callApi" class="button">성적 조회하기</button>';

  // 버튼 이벤트 리스너 등록
  document.getElementById("callApi").addEventListener("click", async () => {
    const button = document.getElementById("callApi");
    button.classList.add("disabled");
    section.innerHTML = '<div class="description">성적을 조회하는 중...</div>';

    try {
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: makeApiCalls,
        args: [API_ENDPOINTS, COMMON_HEADERS],
      });

      buttonContent.remove();

      // JSON 파싱
      const gradesData = JSON.parse(results[0].result.gradesData);

      // 성적 정보가 없을 경우 에러 메시지 출력
      if (!gradesData.dsOtcmSumList || gradesData.dsOtcmSumList.length === 0) {
        section.classList.add("warning");
        section.innerHTML = "성적 정보를 찾을 수 없습니다";

        body.appendChild(UIComponents.createInquiryText(EMAIL));
        return;
      }

      section.remove();

      // 성적 정보 및 수강 과목 정보 출력
      const grades = gradesData.dsOtcmSumList[0];
      const subjectsData = JSON.parse(results[0].result.subjectsData);

      body.appendChild(UIComponents.createGradeSection(grades));
      body.appendChild(
        UIComponents.createSubjectsSection(subjectsData.dsMainList)
      );
      body.appendChild(
        UIComponents.createPromotionSection(() => {
          chrome.tabs.create({ url: LINK_NAMES.UOSLINK_DOWNLOAD });
        })
      );
    } catch (error) {
      section.innerHTML = `<div class="error">에러 발생: ${error.message}</div>`;
    }
  });
});
