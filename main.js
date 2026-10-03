/* ===== CONFIGURAÇÃO: edite aqui nome, contatos e endereço ===== */
const CFG={
  nome:"XBurgo",
  whatsapp:"558981025519",              // DDI+DDD+número, só dígitos
  telefone:"+55 89 8102-5519",
  instagram:"https://instagram.com/xburgo",
  tiktok:"https://tiktok.com/@xburgo",
  facebook:"https://facebook.com/xburgo",
  endereco:"Rua Exemplo, 123 - Cidade, UF",   // o mapa da página da loja usa este endereço
  horario:"Seg a Dom, 18h às 23h",
  avaliacao:"",   // link de avaliação do Google (https://search.google.com/local/writereview?placeid=SEU_PLACE_ID). Vazio = abre a loja no Google Maps
  historia:[      // textos de exemplo: troque pela história real da loja
    "A XBurgo nasceu da vontade de servir hambúrguer de verdade: carne de 125g, queijo derretendo, molho da casa e pão macio, tudo feito na hora.",
    "Começamos com poucos lanches e muito capricho. Hoje o cardápio vai do X Bruto ao X Burgão, sempre com o mesmo cuidado em cada pedido.",
    "Venha conhecer, peça pelo WhatsApp e conte para a gente o que achou. Sua avaliação ajuda a XBurgo a crescer."
  ]
};
/* ===== COMBO (card com +): foto e valor de exemplo. Para um lanche específico, use combo:{...} dentro dele ===== */
/* ===== PATROCINADOR (canto superior direito do topo) ===== */
const SPONSOR={tiktok:"https://www.tiktok.com/@r3ynd4",logo:"img/reynventando-tv.png",nome:"ReynventandoTV",texto:"patrocinador oficial"};
const COMBO={nome:"Combo",desc:"Batata + refrigerante",preco:12.9,img:""}; // img: "img/combo.jpg"
/* ===== CARDÁPIO: "img" = caminho da foto (ex: "img/x-bruto.jpg") ===== */
const BASE="Carne 125g, queijo, catupiry";
const BURGERS=[
{n:"X Bruto",p:15,i:BASE+", batata palha, molho da casa"},
{n:"X Garden",p:17,i:BASE+", batata palha, alface, tomate, cebola, molho da casa"},
{n:"X Caipira",p:18,i:BASE+", batata palha, alface, tomate, cebola, ovo, molho da casa"},
{n:"X Triplo Queijo",p:20,i:"Carne 125g, queijo cheddar, queijo muçarela, catupiry, batata palha, alface, tomate, cebola, molho da casa"},
{n:"X Baconado",p:22,i:BASE+", batata palha, alface, tomate, cebola, bacon, molho da casa"},
{n:"X Defumado",p:22,i:BASE+", batata palha, alface, tomate, cebola, calabresa, molho da casa"},
{n:"X Mexicano",p:24,i:BASE+", alface, tomate, cebola, pimenta, nachos, molho da casa, bacon"},
{n:"X Burgão",p:26,i:BASE+", batata palha, alface, tomate, cebola, bacon, calabresa, ovo, molho da casa"}
].map((b,x)=>({...b,id:x,img:"img/"+["foto4", "foto5", "foto6", "foto2", "foto1", "foto6", "foto3", "foto1"][x]+".jpg"}));
const HERO=[{img:"img/foto4.jpg",to:"#/lanche/0"},{img:"img/foto2.jpg",to:"#/lanche/3"},{img:"img/foto5.jpg",to:"#/cardapio"}]; // 3 cards que giram no topo

const ICON={
pin:'<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
wa:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.3.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.2z"/></svg>',
ig:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.3"/></svg>',
tt:'<svg viewBox="0 0 24 24"><path d="M16 3c.3 2.4 1.8 4 4 4.2v3.2c-1.5 0-2.9-.5-4-1.3V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.3a2.8 2.8 0 1 0 1.8 2.6V3H16z"/></svg>',
fb:'<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/></svg>'
};
ICON.star='<svg viewBox="0 0 24 24"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L8 14.2 3 9.3l6.9-1z"/></svg>';
const money=v=>"R$ "+v.toFixed(2).replace(".",",");
const wa=t=>`https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(t)}`;
const maps=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CFG.endereco)}`;
const pic=b=>`<img src="${b.img}" alt="${b.n}">`;
const app=document.getElementById("app");

/* topo: letreiro, marca e botão flutuante */
const tk=BURGERS.map(b=>`<span>${b.n.toUpperCase()}<b>${money(b.p)}</b></span>`).join("");
document.getElementById("ticker").innerHTML=tk+tk;
const wf=document.getElementById("waFloat");wf.href=wa("Olá! Gostaria de fazer um pedido.");wf.innerHTML=ICON.wa;

function footer(){return `<footer id="contato"><div class="f">${CFG.nome}</div>
  <a class="addr" href="${maps}" target="_blank" rel="noopener">${ICON.pin}<span>${CFG.endereco}</span></a>
  <div>${CFG.telefone}</div><div>${CFG.horario}</div>
  <div class="social">
    <a class="w" href="${wa("Olá! Gostaria de fazer um pedido.")}" target="_blank" rel="noopener">${ICON.wa} WhatsApp</a>
    <a href="${CFG.instagram}" target="_blank" rel="noopener">${ICON.ig} Instagram</a>
    <a href="${CFG.tiktok}" target="_blank" rel="noopener">${ICON.tt} TikTok</a>
    <a href="${CFG.facebook}" target="_blank" rel="noopener">${ICON.fb} Facebook</a>
  </div></footer>`}

function home(to){
  const rows=BURGERS.map(b=>`<a class="row" href="#/lanche/${b.id}"><div class="card">${pic(b)}</div>
    <div class="txt"><div class="head"><h3>${b.n}</h3><span class="price">${money(b.p)}</span></div><p>${b.i}.</p></div></a>`).join("");
  app.innerHTML=`
  <header class="hero"><div class="bg"></div>
    <div class="sponsor">
      <a class="spon-logo" href="${SPONSOR.tiktok}" target="_blank" rel="noopener" aria-label="TikTok @r3ynd4 - ${SPONSOR.nome}"><img src="${SPONSOR.logo}" alt="${SPONSOR.nome}"></a>
      <small>${SPONSOR.texto}</small>
    </div>
    <h1 class="logo"><img src="img/logo.png" alt="${CFG.nome}"></h1><div class="tag">Hamburgueria artesanal</div>
    <div class="stage">${HERO.map(h=>`<div class="orb" onclick="location.hash='${h.to}'"><img src="${h.img}" alt=""></div>`).join("")}</div>
    <div class="dots"><i></i><i></i><i></i></div>
  </header>
  <section class="menu" id="cardapio">
    <div class="title"><h2>Cardápio<em>${CFG.nome}</em></h2></div>${rows}
  </section>${footer()}`;
  orbit();
  if(to){setTimeout(()=>document.getElementById(to).scrollIntoView(),30)}else scrollTo(0,0);
}
let raf=0;
function orbit(){
  cancelAnimationFrame(raf);
  const st=document.querySelector(".stage"),cs=[...document.querySelectorAll(".orb")],ds=[...document.querySelectorAll(".dots i")];
  let n=0,a=0,from=0,t0=performance.now(),mt=0,moving=false;
  const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  const place=()=>{const W=st.clientWidth;
    cs.forEach((c,k)=>{const r=(a+k*120)*Math.PI/180,x=Math.sin(r),u=(Math.cos(r)+1)/2;
      c.style.transform=`translateX(-50%) translate(${x*W*.34}px,${(1-u)*44}px) scale(${.6+.4*u}) rotate(${x*5}deg)`;
      c.style.zIndex=Math.round(u*100);c.style.filter=`brightness(${.4+.6*u})`});
    ds.forEach((d,i)=>d.classList.toggle("on",i===n%3))};
  place();onresize=place;
  if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  const loop=now=>{
    if(!moving&&now-t0>4000){moving=true;mt=now;from=a;n++}
    if(moving){const p=Math.min(1,(now-mt)/1500);a=from-120*ease(p);place();if(p===1){moving=false;t0=now}}
    raf=requestAnimationFrame(loop)};
  raf=requestAnimationFrame(loop);
}
function detail(id){
  cancelAnimationFrame(raf);
  const b=BURGERS[id];if(!b){location.hash="#/";return}
  const cb={...COMBO,...(b.combo||{})};
  app.innerHTML=`<div class="detail"><a class="back" href="#/cardapio">← Voltar ao cardápio</a>
  <article class="big"><div class="pic">${pic(b)}</div>
    <div class="info"><h1>${b.n}</h1>
      <ul class="specs"><li><b>Ingredientes</b><span>${b.i}</span></li>
        <li><b>Carne</b><span>125 g</span></li></ul>
      <a class="combo" href="${wa("Olá! Quero um "+b.n+" + "+cb.nome+" ("+money(b.p+cb.preco)+").")}" target="_blank" rel="noopener">
        <span class="slot${cb.img?" has":""}">${cb.img?`<img src="${cb.img}" alt="${cb.nome}">`:""}<i>+</i></span>
        <span class="ct"><b>${cb.nome}</b><small>${cb.desc}</small><em>+ ${money(cb.preco)}</em></span></a>
      <div class="buy"><span class="price">${money(b.p)}</span>
        <a class="btn" href="${wa("Olá! Quero pedir um "+b.n+" ("+money(b.p)+").")}" target="_blank" rel="noopener">${ICON.wa} Pedir no WhatsApp</a></div>
    </div></article></div>${footer()}`;
  scrollTo(0,0);
}
function sobre(){
  cancelAnimationFrame(raf);
  app.innerHTML=`<div class="about"><a class="back" href="#/">← Voltar ao início</a>
    <h1>Nossa história</h1>${CFG.historia.map(t=>`<p class="hist">${t}</p>`).join("")}
    <div class="map"><iframe title="Mapa da loja" src="https://www.google.com/maps?q=${encodeURIComponent(CFG.endereco)}&output=embed" loading="lazy" allowfullscreen></iframe></div>
    <a class="addr" href="${maps}" target="_blank" rel="noopener">${ICON.pin}<span>${CFG.endereco}</span></a>
    <div class="actions"><a class="btn am" href="${CFG.avaliacao||maps}" target="_blank" rel="noopener">${ICON.star} Avaliar a loja</a></div>
  </div>${footer()}`;
  scrollTo(0,0);
}
function route(){
  const h=location.hash||"#/",m=h.match(/^#\/lanche\/(\d+)/);
  if(m)return detail(+m[1]);
  if(h==="#/sobre")return sobre();
  if(h==="#/cardapio")return home("cardapio");
  if(h==="#/contato")return home("contato");
  home();
}
addEventListener("hashchange",route);route();
