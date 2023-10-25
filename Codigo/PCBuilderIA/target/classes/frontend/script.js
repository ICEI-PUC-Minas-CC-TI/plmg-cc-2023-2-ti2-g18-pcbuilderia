document.addEventListener("DOMContentLoaded", function () {
    var userLogado = localStorage.getItem("userLogado");
    var userProfile = document.getElementById("userProfile");
    var loginButton = document.getElementById("loginButton");
    var profileButton = document.getElementById("profileButton");
    var signinButton = document.getElementById("signinButton")
  
    if (userLogado) {
      // O usuário está logado, exibe o botão de perfil
      userProfile.style.display = "none";
      loginButton.style.display = "none";
      profileButton.style.display = "inline";
      signinButton.style.display = "none";
  
      // Redirecionar para a página do perfil ao clicar no botão
      profileButton.addEventListener("click", function () {
        window.location.href = "profile.html"; // Substitua pelo URL da página do perfil
      });
    } else {
      // O usuário não está logado, exibe o botão de login
      userProfile.style.display = "none";
      loginButton.style.display = "none";
      profileButton.style.display = "none";
      signinButton.style.display = "inline";

    }
  });
  var buttons = document.getElementsByClassName('read_button');
var cards = document.getElementsByClassName('content');

console.log(buttons);

function toggle(i){
    cards[i].classList.toggle('active');

    if (cards[i].classList.contains('active')) {
        buttons[i].innerText = 'Read less';
        cards[i].style.maxHeight = '100%';
        cards[i].style.overflow = 'visible';
    } else {
        buttons[i].innerText = 'Read more';
        cards[i].style.maxHeight = '100px';
        cards[i].style.overflow = 'hidden';
    }
} 
var pecas = [
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/112994/processador-intel-core-i7-10700-cache-16mb-2-9ghz-lga-1200-bx8070110700_1589225202_g.jpg" widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "Intel Core i7-10700K",
    preco: 1500,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/430926/placa-mae-msi-h310m-pro-vdh-intel-1151-m-atx-ddr4-h310m-pro-vdh_1686063371_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mãe MSI H310M PRO",
    preco: 300,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/376218/placa-mae-asus-rog-strix-x670e-f-gaming-wifi-amd-x670-am5-ddr5-90mb1ba0-m0eay0_1668176712_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mae Asus ROG Strix X670E-F Gaming",
    preco: 3200,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/300857/Placa-M-e-Asus-ROG-Strix-Gaming-Intel-LGA-1200-ATX-DDR4-Wi-Fi-Z590-E_1686599315_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa-Mãe Asus ROG Strix Gaming, Intel LGA 1200",
    preco: 4300,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/115062/placa-mae-asus-tuf-gaming-b460m-plus-intel-lga1200-matx-_1594666121_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mãe Asus TUF Gaming B460M-Plus",
    preco: 750,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/430926/placa-mae-msi-h310m-pro-vdh-intel-1151-m-atx-ddr4-h310m-pro-vdh_1686063371_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa-Mãe AsRock, Intel 1200 H510M ",
    preco: 700,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/430926/placa-mae-msi-h310m-pro-vdh-intel-1151-m-atx-ddr4-h310m-pro-vdh_1686063371_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mãe MSI H310M PRO",
    preco: 300,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/112994/processador-intel-core-i7-10700-cache-16mb-2-9ghz-lga-1200-bx8070110700_1589225202_g.jpg" widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "Intel Core i7-10700K",
    preco: 1500,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/222287/Processador-Intel-I5-10600K-Marvel-s-Avengers-Collector-s-Edition-Packaging-Cache-12MB-4-10GHz-4-80GHz-BX8070110600KA_1674577706_gg.jpg" widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "Intel I5-10600K Marvel's Avengers",
    preco: 2500,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/222287/Processador-Intel-I5-10600K-Marvel-s-Avengers-Collector-s-Edition-Packaging-Cache-12MB-4-10GHz-4-80GHz-BX8070110600KA_1674577706_gg.jpg" widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "Intel I5-10600K Marvel's Avengers",
    preco: 2500,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/390981/Processador-AMD-Ryzen-Radeon-9-7950X-2200MHz-Cache-80MB-1Hexa-Core-AM5-V-deo-Integrado-100-100000514WOF_1684160317_gg.jpg" widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "AMD Ryzen Radeon 9 7950X",
    preco: 3900,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src = "https://images.kabum.com.br/produtos/fotos/399025/placa-de-video-pny-nvidia-geforce-rtx-3080-xlr8-gaming-revel-epic-x-10-gb-gddr6x-lhr-rgb-dlss-ray-tracing-vcg308010ltfxppb1_1669988745_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce RTX 3080",
    preco: 4000,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src = "https://images.kabum.com.br/produtos/fotos/399025/placa-de-video-pny-nvidia-geforce-rtx-3080-xlr8-gaming-revel-epic-x-10-gb-gddr6x-lhr-rgb-dlss-ray-tracing-vcg308010ltfxppb1_1669988745_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce RTX 3080",
    preco: 4000,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src = "https://images.kabum.com.br/produtos/fotos/388005/placa-de-video-rtx-4090-suprim-liquid-x-msi-nvidia-geforce-24-gb-gddr6x-dlss-ray-tracing-geforce-rtx-4090-suprim-liquid-x-24g_1672931440_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA RTX 4090 Suprim Liquid X MSI",
    preco: 13000,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src = "https://images.kabum.com.br/produtos/fotos/sync_mirakl/448639/Placa-de-V-deo-Geforce-Rtx-3080-10GB-GDDR6x-320bits-Selo-Lhr-Pny-Xlr8-Revel-Epic-x-Vcg308010ltfxppb_1680034103_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA Geforce Rtx 3080 Xlr8",
    preco: 8800,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/97099/97099_1528987943_index_g.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Corsair Vengeance RGB Pro 16GB",
    preco: 300,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/383892/memoria-ram-rise-mode-z-8gb-3200mhz-ddr4-cl15-preto-rm-d4-8g-3200z-_1667508635_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória RAM Rise Mode Z, 8GB, 3200MHz",
    preco: 120,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/467499/Mem-ria-RAM-Hyperx-Fury-Desktop-Gamer-DDR3-8GB-1333mhz_1685719692_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória RAM Hyperx Fury, Desktop Gamer, DDR3 8GB, 1333mhz",
    preco: 150,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/429921/Memoria-Ram-16GB-DDR4-3200Mhz-Cl20-1-35v-Gta-Tech-Desktop-C-Dissipador-RGB-Gt16g3200l20dcr_1686849491_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memoria Ram 16GB DDR4 3200Mhz Cl20 1.35v Gta Tech",
    preco: 260,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/265876/HD-Seagate-1TB-Barracuda-7200-RPM-ST1000DM010_1687199889_gg.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "HD Seagate 1TB Barracuda",
    preco: 180,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/265876/HD-Seagate-1TB-Barracuda-7200-RPM-ST1000DM010_1687199889_gg.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "HD Seagate 1TB Barracuda",
    preco: 180,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/233442/HD-Hitachi-1TB-7200-RPM-SATA-3-0GB-s-Para-PC_1679309320_gg.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "HD Hitachi 1TB",
    preco: 150,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/265876/HD-Seagate-1TB-Barracuda-7200-RPM-ST1000DM010_1687199889_gg.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "HD Seagate 2TB Barracuda",
    preco: 250,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/421568/HD-Sata-3-3TB-Hitachi-Ultrastar-7k3000-Hua723030ala641_1675171708_gg.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "HD Sata 3 3TB Hitachi ",
    preco: 250,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/115063/hd-western-digital-blue-2tb-3-5-sata-6-0gb-s-wd20ezaz-_1594748888_gg.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "HD WD Blue 2TB",
    preco: 300,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/415964/hd-seagate-ironwolf-4tb-nas-3-5-sata-st4000vn006_1674649252_gg.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "HD Seagate IronWolf 4TB",
    preco: 700,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/415964/hd-seagate-ironwolf-4tb-nas-3-5-sata-st4000vn006_1674649252_gg.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "HD Seagate IronWolf 4TB",
    preco: 700,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/128256/hd-seagate-barracuda-8tb-3-5-sata-st8000dm004_1600452988_gg.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "HD Seagate 8TB Barracuda",
    preco: 1000,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/85196/85196_1484306013_gg.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD 120 GB Kingston A400",
    preco: 120,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/85196/85196_1484306013_gg.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD 120 GB Kingston A400",
    preco: 120,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://img.terabyteshop.com.br/produto/g/gabinete-gamer-ninja-eraser-rgb-mid-tower-vidro-temperado-atx-sem-fonte-com-1-fan_147144.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Ninja Eraser",
    preco: 700,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/99683/processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_1564429488_g.jpg" widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "Intel Core i5-9400",
    preco: 1000,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/99683/processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_1564429488_g.jpg" widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "Intel Core i5-9400",
    preco: 1000,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/113182/placa-de-video-evga-nvidia-geforce-rtx-2060-ko-ultra-gaming-6gb-gddr6-06g-p4-2068-kr_1591820558_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce RTX 2060",
    preco: 1800,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/397576/placa-de-video-pny-geforce-rtx-4080-xlr8-gaming-verto-epic-x-rgb-16-gb-gddr6x-dlss-ray-tracing-vcg408016tfxxpb1-o_1666992885_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce RTX 4080",
    preco: 7700,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/387449/placa-de-video-asus-nvidia-rog-strix-rtx-4090-edition-24-gb-gddr6x-argb-dlss-ray-tracing-90yv0iw0-m0nan00_1665170163_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce RTX 4090",
    preco: 13000,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/458949/Memoria-RAM-Battle-ax-Colorful-8-GB-3200-Mhz-DDR4-Cl16_1682604517_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memoria RAM Battle-ax Colorful,8 GB, 3200 Mhz DDR4",
    preco: 150,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://m.media-amazon.com/images/I/817F+EqNmjL.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "Seagate Barracuda 500GB",
    preco: 75,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://m.media-amazon.com/images/I/61we5MOdvOS._AC_UF894,1000_QL80_.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD Kingstone 500GB",
    preco: 300,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src = "https://tgtgamer.com.br/wp-content/uploads/2022/11/tgt-g250pr-012.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabintete TGT G250",
    preco: 100,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://m.media-amazon.com/images/I/51Xik7NRvJL._AC_UF894,1000_QL80_.jpg" widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "Intel Core i3-12100F",
    preco: 800,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/203463/Processador-AMD-Ryzen-7-5700G-4-6GHz-Max-Turbo-Cache-20MB-Octa-Core-AM4-V-deo-Integrado-100-100000263BOX_1686004780_gg.jpg"widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "AMD Ryzen 7 5700G",
    preco: 1300,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://mancer.com.br/wp-content/uploads/2022/11/mcr-rx5504gd5-v41.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "RX 550 4GB",
    preco: 1000,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/294173/Placa-de-V-deo-Duex-NVIDIA-GeForce-GT1030-2GB-DDR5_1676386690_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GT-1030 2GB",
    preco: 500,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/129246/placa-de-video-gigabyte-nvidia-geforce-gtx-1650-d6-oc-4g-4gb-gddr6-rev-2-0-9vn1656o4-00-20_1602083577_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce GTX 1650",
    preco: 840,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/449866/Mem-ria-RAM-Netcore-De-8GB-DDR4-3200MHZ-1-2v-Para-Desktop_1687438207_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória RAM, Netcore De 8GB, DDR4, 3200MHZ",
    preco: 200,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/472096/Mem-ria-Corsair-Vengeance-Lpx-16GB-2x8gb-3000mhz-DDR4-Branco-cmk16gx4m2d3000c16w-_1687456122_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória Corsair Vengeance Lpx, 2x8GB, 3000mhz",
    preco: 400,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/442741/memoria-rise-mode-z-32gb-4800mhz-ddr5-cl40-preto-rm-d5-32g-4800z_1686600898_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória Rise Mode Z, 32GB, 4800MHz",
    preco: 600,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/442741/memoria-rise-mode-z-32gb-4800mhz-ddr5-cl40-preto-rm-d5-32g-4800z_1686600898_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória Corsair Vengeance RGB Pro, 2x16GB, 4800MHz",
    preco: 750,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/452903/Memoria-Ram-Best-Memory-16GB-DDR4-3200mhz-Highlander-Branca_1680704944_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memoria Ram Best Memory, 16GB, 3200mhz",
    preco: 400,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/414858/Mem-ria-Ram-Corsair-Vengeance-RGB-Rt-16GB-2x8GB-DDR4-3200Mhz-Cmn16gx4m2z3200c16_1673444906_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória Ram Corsair Vengeance RGB Rt 16GB 3200mhz",
    preco: 500,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/449869/Mem-ria-RAM-Xpg-Spectrix-D41-16GB-2x8GB-3200mhz-DDR4-RGB-Gray_1680181095_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória RAM Xpg Spectrix D41 16GB 3200mhz",
    preco: 700,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/450172/Memoria-RAM-Corsair-DDR5-64GB-5600MHZ-2x32GB-Dominator-Platinum-RGB-Cmt64gx5m2b5600z40k_1680188295_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória Corsair Vengeance, 2x16GB, 4800Hz, DDR5",
    preco: 1200,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/442743/memoria-rise-mode-z-32gb-4800mhz-ddr5-cl40-branco-rm-d5-32g-4800z_1686603827_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória Rise Mode Z, 2x32GB, 4800MHz, DDR5",
    preco: 1400,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/450172/Memoria-RAM-Corsair-DDR5-64GB-5600MHZ-2x32GB-Dominator-Platinum-RGB-Cmt64gx5m2b5600z40k_1680188295_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memoria RAM Corsair, DDR5 2x32GB 5600MHZ",
    preco: 2800,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/429924/Memoria-Gta-Tech-Gt32g3200l20dcr-32GB-DDR4-3200-Cl-20-1-35v-Desktop-C-Dissipador-RGB_1677170945_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memoria Gta Tech Gt32g3200l20dcr 2x32GB DDR4",
    preco: 900,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/442743/memoria-rise-mode-z-32gb-4800mhz-ddr5-cl40-branco-rm-d5-32g-4800z_1686603827_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória Rise Mode Z, 2x32GB, 4800MHz, DDR5",
    preco: 1400,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/442718/memoria-corsair-dominator-platinum-rgb-64gb-2x32gb-5200mt-s-ddr5-c40-preto-cmt64gx5m2b5200z40k_1682619855_gg.jpg" widht = "150px" height = "150px">',
    nome: "memoria-ram",
    descricao: "Memória Corsair Dominator Platinum, RGB, 2x32GB, 5200MHz, DDR5",
    preco: 2000,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://m.media-amazon.com/images/I/912B5gDfYcL.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "Seagate Barracuda 5TB",
    preco: 500,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/158858/SSD-Kingston-A400-960GB-SATA-SA400S37-960G_1687957089_gg.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD Kingston A400, 960GB",
    preco: 320,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/463524/Processador-AMD-Ryzen-9-7950x3d-Am5-4-2ghz-5-7ghz-Max-Turbo-144mb-Com-V-deo-S-Cooler-100-100000908WOF_1684499331_gg.jpg" widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "AMD Ryzen 9-7950x",
    preco: 4700,
    preco2: "alto",
    tipo: "gamer",
  },
  { 
    imagem:
    '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/161603/Processador-AMD-Ryzen-5-3600-3-6GHz-Cache-32MB-Hexa-Core-12-Threads-AM4-100-100000031BOX_1683547155_gg.jpg" width = "150px" height = "150px">', 
    nome: "processador", 
    descricao: "AMD Ryzen 5-3600", 
    preco: 2300, 
    preco2:"alto", 
    tipo:"gamer",
  },
  { 
    imagem:
    '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/161603/Processador-AMD-Ryzen-5-3600-3-6GHz-Cache-32MB-Hexa-Core-12-Threads-AM4-100-100000031BOX_1683547155_gg.jpg" width = "150px" height = "150px">', 
    nome: "processador", 
    descricao: "AMD Ryzen 5-3600", 
    preco: 2300, 
    preco2:"alto", 
    tipo:"trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/241051/processador-intel-12900kf-bx8071512900kf_1635258488_gg.jpg" widht = "150px" height = "150px">',
    nome: "processador",
    descricao: "Intel Core I9-12900KF",
    preco: 3000,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://m.media-amazon.com/images/I/61CxrI8SYSL.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "RX 580 8GB",
    preco: 1300,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/117307/Placa-de-V-deo-1GB-MSI-GeForce-GT-710-DDR3-64Bits-GT-710-1GD3H-LP-ESP_1685038695_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce GT 710",
    preco: 330,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/117307/Placa-de-V-deo-1GB-MSI-GeForce-GT-710-DDR3-64Bits-GT-710-1GD3H-LP-ESP_1685038695_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce GT 710",
    preco: 330,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/302813/Placa-de-V-deo-PCYes-AMD-Radeon-RX-550-4GB-GDDR5-Grafiti-Series-PAJRX550DR5DF_1681397321_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "PCYes AMD Radeon RX 550",
    preco: 730,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/89811/89811_index_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce GT 1030",
    preco: 520,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/95459/95459_1520954069_index_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce GTX 1050 Ti",
    preco: 1000,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/102130/placa-de-video-evga-nvidia-geforce-gtx-1660-sc-ultra-gaming-6gb-gddr5-06g-p4-1067-kr_placa-de-video-evga-nvidia-geforce-gtx-1660-sc-ultra-gaming-6gb-gddr5-06g-p4-1067-kr_1560799756_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce GTX 1660",
    preco: 1500,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/148656/placa-de-video-zotac-gaming-geforce-rtx-3060-twin-edge-15-gbps-12gb-gddr6-ray-tracing-zt-a30600e-10m_1613994258_gg.jpg" widht = "150px" height = "150px">',
    nome: "placa-de-video",
    descricao: "NVIDIA GeForce RTX 3060",
    preco: 2000,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://m.media-amazon.com/images/I/81ML1zhVHrL.jpg" widht = "150px" height = "150px">',
    nome: "hd",
    descricao: "Wester Digital 1T",
    preco: 200,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/415885/ssd-adata-legend-710-512gb-m-2-2280-pcie-gen3x4-nvme-1-4-leitura-2-400-mb-s-e-gravacao-1-800-mb-s-azul-aleg-710-512gcs_1675085973_gg.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD Adata Legend 710, 512GB, M2",
    preco: 160,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/415886/ssd-adata-legend-710-1tb-m-2-2280-pcie-gen3x4-nvme-1-4-leitura-2-400-mb-s-e-gravacao-1-800-mb-s-azul-aleg-710-1tcs_1675086212_gg.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD Adata Legend 710, 1TB, M2",
    preco: 350,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/173626/SSD-XPG-SX6000-Lite-1Tb-M2-NVMe-ASX6000LNP-1TT-C_1687385322_gg.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD XPG SX6000 Lite 1Tb, M2 NVMe",
    preco: 450,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/107340/ssd-kingston-kc600-1024gb-sata-leitura-550mb-s-gravacao-520mb-s-skc600-1024g_ssd-kingston-kc600-1024gb-sata-leitura-550mb-s-gravacao-520mb-s-skc600-1024g_1572361632_gg.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD 1 TB Kingston KC600, SATA",
    preco: 420,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/95217/95217_1520016025_gg.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD 960GB TB Kingston KC600, SATA",
    preco: 650,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/107340/ssd-kingston-kc600-1024gb-sata-leitura-550mb-s-gravacao-520mb-s-skc600-1024g_ssd-kingston-kc600-1024gb-sata-leitura-550mb-s-gravacao-520mb-s-skc600-1024g_1572361632_gg.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD 1 TB Kingston KC600, SATA",
    preco: 650,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/459936/ssd-kingston-960gb-dc600m-mixed-use-sata-2-5-leitura-560mb-s-e-gravacao-530mb-s-sedc600m-960g_1686053706_gg.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD Kingston 960GB DC600M Mixed-Use, SATA 2.5",
    preco: 1000,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/155409/ssd-kingston-1000gb-nv1-m-2-2280-nvme-leitura-2100mb-s-e-gravacao-1700mb-s-snvs-1000g_1619533593_original.jpg" widht = "150px" height = "150px">',
    nome: "ssd",
    descricao: "SSD M2 Kingstone 1T",
    preco: 1000,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/320908/gabinete-gamer-rise-mode-galaxy-glass-lateral-em-vidro-temperado-preto-rm-ga-gg-fb_1657738212_g.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Rize Mode Blue",
    preco: 200,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/102136/102136_1560518462_index_gg.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Corsair Carbide Series 175R, RGB",
    preco: 450,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/129061/gabinete-corsair-gamer-470t-rgb-mid-tower-com-fan-lateral-em-vidro-cc-9011215-ww_1602872251_gg.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Corsair 470T, Mid Tower, RGB",
    preco: 680,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/109990/gabinete-gamer-corsair-icue-220t-tg-rgb-mid-tower-com-fan-lateral-e-frontal-em-vidro-branco-cc-9011191_1583178141_gg.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Corsair ICUE 220T TG, Mid-Tower, ATX, RGB",
    preco: 850,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/320908/gabinete-gamer-rise-mode-galaxy-glass-lateral-em-vidro-temperado-preto-rm-ga-gg-fb_1657738212_gg.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Rise Mode Galaxy Glass, Mid Tower",
    preco: 750,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/469100/Gabinete-Corsair-Icue-5000x-Argb-Branco-Mid-tower-Vidro_1686598106_gg.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Corsair Icue 5000x Argb, Branco",
    preco: 2300,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/107015/gabinete-gamer-corsair-icue-465x-mid-tower-rgb-com-fan-lateral-e-frontal-em-vidro-cc-9011188-ww-_gabinete-gamer-corsair-icue-465x-mid-tower-rgb-com-fan-lateral-e-frontal-em-vidro-cc-9011188-ww-_1571667865_gg.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Gamer Corsair iCUE 465X, RGB",
    preco: 1000,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/100737/100737_1552309807_index_gg.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Fortrek, ATX, Preto",
    preco: 80,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/307582/gabinete-gamer-multilaser-gd-110-micro-atx-2x-fans-led-vermelho-preto-ga206_1644604088_gg.jpg" widht = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Gamer Multi GD-110, Mid Tower",
    preco: 120,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/100737/100737_1552309807_index_gg.jpg" width = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Fortrek, ATX, Preto",
    preco: 120,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/322941/gabinete-rise-mode-office-01-matx-preto-rm-ga-of-fb_1660589580_gg.jpg" width = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Rise Mode Office 01, mATX, Preto",
    preco: 100,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/249532/Gabinete-Gamer-Micro-Atx-Sem-Fonte-Ga205_1683633495_gg.jpg" width = "150px" height = "150px">',
    nome: "gabinete",
    descricao: "Gabinete Gamer Micro Atx Sem Fonte",
    preco: 90,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/319377/gabinete-gamer-rise-mode-glass-06x-frost-lateral-em-vidro-fume-frontal-em-vidro-temperado-branco-rm-wt-06x-fw_1660589960_gg.jpg" width = "150px" height = "150px">',
    nome: "gabinete",
    descricao:
      "Gabinete Gamer Rise Mode Glass 06X Frost, Mid Tower, Frontal e Lateral em Vidro Temperado, Branco ",
    preco: 400,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://images.kabum.com.br/produtos/fotos/391028/gabinete-gamer-hayom-gb1713-mid-tower-led-rgb-atx-lateral-em-vidro-temperado-4x-cooler-fan-rgb-preto-gb-17-10-13_1666295084_gg.jpg" width = "150px" height = "150px">',
    nome: "gabinete",
    descricao:
      "Gabinete Gamer Hayom GB1713, Mid Tower, LED RGB, ATX, Lateral em Vidro Temperado, 4x Cooler Fan RGB, Preto",
    preco: 350,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/ssd-gamer-warrior-240gb-multilaser/polimentoauto/7899838840536-3/afb1073489b964d40a94e74014aceb91.jpeg" width = "150px" height = "150px">',
    nome: "ssd",
    descricao: "Ssd Gamer Warrior 240GB - Multilaser",
    preco: 470,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/ssd-960gb-somnambulist-sata-3-para-notebook-desktop-6gb-s/oliststore/mglcghebmm2uq2ue/afd4c3791cb633a35c18002e928a7c28.jpeg" width = "150px" height = "150px">',
    nome: "ssd",
    descricao: "Ssd 960Gb Somnambulist Sata 3 Para Notebook, Desktop 6Gb/S",
    preco: 550,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/ssd-gamer-warrior-240gb-500w-2-5pol-sata-ss210/lemmant/lm149/3aa8e1c7b3f4e4f56b5bc72b12b55885.jpg" width = "150px" height = "150px">',
    nome: "ssd",
    descricao: "Ssd Gamer Warrior 240gb 500w 2.5pol Sata Ss210",
    preco: 300,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://http2.mlstatic.com/D_NQ_NP_890854-MLB69790657987_062023-O.webp" width = "150px" height = "150px">',
    nome: "ssd",
    descricao: "Ssd 120gb Up Gamer 2,5 Sata 6gb/s",
    preco: 150,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/processador-gamer-intel-core-i3-2100-3-1ghz/oliststore/mglxaiffuijsaqg0/1611c21505dd7b971b23c25d9eb34f91.jpeg" width = "150px" height = "150px">',
    nome: "processador",
    descricao: "Processador Gamer Intel Core I3-2100 3.1Ghz",
    preco: 150,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/processador-gamer-intel-core-i3-2100-3-1ghz/oliststore/mglxaiffuijsaqg0/1611c21505dd7b971b23c25d9eb34f91.jpeg" width = "150px" height = "150px">',
    nome: "processador",
    descricao: "Processador Gamer Intel Core I3-2100 3.1Ghz",
    preco: 150,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://http2.mlstatic.com/D_NQ_NP_709670-MLB50662319211_072022-O.webp" width = "150px" height = "150px">',
    nome: "processador",
    descricao: "Processador Gamer Intel Core I5-2400 3.4ghz",
    preco: 160,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://i.zst.com.br/thumbs/1/16/17/1944854190.jpg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao:
      "Placa mãe Asus TUF B360M-PLUS GAMING/BR LGA 1151 - Chipset Intel B360 - USB 3.1 Tipo C - Slot M.2",
    preco: 1250,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-gigabyte-b760-gaming-x-ddr4-atx-lga1700/tertz/jdj1dc79y/786267d700b7b103b1db9170ab26a74f.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mãe Gigabyte B760 GAMING X, DDR4, ATX, LGA1700",
    preco: 2300,
    preco2: "alto",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-gigabyte-b760m-aorus-elite-lga-1700-ddr4/primetek/025262/db7a6f43b8efd6370875c9c598788d4a.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mae Gigabyte B760M Aorus Elite Lga 1700 DDR4",
    preco: 1500,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-gigabyte-b660m-aorus-elite-ddr4-chipset-b660-intel/dcctecnologialtda/16004137483/38f65ac5014f9f00da615cd932125d29.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mãe Gigabyte B660M AORUS ELITE DDR4,Chipset B660,Intel",
    preco: 1400,
    preco2: "alto",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-gigabyte-amd-am4-b450m-gaming-matx-ddr4/ggwpinformatica/16018416119/9fc55aa18c5d41b995913ed41e672b5d.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa-Mãe Gigabyte AMD AM4 B450M Gaming mATX DDR4",
    preco: 850,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-pcware-para-amd-ryzen-matx-apm-a320g-2xddr4-32gb/olistplus/opmoayfd5ffbk96f/f5a7b5106e58c15171db6c2344ab3b21.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa-Mae Pcware Para Amd Ryzen Matx Apm-A320G, 2Xddr4 32Gb",
    preco: 900,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-intel-gigabyte-h510m-h-ddr4-lga-1200-10-e-11-geracao/hdstoreoficial/40314/41bc69c1eb27d401d573d06e6ee2a79a.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao:
      "Placa Mae (intel) Gigabyte H510m H Ddr4 Lga 1200 10 E 11 Geracao",
    preco: 750,
    preco2: "medio",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-asrock-j4005dc-itx-intel/lojacogra/sv3392320/61bb73eb17bff8a6dc12e02fda69c986.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mae Asrock J4005dc-Itx Intel",
    preco: 700,
    preco2: "medio",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://i.zst.com.br/thumbs/1/2f/3e/-648817915.jpg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mãe BPC-H55-V1.51 - (LGA 1156 DDR3) - Chipset Intel H55",
    preco: 540,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-msi-a520m-a-pro-amd-am4-matx-ddr4/kabum/280890/95f6b77f51c89fa3ed684be6aef78602.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mãe MSI A520M-A PRO, AMD AM4, mATX, DDR4",
    preco: 500,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-msi-a520m-a-pro-amd-am4-matx-ddr4/kabum/280890/95f6b77f51c89fa3ed684be6aef78602.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mãe MSI A520M-A PRO, AMD AM4, mATX, DDR4",
    preco: 500,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-hyperpc-h61-lga-1155-ddr3-hdmi-e-vga-tg-h61-303-u-p/info-parts/2716554-8701041/49feb01fd5a1d2b93ee7e9af19f53af6.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao:
      "Placa Mae HyperPC H61, LGA 1155, DDR3, HDMI e VGA - TG-H61-303-U/P",
    preco: 300,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-intel-knup-h510-lga-1200-usb-3-0-chipset-64gb/hequipelcomputers/lga1200knup/f728e512185895f26500ce0ada109269.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mãe Intel Knup H510 Lga 1200 Usb 3.0 Chipset 64gb",
    preco: 550,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/placa-mae-intel-knup-h510-lga-1200-usb-3-0-chipset-64gb/hequipelcomputers/lga1200knup/f728e512185895f26500ce0ada109269.jpeg" width = "150px" height = "150px">',
    nome: "placa-mae",
    descricao: "Placa Mãe Intel Knup H510 Lga 1200 Usb 3.0 Chipset 64gb",
    preco: 550,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/processador-intel-celeron-g5900-3-4-lga-1200-bx80701g5900-i/mercadodaimpressora/15967392723/ace663f5fca95c40a6e6bb656e08c126.jpeg" width = "150px" height = "150px">',
    nome: "processador",
    descricao: "Processador Intel Celeron G5900 3.4 LGA 1200 - BX80701G5900 I",
    preco: 500,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/processador-intel-celeron-g5900-3-4-lga-1200-bx80701g5900-i/mercadodaimpressora/15967392723/ace663f5fca95c40a6e6bb656e08c126.jpeg" width = "150px" height = "150px">',
    nome: "processador",
    descricao: "Processador Intel Celeron G5900 3.4 LGA 1200 - BX80701G5900 I",
    preco: 500,
    preco2: "baixo",
    tipo: "gamer",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/processador-amd-ryzen-5-4500-am4-6-nucleos-12-threads-3-6ghz-100-100000644box/wazhardwarestore/125008/4c4b933404d96316e2e70754bf354f08.jpeg" width = "150px" height = "150px">',
    nome: "processador",
    descricao:
      "Processador AMD Ryzen 5 4500 (AM4 - 6 núcleos / 12 threads - 3.6GHz)",
    preco: 650,
    preco2: "baixo",
    tipo: "trabalho",
  },
  {
    imagem:
      '<img src="https://a-static.mlcdn.com.br/800x560/processador-amd-ryzen-5-4500-am4-6-nucleos-12-threads-3-6ghz-100-100000644box/wazhardwarestore/125008/4c4b933404d96316e2e70754bf354f08.jpeg" width = "150px" height = "150px">',
    nome: "processador",
    descricao:
      "Processador AMD Ryzen 5 4500 (AM4 - 6 núcleos / 12 threads - 3.6GHz)",
    preco: 650,
    preco2: "baixo",
    tipo: "gamer",
  },
];

function filtrar() {
  var tipo = document.getElementById("tipo").value;
  var orcamento = document.getElementById("orcamento").value;
  var uso = document.getElementById("uso").value;

  let one = "";
  let two = "";
  let three = "";

  let str = "";

  for (let i = 0; i < pecas.length; i++) {
    let pecass = pecas[i];

    if (tipo === pecass.nome) {
      if (orcamento === pecass.preco2) {
        if (uso === pecass.tipo) {
          one = pecass.imagem;
          two = pecass.preco;
          three = pecass.descricao;

          str += `<div class = "produto"> <div class = "imagem">${one} </div> <div class="text"> <strong class="descstrong">Descrição:</strong> ${three}<br><strong class="valor">Valor:</strong> R$${two},00<br> </div> </div>`;
        }
      }
    }
  }

  document.getElementById("resultado").innerHTML = str;
}
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')



function checkInputs(){
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const passwordtwoValue = passwordtwo.value.trim()

  if(usernameValue === '') {
    errorValidation(username, 'Preencha esse campo')
  }
  else{
    successValidation(username)
  }

  if(emailValue === ''){
    errorValidation(email, 'Preencha esse campo')
  }
  else{
    successValidation(email)
  }

  if(passwordValue === '') {
    errorValidation(password, 'Preencha esse campo')
  }
  else{
    successValidation(password)
  }

  if(passwordtwoValue === '') {
    errorValidation(passwordtwo, 'Preencha esse campo')
  }
  else if(passwordtwoValue !== passwordValue) {
    errorValidation(passwordtwo, 'As senhas devem ser iguais')
  }
  else{
    successValidation(passwordtwo)
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  small.innerText = message
  
  formControl.className = 'form-control error'
}

function successValidation(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success'
}

/* Banco de dados */

function leDados (){
  let strDados = localStorage.getItem('db');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse (strDados);
  }
  else {
    objDados = { cadastros: [

      {nome: "Pedro Cattoni",     email: "pcattoni11@outlook.com", senha: "12042005" },
      {nome: "Gabriela Medeiros", email: "gab23pm@gmail",          senha: "21101998" },
      {nome: "Luisa Santos",      email: "lulusan@hotmail.com",    senha: "01052006" }
                             ]}
  }

  return objDados;
}

function salvaDados (dados) {
  localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirCadastro (){
  // Ler dados do localStorage
  let objDados = leDados();
  
  // Incluir um novo Cadastro
  let strNome = document.getElementById ('username').value;
  let strEmail = document.getElementById('email').value;
  let strSenha = document.getElementById('password').value;
  let novoCadastro = {
      nome: strNome,
      email: strEmail,
      senha: strSenha
  };
  objDados.cadastros.push (novoCadastro);

  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const passwordtwoValue = passwordtwo.value.trim()

    if(passwordtwoValue !== passwordValue || usernameValue === '' || emailValue === '' || passwordValue === '' ) {
        errorValidation(passwordtwo, ' ')
    }
    else{
    // Salvar os dados no localStorage Novamente
        salvaDados(objDados);
    
  // Atualiza os dados da tela
        imprimeDados();
    }
}

function imprimeDados () {
  let tela = document.getElementById('tela');
  let strHtml = '';
  let objDados = leDados ();

  for (i = 0; i < objDados.cadastros.length; i++) {
    strHtml += `<p>${objDados.cadastros[i].nome} - ${objDados.cadastros[i].email} - ${objDados.cadastros[i].senha}</p>`
  }

  tela.innerHTML = strHtml;
}

// Config Botões

let btn = document.querySelector('.fa-eye')



function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = 'index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', userValid.nome)
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}
btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = 'signin.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const perfil = JSON.parse(localStorage.getItem('perfil'));

  if (perfil) {
    const usernameSpan = document.querySelector('#username');
    const userSpan = document.querySelector('#user');

    usernameSpan.textContent = perfil.nome;
    userSpan.textContent = perfil.user;
  }
});






  
  




