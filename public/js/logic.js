$(function () {
    $("#download_cv").click(function () {
        const filePath = '/public/docs/CV_JoseMiguelRosas.pdf';
        var a = document.createElement('a');
        a.href = filePath;
        a.download = 'CV_JoseMiguelRosas.pdf';

        a.click();
    });
});
