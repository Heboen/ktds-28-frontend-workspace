onload = function () {
  const emailInput = document.querySelector("#email");
  // 아이디가 email인 input에 oninput 이벤트가 발생하면
  emailInput.oninput = function () {
    // 해당 엘리먼트의 부모인 .page-123을 찾고
    const page = emailInput.closest(".page-123");
    // 부모의 자식 중 클래스가 email-value인 엘리먼트에
    const evalue = page.querySelector(".email-value");
    // email의 value를 작성한다.
    evalue.innerText = emailInput.value;
  };

  const jobsSelect = document.querySelector("#jobs");
  // 아이디가 jobs인 select에 onchange 이벤트가 발생하면
  jobsSelect.onchange = function () {
    // 해당 엘리먼트의 부모인 .page-124를 찾고
    const page = jobsSelect.closest(".page-124");
    // 부모의 자식 중 클래스가 job-value인 엘리먼트에
    const jobValue = page.querySelector(".job-value");
    // jobs의 value를 작성한다.
    if (jobsSelect.value === "1") {
      jobValue.innerText = "Value: " + jobsSelect.value + " Text: 회사원";
    } else if (jobsSelect.value === "2") {
      jobValue.innerText = "Value: " + jobsSelect.value + " Text: 학생";
    } else if (jobsSelect.value === "3") {
      jobValue.innerText = "Value: " + jobsSelect.value + " Text: 교수";
    }
  };

  // input태그 중 type이 radio이면서 name이 age인 엘리먼트에
  const ageRadios = document.querySelectorAll("input[type=radio][name=age]");
  // input[type=radio][name=age]
  ageRadios.forEach(function (eachRadio) {
    eachRadio.onchange = function () {
      console.dir(eachRadio);
      // onchange 이벤트가 발생하면 해당 엘리먼트의 부모인 .page-125를 찾고
      const page = eachRadio.closest(".page-125");
      // 부모의 자식 중 클래스가 name-value인 엘리먼트에
      const nameValue = page.querySelector(".name-value");
      // input의 value를 작성한다.
      //   nameValue.innerText = "Value:" + eachRadio.value;
      if (eachRadio.value === "10") {
        nameValue.innerText = "Value:" + eachRadio.value + " Text: 10대";
      } else if (eachRadio.value === "20") {
        nameValue.innerText = "Value:" + eachRadio.value + " Text: 20대";
      } else if (eachRadio.value === "30") {
        nameValue.innerText = "Value:" + eachRadio.value + " Text: 30대";
      } else if (eachRadio.value === "40") {
        nameValue.innerText = "Value:" + eachRadio.value + " Text: 40대";
      }
    };
  });

  const checkboxes = Array.from(
    document.querySelectorAll("input[type=checkbox][name=favorate-genre]"),
  );
  const checkedAll = document.querySelector("#checked-all");
  let val = "";

  checkedAll.onchange = ({ target }) => {
    const checked = target.checked;
    const checkItem = document.querySelectorAll(
      "input[type=checkbox][name=favorate-genre]",
    );
    checkItem.forEach((item) => {
      item.checked = checked;

      item.onchange({ target: item });
    });
  };

  //   checkedAll.onchange = function () {
  //     checkboxes.forEach((checkbox) => {
  //       if (checkedAll.checked && !checkbox.checked) {
  //         checkbox.checked = !checkbox.checked;
  //       } else if (!checkedAll.checked) {
  //         checkbox.checked = false;
  //       }
  //       val = checkboxes
  //         .filter((box) => box.checked)
  //         .map((box) => box.value)
  //         .join(", ");
  //       checkbox.closest(".page-125").querySelector(".genre-value").textContent =
  //         val;
  //     });
  //   };
  checkboxes.forEach((checkbox) => {
    checkbox.onchange = function () {
      const checkedItem = checkboxes.filter((gnr) => gnr.checked);
      val = checkedItem.map((box) => box.value).join(", ");
      checkbox.closest(".page-125").querySelector(".genre-value").textContent =
        val;
      checkedAll.checked = checkboxes.length === checkedItem.length;
    };
  });
};
