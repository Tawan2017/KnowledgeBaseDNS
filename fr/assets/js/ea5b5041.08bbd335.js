"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[723],{4137:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return r?a.createElement(f,s(s({ref:t},d),{},{components:r})):a.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},89:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=r(3117),n=r(102),i=(r(7294),r(4137)),s=["components"],l={title:"Filtrage DNS",sidebar_position:1},o=void 0,u={unversionedId:"general/dns-filtering",id:"general/dns-filtering",title:"Filtrage DNS",description:"La fa\xe7on la plus simple d'explorer les avantages du filtrage DNS est d'installer le Bloqueur AdGuard ou d'essayer AdGuard DNS. Si vous souhaitez filtrer les DNS au niveau du r\xe9seau, AdGuard Home est votre outil id\xe9al",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/general/dns-filtering.md",sourceDirName:"general",slug:"/general/dns-filtering",permalink:"/KnowledgeBaseDNS/fr/general/dns-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/general/dns-filtering.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Filtrage DNS",sidebar_position:1},sidebar:"sidebar",previous:{title:"Vue d'ensemble",permalink:"/KnowledgeBaseDNS/fr/"},next:{title:"Syntaxe des r\xe8gles de filtrage DNS",permalink:"/KnowledgeBaseDNS/fr/general/dns-filtering-syntax"}},d={},p=[{value:"Qu&#39;est-ce que le DNS ?",id:"quest-ce-que-le-dns-",level:2},{value:"Comment fonctionne le filtrage DNS ?",id:"comment-fonctionne-le-filtrage-dns-",level:2},{value:"Serveurs DNS",id:"serveurs-dns",level:3},{value:"Listes de blocage DNS locales",id:"listes-de-blocage-dns-locales",level:3},{value:"Filtrage DNS vs filtrage r\xe9seau",id:"filtrage-dns-vs-filtrage-r\xe9seau",level:2}],c={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"La fa\xe7on la plus simple d'explorer les avantages du filtrage DNS est d'installer le Bloqueur AdGuard ou d'essayer AdGuard DNS. Si vous souhaitez filtrer les DNS au niveau du r\xe9seau, AdGuard Home est votre outil id\xe9al"),(0,i.kt)("p",{parentName:"div"},"Quick links: ",(0,i.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"Download AdGuard Ad Blocker"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome#getting-started"},"Get AdGuard Home"),", ",(0,i.kt)("a",{parentName:"p",href:"https://agrd.io/download-dns"},"Try AdGuard DNS")))),(0,i.kt)("p",null,"Pour mieux comprendre le filtrage DNS, il faut d'abord r\xe9pondre \xe0 la question \"Qu'est-ce que le DNS ?\"."),(0,i.kt)("h2",{id:"quest-ce-que-le-dns-"},"Qu'est-ce que le DNS ?"),(0,i.kt)("p",null,"DNS est l'abr\xe9viation de \"Domain Name System\", et son objectif est de traduire les noms des sites web en quelque chose que les navigateurs peuvent comprendre, c'est-\xe0-dire en des adresses IP. Donc, chaque fois que vous acc\xe9dez \xe0 un site web, votre navigateur envoie une requ\xeate \xe0 un type de serveur sp\xe9cial (serveur DNS). Ce serveur examine le nom de domaine demand\xe9 et r\xe9pond avec une adresse IP correspondante. Tr\xe8s sch\xe9matiquement, il peut \xeatre repr\xe9sent\xe9 comme ceci :"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png",alt:"Comment fonctionne le DNS"})),(0,i.kt)("p",null,"Il en va de m\xeame, bien s\xfbr, pour toutes les applications et tous les programmes qui envoient des requ\xeates web, et pas seulement pour les navigateurs."),(0,i.kt)("h2",{id:"comment-fonctionne-le-filtrage-dns-"},"Comment fonctionne le filtrage DNS ?"),(0,i.kt)("p",null,"Lorsque vous utilisez l'une des applications AdGuard qui prend en charge le filtrage DNS, elle agit comme un tampon entre votre appareil et le serveur DNS. Toutes les requ\xeates DNS que vos navigateurs ou applications sont sur le point d'envoyer sont d'abord trait\xe9es par AdGuard. Si vous utilisez le serveur DNS par d\xe9faut fourni par votre FAI, votre trafic DNS n\u2019est probablement pas chiffr\xe9 et donc vuln\xe9rable \xe0 l\u2019espionnage et au d\xe9tournement. AdGuard crypte toutes vos requ\xeates DNS avant qu'elles ne quittent votre appareil, afin qu'aucun malfaiteur ne puisse avoir acc\xe8s \xe0 leur contenu. En outre, AdGuard peut identifier les demandes adress\xe9es aux domaines publicitaires, de suivi et/ou pour adultes et les rediriger vers un \"trou noir\" au lieu de les transmettre au serveur DNS. Plus \xe0 ce sujet ",(0,i.kt)("a",{parentName:"p",href:"#local-dns-blocklists"},"plus tard"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"Comment fonctionne le filtrage DNS"})),(0,i.kt)("p",null,"Le filtrage DNS est un outil puissant et il est pris en charge par toutes les principales applications AdGuard : ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-windows/overview.html"},"AdGuard pour Windows"),", ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-mac/overview.html"},"AdGuard pour Mac"),", ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"AdGuard pour Android")," et ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-ios/overview.html"},"AdGuard pour iOS"),"."),(0,i.kt)("p",null,"Le filtrage DNS peut \xeatre divis\xe9 en deux fonctions distinctes\xa0: chiffrer et rediriger le trafic DNS vers les serveurs DNS, et bloquer certains domaines localement en appliquant des listes de blocage DNS."),(0,i.kt)("h3",{id:"serveurs-dns"},"Serveurs DNS"),(0,i.kt)("p",null,"Il existe des milliers de serveurs DNS parmi lesquels choisir, et ils sont tous uniques dans leurs propri\xe9t\xe9s et leurs objectifs. La plupart renvoient simplement l'adresse IP du domaine demand\xe9, mais certains ont des fonctions suppl\xe9mentaires : ils bloquent les publicit\xe9s, le suivi, les domaines pour adultes, etc. De nos jours, tous les principaux serveurs DNS utilisent un ou plusieurs protocoles de cryptage fiables : DNS-over-HTTPS, DNS-over-TLS. AdGuard fournit \xe9galement un service DNS ",(0,i.kt)("a",{parentName:"p",href:"https://adguard-dns.io/"}),", et a \xe9t\xe9 le premier au monde \xe0 offrir le tr\xe8s nouveau et prometteur protocole de cryptage ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/blog/dns-over-quic.html"},"DNS-over-QUIC"),". AdGuard dispose de serveurs diff\xe9rents pour de diff\xe9rents objectifs. Ce sch\xe9ma illustre le fonctionnement des serveurs de blocage AdGuard\xa0:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg",alt:"AdGuard DNS"})),(0,i.kt)("p",null,"D'autres fournisseurs de DNS peuvent fonctionner diff\xe9remment. Renseignez-vous sur eux avant de vous engager avec tel ou tel serveur DNS. Vous pouvez trouver la liste des fournisseurs de DNS les plus populaires dans ",(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/fr/general/dns-providers"},"cet article"),". Toutes les applications AdGuard qui prennent en charge la fonctionnalit\xe9 DNS disposent \xe9galement d'une liste de serveurs DNS \xe0 choisir, ou permettent m\xeame de s\xe9lectionner n'importe quel serveur DNS personnalis\xe9."),(0,i.kt)("h3",{id:"listes-de-blocage-dns-locales"},"Listes de blocage DNS locales"),(0,i.kt)("p",null,"Mais en vous fiant uniquement aux serveurs DNS pour filtrer votre trafic DNS, vous perdez toute flexibilit\xe9. Si le serveur s\xe9lectionn\xe9 bloque un domaine, vous ne pouvez pas y acc\xe9der. Avec AdGuard, vous n'avez m\xeame pas besoin de configurer un serveur DNS sp\xe9cifique pour filtrer le trafic DNS. Tous les produits AdGuard vous permettent d'utiliser des listes de blocage DNS, qu'il s'agisse de simples fichiers d'h\xf4tes ou de listes utilisant une ",(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/fr/general/dns-filtering-syntax"},"syntaxe plus avanc\xe9e"),". Elles fonctionnent de la m\xeame mani\xe8re que les listes de blocage classiques\xa0: lorsqu'une requ\xeate DNS correspond \xe0 l'une des r\xe8gles de la liste de filtres actifs, elle est bloqu\xe9e. Plus pr\xe9cis\xe9ment, elle est redirig\xe9e vers un \"trou noir\"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In AdGuard for iOS, first you have to enable ",(0,i.kt)("em",{parentName:"p"},"Advanced mode")," in settings in order to get access to DNS blocking."))),(0,i.kt)("p",null,"You can add as many custom blocklists as you wish. For instance, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardSDNSFilter"},"AdGuard DNS filter"),'. It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.'),(0,i.kt)("p",null,"There are hundreds of different DNS blocklists, you can look for them ",(0,i.kt)("a",{parentName:"p",href:"https://filterlists.com/"},"here"),"."),(0,i.kt)("h2",{id:"filtrage-dns-vs-filtrage-r\xe9seau"},"Filtrage DNS vs filtrage r\xe9seau"),(0,i.kt)("p",null,"Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/"},"this article"),"."),(0,i.kt)("p",null,"First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pros of DNS filtering:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sur certaines plateformes, c'est le seul moyen d'obtenir un filtrage \xe0 l'\xe9chelle du syst\xe8me. Par exemple, sur iOS, seul le navigateur Safari prend en charge le blocage de contenu au sens familier, pour tout le reste, il n'y a que le filtrage DNS."),(0,i.kt)("li",{parentName:"ol"},"Certaines formes de suivi (comme le suivi masqu\xe9 ",(0,i.kt)("a",{parentName:"li",href:"https://adguard.com/blog/cname-tracking.html"},"CNAME"),") ne peuvent \xeatre trait\xe9es que par le filtrage DNS."),(0,i.kt)("li",{parentName:"ol"},"L'\xe9tape de traitement d'une requ\xeate DNS est la plus pr\xe9coce \xe0 laquelle vous pourriez avoir affaire avec une publicit\xe9 ou un traqueur, ce qui permet d'\xe9conomiser un peu d'autonomie de la batterie et de trafic.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cons of DNS filtering:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Le filtrage DNS est \"rudimentaire\", ce qui signifie qu'il ne supprimera pas les espaces vides laiss\xe9s derri\xe8re une publicit\xe9 bloqu\xe9e, ni n'appliquera aucune sorte de filtrage cosm\xe9tique. La plupart des publicit\xe9s les plus compliqu\xe9es ne peuvent pas \xeatre bloqu\xe9es au niveau DNS (ou plut\xf4t, elles le peuvent, mais uniquement en bloquant les domaines entiers qui sont utilis\xe9s \xe0 d'autres fins)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg",alt:"Exemple de diff\xe9rence"})," ",(0,i.kt)("em",{parentName:"p"},"Un exemple de la diff\xe9rence entre le filtrage DNS et le filtrage r\xe9seau"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"C'est impossible de conna\xeetre l'origine d'une requ\xeate DNS, ce qui signifie que vous ne pouvez pas faire la distinction entre des apps diff\xe9rentes au niveau DNS. Cela a un impact n\xe9gatif sur les statistiques et rend impossible la cr\xe9ation de r\xe8gles de filtrage sp\xe9cifiques \xe0 l'application."))),(0,i.kt)("p",null,"We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible."))}m.isMDXComponent=!0}}]);