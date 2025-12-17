(() => {
    const noOpenPage = [
        "x.com",
        "www.youtube.com",
        "www.instagram.com"
    ];

    // 現在開いているところを変数に挿入
    const nowPage = window.location.hostname;

    // もし現在開かれてるページがnoOpenPageに含まれていたら
    if (noOpenPage.includes(nowPage)) {
        window.location.href = "https://www.google.com";
    }
})();