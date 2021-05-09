function setIframeHeight(iframe) {

    if (iframe) {

        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;

        if (iframeWin.document.body) {

            iframe.height = iframeWin.document.body.scrollHeight;

        }

    }

};

$(".flexiframe").each(function (index) {

    var that = $(this);

    (function () {

        setInterval(function () {

            setIframeHeight(that[0])

        }, 200)

    })(that)

});
