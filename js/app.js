function validaFaleConosco(){
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp ("^[A-Za-zÀ-ü]{3,}( [A-Za-zÀ-ü]+)+$");
    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    var fone = document.frmfaleconosco.txtfone.value;
    var exRegFone = RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    if(!exRegFone.test(fone)){
        alert("Preencha o seu número de Telefone corretamente.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }

    var email = document.frmfaleconosco.txtemail.value;
    var exRegMail = new RegExp("\\S+@\\S+\\.\\S+");
    if(!exRegMail.test(email)){
        alert("Preencha o seu E-mail corretamente.");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }

    if(document.frmfaleconosco.selmotivo.value==""){
        alert("Preencha a Prefêrencia do Evento.");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    }

    if(document.frmfaleconosco.txtitulo.value==""){
        alert("Preencha o Titulo da Apresentação");
        document.frmfaleconosco.txtitulo.focus();
        return false;
    }

    if(document.frmfaleconosco.txcomentario.value==""){
        alert("Preencha o Resumo da Apresentação");
        document.frmfaleconosco.txcomentario.focus();
        return false;
    }

    if(document.frmfaleconosco.interesse.value==""){
        alert("Preencha o WorkShop Corretamente:");
        document.frmfaleconosco.interesse.focus();
        return false;
    }



    return true;
}

function verificaMotivo(motivo){
    var elemento = document.getElementById("opcaoProduto");

    if(motivo=="PR"){
        var select = document.createElement("select");
        select.setAttribute("name", "selproduto");

        var option = document.createElement("option");
        option.setAttribute("value", "");

        var texto = document.createTextNode("Selecione um tema de interesse");
        option.appendChild(texto);
        select.appendChild(option);

        
        var option = document.createElement("option");
        option.setAttribute("value", "FE");
        var texto = document.createTextNode("Front-End");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "BE");
        var texto = document.createTextNode("Back End");
        option.appendChild(texto);
        select.appendChild(option); 

        var option = document.createElement("option");
        option.setAttribute("value", "CD");
        var texto = document.createTextNode("Ciência de Dados");
        option.appendChild(texto);
        select.appendChild(option); 

        var option = document.createElement("option");
        option.setAttribute("value", "BE");
        var texto = document.createTextNode("Back End");
        option.appendChild(texto);
        select.appendChild(option); 

        elemento.appendChild(select);

        
    }else{
        if(elemento.firstChild){
            elemento.removeChild(elemento.firstChild);
        }
    }
}

function validarTipoArquivo(seletorCampo){
        var arquivo = document.getElementById('comprovante');

        if(arquivo.files[0].type != "application/pdf"){
            alert("Erro: Tipo de arquivo inválido, envie seu arquivo já em PDF.");

            arquivo.value = '';
        }
}

