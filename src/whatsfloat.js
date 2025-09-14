const version = "%VERSION%";

(function () {

  console.log(' WhatsFloat.js - v' + version + ' - https://github.com/tihhgoncalves/WhatsFloat.js');

  // Função para inicializar o ícone do WhatsApp
  function initWhatsAppIcon(config) {
  // padrões do config
  var phoneNumber = config.phoneNumber || "+554799999999";
  // Sanitiza o número: remove +, hífen e espaços
  var sanitizedPhone = String(phoneNumber).replace(/[^0-9]/g, "");
  var message = config.message;
  var style = config.style || '01';
  var position = config.position || 4;
  var zIndex = config.zIndex || "1000";
  var marginLeft = config.marginLeft || "25px";
  var marginRight = config.marginRight || "25px";
  var marginTop = config.marginTop || "25px";
  var marginBottom = config.marginBottom || "25px";
  var showBubble = config.showBubble || false;
  var bubbleText = config.bubbleText || "Estamos online";
  var bubbleStyle = config.bubbleStyle || {};

    // Criar o link e o div para o ícone
    var whatsappLink = document.createElement("a");
    whatsappLink.id = "whatsapp.js";

    if (message) {
      whatsappLink.href = `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(message)}`;
    } else {
      whatsappLink.href = `https://wa.me/${sanitizedPhone}`;
    }
    whatsappLink.target = "_blank";

    var wrapper = document.createElement("div");
    wrapper.style.position = "fixed";
    wrapper.style.zIndex = zIndex;
    wrapper.style.width = "auto";
    wrapper.style.height = "60px";
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.pointerEvents = "none";

    // Definir a posição baseada na configuração
    switch (position) {
      case 1:
        wrapper.style.left = 0;
        wrapper.style.top = 0;
        break;
      case 2:
        wrapper.style.right = 0;
        wrapper.style.top = 0;
        break;
      case 3:
        wrapper.style.left = 0;
        wrapper.style.bottom = 0;
        break;
      case 4:
      default:
        wrapper.style.right = 0;
        wrapper.style.bottom = 0;
        break;
    }
    wrapper.style.marginLeft = marginLeft;
    wrapper.style.marginRight = marginRight;
    wrapper.style.marginTop = marginTop;
    wrapper.style.marginBottom = marginBottom;

    var whatsappIcon = document.createElement("div");
    whatsappIcon.style.width = "50px";
    whatsappIcon.style.height = "50px";
    whatsappIcon.style.backgroundImage =
      `url("https://raw.githubusercontent.com/tihhgoncalves/WhatsFloat.js/master/assets/images/icon-cta-${style}.svg")`;
    whatsappIcon.style.backgroundSize = "contain";
    whatsappIcon.style.cursor = "pointer";
    whatsappIcon.style.display = "inline-block";

    // Adiciona o balão se solicitado
    if (showBubble) {
  var bubble = document.createElement("span");
  bubble.innerText = bubbleText;
  bubble.style.display = "inline-block";
  bubble.style.fontFamily = bubbleStyle.fontFamily || "Arial, 'Helvetica Neue', Helvetica, sans-serif";
  bubble.style.background = bubbleStyle.background || "#fff";
  bubble.style.color = bubbleStyle.color || "#202020";
  bubble.style.fontSize = bubbleStyle.fontSize || "14px";
  bubble.style.padding = bubbleStyle.padding || "8px 18px 8px 16px";
  bubble.style.borderRadius = bubbleStyle.borderRadius || "8px";
  bubble.style.marginRight = bubbleStyle.marginRight || "10px";
  bubble.style.marginLeft = bubbleStyle.marginLeft || "0";
  bubble.style.boxShadow = bubbleStyle.boxShadow || "0 1px 4px rgba(0,0,0,0.2)";
  bubble.style.verticalAlign = "middle";
  bubble.style.opacity = bubbleStyle.opacity || "1";
  bubble.style.transition = "opacity 0.3s";
  bubble.style.position = "relative";
  bubble.style.maxWidth = "220px";
  bubble.style.overflow = "hidden";
  bubble.style.textOverflow = "ellipsis";
  bubble.style.whiteSpace = "nowrap";
  bubble.className = "whatsfloat-bubble";
  // Ajuste para afastar o balão do ícone
  bubble.style.position = "relative";
  bubble.style.marginRight = "0";
  bubble.style.pointerEvents = "auto";
  wrapper.appendChild(bubble);

  // Seta à direita (span extra, fora do balão)
  var arrow = document.createElement("span");
  arrow.style.position = "relative";
  arrow.style.display = "inline-block";
  arrow.style.width = "0";
  arrow.style.height = "0";
  arrow.style.borderTop = "8px solid transparent";
  arrow.style.borderBottom = "8px solid transparent";
  arrow.style.borderLeft = "12px solid #fff";
  arrow.style.marginRight = "12px";
  arrow.style.pointerEvents = "none";
  wrapper.appendChild(arrow);
    }

  wrapper.appendChild(whatsappIcon);
  whatsappLink.appendChild(wrapper);
  // Permitir clique apenas no link
  wrapper.style.pointerEvents = "none";
  whatsappLink.style.pointerEvents = "auto";
  document.body.appendChild(whatsappLink);
  }

  // Expõe a função initWhatsAppIcon globalmente
  window.initWhatsAppIcon = initWhatsAppIcon;
})();
