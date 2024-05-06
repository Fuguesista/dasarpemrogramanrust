"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[2959],{3905:(a,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>d});var n=t(7294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var p=n.createContext({}),o=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},m=function(a){var e=o(a.components);return n.createElement(p.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,r=a.originalType,p=a.parentName,m=s(a,["components","mdxType","originalType","parentName"]),u=o(t),d=i,c=u["".concat(p,".").concat(d)]||u[d]||k[d]||r;return t?n.createElement(c,l(l({ref:e},m),{},{components:t})):n.createElement(c,l({ref:e},m))}));function d(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=a,s.mdxType="string"==typeof a?a:i,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3275:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=t(7462),i=(t(7294),t(3905));const r={sidebar_position:41,title:"A.41. Static Item",sidebar_label:"A.41. Static Item"},l=void 0,s={unversionedId:"basic/static",id:"basic/static",title:"A.41. Static Item",description:"Pada chapter ini kita akan bahas tentang apa itu static item, dan perbedaanya dibanding konstanta.",source:"@site/docs/basic/static.md",sourceDirName:"basic",slug:"/basic/static",permalink:"/basic/static",draft:!1,tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,title:"A.41. Static Item",sidebar_label:"A.41. Static Item"},sidebar:"tutorialSidebar",previous:{title:"A.40. Pattern Matching",permalink:"/basic/pattern-matching"},next:{title:"A.42. Lifetime",permalink:"/basic/lifetime"}},p={},o=[{value:"A.41.1. Sekilas tentang <em>lifetime</em>",id:"a411-sekilas-tentang-lifetime",level:2},{value:"A.41.2. Static item",id:"a412-static-item",level:2},{value:"A.41.3. Keyword <code>static</code>",id:"a413-keyword-static",level:2},{value:"A.41.4. Lifetime <code>&#39;static</code>",id:"a414-lifetime-static",level:2},{value:"A.41.5. Static item data literal",id:"a415-static-item-data-literal",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],m={toc:o};function k(a){let{components:e,...r}=a;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pada chapter ini kita akan bahas tentang apa itu static item, dan perbedaanya dibanding konstanta."),(0,i.kt)("p",null,"Namun sebelum masuk ke inti pembahasan, mari kita sedikit belajar tentang apa itu ",(0,i.kt)("em",{parentName:"p"},"lifetime")," dalam Rust programming."),(0,i.kt)("h2",{id:"a411-sekilas-tentang-lifetime"},"A.41.1. Sekilas tentang ",(0,i.kt)("em",{parentName:"h2"},"lifetime")),(0,i.kt)("p",null,"Di Rust ada yang disebut dengan ",(0,i.kt)("strong",{parentName:"p"},"lifetime"),". Lifetime merupakan sebuah identifier yang digunakan compiler untuk memantau berapa lama reference valid."),(0,i.kt)("p",null,"Di balik layar, Rust compiler (lebih tepatnya Rust borrow checker) menggunakan sebuah anotasi dalam penerapan lifetime. Penulisan anotasinya diawali tanda petik satu ",(0,i.kt)("inlineCode",{parentName:"p"},"'"),", contohnya ",(0,i.kt)("inlineCode",{parentName:"p"},"'a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'b"),", dan ",(0,i.kt)("inlineCode",{parentName:"p"},"'c"),"."),(0,i.kt)("p",null,"Untuk sekarang, silakan dipahami bahwa sebuah syntax yang diawali dengan tanda ",(0,i.kt)("inlineCode",{parentName:"p"},"'")," (contohnya seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"'a"),") adalah lifetime."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pembahasan detail mengenai lifetime dibahas pada chapter selanjutnya, yaitu ",(0,i.kt)("a",{parentName:"p",href:"/basic/lifetime"},"Lifetime"),".")),(0,i.kt)("h2",{id:"a412-static-item"},"A.41.2. Static item"),(0,i.kt)("p",null,"Ok, sekarang kembali ke topik utama, yaitu static. Static adalah item yang mirip dengan ",(0,i.kt)("a",{parentName:"p",href:"/basic/konstanta"},"Konstanta"),", tapi memiliki perbedaan yaitu alamat memory yang dialokasikan untuk menampung data static item adalah fix/jelas. Semua reference terhadap static item mengarah ke alamat memory yang sama."),(0,i.kt)("p",null,"Dengan karakteristik yang seperti itu, static tepat diterapkan pada data yang sifatnya shared atau bisa diakses secara global."),(0,i.kt)("p",null,"Ada dua cara membuat static item:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," pada pendefinisian konstanta"),(0,i.kt)("li",{parentName:"ul"},"Menggunakan lifetime ",(0,i.kt)("inlineCode",{parentName:"li"},"'static")," pada tipe data string literal (",(0,i.kt)("inlineCode",{parentName:"li"},"&str"),")")),(0,i.kt)("h2",{id:"a413-keyword-static"},"A.41.3. Keyword ",(0,i.kt)("inlineCode",{parentName:"h2"},"static")),(0,i.kt)("p",null,"Ok, kita terapkan cara pertama, penerapan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," untuk pembuatan konstanta."),(0,i.kt)("p",null,"Pada deklarasi konstanta static, harus ditulis juga tipe datanya secara eksplisit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'static PI: f64 = 3.14;\n\nfn main() {\n    println!("PI: {:?}", PI);\n}\n')),(0,i.kt)("p",null,"Cukup mudah bukan?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Konstanta static bisa saja didefinisikan mutable, tetapi dengan konsekuensi item tersebut akan menjadi ",(0,i.kt)("em",{parentName:"p"},"unsafe"),"."),(0,i.kt)("p",{parentName:"blockquote"},"Lebih jelasnya mengenai topik ini akan dibahas nantinya pada chapter terpisah, yaitu ",(0,i.kt)("a",{parentName:"p",href:"#/wip/safe-unsafe"},"Safe & Unsafe"),".")),(0,i.kt)("p",null,"Ok, sekarang kita coba terapkan keyword static pada tipe lainnya, contohnya ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Static string",src:t(5207).Z,width:"765",height:"259"})),(0,i.kt)("p",null,"Hmm, malah error."),(0,i.kt)("p",null,"Perlu diketahui bahwa keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," bisa digunakan pada semua tipe data primitif. Selain itu bisa juga diterapkan dalam ",(0,i.kt)("em",{parentName:"p"},"constants function")," (yang nantinya dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#/wip/constant-evaluation"},"Constant Evaluation"),"), ",(0,i.kt)("a",{parentName:"p",href:"/basic/struct#a247-tuple-struct"},"Tuple Struct"),", dan juga variant ",(0,i.kt)("a",{parentName:"p",href:"/basic/tuple"},"Tuple")," lainnya, tetapi tidak bisa digunakan untuk custom type seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,i.kt)("p",null,"Lalu bagaimana jika ada kebutuhan membuat konstanta bertipe string? Solusinya dengan menggunakan tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"&'static str")," yang sebentar lagi akan kita bahas."),(0,i.kt)("h2",{id:"a414-lifetime-static"},"A.41.4. Lifetime ",(0,i.kt)("inlineCode",{parentName:"h2"},"'static")),(0,i.kt)("p",null,"Lifetime ",(0,i.kt)("inlineCode",{parentName:"p"},"'static")," digunakan untuk deklarasi reference sebagai static item. Data yang memiliki lifetime ini tidak akan pernah di-dealokasi kecuali eksekusi program selesai."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Karena alasan di atas, ada baiknya data dengan lifetime static dideklarasikan secara global."),(0,i.kt)("p",{parentName:"blockquote"},"Dimisalkan ada variabel dengan lifetime ini dideklarasikan dalam suatu block, variabel tersebut tidak akan di-dealokasi meskipun eksekusi block selesai nantinya.")),(0,i.kt)("p",null,"Lifetime ini biasa dikombinasikan dengan tipe data pointer, contohnya seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"&str")," jika dikombinasikan dengan lifetime ",(0,i.kt)("inlineCode",{parentName:"p"},"'static")," jadinya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"&'static str"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'const VERSION: &\'static str = "v1.2.3";\n')),(0,i.kt)("p",null,"Sebelumnya telah dijelaskan bahwa custom type ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," tidak bisa digunakan untuk menyimpan data string sebagai static item, dan cara di atas ini adalah solusinya."),(0,i.kt)("p",null,"Penulisannya agak kurang friendly memang (",(0,i.kt)("inlineCode",{parentName:"p"},"&'static str"),"), namun kabar baiknya semenjak Rust versi 1.17 rilis di tahun 2017, by default semua item yang dideklarasikan menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," ataupun ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," otomatis memiliki ",(0,i.kt)("inlineCode",{parentName:"p"},"'static lifetime"),". Jadi sekarang cukup tulis saja:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'const VERSION: &str = "v1.2.3";\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'const VERSION: &\'static str = "v1.2.3";\n')),(0,i.kt)("h2",{id:"a415-static-item-data-literal"},"A.41.5. Static item data literal"),(0,i.kt)("p",null,"Pada chapter ",(0,i.kt)("a",{parentName:"p",href:"/basic/borrowing#a347-owner-dan-borrower-data-literal"},"Borrowing")," sempat kita bahas sedikit tentang siapa owner dan borrower data literal."),(0,i.kt)("p",null,"Tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"&str")," adalah salah satu tipe data yang tidak memiliki owner (atau boleh disimpulkan owner-nya adalah program). Pada variabel yang bertipe ini, yang ia tampung adalah data pinjaman, jadi variabel tersebut bukan owner. Contohnya pada kode berikut konstanta ",(0,i.kt)("inlineCode",{parentName:"p"},"VERSION")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILD_COUNTER")," di atas adalah borrower."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'const VERSION: &str = "v1.2.3";\nconst BUILD_COUNTER: &i32 = &15;\n')),(0,i.kt)("p",null,"Yang penting untuk diperhatikan bukan siapa owner-nya, tapi bagaimana kita memastikan data pinjaman tersebut tidak di-dealokasi. Inilah kenapa lifetime ",(0,i.kt)("inlineCode",{parentName:"p"},"'static")," dan/atau keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," dipergunakan. Dengan adanya lifetime tersebut, data borrow tidak akan pernah di-dealokasi."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/static_example"},"github.com/novalagung/dasarpemrogramanrust-example/../static_example")),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/reference/items/static-items.html"},"https://doc.rust-lang.org/reference/items/static-items.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/beta/rust-by-example/custom_types/constants.html"},"https://doc.rust-lang.org/beta/rust-by-example/custom_types/constants.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/rust-by-example/scope/lifetime/static_lifetime.html"},"https://doc.rust-lang.org/rust-by-example/scope/lifetime/static_lifetime.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/49684657/what-is-the-difference-between-str-and-static-str-in-a-static-or-const"},"https://stackoverflow.com/questions/49684657/what-is-the-difference-between-str-and-static-str-in-a-static-or-const"))))}k.isMDXComponent=!0},5207:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/static-1-095ee9ad8503b55f94f1fb79ef51dbca.png"}}]);