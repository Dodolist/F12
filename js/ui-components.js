const formatNumber = (num) => {
  return num.toString().split(".")[1]?.length >= 2
    ? num.toFixed(2)
    : num.toFixed(1);
};

export const UIComponents = {
  createGradeSection(grades) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("column", "show-0");
    wrapper.innerHTML = `
      <p class="title">학점 결과</p>
      <div class="section">
        <div class="item">
          <span class="label">평균 평점:</span>
          <span class="value">
            ${formatNumber(grades.AVG_MRKS)}
          </span>
        </div>
        <div class="item">
          <span class="label">전체 학점:</span>
          <span class="value">${formatNumber(grades.TOT_PNT)}</span>
        </div>
        <div class="item">
          <span class="label">합계 평점:</span>
          <span class="value">${formatNumber(grades.TOT_MRKS)}</span>
        </div>
        <p class="description">평균 평점 = 합계 평점 / 전체 학점</p>
      </div>
    `;
    return wrapper;
  },

  createSubjectsSection(subjects) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("column", "show-1");
    wrapper.innerHTML = '<p class="title">공개된 과목</p>';

    if (!subjects || subjects.length === 0) {
      wrapper.innerHTML += `
        <div class="section">
          <div class="description">아직 공개된 과목이 없어요</div>
        </div>
      `;
      return wrapper;
    }

    const section = document.createElement("div");
    section.classList.add("section");
    subjects.forEach((subject) => {
      section.innerHTML += `
        <div class="item">
          <span class="label">${subject.SBJC_NM}</span>
          <span class="value">${subject.SCRE_GPA}(${subject.APLY_PNT}학점)</span>
        </div>
      `;
    });
    wrapper.appendChild(section);
    return wrapper;
  },

  createPromotionSection(onDownload) {
    const textButton = document.createElement("button");
    textButton.classList.add("text-button");
    textButton.textContent =
      "쉽고 편리하게 교내 공지사항을 확인하고 싶으신가요?";

    textButton.addEventListener("click", () => {
      textButton.remove();
      const downloadButton = this.createDownloadButton(onDownload);
      document.body.appendChild(downloadButton);
    });

    return textButton;
  },

  createDownloadButton(onDownload) {
    const button = document.createElement("button");
    button.classList.add("uoslink-button");
    button.innerHTML = `
      <p style="color: #408cff; font-size: 20px; font-weight: bold">🔗 시대링크 다운로드 링크</p>
      <p style="color: #98bffa; font-size: 16px; font-weight: 500">100명 이상의 학생들이 설치하여 사용중이에요!</p>
    `;
    button.addEventListener("click", onDownload);
    return button;
  },

  createInquiryText(email) {
    const text = document.createElement("p");
    text.classList.add("description");
    text.textContent = `문의: ${email}`;
    return text;
  },
};
