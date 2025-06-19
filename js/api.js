export const makeApiCalls = async (API_ENDPOINTS, COMMON_HEADERS) => {
  const createFetchConfig = (body) => ({
    headers: COMMON_HEADERS,
    referrer: "https://wise.uos.ac.kr/index.do",
    referrerPolicy: "strict-origin-when-cross-origin",
    body,
    method: "POST",
    mode: "cors",
    credentials: "include",
  });

  const fetchWithErrorHandling = async (API_ENDPOINT, body) => {
    try {
      return await fetch(API_ENDPOINT, createFetchConfig(body));
    } catch (error) {
      return `에러 발생: ${error.message}`;
    }
  };

  const fetchInitial = async () => {
    const body = "default.locale=CCMN101.KOR";
    const API_ENDPOINT = API_ENDPOINTS.INITIAL;

    const response = await fetchWithErrorHandling(API_ENDPOINT, body);

    return await response.json();
  };

  const fetchGrades = async (userInfo) => {
    const body = `_AUTH_MENU_KEY=SugdOtcmInq_2&_AUTH_PGM_ID=SugdOtcmInq&__PRVC_PSBLTY_YN=N&_AUTH_TASK_AUTHRT_ID=CCMN_SVC&default.locale=CCMN101.KOR&%40d1%23strAcyr=2025&%40d1%23strSemstrCd=CCMN031.10&%40d1%23strStdntNo=${userInfo.userId}&%40d1%23strFreeDiv=2&%40d1%23strStdntNm=${userInfo.encodedUserName}&%40d1%23strUnivCd=${userInfo.univCd}&%40d1%23strProfFlag=&%40d1%23strSbjcNo=&%40d1%23strDvclNo=&%40d%23=%40d1%23&%40d1%23=dmReqKey&%40d1%23tp=dm`;
    const API_ENDPOINT = API_ENDPOINTS.GRADES;

    const response = await fetchWithErrorHandling(API_ENDPOINT, body);

    return await response.text();
  };

  const fetchSubjects = async (userInfo) => {
    const body = `_AUTH_MENU_KEY=SugdOtcmInq_2&_AUTH_PGM_ID=SugdOtcmInq&__PRVC_PSBLTY_YN=N&_AUTH_TASK_AUTHRT_ID=CCMN_SVC&default.locale=CCMN101.KOR&%40d1%23strAcyr=2025&%40d1%23strSemstrCd=CCMN031.10&%40d1%23strStdntNo=${userInfo.userId}&%40d1%23strFreeDiv=2&%40d1%23strStdntNm=${userInfo.encodedUserName}&%40d1%23strUnivCd=${userInfo.univCd}&%40d1%23strProfFlag=&%40d1%23strSbjcNo=&%40d1%23strDvclNo=&%40d%23=%40d1%23&%40d1%23=dmReqKey&%40d1%23tp=dm`;
    const API_ENDPOINT = API_ENDPOINTS.SUBJECTS;

    const response = await fetchWithErrorHandling(API_ENDPOINT, body);

    return await response.text();
  };

  try {
    console.log("API 호출 시작");
    // 첫 번째 API 호출: 유저 정보를 포함한 초기 데이터 조회
    const initialData = await fetchInitial();

    // 유저 정보 추출
    const userInfo = {
      userId: initialData.dmUserInfo.USER_ID,
      univCd: initialData.dmUserInfo.UNIV_CD,
      encodedUserName: encodeURIComponent(initialData.dmUserInfo.USER_NM),
    };

    // 두 번째 API 호출: 성적 정보 조회
    const gradesData = await fetchGrades(userInfo);

    // 세 번째 API 호출: 공개된 과목 정보 조회
    const subjectsData = await fetchSubjects(userInfo);

    return {
      gradesData,
      subjectsData,
    };
  } catch (error) {
    return `에러 발생: ${error.message}`;
  }
};
