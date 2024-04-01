document.getElementById('surveyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止默认提交行为

  // 获取用户选择的答案和上传的照片
  const question1Answer = document.querySelector('input[name="question1"]:checked').value;
  const question2Answer = document.querySelector('input[name="question2"]:checked').value;
  const question3Answer = document.getElementById('question3').value;
  const uploadedPhoto = document.getElementById('photo').files[0];

  // 创建并显示照護等級、評估時間和照護方式的信息
  const resultDiv = document.getElementById('result');
  const currentDate = new Date().toLocaleString();
  resultDiv.innerHTML = `
      <p class="level">L1</p>
      <p class="care-level">照護等級</p>
      <p class="care-time">評估時間: ${currentDate}</p>
      <p class="care-way">照護方式:</p>
      <ol class="care-way">
          <li>以除膠噴霧將皮膚殘膠清潔乾淨。</li>
          <li>使用皮膚保護噴霧。</li>
          <li>四~五天更換造口底座。</li>
          <li>持續發生立即回診。</li>
      </ol>
      <p class="care">本結果為初步判定，仍需以專業醫師、護理師的判定與建議為準則。</p>
  `;

  // 清空表单内容
  document.getElementById('surveyForm').reset();
});

// 解析查询参数
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name') || '未知姓名';
const medicalRecordNumber = urlParams.get('medicalRecordNumber') || '未知病歷號碼';

// 显示姓名和病历号码
document.getElementById('name').textContent = '姓名：' + name;
document.getElementById('medicalRecordNumber').textContent = '病歷號碼：' + medicalRecordNumber;