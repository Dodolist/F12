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

// 특이한 과목 이름들의 더미 데이터
export const DUMMY_SUBJECTS = [
  "첫눈처럼 너에게 가겠다",
  "사랑하긴 했었나요",
  "주저하는 연인들을 위해",
  "어떻게 이별까지 사랑하겠어",
  "이 밤을 다시 한 번",
  "초록을거머쥔우리는",
  "나는 볼 수 없던 이야기",
  "위잉위잉",
  "사랑은 은하수 다방에서",
  "아메리카노",
  "오래된 노래",
  "나의 기쁨 나의 노래",
  "비밀의 화원",
  "너에게 닿기를",
  "Drowning",
  "한 페이지가 될 수 있게",
  "봄여름가을겨울",
  "사건의 지평선",
  "오르트구름",
  "행복했던 날들이었다",
  "나는 반딧불",
  "취중고백",
  "가까운 듯 먼 그대여",
  "모든 날, 모든 순간",
  "눈이 오잖아",
  "방학 잘 보내세요",
  "그대만 있다면",
  "너의 모든 순간",
  "사랑인가 봐",
  "헤어지자 말해요",
  "사막에서 꽃을 피우듯",
  "봄날",
  "부럽지가 않어",
  "ㅋ",
  "빠지기는 빠지더라",
  "금요일에 만나요",
  "정이라고 하자",
  "말하는 대로",
  "마지막 너의 인사",
  "만남은 쉽고 이별은 어려워",
];