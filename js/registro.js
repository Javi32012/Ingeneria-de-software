document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre= document.getElementById("nombre").value;
    const appat = document.getElementById("appat").value;
    const apmat = document.getElementById("apmat").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", completo_handler, false);
    ajax.addEventListener("error", error_handler, false);
    ajax.addEventListener("abort", abort_handler, false);
    ajax.open("POST", "http://localhost/IS/registroPersonas.php");

    var paqueteRegistro = new FormData();
    paqueteRegistro.append("nombre", nombre);
    paqueteRegistro.append("appat",appat);
    paqueteRegistro.append("apmat", apmat);
    paqueteRegistro.append("email", email);
    paqueteRegistro.append("password", password);

    ajax.send(paqueteRegistro);
    alert("regsitro exitoso");
    
});
function completo_handler(e) {
    document.getElementById("status").innerHTML = e.target.response;
}
function error_handler(e) {
    document.getElementById("status").innerHTML = e.target.response;

}
function abort_handler(e) {
    document.getElementById("status").innerHTML = e.target.response;

}