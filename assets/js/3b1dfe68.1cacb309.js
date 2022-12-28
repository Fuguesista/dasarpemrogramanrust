"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[6161],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>k});var i=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var m=i.createContext({}),p=function(e){var a=i.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},u=function(e){var a=p(e.components);return i.createElement(m.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},o=i.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),o=p(n),k=t,g=o["".concat(m,".").concat(k)]||o[k]||d[k]||l;return n?i.createElement(g,r(r({ref:a},u),{},{components:n})):i.createElement(g,r({ref:a},u))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,r=new Array(l);r[0]=o;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:t,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}o.displayName="MDXCreateElement"},4008:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=n(7462),t=(n(7294),n(3905));const l={sidebar_position:28,title:"A.28. Module System \u2192 Visibility & Privacy",sidebar_label:"A.28. Module System \u2192 Visibility & Privacy"},r=void 0,s={unversionedId:"basic/visibility-privacy",id:"basic/visibility-privacy",title:"A.28. Module System \u2192 Visibility & Privacy",description:"Kita sebenarnya sudah mempelajari banyak hal yang berhubungan dengan visibility & privacy pada beberapa chapter sebelumnya. Jika pembaca mempelajari ebook ini secara urut, maka pastinya sudah familiar dengan keyword pub, self, crate, dan super.",source:"@site/docs/basic/visibility-privacy.md",sourceDirName:"basic",slug:"/basic/visibility-privacy",permalink:"/basic/visibility-privacy",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{sidebar_position:28,title:"A.28. Module System \u2192 Visibility & Privacy",sidebar_label:"A.28. Module System \u2192 Visibility & Privacy"},sidebar:"tutorialSidebar",previous:{title:"A.27. Type Alias & Casting",permalink:"/basic/type-alias-casting"},next:{title:"A.29. Module System \u2192 Use, Import, Re-export",permalink:"/basic/use"}},m={},p=[{value:"A.28.1. Pembahasan module system",id:"a281-pembahasan-module-system",level:2},{value:"A.28.2. Default visibility",id:"a282-default-visibility",level:2},{value:"A.28.3. Re-export item",id:"a283-re-export-item",level:2},{value:"A.28.4. Public visibility scope",id:"a284-public-visibility-scope",level:2},{value:"\u25c9 Keyword <code>pub</code>",id:"-keyword-pub",level:3},{value:"\u25c9 Keyword <code>pub(in path)</code>",id:"-keyword-pubin-path",level:3},{value:"\u25c9 Keyword <code>pub(crate)</code>",id:"-keyword-pubcrate",level:3},{value:"\u25c9 Keyword <code>pub(super)</code>",id:"-keyword-pubsuper",level:3},{value:"\u25c9 Keyword <code>pub(self)</code>",id:"-keyword-pubself",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktek",id:"-source-code-praktek",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],u={toc:p};function d(e){let{components:a,...l}=e;return(0,t.kt)("wrapper",(0,i.Z)({},u,l,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Kita sebenarnya sudah mempelajari banyak hal yang berhubungan dengan visibility & privacy pada beberapa chapter sebelumnya. Jika pembaca mempelajari ebook ini secara urut, maka pastinya sudah familiar dengan keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"pub"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"self"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"crate"),", dan ",(0,t.kt)("inlineCode",{parentName:"p"},"super"),"."),(0,t.kt)("p",null,"Chapter ini merupakan pembahasan tambahan untuk ke-4 keyword tersebut, dan fokusnya lebih ke visibility & privacy di Rust secara general."),(0,t.kt)("p",null,"O iya, perihal ",(0,t.kt)("em",{parentName:"p"},"visbility")," dan ",(0,t.kt)("em",{parentName:"p"},"privacy")," itu sendiri, kedua istilah tersebut di sini kita maknai sama, yang artinya kurang lebih adalah tentang manajemen akses item di Rust."),(0,t.kt)("h2",{id:"a281-pembahasan-module-system"},"A.28.1. Pembahasan module system"),(0,t.kt)("p",null,"Pastikan sudah mempelajari 5 buah chapter tentang module system yang sebelumnya sudah dibahas. Kesemua chapter tersebut sangat berhubungan dengan pembahasan chapter ini."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/basic/path-item"},"A.18. Module System \u2192 Path & Item")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/basic/package-crate"},"A.19. Module System \u2192 Package & Crate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/basic/module-basic"},"A.20. Module System \u2192 Module")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/basic/module-inline"},"A.21. Module System \u2192 Inline Module")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/basic/module-scope-item-access"},"A.22. Module System \u2192 Scope & Akses Item"))),(0,t.kt)("h2",{id:"a282-default-visibility"},"A.28.2. Default visibility"),(0,t.kt)("p",null,"Di Rust, ",(0,t.kt)("em",{parentName:"p"},"by default"),", hampir semua item adalah private. Apa efeknya ketika item adalah private atau publik? Silakan ingat 2 aturan penting berikut:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Jika suatu item adalah private, maka item tersebut hanya bisa diakses dari ",(0,t.kt)("em",{parentName:"li"},"current module scope")," dan dari ",(0,t.kt)("em",{parentName:"li"},"submodules")," milik ",(0,t.kt)("em",{parentName:"li"},"current module"),"."),(0,t.kt)("li",{parentName:"ol"},"Jika suatu item adalah publik, maka dia bisa diakses dari module lain di luar ",(0,t.kt)("em",{parentName:"li"},"current module scope"),", dengan catatan parent module scope item tersebut harus publik.")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Kita sepakati di sini, pada istilah ",(0,t.kt)("strong",{parentName:"p"},"current module")," kata ",(0,t.kt)("em",{parentName:"p"},"module")," disitu bisa saja tertuju untuk module atau juga submodule")),(0,t.kt)("p",null,"Dua point di atas sangat penting untuk dipahami, karena digunakan sebagai landasan pertimbangan dalam penyusunan hirarki module. Sebagai contoh, kita bisa membuat program yang hanya meng-expose API tertentu (yang memang diperlukan untuk diakses oleh publik), tanpa perlu ikut meng-expose detail implementasinya."),(0,t.kt)("p",null,"Ok, sekarang silakan perhatikan path sederhana di bawah ini. Diasumsikan ada sebuah fungsi yang path aksesnya adalah berikut:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"messaging::service_layer::some_black_magic\n")),(0,t.kt)("p",null,"Segmen pertama yaitu ",(0,t.kt)("inlineCode",{parentName:"p"},"messaging")," pasti adalah publik, karena di-import ke ",(0,t.kt)("em",{parentName:"p"},"crate root"),". Lalu bagaimana dengan segmen ",(0,t.kt)("inlineCode",{parentName:"p"},"service_layer")," dan juga ",(0,t.kt)("inlineCode",{parentName:"p"},"some_black_magic"),"?"),(0,t.kt)("p",null,"Jika item ",(0,t.kt)("inlineCode",{parentName:"p"},"some_black_magic")," disitu adalah publik, maka idealnya pengaksesan menggunakan path tersebut memungkinkan. Tapi kembali ke point ke-2 aturan yang sudah dibahas diatas, yaitu meskipun ",(0,t.kt)("inlineCode",{parentName:"p"},"some_black_magic")," adalah publik, jika parent-nya (yang pada konteks ini adalah ",(0,t.kt)("inlineCode",{parentName:"p"},"service_layer"),") adalah private, maka pengaksesan menggunakan path tersebut menghasilkan error."),(0,t.kt)("p",null,"Intinya, ",(0,t.kt)("strong",{parentName:"p"},"sebuah item bisa diakses jika item tersebut adalah publik, dan parent item tersebut juga publik. Sedangkan default visibility untuk hampir semua item adalah private.")),(0,t.kt)("p",null,"Ok, sekarang mari lanjut ke praktek menggunakan contoh dengan pembahasan yang lebih mendetail. Silakan perhatikan dan praktekan kode berikut:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="package source code structure"',title:'"package',source:!0,code:!0,'structure"':!0},"my_package\n\u2502\u2500\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500\u2500 src\n     \u2502\u2500\u2500\u2500 messaging.rs\n     \u2514\u2500\u2500\u2500 main.rs\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/messaging.rs"',title:'"src/messaging.rs"'},'const SOME_MESSAGE: &str = "hello rust";\n\nmod service_layer {\n\n    pub fn some_black_magic() {\n        println!("{}", crate::messaging::SOME_MESSAGE)\n    }\n}\n\npub fn say_hello() {\n    service_layer::some_black_magic();\n}\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"mod messaging;\n\nfn main() {\n    messaging::say_hello();\n}\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Konstanta ",(0,t.kt)("inlineCode",{parentName:"p"},"messaging::SOME_MESSAGE")," adalah ",(0,t.kt)("strong",{parentName:"p"},"private"),". Penjelasan:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Konstanta ini merupakan module item milik ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),"."),(0,t.kt)("li",{parentName:"ul"},"Konstanta ini ",(0,t.kt)("strong",{parentName:"li"},"bisa diakses")," dari ",(0,t.kt)("em",{parentName:"li"},"current module scope")," (",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),")."),(0,t.kt)("li",{parentName:"ul"},"Konstanta ini ",(0,t.kt)("strong",{parentName:"li"},"bisa diakses")," dari submodule milik ",(0,t.kt)("em",{parentName:"li"},"current module"),", yaitu submodule dari ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),". Contohnya bisa dilihat pada fungsi ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::service_layer::some_black_magic")," yang disitu ada statement pemanggilan ",(0,t.kt)("inlineCode",{parentName:"li"},"SOME_MESSAGE"),"."),(0,t.kt)("li",{parentName:"ul"},"Konstanta ini ",(0,t.kt)("strong",{parentName:"li"},"tidak bisa diakses")," dari luar ",(0,t.kt)("em",{parentName:"li"},"current module scope")," (",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),")."))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Submodule ",(0,t.kt)("inlineCode",{parentName:"p"},"messaging::service_layer")," adalah ",(0,t.kt)("strong",{parentName:"p"},"private"),". Penjelasan:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Submodule ini merupakan module item milik ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),"."),(0,t.kt)("li",{parentName:"ul"},"Submodule ini ",(0,t.kt)("strong",{parentName:"li"},"bisa diakses")," dari ",(0,t.kt)("em",{parentName:"li"},"current module scope")," (",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),"). Contohnya bisa dilihat pada fungsi ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::say_hello")," yang disitu ada statement pemanggilan ",(0,t.kt)("inlineCode",{parentName:"li"},"service_layer"),"."),(0,t.kt)("li",{parentName:"ul"},"Submodule ini ",(0,t.kt)("strong",{parentName:"li"},"bisa diakses")," dari submodule milik ",(0,t.kt)("em",{parentName:"li"},"current module"),", yaitu submodule dari ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),"."),(0,t.kt)("li",{parentName:"ul"},"Submodule ini ",(0,t.kt)("strong",{parentName:"li"},"tidak bisa diakses")," dari luar ",(0,t.kt)("em",{parentName:"li"},"current module scope")," (",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),")."))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"messaging::service_layer::some_black_magic")," adalah ",(0,t.kt)("strong",{parentName:"p"},"publik"),". Penjelasan:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Fungsi ini merupakan module item milik ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::service_layer"),"."),(0,t.kt)("li",{parentName:"ul"},"Fungsi ini ",(0,t.kt)("strong",{parentName:"li"},"bisa diakses")," dari ",(0,t.kt)("em",{parentName:"li"},"current module scope")," (",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::service_layer"),")."),(0,t.kt)("li",{parentName:"ul"},"Fungsi ini ",(0,t.kt)("strong",{parentName:"li"},"bisa diakses")," dari submodule milik ",(0,t.kt)("em",{parentName:"li"},"current module"),", yaitu submodule dari ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::service_layer"),". Contohnya bisa dilihat pada fungsi ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::say_hello")," yang disitu ada statement pemanggilan fungsi ",(0,t.kt)("inlineCode",{parentName:"li"},"some_black_magic"),"."),(0,t.kt)("li",{parentName:"ul"},"Fungsi ini ",(0,t.kt)("strong",{parentName:"li"},"bisa diakses")," dari luar ",(0,t.kt)("em",{parentName:"li"},"current module scope")," (",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::service_layer"),")."),(0,t.kt)("li",{parentName:"ul"},"Namun meskipun demikian, bisa tidaknya fungsi ini diakses dari luar ",(0,t.kt)("em",{parentName:"li"},"current module scope")," (",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::service_layer"),") juga tergantung dengan visibility dari current module itu sendiri, yaitu ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::service_layer"),"."),(0,t.kt)("li",{parentName:"ul"},"Karena module ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::service_layer")," adalah private, meskipun fungsi ",(0,t.kt)("inlineCode",{parentName:"li"},"some_black_magic")," didalamnya adalah publik, pengaksesan fungsi tersebut dari luar module scope ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::service_layer")," tidak dimungkinkan.",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Pengaksesan ",(0,t.kt)("inlineCode",{parentName:"li"},"service_layer::some_black_magic")," dari ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::say_hello")," tidak error karena submodule ",(0,t.kt)("inlineCode",{parentName:"li"},"service_layer")," meskipun private, posisinya adalah masih dalam satu module scope yang sama dengan fungsi ",(0,t.kt)("inlineCode",{parentName:"li"},"say_hello"),"."),(0,t.kt)("li",{parentName:"ul"},"Dimisalkan jika ",(0,t.kt)("inlineCode",{parentName:"li"},"service_layer::some_black_magic")," dipaksa diakses dari ",(0,t.kt)("inlineCode",{parentName:"li"},"main"),", maka muncul error karena ",(0,t.kt)("inlineCode",{parentName:"li"},"service_layer")," adalah private dan posisinya tidak berada dalam module scope yang sama dengan crate root (",(0,t.kt)("inlineCode",{parentName:"li"},"main"),")."))))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"messaging::say_hello")," adalah ",(0,t.kt)("strong",{parentName:"p"},"public"),". Penjelasan:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Fungsi ini merupakan module item milik ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),"."),(0,t.kt)("li",{parentName:"ul"},"Fungsi ini ",(0,t.kt)("strong",{parentName:"li"},"bisa diakses")," dari ",(0,t.kt)("em",{parentName:"li"},"current module scope")," (",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),")."),(0,t.kt)("li",{parentName:"ul"},"Fungsi ini ",(0,t.kt)("strong",{parentName:"li"},"bisa diakses")," dari submodule milik ",(0,t.kt)("em",{parentName:"li"},"current module"),", yaitu submodule dari ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),"."),(0,t.kt)("li",{parentName:"ul"},"Fungsi ini ",(0,t.kt)("strong",{parentName:"li"},"bisa diakses")," dari luar ",(0,t.kt)("em",{parentName:"li"},"current module scope")," (",(0,t.kt)("inlineCode",{parentName:"li"},"messaging"),"). Contohnya bisa dilihat pada crate root fungsi ",(0,t.kt)("inlineCode",{parentName:"li"},"main"),", disitu ada pemanggilan statement ",(0,t.kt)("inlineCode",{parentName:"li"},"say_hello"),".")))),(0,t.kt)("h2",{id:"a283-re-export-item"},"A.28.3. Re-export item"),(0,t.kt)("p",null,"Pada contoh, fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"messaging::say_hello")," didesain sebagai media untuk mengakses fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"some_black_magic"),". Di situasi ",(0,t.kt)("em",{parentName:"p"},"real world")," pastinya sangat jarang terjadi sebuah fungsi isinya hanya satu baris pemanggilan fungsi lainnya. Jika memang ada situasi seperti itu, (kontekstual) lebih baik hapus saja fungsi yang jadi media pemanggilan dan langsung saja panggil fungsi didalamnya sesuai kebutuhan."),(0,t.kt)("p",null,"Pada praktek selanjutnya ini kita misalkan bahwa fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"say_hello")," isinya memang cuma 1 baris, dan yang paling penting adalah isi fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"some_black_magic")," perlu untuk bisa diakses dari ",(0,t.kt)("inlineCode",{parentName:"p"},"main"),". Untuk kasus seperti ini ada 3 alternatif solusi:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Tidak perlu mengubah apapun, gunakan saja kode yang sudah ditulis di atas. Kode tersebut sudah bisa mengakomodir pemanggilan ",(0,t.kt)("inlineCode",{parentName:"li"},"some_black_magic")," via ",(0,t.kt)("inlineCode",{parentName:"li"},"say_hello"),"."),(0,t.kt)("li",{parentName:"ol"},"Atau, hapus saja fungsi ",(0,t.kt)("inlineCode",{parentName:"li"},"say_hello"),", lalu ubah visibility module ",(0,t.kt)("inlineCode",{parentName:"li"},"service_layer")," menjadi publik, dengan demikian kita bisa mengakses ",(0,t.kt)("inlineCode",{parentName:"li"},"some_black_magic")," dari ",(0,t.kt)("inlineCode",{parentName:"li"},"main")," menggunakan path ",(0,t.kt)("inlineCode",{parentName:"li"},"messaging::service_layer::some_black_magic"),"."),(0,t.kt)("li",{parentName:"ol"},"Atau, gunakan teknik ",(0,t.kt)("strong",{parentName:"li"},"re-export item"),".")),(0,t.kt)("p",null,"Re-export item adalah sebuah cara untuk mem-",(0,t.kt)("em",{parentName:"p"},"bypass")," pengaksesan item yang secara hirarki memang tidak bisa diakses dari luar module (bisa jadi karena visibility item ataupun parent module nya adalah private). Dengan teknik ini, maka item pasti bisa diakses dari luar module."),(0,t.kt)("p",null,"Item yang di-re-export akan menjadi item milik ",(0,t.kt)("em",{parentName:"p"},"current module")," dimana statement re-export tersebut ditulis."),(0,t.kt)("p",null,"Cara re-export item adalah menggunakan keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"pub use")," kemudian diikuti dengan path yang ingin di-export dan juga nama export item dengan notasi penulisan berikut:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},"pub use the_path as exported_name;\npub use self::service_layer::some_black_magic as say_hello;\n")),(0,t.kt)("p",null,"Contoh jika diterapkan pada program yang sebelumnya sudah ditulis:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/messaging.rs"',title:'"src/messaging.rs"'},'pub use self::service_layer::some_black_magic as say_hello;\n\nconst SOME_MESSAGE: &str = "hello rust";\n\nmod service_layer {\n\n    pub fn some_black_magic() {\n        println!("{}", crate::messaging::SOME_MESSAGE)\n    }\n}\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"mod messaging;\n\nfn main() {\n    messaging::say_hello();\n}\n")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Visibility &amp; Privacy",src:n(2201).Z,width:"466",height:"109"})),(0,t.kt)("p",null,"Bisa dilihat di contoh di atas, fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"say_hello")," dihapus, kemudian item ",(0,t.kt)("inlineCode",{parentName:"p"},"service_layer::some_black_magic")," di-re-export dengan nama ",(0,t.kt)("inlineCode",{parentName:"p"},"say_hello"),". Dengannya kita bisa mengakses ",(0,t.kt)("inlineCode",{parentName:"p"},"some_black_magic")," dari luar module ",(0,t.kt)("inlineCode",{parentName:"p"},"messaging")," menggunakan path ",(0,t.kt)("inlineCode",{parentName:"p"},"messaging::say_hello"),"."),(0,t.kt)("p",null,"Jika item ingin di-re-export tanpa perubahan nama item, bisa gunakan notasi berikut:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},"pub use the_path;\npub use self::service_layer::some_black_magic;\n")),(0,t.kt)("p",null,"Jika diterapkan pada program sebelumnya, kurang lebih seperti ini:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/messaging.rs"',title:'"src/messaging.rs"'},'pub use self::service_layer::some_black_magic;\n\nconst SOME_MESSAGE: &str = "hello rust";\n\nmod service_layer {\n\n    pub fn some_black_magic() {\n        println!("{}", crate::messaging::SOME_MESSAGE)\n    }\n}\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"mod messaging;\n\nfn main() {\n    messaging::some_black_magic();\n}\n")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Lebih jelasnya mengenai keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"use")," dibahas pada chapter ",(0,t.kt)("a",{parentName:"p",href:"/basic/use"},"Module System \u2192 Use"))),(0,t.kt)("h2",{id:"a284-public-visibility-scope"},"A.28.4. Public visibility scope"),(0,t.kt)("p",null,"Keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"pub")," digunakan untuk mengubah visibility item menjadi publik. Keyword ini bisa dikombinasikan dengan salah satu dari keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"self"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"crate"),", dan ",(0,t.kt)("inlineCode",{parentName:"p"},"super"),"; denganya kita bisa menentukan visibility sebuah publik item dengan scope yang lebih spesifik."),(0,t.kt)("h3",{id:"-keyword-pub"},"\u25c9 Keyword ",(0,t.kt)("inlineCode",{parentName:"h3"},"pub")),(0,t.kt)("p",null,"Penulis rasa untuk penerapan keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"pub")," ini sudah sangat jelas, kita beberapa kali mempraktekannya."),(0,t.kt)("p",null,"Dengan keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"pub"),", sebuah item visibility-nya menjadi publik."),(0,t.kt)("h3",{id:"-keyword-pubin-path"},"\u25c9 Keyword ",(0,t.kt)("inlineCode",{parentName:"h3"},"pub(in path)")),(0,t.kt)("p",null,"Keyword ini menjadikan visibility item hanya didalam ",(0,t.kt)("inlineCode",{parentName:"p"},"path")," yang ditulis di ",(0,t.kt)("inlineCode",{parentName:"p"},"pub(in path)"),", dengan ketentuan ",(0,t.kt)("inlineCode",{parentName:"p"},"path")," tersebut merupakan parent dari module item dimana keyword digunakan."),(0,t.kt)("p",null,"Contohnya bisa dilihat pada kode berikut. Fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"say_hello")," didefinisikan publik dengan scope path ditentukan secara eksplisit adalah ",(0,t.kt)("inlineCode",{parentName:"p"},"crate::outer_mod"),". Dengan demikian fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"say_hello")," hanya bisa diakses dari dalam ",(0,t.kt)("inlineCode",{parentName:"p"},"outer_mod"),"."),(0,t.kt)("p",null,"Bisa dilihat di contoh, fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"say_hello")," diakses dari ",(0,t.kt)("inlineCode",{parentName:"p"},"do_something"),". Silakan coba saja paksa untuk mengaksesnya dari fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"main"),", hasilnya pasti error."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'pub mod outer_mod {\n\n    pub mod inner_mod {\n\n        // fungsi say_hello berikut hanya bisa diakses dari dalam `outer_mod`.\n        // pengaksesannya dari luar `outer_mod` menghasilkan error.\n        pub(in crate::outer_mod) fn say_hello() {\n            println!("hello rust")\n        }\n    }\n\n    pub fn do_something() {\n        inner_mod::say_hello();\n    }\n}\n\nfn main() {\n    outer_mod::do_something();\n}\n')),(0,t.kt)("h3",{id:"-keyword-pubcrate"},"\u25c9 Keyword ",(0,t.kt)("inlineCode",{parentName:"h3"},"pub(crate)")),(0,t.kt)("p",null,"Keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"pub(crate)")," digunakan untuk membuat visibility item menjadi publik dengan scope akses ",(0,t.kt)("em",{parentName:"p"},"current crate"),". Dengan ini item bisa diakses dari manapun asalakan masih dalam crate yang sama."),(0,t.kt)("p",null,"Contoh penerapannya bisa dilihat berikut ini. Fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"say_hello")," visibility scope nya ditentukan adalah ",(0,t.kt)("em",{parentName:"p"},"current crate"),". Fungsi tersebut bisa diakses dari ",(0,t.kt)("inlineCode",{parentName:"p"},"outer_mod_one::do_something"),", dari ",(0,t.kt)("inlineCode",{parentName:"p"},"outer_mod_two::do_something"),", dan juga dari fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'pub mod outer_mod_one {\n\n    pub mod inner_mod {\n\n        // fungsi ini visibility scope-nya di level crate\n        pub(crate) fn say_hello() {\n            println!("hello rust")\n        }\n    }\n\n    pub fn do_something() {\n        inner_mod::say_hello();\n    }\n}\n\npub mod outer_mod_two {\n\n    pub fn do_something() {\n        crate::outer_mod_one::inner_mod::say_hello();\n    }\n}\n\nfn main() {\n    outer_mod_one::inner_mod::say_hello();\n    outer_mod_one::do_something();\n    outer_mod_two::do_something();\n}\n')),(0,t.kt)("h3",{id:"-keyword-pubsuper"},"\u25c9 Keyword ",(0,t.kt)("inlineCode",{parentName:"h3"},"pub(super)")),(0,t.kt)("p",null,"Keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"pub(super)")," digunakan untuk membuat visibility item menjadi publik dengan scope akses ",(0,t.kt)("em",{parentName:"p"},"parent module"),"."),(0,t.kt)("p",null,"Pada contoh berikut, fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"say_hello")," visibility scope nya ditentukan adalah ",(0,t.kt)("em",{parentName:"p"},"parent module"),", artinya fungsi tersebut hanya bisa diakses dari dalam ",(0,t.kt)("em",{parentName:"p"},"parent module")," (yang pada konteks ini adalah ",(0,t.kt)("inlineCode",{parentName:"p"},"outer_mod"),")."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'pub mod outer_mod {\n\n    pub mod inner_mod {\n\n        // fungsi ini visibility scope-nya di parent module scope,\n        // yaitu `outer_mod`\n        pub(super) fn say_hello() {\n            println!("hello rust")\n        }\n    }\n\n    pub fn do_something() {\n        inner_mod::say_hello();\n    }\n}\n\nfn main() {\n    outer_mod::do_something();\n}\n')),(0,t.kt)("h3",{id:"-keyword-pubself"},"\u25c9 Keyword ",(0,t.kt)("inlineCode",{parentName:"h3"},"pub(self)")),(0,t.kt)("p",null,"Keyword ini digunakan untuk membuat visibility item menjadi publik dengan scope akses hanya pada current module. Contohnya bisa dilihat pada kode program berikut."),(0,t.kt)("p",null,"Fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"say_hello")," visibility scope-nya adalah ",(0,t.kt)("em",{parentName:"p"},"current module"),". Fungsi tersebut hanya bisa diakses dari tempat yang merupakan module item dari ",(0,t.kt)("em",{parentName:"p"},"current module")," yaitu ",(0,t.kt)("inlineCode",{parentName:"p"},"inner_mod"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'pub mod outer_mod {\n\n    pub mod inner_mod {\n\n        // fungsi ini visibility scope-nya di current module scope,\n        // yaitu `inner_mod`\n        pub(self) fn say_hello() {\n            println!("hello rust")\n        }\n\n        pub fn do_something() {\n            say_hello();\n        }\n    }\n}\n\nfn main() {\n    outer_mod::inner_mod::do_something();\n}\n')),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,t.kt)("h3",{id:"-source-code-praktek"},"\u25c9 Source code praktek"),(0,t.kt)("pre",null,(0,t.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/visibility_privacy"},"github.com/novalagung/dasarpemrogramanrust-example/../visibility_privacy")),(0,t.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/reference/visibility-and-privacy.html"},"https://doc.rust-lang.org/reference/visibility-and-privacy.html")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://aloso.github.io/2021/03/28/module-system.html"},"https://aloso.github.io/2021/03/28/module-system.html"))),(0,t.kt)("hr",null))}d.isMDXComponent=!0},2201:(e,a,n)=>{n.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdIAAABtCAIAAACa6Xd1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LjM5YWJhZjcsIDIwMjIvMDIvMjUtMjE6NTc6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTEtMTRUMTM6MjI6NDMrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTA1VDE4OjM0OjA4KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTA1VDE4OjM0OjA4KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBmNDI1NTJiLTNmYTgt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"}}]);