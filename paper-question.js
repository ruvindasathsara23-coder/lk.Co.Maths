(() => {
 const params=new URLSearchParams(location.search),year=params.get('year'),subject=params.get('subject'),page=Number(params.get('page'));
 const files={'1990':{file:'1990.pdf',max:11},'1991':{file:'1991.pdf',max:15},'1992':{file:'1992.pdf',max:16},'1993':{pure:'1993-pure.pdf',pureMax:8,applied:'1993-applied.pdf',appliedMax:12},'1994':{file:'1994.pdf',max:16}};
 const d=files[year],file=d&&(d[subject]||d.file),max=d&&(d[subject+'Max']||d.max);
 if(!['pure','applied'].includes(subject)||!file||!Number.isInteger(page)||page<1||page>max){document.querySelector('#questionTitle').textContent='ප්‍රශ්න පත්‍රය සොයාගත නොහැක / Paper not found';return;}
 const label=subject==='pure'?'ශුද්ධ ගණිතය / Pure Mathematics':'ව්‍යවහාරික ගණිතය / Applied Mathematics';document.title=`${year} ${label} | lk.Co.Maths`;document.querySelector('#questionTitle').textContent=`${year} — ${label}`;document.querySelector('#questionDetails').textContent=`PDF page ${page} · scanned questions on this page`;const src=`past-papers/${file}#page=${page}&view=FitH`;document.querySelector('#paperFrame').src=src;document.querySelector('#openPdf').href=src;
})();
