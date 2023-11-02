<img src="https://media.tenor.com/2JflSruPHP4AAAAi/123.gif" alt="WhatsFloat.js Logo">

# WhatsFloat.js

Facilitando a interação dos seus usuários com o WhatsApp diretamente do seu site. O WhatsFloat.js adiciona um ícone flutuante do WhatsApp na sua página web, permitindo que os visitantes iniciem uma conversa com você com apenas um clique.

[![Versão mais recente](https://img.shields.io/github/release/tihhgoncalves/whatsfloat.js.svg?style=flat)]()
[![Último commit](https://img.shields.io/github/last-commit/tihhgoncalves/whatsfloat.js.svg?style=flat)]()
[![Downloads feitos até hoje](https://img.shields.io/github/downloads/tihhgoncalves/whatsfloat.js/total.svg?style=flat)]()
[![GitHub contributors](https://img.shields.io/github/contributors/tihhgoncalves/whatsfloat.js.svg?style=flat)]()
[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/)

## 📝 Como usar

Inclua o script `whatsfloat.js` na sua página e inicialize-o com as configurações desejadas:

```html
<script src="https://whatsfloat-js.rocket.srv.br/whatsfloat.js"></script>
<script>
  initWhatsAppIcon({
    phoneNumber: "+5511900001111",
    position: 4,
    zIndex: "1000",
    marginLeft: "25px",
    marginRight: "25px",
    marginTop: "25px",
    marginBottom: "25px",
  });
</script>
```

## ⚙️ Configurações

- `phoneNumber`: Seu número de WhatsApp incluindo o código do país e sem espaços ou símbolos.
- `position`: Posição do ícone na tela (1: superior esquerdo, 2: superior direito, 3: inferior esquerdo, 4: inferior direito)
- `zIndex` : z-index para o ícone flutuante
- `marginLeft` : Margem esquerda
- `marginRight` : Margem direita
- `marginTop` : Margem superior
- `marginBottom` : Margem inferior

> 💡 **Dica:** A configuração `phoneNumber` é a única obrigatória. Todas as outras são opcionais para personalizar ainda mais a sua experiência.

## 💰 Mantenedora

Este projeto é orgulhosamente mantido pela **[Rocket Produtora Digital](http://www.produtorarocket.com)**.

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para contribuir com melhorias no código, documentação ou funcionalidades.

## 🧠 Autor

Este é um projeto de **[Tihh Gonçalves](https://github.com/tihhgoncalves)**, fundador da Rocket Produtora Digital.

[![Github](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/tihhgoncalves)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4.svg?style=for-the-badge&logo=Telegram&logoColor=white)](https://t.me/tihhgoncalves)

## 🛠️ Suporte

Para relatar bugs ou solicitar novas funcionalidades, por favor, abra uma [issue](https://github.com/tihhgoncalves/whatsfloat.js/issues) no GitHub. Sua contribuição é muito apreciada!


## 🚀 Releases

Acompanhe as atualizações e melhorias do WhatsFloat.js.

> 💡 **Dica:** Para ver a lista completa de mudanças, visite a [página de releases](https://github.com/tihhgoncalves/whatsfloat.js/releases).

### 1.0.0

#### Lançamento

- Lançamento inicial do WhatsFloat.js.
- Funcionalidade básica de adicionar um ícone flutuante do WhatsApp em páginas web.
