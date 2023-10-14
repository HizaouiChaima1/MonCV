function valider() {
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var addree = document.getElementById("adresse");
    var Message = document.getElementById("msg");



    if (nom == "" && addree.value == "" && prenom.value == "" && Message.value == ""){
        document.getElementById("t1").style.color = "red";
        document.getElementById("t2").style.color = "red";
        document.getElementById("t3").style.color = "red";
        document.getElementById("t4").style.color = "red";
        alert(" champ obligatoire! ");
    }
    if ((nom == "" || addree.value == "" || prenom.value == "" || Message.value == "") )
    {
        alert(" champ obligatoire! ");
    }
    if (nom == ""){
        document.getElementById("t1").style.color = "red";
    }
    if (prenom == ""){
        document.getElementById("t2").style.color = "red";
    }
    if (addree == ""){
        document.getElementById("t3").style.color = "red";
    }
    if (Message == ""){
        document.getElementById("t4").style.color = "red";
    }


    if (Message.value == "" && nom != "" && addree.value != "" && prenom.value != "") {
        document.getElementById("t4").style.color = "red";
        alert(" Saisir votre message s'il vous plait ");
    }



}
