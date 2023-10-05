$(function () {
    $("#download_cv").click(function () {
        // Ruta al archivo en la carpeta "docs"
        const filePath = '/public/docs/CV_JoseMiguelRosas.pdf'; // Reemplaza 'nombre_del_archivo.pdf' con el nombre de tu archivo

        // Crear un enlace temporal para la descarga
        var a = document.createElement('a');
        a.href = filePath;

        // Establecer el atributo "download" para que el navegador inicie la descarga
        a.download = 'CV_JoseMiguelRosas.pdf'; // Reemplaza 'nombre_del_archivo.pdf' con el nombre de tu archivo

        // Simular un clic en el enlace para iniciar la descarga
        a.click();
    });
});
