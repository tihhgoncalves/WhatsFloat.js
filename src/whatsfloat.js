const version = "%VERSION%";

(function () {

  console.log(' WhatsFloat.js - v' + version + ' - https://github.com/tihhgoncalves/WhatsFloat.js');

  // Função para inicializar o ícone do WhatsApp
  function initWhatsAppIcon(config) {
    // padrões do config
    var phoneNumber = config.phoneNumber || "+554799999999";
    var position = config.position || 4;
    var zIndex = config.zIndex || "1000";
    var marginLeft = config.marginLeft || "25px";
    var marginRight = config.marginRight || "25px";
    var marginTop = config.marginTop || "25px";
    var marginBottom = config.marginBottom || "25px";

    // Criar o link e o div para o ícone
    var whatsappLink = document.createElement("a");
    whatsappLink.id = "whatsapp.js";
    whatsappLink.href = `https://wa.me/${phoneNumber}`;
    whatsappLink.target = "_blank";

    var whatsappIcon = document.createElement("div");
    whatsappIcon.style.width = "50px";
    whatsappIcon.style.height = "50px";
    whatsappIcon.style.backgroundImage =
      'url("https://static.textilnaweb.com/imgs/whatsapp_icone.png")';
    whatsappIcon.style.backgroundSize = "contain";
    whatsappIcon.style.position = "fixed";
    whatsappIcon.style.cursor = "pointer";

    // Define margem
    whatsappIcon.style.marginLeft = marginLeft;
    whatsappIcon.style.marginRight = marginRight;
    whatsappIcon.style.marginTop = marginTop;
    whatsappIcon.style.marginBottom = marginBottom;

    // Define o z-index da bolinha
    whatsappIcon.style.zIndex = zIndex;

    // Definir a posição baseada na configuração
    switch (position) {
      case 1:
        whatsappIcon.style.left = 0;
        whatsappIcon.style.top = 0;
        break;
      case 2:
        whatsappIcon.style.right = 0;
        whatsappIcon.style.top = 0;
        break;
      case 3:
        whatsappIcon.style.left = 0;
        whatsappIcon.style.bottom = 0;
        break;
      case 4:
      default:
        whatsappIcon.style.right = 0;
        whatsappIcon.style.bottom = 0;
        break;
    }

    // Adicionar o ícone ao link e o link ao corpo do documento
    whatsappLink.appendChild(whatsappIcon);
    document.body.appendChild(whatsappLink);
  }

  // Expõe a função initWhatsAppIcon globalmente
  window.initWhatsAppIcon = initWhatsAppIcon;
})();
