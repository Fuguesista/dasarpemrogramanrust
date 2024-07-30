"use strict";(self.webpackChunkdasarpemrogramanrust=self.webpackChunkdasarpemrogramanrust||[]).push([[7865],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(a),k=i,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||r;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<r;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:53,title:"A.53. File, Path, Directory",sidebar_label:"A.53. File, Path, Directory"},l=void 0,p={unversionedId:"basic/file-path-directory",id:"basic/file-path-directory",title:"A.53. File, Path, Directory",description:"Pada chapter ini kita akan belajar tentang beberapa API milik Rust yang disediakan untuk manajemen path dan file system.",source:"@site/docs/basic/file-path-directory.md",sourceDirName:"basic",slug:"/basic/file-path-directory",permalink:"/basic/file-path-directory",draft:!1,tags:[],version:"current",sidebarPosition:53,frontMatter:{sidebar_position:53,title:"A.53. File, Path, Directory",sidebar_label:"A.53. File, Path, Directory"},sidebar:"tutorialSidebar",previous:{title:"A.52. Date Time",permalink:"/basic/datetime"},next:{title:"A.54. Error \u279c Unrecoverable Error / Panic",permalink:"/basic/unrecoverable-panic-error"}},s={},o=[{value:"A.53.1. File path (<code>std::path::Path</code>)",id:"a531-file-path-stdpathpath",level:2},{value:"A.53.2. Method filepath",id:"a532-method-filepath",level:2},{value:"\u25c9 Associated function <code>Path::new()</code>",id:"-associated-function-pathnew",level:3},{value:"\u25c9 Method <code>join()</code>",id:"-method-join",level:3},{value:"\u25c9 Method <code>exists()</code>",id:"-method-exists",level:3},{value:"\u25c9 Method <code>is_file()</code> &amp; <code>is_dir()</code>",id:"-method-is_file--is_dir",level:3},{value:"\u25c9 Method <code>is_absolute()</code> &amp; <code>is_relative()</code>",id:"-method-is_absolute--is_relative",level:3},{value:"A.53.3. Module <code>std::fs</code> (file system)",id:"a533-module-stdfs-file-system",level:2},{value:"A.53.4. Manajemen file system",id:"a534-manajemen-file-system",level:2},{value:"\u25c9 Pembuatan folder (<code>fs::create_dir</code>)",id:"-pembuatan-folder-fscreate_dir",level:3},{value:"\u25c9 Menulis konten file (<code>fs::write</code>)",id:"-menulis-konten-file-fswrite",level:3},{value:"\u25c9 Membaca isi file ke bentuk string (<code>fs::read_to_string</code>)",id:"-membaca-isi-file-ke-bentuk-string-fsread_to_string",level:3},{value:"\u25c9 Membaca isi file ke bentuk vector (<code>fs::read</code>)",id:"-membaca-isi-file-ke-bentuk-vector-fsread",level:3},{value:"\u25c9 Menghapus file (<code>fs::remove_file</code>)",id:"-menghapus-file-fsremove_file",level:3},{value:"\u25c9 Menghapus folder (<code>fs::remove_dir</code>)",id:"-menghapus-folder-fsremove_dir",level:3},{value:"\u25c9 List items dalam folder",id:"-list-items-dalam-folder",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Work in progress",id:"-work-in-progress",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],u={toc:o};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pada chapter ini kita akan belajar tentang beberapa API milik Rust yang disediakan untuk manajemen path dan file system."),(0,i.kt)("h2",{id:"a531-file-path-stdpathpath"},"A.53.1. File path (",(0,i.kt)("inlineCode",{parentName:"h2"},"std::path::Path"),")"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"/home/novalagung/Desktop/my text.txt"')," adalah salah satu contoh file path. Di Rust, file path bisa direpresentasikan sebagai string (seperti yang sudah dicontohkan), atau menggunakan tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"Path"),"."),(0,i.kt)("p",null,"Tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"Path")," tersedia dalam module ",(0,i.kt)("inlineCode",{parentName:"p"},"std::path"),". Cara penggunaannya cukup mudah, sebagai contoh, beberapa filepath berikut menghasilkan path yang sama:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use std::path::Path;\n\nlet filepath_1 = "/home/novalagung/Desktop/my text.txt";\nlet filepath_2 = Path::new("/home/novalagung/Desktop/my text.txt");\nlet filepath_3 = Path::new("/home/novalagung/Desktop").join("my text.txt");\nlet filepath_4 = Path::new("/home/novalagung").join("Desktop").join("my text.txt");\nlet filepath_5 = Path::new("/home").join("novalagung/Desktop/my text.txt");\n\nprintln!("{:?}", filepath_1);\n// output => "/home/novalagung/Desktop/my text.txt"\n\nprintln!("{:?}", filepath_2);\n// output => "/home/novalagung/Desktop/my text.txt"\n')),(0,i.kt)("h2",{id:"a532-method-filepath"},"A.53.2. Method filepath"),(0,i.kt)("h3",{id:"-associated-function-pathnew"},"\u25c9 Associated function ",(0,i.kt)("inlineCode",{parentName:"h3"},"Path::new()")),(0,i.kt)("p",null,"Digunakan untuk membuat object ",(0,i.kt)("inlineCode",{parentName:"p"},"Path")," dari suatu string. Contoh penerapan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'Path::new("/home/novalagung/Desktop/my text.txt");\n')),(0,i.kt)("h3",{id:"-method-join"},"\u25c9 Method ",(0,i.kt)("inlineCode",{parentName:"h3"},"join()")),(0,i.kt)("p",null,"Digunakan untuk menggabungkan segment filepath. Contoh penerapan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'Path::new("/home/novalagung").join("Desktop").join("my text.txt");\n')),(0,i.kt)("p",null,"Hasil dari operasi di atas adalah path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/home/novalagung/Desktop/my text.txt\n")),(0,i.kt)("h3",{id:"-method-exists"},"\u25c9 Method ",(0,i.kt)("inlineCode",{parentName:"h3"},"exists()")),(0,i.kt)("p",null,"Digunakan untuk mengecek apakah suatu filepath ada atau tidak."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"if Path::new(&path).exists() {\n    // path exists\n}\n")),(0,i.kt)("h3",{id:"-method-is_file--is_dir"},"\u25c9 Method ",(0,i.kt)("inlineCode",{parentName:"h3"},"is_file()")," & ",(0,i.kt)("inlineCode",{parentName:"h3"},"is_dir()")),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"is_file()")," digunakan untuk mengecek apakah suatu filepath berisi file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"if Path::new(&path).is_file() {\n    // path is a file\n}\n")),(0,i.kt)("p",null,"Sedangkan method ",(0,i.kt)("inlineCode",{parentName:"p"},"is_dir()")," digunakan untuk mengecek apakah suatu filepath adalah folder/directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"if Path::new(&path).is_dir() {\n    // path contains directory\n}\n")),(0,i.kt)("h3",{id:"-method-is_absolute--is_relative"},"\u25c9 Method ",(0,i.kt)("inlineCode",{parentName:"h3"},"is_absolute()")," & ",(0,i.kt)("inlineCode",{parentName:"h3"},"is_relative()")),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"is_absolute()")," digunakan untuk mengecek apakah suatu filepath adalah ",(0,i.kt)("em",{parentName:"p"},"absolute path"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"if Path::new(&path).is_absolute() {\n    // path is an absolute path\n}\n")),(0,i.kt)("p",null,"Sedangkan method ",(0,i.kt)("inlineCode",{parentName:"p"},"is_relative()")," digunakan untuk mengecek apakah suatu filepath adalah ",(0,i.kt)("em",{parentName:"p"},"relative path"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"if Path::new(&path).is_relative() {\n    // path is a relative path\n}\n")),(0,i.kt)("h2",{id:"a533-module-stdfs-file-system"},"A.53.3. Module ",(0,i.kt)("inlineCode",{parentName:"h2"},"std::fs")," (file system)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"std::fs")," merupakan module yang disediakan Rust untuk pengolahan file system. Di dalamnya berisinya banyak sekali fungsi untuk keperluan seperti pembuatan file, modifikasi konten file, dan lainnya."),(0,i.kt)("p",null,"Sebagai contoh, untuk membuat suatu directory bisa menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"fs::create_dir"),". Isi argument pemanggilan fungsi dengan path dalam bentuk string (atau ",(0,i.kt)("inlineCode",{parentName:"p"},"std::path::Path")," juga boleh)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs;\n\nfn main() {\n    let path = "./files";\n    let res = fs::create_dir(&path);\n    println!("{:?}", res);\n    // output => Ok(())\n}\n')),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"fs::create_dir")," mengembalikan value bertipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Result<(), Error>"),". Gunakan pattern matching ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," untuk mengecek hasil operasi apakah sukses atau tidak."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'match fs::create_dir("./files") {\n    Err(err) => {\n        println!("error on creating directory! {}", err);\n    },\n    _ => {\n        println!("directory created");\n    },\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Lebih detailnya mengenai tipe data ",(0,i.kt)("inlineCode",{parentName:"li"},"Result")," dibahas pada chapter ",(0,i.kt)("a",{parentName:"li",href:"/basic/result-type"},"Tipe Data \u279c Result"),"."),(0,i.kt)("li",{parentName:"ul"},"Lebih detailnya mengenai pattern matching dibahas pada chapter ",(0,i.kt)("a",{parentName:"li",href:"/basic/pattern-matching"},"Pattern Matching"),"."))),(0,i.kt)("h2",{id:"a534-manajemen-file-system"},"A.53.4. Manajemen file system"),(0,i.kt)("h3",{id:"-pembuatan-folder-fscreate_dir"},"\u25c9 Pembuatan folder (",(0,i.kt)("inlineCode",{parentName:"h3"},"fs::create_dir"),")"),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"fs::create_dir")," digunakan untuk membuat folder. Contoh penerapannya sudah dibahas di sesi ",(0,i.kt)("a",{parentName:"p",href:"/basic/file-path-directory#a523-module-stdfs-file-system"},"A.53.3. Module std::fs (file system)")," di atas."),(0,i.kt)("h3",{id:"-menulis-konten-file-fswrite"},"\u25c9 Menulis konten file (",(0,i.kt)("inlineCode",{parentName:"h3"},"fs::write"),")"),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"fs::write")," digunakan untuk membuat folder. Contoh penerapan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let path = Path::new("./files").join("target.txt");\nlet content = "hello rust!";\nlet res = fs::write(&path, &content);\n\nmatch res {\n    Err(err) => {\n        println!("error on writing file {}! {}", path.to_str().unwrap_or_default(), err);\n    },\n    _ => {\n        println!("file created");\n    },\n}\n')),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"fs::write")," melakukan penulisan konten pada variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," ke path ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),". Mode penulisannya adalah ",(0,i.kt)("em",{parentName:"p"},"overwrite")," (bukan ",(0,i.kt)("em",{parentName:"p"},"append"),"), yang artinya konten lama pada filepath akan di-",(0,i.kt)("em",{parentName:"p"},"replace")," total dengan konten baru."),(0,i.kt)("p",null,"Jika file tidak ada pada ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," tujuan, maka otomatis dibuatkan file baru. Namun jika folder/directory di mana file akan dibuat/ditulis tidak ada, maka muncul error."),(0,i.kt)("h3",{id:"-membaca-isi-file-ke-bentuk-string-fsread_to_string"},"\u25c9 Membaca isi file ke bentuk string (",(0,i.kt)("inlineCode",{parentName:"h3"},"fs::read_to_string"),")"),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"fs::read_to_string()")," digunakan untuk membaca isi file dalam bentuk string. Contoh penerapannya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let path = Path::new("./files").join("target.txt");\nlet res = fs::read_to_string(&path);\n\nmatch res {\n    Err(err) => {\n        println!("error on reading file {}! {}", path.to_str().unwrap_or_default(), err);\n    },\n    Ok(content) => {\n        println!("file {:?} content is: {:?}", path, content);\n    },\n}\n')),(0,i.kt)("h3",{id:"-membaca-isi-file-ke-bentuk-vector-fsread"},"\u25c9 Membaca isi file ke bentuk vector (",(0,i.kt)("inlineCode",{parentName:"h3"},"fs::read"),")"),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"fs::read()")," melakukan operasi baca file dan mengembalikan nilainya dalam bentuk vector ",(0,i.kt)("inlineCode",{parentName:"p"},"Vec<u8>"),". Umumnya, fungsi ini dikombinasikan dengan fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"std::str::from_utf8()")," agar konten file bisa dimunculkan dalam format encoding tertentu (misalnya UTF-8)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let path = Path::new("./files").join("target.txt");\nlet res = fs::read(&path);\n\nif res.is_err() {\n    println!("error on reading file");\n    return;\n}\n\nlet content = res.unwrap_or_default();\nmatch std::str::from_utf8(&content) {\n    Err(err) => {\n        println!("error on reading file! Invalid UTF-8 sequence. {}", err);\n    },\n    Ok(content) => {\n        println!("file {:?} content is: {:?}", path, content);\n    },\n};\n')),(0,i.kt)("h3",{id:"-menghapus-file-fsremove_file"},"\u25c9 Menghapus file (",(0,i.kt)("inlineCode",{parentName:"h3"},"fs::remove_file"),")"),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"fs::remove_file")," digunakan untuk menghapus file pada suatu path. Contoh penerapan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let path = Path::new("./files").join("target.txt");\nlet res = fs::remove_file(&path);\n\nmatch res {\n    Err(err) => {\n        println!("error on deleting file {}! {}", path.to_str().unwrap_or_default(), err);\n    },\n    _ => {\n        println!("file deleted");\n    },\n}\n')),(0,i.kt)("h3",{id:"-menghapus-folder-fsremove_dir"},"\u25c9 Menghapus folder (",(0,i.kt)("inlineCode",{parentName:"h3"},"fs::remove_dir"),")"),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"fs::remove_dir")," digunakan untuk menghapus folder/directory. Contoh penerapan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let path = Path::new("./files");\nlet res = fs::remove_dir(&path);\n\nmatch res {\n    Err(err) => {\n        println!("error on deleting directory {}! {}", path.to_str().unwrap_or_default(), err);\n    },\n    _ => {\n        println!("directory deleted");\n    },\n}\n')),(0,i.kt)("h3",{id:"-list-items-dalam-folder"},"\u25c9 List items dalam folder"),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"fs::read_dir")," digunakan untuk menampilkan list items suatu folder (baik subfolder ataupun file). Fungsi ini mengmbalikan nilai bertipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Result<ReadDir, Error>"),", untuk mengakses list items bisa menggunakan teknik pattern matching, atau boleh juga langsung di ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap()")," (dengan resiko program bisa panic ketika ada error)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let path = Path::new("D:\\\\Labs\\\\Adam Studio\\\\Ebook\\\\dasarpemrogramanrust\\\\file_path_directory_1");\nlet paths = fs::read_dir(&path).unwrap();\n\nfor path in paths {\n    let item = &path.unwrap();\n    println!("file name: {:?}, file path: {:?}", item.file_name(), item.path().display())\n}\n')),(0,i.kt)("p",null,"Pada contoh di atas, penulis menggunakan testing path yang isinya 4 buah item:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"File, Path, Directory",src:a(2944).Z,width:"595",height:"176"})),(0,i.kt)("p",null,"Output program bisa dilihat pada gambar berikut:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"File, Path, Directory",src:a(214).Z,width:"887",height:"149"})),(0,i.kt)("p",null,"Tipe data variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"paths")," di atas adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadDir")," yang merupakan tipe data iterator. Jika digunakan pada keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),", maka variabel element perulangan ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," akan bertipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"Result<DirEntry, Error>"),". Dari tipe ini kita bisa mengakses file name maupun file path."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanrust-example/tree/master/file_path_directory"},"github.com/novalagung/dasarpemrogramanrust-example/../file_path_directory")),(0,i.kt)("h3",{id:"-work-in-progress"},"\u25c9 Work in progress"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pembahasan tentang append content file (",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/30684624/what-is-the-best-variant-for-appending-a-new-line-in-a-text-file"},"https://stackoverflow.com/questions/30684624/what-is-the-best-variant-for-appending-a-new-line-in-a-text-file"),")")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/result-type"},"Tipe Data \u279c Result")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/pattern-matching"},"Pattern Matching"))),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.Path.html"},"https://doc.rust-lang.org/std/path/struct.Path.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/rust-by-example/std_misc/path.html"},"https://doc.rust-lang.org/rust-by-example/std_misc/path.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/rust-by-example/std_misc/fs.html"},"https://doc.rust-lang.org/rust-by-example/std_misc/fs.html"))))}d.isMDXComponent=!0},2944:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlMAAACwCAIAAACkbHy6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFvGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgMTM3LmRhNGE3ZTUsIDIwMjIvMTEvMjctMDk6MzU6MDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDQtMDdUMTk6MTk6MDYrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTA3VDE5OjI5OjA5KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTA3VDE5OjI5OjA5KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MWZkNDUwNy1lZGEzLWRkNGMtOTBkMC00NGNjZGQ2MjQwNDUiIHhtcE1NOkRvY3VtZW50SUQ9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"},214:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/file-path-directory-2-bbe0bb5499225e418b251930c44fb8f6.png"}}]);