/* JS from user code with modal additions */
const animals=[
  {id:"1",nome:"Luna",especie:"Gato",idade:2,sexo:"Fêmea",tamanho:"Pequeno",cor:"Cinzento",zona:"Porto",raca:"Europeu",img:"",historia:"Resgatada da rua, recuperou totalmente."},
  {id:"2",nome:"Rex",especie:"Cão",idade:4,sexo:"Macho",tamanho:"Grande",cor:"Castanho",zona:"Lisboa",raca:"Labrador",img:"",historia:"Foi deixado no abrigo, muito brincalhão."},
  {id:"3",nome:"Kiki",especie:"Coelho",idade:1,sexo:"Fêmea",tamanho:"Pequeno",cor:"Branco",zona:"Braga",raca:"Anão",img:"",historia:"Resgatada de um quintal sem condições."},
  {id:"4",nome:"Thor",especie:"Cão",idade:3,sexo:"Macho",tamanho:"Médio",cor:"Preto",zona:"Coimbra",raca:"Pastor Alemão",img:"",historia:"Viviu acorrentado, agora procura família."},
  {id:"5",nome:"Mimi",especie:"Gato",idade:5,sexo:"Fêmea",tamanho:"Pequeno",cor:"Laranja",zona:"Porto",raca:"Europeu",img:"",historia:"Abandonada, muito carinhosa."},
  {id:"6",nome:"Bolt",especie:"Cão",idade:2,sexo:"Macho",tamanho:"Grande",cor:"Branco",zona:"Faro",raca:"Husky",img:"",historia:"Resgatado de maus tratos."},
  {id:"7",nome:"Nina",especie:"Gato",idade:1,sexo:"Fêmea",tamanho:"Pequeno",cor:"Preto",zona:"Lisboa",raca:"Europeu",img:"",historia:"Muito meiga e sociável."},
  {id:"8",nome:"Snow",especie:"Coelho",idade:2,sexo:"Macho",tamanho:"Pequeno",cor:"Branco",zona:"Aveiro",raca:"Anão",img:"",historia:"Adora receber carinho."},
  {id:"9",nome:"Duke",especie:"Cão",idade:6,sexo:"Macho",tamanho:"Grande",cor:"Bege",zona:"Setúbal",raca:"Golden Retriever",img:"",historia:"Muito dócil com crianças."},
  {id:"10",nome:"Bella",especie:"Gato",idade:3,sexo:"Fêmea",tamanho:"Pequeno",cor:"Branco",zona:"Braga",raca:"Persa",img:"",historia:"Resgatada muito doente, já recuperou."},
  {id:"11",nome:"Max",especie:"Cão",idade:2,sexo:"Macho",tamanho:"Médio",cor:"Cinzento",zona:"Porto",raca:"Pitbull",img:"",historia:"Cheio de energia e muito fiel."},
  {id:"12",nome:"Lola",especie:"Coelho",idade:1,sexo:"Fêmea",tamanho:"Pequeno",cor:"Castanho",zona:"Leiria",raca:"Mini Rex",img:"",historia:"Muito tímida mas carinhosa."},
  {id:"13",nome:"Rocky",especie:"Cão",idade:5,sexo:"Macho",tamanho:"Grande",cor:"Preto",zona:"Faro",raca:"Rottweiler",img:"",historia:"Protector e muito leal."},
  {id:"14",nome:"Moka",especie:"Gato",idade:4,sexo:"Fêmea",tamanho:"Médio",cor:"Castanho",zona:"Coimbra",raca:"Siamês",img:"",historia:"Muito calma e carinhosa."},
  {id:"15",nome:"Zeus",especie:"Coelho",idade:1,sexo:"Macho",tamanho:"Médio",cor:"Mini Rex",zona:"Lisboa",raca:"Pastor Branco",img:"",historia:"Amigável e calmo."}
];

function renderList(list){
  const root=document.getElementById("animals");
  root.innerHTML="";
  list.forEach(a=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=
    `<img src="${a.img}">
     <div class="card-body">
       <strong>${a.nome}</strong><br>
       Espécie: ${a.especie}<br>
       Idade: ${a.idade} anos<br>
       <button onclick="openModal('${a.id}')">Ver História</button>
     </div>`;
    root.appendChild(div);
  });
}

function openModal(id){
  const a=animals.find(x=>x.id===id);
  const modal=document.getElementById("modal-root");
  modal.style.display="block";
  modal.innerHTML=
  `<div class='modal-bg' onclick='closeModal(event)'>
      <div class='modal' onclick='event.stopPropagation()'>
        <h2>${a.nome}</h2>
        <p><strong>Espécie:</strong> ${a.especie}</p>
        <p><strong>Idade:</strong> ${a.idade} anos</p>
        <p><strong>Raça:</strong> ${a.raca}</p>
        ${a.vacinas ? `<p><strong>Vacinas:</strong> ${a.vacinas}</p>` : ""}
        ${a.esterilizado ? `<p><strong>Esterilizado:</strong> ${a.esterilizado}</p>` : ""}
        ${a.desparasitado ? `<p><strong>Desparasitado:</strong> ${a.desparasitado}</p>` : ""}
        <p><strong>Contacto:</strong> 915240059</p>
        <p><strong>Email:</strong> coracaoanimal@gmail.com</p>
        <p><strong>História:</strong> ${a.historia}</p>
        <button onclick='closeModal()'>Fechar</button>
      </div>
   </div>`;
}

function closeModal(){document.getElementById("modal-root").style.display="none";}
