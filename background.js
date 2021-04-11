chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
         // данные о сайте
        var a = request.site;
        var b = request.time; // данные о проведенном времени
        // тут делаем с этими данными что хотим.
    });
