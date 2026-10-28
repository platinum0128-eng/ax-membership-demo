// 고정 안내 링크 → 지금 켜진 임시 터널 주소로 넘긴다. 주소는 targets.json 한 곳에서만 바꾼다(캐시를 피하려고 매번 새로 읽음)
(function () {
  var key = document.documentElement.getAttribute('data-target');
  var msg = document.getElementById('msg');
  fetch('../targets.json?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (t) {
    var url = t[key];
    if (!url || t.status !== 'on') { msg.textContent = '지금은 시연 서버가 꺼져 있습니다. 발표 시간에 다시 열어 주세요.'; return; }
    location.replace(url + (key === 'pres' ? (location.hash || '') : ''));
  }).catch(function () { msg.textContent = '주소를 불러오지 못했습니다. 잠시 뒤 새로고침해 주세요.'; });
})();
