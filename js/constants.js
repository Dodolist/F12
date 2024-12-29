export const API_ENDPOINTS = {
  INITIAL: "https://wise.uos.ac.kr/Main/onLoad.do",
  GRADES: "https://wise.uos.ac.kr/SCH/SugdOtcmInq/otcmSum.do",
  SUBJECTS: "https://wise.uos.ac.kr/SCH/SugdOtcmInq/list.do",
};

export const COMMON_HEADERS = {
  accept: "*/*",
  "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
  "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  "sec-ch-ua":
    '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-requested-with": "XMLHttpRequest",
};

export const LINK_NAMES = {
  WISE: "https://wise.uos.ac.kr/",
  UOSLINK_DOWNLOAD:
    "https://chromewebstore.google.com/detail/시대링크/kpkbmbkoimecbheoppomlppoehecfphp",
};

export const EMAIL = "dodolist3@gmail.com";
