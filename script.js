const artwork={
"Lock Upp":"https://occ-0-8407-444.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaRKJtq2j8HvwD1XD_BlyBX-QOh17OaocU62Aj9K7uVmybe3Os58H_GwWWSlhQYfPylmWuUVzdF32i177fTaOww4zB1X5bd-JJjR.jpg?r=605",
"The Good Doctor":"https://m.media-amazon.com/images/M/MV5BODNiZjg3YTEtMjVhZS00NWNmLWJkOGUtY2FiODdlNDQwNWI0XkEyXkFqcGc%40._V1_.jpg",
"Young Sheldon":"https://cdn.mos.cms.futurecdn.net/jC4J3XezL3xZ3haKPyTJQi.jpg",
"Money Heist":"https://images5.alphacoders.com/913/913388.jpg",
"S.W.A.T.":"https://gfx.videobuster.de/archive/v/cquozV_CBCKPM0WCIEOoTIQcz0lMkawsCUyRjA5JTJGaW1hmSUyRmpwZWclMkaqNGEyi2Y4YjVhuGJlMDAxZWHNYbTRM2EwNy5qcGcmcj1opjAw/s-w-a-t-staffel-3-szenenbild.jpg",
"Berlin":"https://img.voguehk.com/media/2023/09/AAAABVp_pq3zZtIUI_mXXJv44OYNJuvk-1280x720.jpg",
"Khakee":"https://idiva-media.ilnmedia.com/content/2025/Mar/thumb---2025-03-20T142421189_67dbd7c511fa3.jpg",
"The Big Bang Theory":"https://images6.alphacoders.com/638/thumb-1920-638929.jpg",
"The Vampire Diaries":"https://wall.alphacoders.com/images/675/675720.jpg",
"Naruto":"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/650db0a292867cf5cdce0118efbe61c2af87c62b283ddf63a909dff084f118fb._RI_V_TTW_.jpg",
"Breaking Bad":"https://www.looper.com/img/gallery/what-only-true-fans-know-about-breaking-bad/a-right-turn-at-albuquerque-1568234440.jpg",
"Wednesday":"https://pbs.twimg.com/media/FaX_1oqUIAItHZn.jpg",
"The Witcher":"https://wallpapercrafter.com/desktop/43491-The-Witcher-poster-Henry-Cavill-4K.jpg",
"Lucifer":"https://image.tmdb.org/t/p/original/1qU74xOLL65IFV3bfLJsdvfoThI.jpg",
"Demon Slayer":"https://cfm.yidio.com/images/tv/54170/backdrop-1280x720.jpg"
};
const artworkFallbacks={
"The Big Bang Theory":["https://images6.alphacoders.com/638/thumb-1920-638929.jpg","https://wallpapercrafter.com/th8005/1317169-TV-Show-The-Big-Bang-Theory-Beverly-Hofstadter-Cast.jpg"],
"The Vampire Diaries":["https://wall.alphacoders.com/images/675/675720.jpg","https://i.pinimg.com/736x/ed/e2/07/ede207095a48f0b2ccc60fe9916fbb4e.jpg"],
"Naruto":["https://images-na.ssl-images-amazon.com/images/S/pv-target-images/650db0a292867cf5cdce0118efbe61c2af87c62b283ddf63a909dff084f118fb._RI_V_TTW_.jpg","https://i.pinimg.com/736x/ed/e2/07/ede207095a48f0b2ccc60fe9916fbb4e.jpg"],
"Breaking Bad":["https://www.looper.com/img/gallery/what-only-true-fans-know-about-breaking-bad/a-right-turn-at-albuquerque-1568234440.jpg"],
"Wednesday":["https://pbs.twimg.com/media/FaX_1oqUIAItHZn.jpg","https://images6.alphacoders.com/638/thumb-1920-638929.jpg"],
"The Witcher":["https://wallpapercrafter.com/desktop/43491-The-Witcher-poster-Henry-Cavill-4K.jpg","https://wallpapers.com/images/hd/the-witcher-3-geralt-mountain-landscape-2f2x5bh50jbc94hy.jpg"],
"Lucifer":["https://image.tmdb.org/t/p/original/1qU74xOLL65IFV3bfLJsdvfoThI.jpg","https://img3.aksam.com.tr/imgsdisk/2023/03/06/t25_seytana-pabucunu-ters-giy-265.jpg"],
"Demon Slayer":["https://cfm.yidio.com/images/tv/54170/backdrop-1280x720.jpg","https://7fon.club/uploads/posts/2022-11/1667270870_8-7fon-club-p-oboi-anime-klinok-rassekayushchii-demonov-16.jpg"]
};
const gradients=[
"linear-gradient(135deg,#18243a,#9c2b34 65%,#111)",
"linear-gradient(135deg,#16122a,#a12e49 65%,#050505)",
"linear-gradient(135deg,#172818,#c99729 65%,#070707)",
"linear-gradient(135deg,#111827,#49637c 65%,#060606)",
"linear-gradient(135deg,#211326,#773b86 65%,#070707)",
"linear-gradient(135deg,#10151a,#b45a2c 65%,#050505)"
];
const catalog={
favourites:[["The Vampire Diaries",0],["The Good Doctor",1],["The Big Bang Theory",0],["Money Heist",2],["Young Sheldon",3],["S.W.A.T.",4]],
new:[["Lock Upp",4],["Berlin",2],["Khakee",1],["Wednesday",3],["Naruto",5],["Demon Slayer",0]],
action:[["Breaking Bad",2],["The Witcher",3],["Lucifer",1],["Money Heist",4],["S.W.A.T.",5],["Berlin",0]],
continue:[["The Good Doctor",2],["Young Sheldon",3],["The Vampire Diaries",1],["The Big Bang Theory",4],["Khakee",0],["Breaking Bad",5]],
popular:[["Wednesday",4],["The Witcher",1],["Money Heist",2],["Lucifer",5],["The Good Doctor",3],["Berlin",0]],
top10:[["Money Heist",1],["The Big Bang Theory",4],["Young Sheldon",2],["Breaking Bad",3],["Demon Slayer",5],["Wednesday",0],["The Vampire Diaries",2],["The Witcher",1],["Lucifer",4],["S.W.A.T.",5]]
};
const descriptions={
"The Big Bang Theory":"Physicists Leonard and Sheldon find their nerd-centric social circle with pals Howard and Raj expanding when Penny moves in next door.",
"Stranger Things":"A group of friends uncover supernatural mysteries and secret experiments in their small town.",
"Breaking Bad":"A chemistry teacher enters the world of crime after a life-changing diagnosis.",
"Money Heist":"A criminal mastermind recruits a crew for an elaborate heist.",
"Wednesday":"Wednesday Addams investigates strange events at Nevermore Academy.",
"The Witcher":"A monster hunter searches for his place in a dangerous world."
};
function artFor(title,grad){ return artwork[title] || ""; }
function imageTag(title, cls="movie-bg"){
  const urls=[artwork[title],...(artworkFallbacks[title]||[])].filter(Boolean);
  if(!urls.length) return "";
  const encoded=JSON.stringify(urls).replace(/"/g,'&quot;');
  return `<img class="${cls}" src="${urls[0]}" data-fallbacks="${encoded}" alt="${title}" loading="lazy" onerror="fallbackImage(this)">`;
}
function card(title,grad,index,row){
  const src=artFor(title,grad);
  return `<article class="poster landscape-card" data-title="${title}" data-row="${row}">
    <div class="poster-art" style="--bg:${grad};--poster-image:url('${src}')">
      ${imageTag(title)}
      <div class="poster-overlay"></div>
      <div class="poster-title">${title}</div>
      <span class="new-tag">${index<3?"Recently added":""}</span>
    </div>
    <div class="hover-details">
      <div class="hover-actions"><button data-play="${title}">▶</button><button>＋</button><button>♡</button><button class="more">⌄</button></div>
      <div class="hover-meta"><b>${60+index*3}% match</b><span>U/A 16+</span><span>${1+index%12} Seasons</span><span>HD</span></div>
      <small>Drama · TV Shows · Entertainment</small>
    </div>
  </article>`;
}
function fallbackImage(img){
  try{
    const urls=JSON.parse(img.dataset.fallbacks||"[]");
    const i=urls.indexOf(img.src);
    const next=urls[i+1];
    if(next){ img.src=next; return; }
  }catch(e){}
  img.style.display="none";
}
function renderRows(){
 document.querySelectorAll("[data-row]").forEach(row=>{
   const items=catalog[row.dataset.row]||[];
   if(row.dataset.row==="top10"){
     row.innerHTML=items.map((x,i)=>{const src=artFor(x[0],gradients[x[1]]);return `<article class="top10-card" data-title="${x[0]}"><div class="top-number">${i+1}</div><div class="top-image" style="--bg:${gradients[x[1]]};--poster-image:url('${src}')">${imageTag(x[0],"top-movie-bg")}</div><span>${x[0]}</span></article>`}).join("");
   }else row.innerHTML=items.map((x,i)=>card(x[0],gradients[x[1]],i,row.dataset.row)).join("");
 });
}
renderRows();
const navbar=document.getElementById("navbar");
window.addEventListener("scroll",()=>navbar.classList.toggle("scrolled",scrollY>50));
const searchBox=document.getElementById("searchBox");
document.getElementById("searchToggle").onclick=()=>{searchBox.classList.toggle("open");document.getElementById("searchInput").focus()};
document.getElementById("profileBtn").onclick=()=>document.getElementById("profileMenu").classList.toggle("open");
const toastEl=document.getElementById("toast");
function toast(msg){toastEl.textContent=msg;toastEl.classList.add("show");setTimeout(()=>toastEl.classList.remove("show"),2200)}
function openModal(title){
 document.getElementById("modalTitle").textContent=title;
 document.getElementById("modalText").textContent=descriptions[title]||"Explore this title in the StreamFlix catalogue.";
 document.getElementById("modalMeta").innerHTML="<span>2026</span><span>U/A 16+</span><span>HD</span>";
 document.getElementById("modalArt").style.backgroundImage=`linear-gradient(180deg,transparent,#181818),url("${artwork[title]||'https://occ-0-8407-444.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaRKJtq2j8HvwD1XD_BlyBX-QOh17OaocU62Aj9K7uVmybe3Os58H_GwWWSlhQYfPylmWuUVzdF32i177fTaOww4zB1X5bd-JJjR.jpg?r=605'}")`;
 document.getElementById("modal").classList.add("open");
}
document.addEventListener("click",e=>{
 const play=e.target.closest("[data-play]"); if(play){e.stopPropagation();toast(`Playing "${play.dataset.play}"`);return}
 const poster=e.target.closest(".poster"); if(poster && !e.target.closest(".hover-details")) openModal(poster.dataset.title);
 const top=e.target.closest(".top10-card"); if(top) openModal(top.dataset.title);
 const info=e.target.closest("[data-info]"); if(info) openModal(info.dataset.info);
 const plan=e.target.closest("[data-plan]"); if(plan) toast(`${plan.dataset.plan} plan selected — demo only`);
});
document.getElementById("modalClose").onclick=()=>document.getElementById("modal").classList.remove("open");
document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")e.target.classList.remove("open")};
document.getElementById("modalPlay").onclick=()=>{toast("Playback started — demo only");document.getElementById("modal").classList.remove("open")};
const searchInput=document.getElementById("searchInput");
searchInput.addEventListener("input",()=>{const q=searchInput.value.toLowerCase().trim();document.querySelectorAll(".poster,.top10-card").forEach(p=>p.style.display=!q||p.dataset.title.toLowerCase().includes(q)?"":"none")});
