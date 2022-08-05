function copiarTexto() {
    var content = document.getElementById('textCopia');
    content.select();
    document.execCommand('copy');
    alert("Copied!");
}