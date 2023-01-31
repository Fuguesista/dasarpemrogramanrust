"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[6971],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>g});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function o(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},o=Object.keys(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var p=n.createContext({}),u=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},l=function(a){var e=u(a.components);return n.createElement(p.Provider,{value:e},a.children)},m={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,o=a.originalType,p=a.parentName,l=s(a,["components","mdxType","originalType","parentName"]),k=u(t),g=r,d=k["".concat(p,".").concat(g)]||k[g]||m[g]||o;return t?n.createElement(d,i(i({ref:e},l),{},{components:t})):n.createElement(d,i({ref:e},l))}));function g(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var o=t.length,i=new Array(o);i[0]=k;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=a,s.mdxType="string"==typeof a?a:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1269:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1,title:"Belajar Rust",sidebar_label:"Dasar Pemrograman Rust"},i=void 0,s={unversionedId:"index",id:"index",title:"Belajar Rust",description:"Rust adalah sebuah bahasa pemrograman general purpose yang fokus pada performance, type safety, dan concurrency. Bahasa ini diciptakan sebagai alternatif bahasa pemrograman yang berfokus pada hal-hal yang cukup low-level tapi tetap men-support fitur yang sifatnya high-level.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Belajar Rust",sidebar_label:"Dasar Pemrograman Rust"},sidebar:"tutorialSidebar",next:{title:"Pengenalan Rust Programming",permalink:"/pengelanan-rust-programming"}},p={},u=[{value:"Download Ebook File (pdf)",id:"download-ebook-file-pdf",level:2},{value:"Source Code Praktik",id:"source-code-praktik",level:2},{value:"Kontribusi",id:"kontribusi",level:2},{value:"Lisensi dan Status FOSSA",id:"lisensi-dan-status-fossa",level:2},{value:"Author &amp; Maintainer",id:"author--maintainer",level:2}],l={toc:u};function m(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rust adalah sebuah bahasa pemrograman ",(0,r.kt)("em",{parentName:"p"},"general purpose")," yang fokus pada ",(0,r.kt)("em",{parentName:"p"},"performance"),", ",(0,r.kt)("em",{parentName:"p"},"type safety"),", dan ",(0,r.kt)("em",{parentName:"p"},"concurrency"),". Bahasa ini diciptakan sebagai alternatif bahasa pemrograman yang berfokus pada hal-hal yang cukup ",(0,r.kt)("em",{parentName:"p"},"low-level")," tapi tetap men-support fitur yang sifatnya ",(0,r.kt)("em",{parentName:"p"},"high-level"),"."),(0,r.kt)("p",null,"E-book Dasar Pemrograman Rust ini dibuat dengan harapan bisa menjadi alternatif referensi belajar Rust, disajikan dengan penyampaian yang cocok untuk pembaca di level ",(0,r.kt)("em",{parentName:"p"},"beginner"),". Buku ini ada bukan untuk menggantikan ",(0,r.kt)("em",{parentName:"p"},"the book"),", melainkan sebagai komplemen."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn"},"Dokumentasi ",(0,r.kt)("em",{parentName:"a"},"official")," Rust")," sangat lengkap, dan aktif di-update oleh komunitas. Jika pembaca sudah memiliki banyak pengalaman dalam programming, sudah paham mengenai system programming seperti C atau C++, maka penulis sangat anjurkan untuk langsung menggunakan ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn"},(0,r.kt)("em",{parentName:"a"},"the book"))," sebagai referensi belajar."),(0,r.kt)("p",null,"Versi e-book: ",(0,r.kt)("strong",{parentName:"p"},"1.0.0-alpha1.20230125"),", dan versi ",(0,r.kt)("a",{parentName:"p",href:"https://blog.rust-lang.org/2022/11/03/Rust-1.65.0.html"},"Rust 1.65.0"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"E-book ini aktif dalam pengembangan, kami akan tambah terus konten-kontennya. Silakan cek di ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/novalagung/dasarpemrogramanrust-example"},"Github repo")," kami mengenai progress development e-book.")),(0,r.kt)("h2",{id:"download-ebook-file-pdf"},"Download Ebook File (pdf)"),(0,r.kt)("p",null,"Ebook ini bisa di-download dalam bentuk file, silakan gunakan link berikut:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/novalagung/dasarpemrogramanrust/raw/ebooks/dasarpemrogramanrust.pdf?v=1.0.0-alpha1.20221221"},"Dasar Pemrograman Rust v1.0.0-alpha1.20221221.pdf"))),(0,r.kt)("h2",{id:"source-code-praktik"},"Source Code Praktik"),(0,r.kt)("p",null,"Source code contoh program bisa diunduh di ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/novalagung/dasarpemrogramanrust-example"},"github.com/novalagung/dasarpemrogramanrust-example"),". Dianjurkan untuk sekedar tidak copy-paste dari source code dalam proses belajar, usahakan tulis sendiri kode program agar cepat terbiasa dengan bahasa Rust."),(0,r.kt)("h2",{id:"kontribusi"},"Kontribusi"),(0,r.kt)("p",null,"Ebook ini merupakan project open source, teruntuk siapapun yang ingin berkontribusi silakan langsung saja cek ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/novalagung/dasarpemrogramanrust"},"github.com/novalagung/dasarpemrogramanrust"),". Cek juga ",(0,r.kt)("a",{parentName:"p",href:"/CONTRIBUTING"},"halaman kontributor")," untuk melihat list kontributor."),(0,r.kt)("h2",{id:"lisensi-dan-status-fossa"},"Lisensi dan Status FOSSA"),(0,r.kt)("p",null,"Ebook Dasar Pemrograman Rust gratis untuk disebarluaskan secara bebas, baik untuk komersil maupun tidak, dengan catatan harus disertakan credit sumber aslinya (yaitu Dasar Pemrograman Rust atau novalagung) dan tidak mengubah lisensi aslinya (yaitu CC BY-SA 4.0). Lebih jelasnya silakan cek halaman ",(0,r.kt)("a",{parentName:"p",href:"/LICENSE"},"lisensi dan distribusi konten"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.fossa.io/projects/git%2Bgithub.com%2Fnovalagung%2Fdasarpemrogramanrust?ref=badge_large"},(0,r.kt)("img",{parentName:"a",src:"https://app.fossa.io/api/projects/git%2Bgithub.com%2Fnovalagung%2Fdasarpemrogramanrust.svg?type=large",alt:"FOSSA Status"}))),(0,r.kt)("h2",{id:"author--maintainer"},"Author & Maintainer"),(0,r.kt)("p",null,"Ebook ini dibuat oleh Noval Agung Prayogo. Untuk pertanyaan, kritik, dan saran, silakan drop email ke ",(0,r.kt)("a",{parentName:"p",href:"mailto:caknopal@gmail.com"},"caknopal@gmail.com"),"."))}m.isMDXComponent=!0}}]);