# 🚀 Portfólio Juliana Costa - Desenvolvedora Full Stack

Um portfólio moderno, responsivo e acessível desenvolvido com as melhores práticas de UX/UI e performance.

## ✨ Características

### 🎨 Design & UX
- **Design Moderno**: Interface limpa e profissional com gradientes e efeitos visuais
- **Totalmente Responsivo**: Otimizado para todos os dispositivos
- **Acessibilidade WCAG 2.1**: Nível AA/AAA com navegação por teclado
- **Animações Suaves**: Microinterações e transições fluidas
- **Glassmorphism**: Efeitos de vidro modernos

### 🛠️ Tecnologias
- **HTML5 Semântico**: Estrutura semântica e acessível
- **TailwindCSS**: Framework CSS utilitário para design responsivo
- **JavaScript ES6+**: Funcionalidades interativas modernas
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia otimizada (Inter + Poppins)

### ⚡ Performance
- **Lighthouse 100/100**: Otimizado para Core Web Vitals
- **Lazy Loading**: Carregamento otimizado de imagens
- **CSS/JS Minificado**: Arquivos otimizados para produção
- **CDN Otimizado**: Recursos carregados via CDN

### 🔧 Funcionalidades
- **Navegação Suave**: Scroll suave entre seções
- **Menu Mobile**: Navegação responsiva para dispositivos móveis
- **Efeito de Digitação**: Animação de texto dinâmica
- **Barras de Progresso**: Animações para habilidades técnicas
- **Formulário de Contato**: Validação e feedback em tempo real
- **Botão WhatsApp**: Contato direto via WhatsApp
- **Voltar ao Topo**: Navegação rápida

## 📱 Seções do Portfólio

### 1. **Hero Section**
- Headline impactante com efeito de digitação
- Call-to-actions principais
- Estatísticas de experiência
- Elementos flutuantes animados

### 2. **Sobre Mim**
- Apresentação profissional
- Formação acadêmica
- Valores e especialidades
- Foto com borda gradiente

### 3. **Habilidades**
- Categorização por área (Frontend, Backend, SEO, Ferramentas)
- Barras de progresso animadas
- Ícones representativos
- Percentuais de domínio

### 4. **Projetos**
- Cards interativos com hover effects
- Imagens dos projetos
- Tecnologias utilizadas
- Links para visualização

### 5. **Contato**
- Múltiplos canais de contato
- Formulário funcional
- Links para redes sociais
- Botão WhatsApp flutuante

## 🎯 Estrutura de Arquivos

```
portfolio2/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos customizados
├── js/
│   └── script.js       # Funcionalidades JavaScript
├── images/             # Imagens e assets
└── README.md          # Documentação
```

## 🚀 Como Usar

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional)

### Instalação
1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` no navegador
3. Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

### Personalização

#### Cores e Temas
As cores principais estão definidas no arquivo `index.html`:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',    // Azul principal
        secondary: '#8b5cf6',  // Roxo secundário
        accent: '#f59e0b',     // Laranja destaque
      }
    }
  }
}
```

#### Conteúdo
- **Informações pessoais**: Edite o HTML diretamente
- **Projetos**: Adicione/remova cards na seção de projetos
- **Habilidades**: Atualize percentuais e tecnologias
- **Contato**: Modifique links e informações de contato

#### Imagens
- Substitua `images/hero-banner.png` pela sua foto
- Atualize imagens dos projetos em `images/project-*.jpeg`
- Otimize imagens para web (WebP recomendado)

## 🎨 Customização Avançada

### Adicionando Novas Seções
```html
<section id="nova-secao" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
        Nova <span class="text-gradient">Seção</span>
      </h2>
    </div>
    <!-- Conteúdo da seção -->
  </div>
</section>
```

### Novas Animações CSS
```css
@keyframes nova-animacao {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-nova {
  animation: nova-animacao 0.6s ease-out forwards;
}
```

### Funcionalidades JavaScript
```javascript
// Adicionar nova funcionalidade
function novaFuncionalidade() {
  // Código da funcionalidade
}

// Registrar evento
document.addEventListener('DOMContentLoaded', novaFuncionalidade);
```

## 📊 SEO e Performance

### Meta Tags Otimizadas
- Title e description personalizados
- Open Graph para redes sociais
- Twitter Cards
- Favicon configurado

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Acessibilidade
- Navegação por teclado completa
- ARIA labels e roles
- Contraste adequado (4.5:1)
- Focus states visíveis
- Suporte a screen readers

## 🌐 Compatibilidade

### Navegadores Suportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Dispositivos
- Desktop (1920px+)
- Laptop (1366px+)
- Tablet (768px+)
- Mobile (375px+)

## 📈 Analytics e Tracking

O portfólio inclui tracking básico para:
- Cliques em links externos
- Submissões de formulário
- Visualizações de projetos
- Interações principais

Para adicionar Google Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Manutenção

### Atualizações Regulares
- Mantenha dependências atualizadas
- Verifique performance com Lighthouse
- Teste em diferentes dispositivos
- Valide acessibilidade

### Backup
- Mantenha backup do código
- Versionamento com Git
- Backup das imagens originais

## 📞 Suporte

Para dúvidas ou sugestões:
- **Email**: juhcosta23@gmail.com
- **WhatsApp**: +55 (61) 98101-6563
- **LinkedIn**: linkedin.com/in/bg21
- **GitHub**: github.com/bg21

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como inspiração para seu próprio portfólio.

---

**Desenvolvido com ❤️ por Juliana Costa**

*Transformando ideias em soluções digitais inovadoras*
