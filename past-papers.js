(() => {
 const years={
  1990:{file:'1990.pdf',pages:11,appliedEnd:6},1991:{file:'1991.pdf',pages:15,appliedEnd:8},
  1992:{file:'1992.pdf',pages:16,appliedEnd:8},1993:{pure:'1993-pure.pdf',purePages:8,applied:'1993-applied.pdf',appliedPages:12},
  1994:{file:'1994.pdf',pages:16,appliedEnd:8}
 };
 const yearSel=document.querySelector('#yearSelect'),subjectSel=document.querySelector('#subjectSelect'),topicSel=document.querySelector('#topicSelect'),list=document.querySelector('#paperList');
 const lang=()=>localStorage.getItem('lkCoMathsLanguage')||'si';
 const txt=(si,en,ta)=>({si,en,ta}[lang()]||si);
 const topics={pure:txt('මිශ්‍ර ශුද්ධ ගණිත ප්‍රශ්න','Mixed Pure Mathematics questions','கலப்பு தூய கணித வினாக்கள்'),applied:txt('මිශ්‍ර ව්‍යවහාරික ගණිත ප්‍රශ්න','Mixed Applied Mathematics questions','கலப்பு பயன்பாட்டுக் கணித வினாக்கள்')};
 Object.keys(years).sort().reverse().forEach(y=>yearSel.add(new Option(y,y)));
 function refreshTopics(){topicSel.replaceChildren(new Option(txt('සියලු පාඩම් / මාතෘකා','All topics','அனைத்து தலைப்புகள்'),'all'));const subjects=subjectSel.value==='all'?['pure','applied']:[subjectSel.value];for(const s of subjects)topicSel.add(new Option(topics[s],s));render();}
 function render(){list.replaceChildren();const y=yearSel.value,d=years[y],subjects=subjectSel.value==='all'?['pure','applied']:[subjectSel.value];let rows=[];
  for(const s of subjects){const file=d[s]||d.file;if(!file)continue;const n=d[s+'Pages']||(s==='applied'?d.appliedEnd:d.pages-d.appliedEnd);const start=d[s]?1:(s==='applied'?1:d.appliedEnd+1);for(let i=0;i<n;i++){const page=start+i;rows.push({s,file,page});}}
  rows.forEach(r=>{const card=document.createElement('article');card.className='card';const h=document.createElement('h3');h.textContent=txt(r.s==='pure'?'ශුද්ධ ගණිතය':'ව්‍යවහාරික ගණිතය',r.s==='pure'?'Pure Mathematics':'Applied Mathematics',r.s==='pure'?'தூய கணிதம்':'பயன்பாட்டுக் கணிதம்');const p=document.createElement('p');p.textContent=txt(`වර්ෂය ${y} · PDF පිටුව ${r.page} · මිශ්‍ර ප්‍රශ්න පිටුව`,`${y} · PDF page ${r.page} · Questions on scanned page`,`${y} · PDF பக்கம் ${r.page} · ஸ்கேன் பக்க வினாக்கள்`);const a=document.createElement('a');a.className='btn';a.href=`paper-question.html?year=${y}&subject=${r.s}&page=${r.page}`;a.textContent=txt('ප්‍රශ්න පිටුව විවෘත කරන්න','Open question page','வினாப் பக்கத்தைத் திற');card.append(h,p,a);list.append(card);});
 }
 yearSel.addEventListener('change',render);subjectSel.addEventListener('change',refreshTopics);topicSel.addEventListener('change',()=>{if(topicSel.value!=='all')subjectSel.value=topicSel.value;render();});document.querySelectorAll('.languages button').forEach(b=>b.addEventListener('click',()=>setTimeout(refreshTopics,0)));refreshTopics();
})();

