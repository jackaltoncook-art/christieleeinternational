/* ============================================================
   CLI POSTCARD SCENES — illustrated SVG vignettes
   Each scene renders as a 400×240 vintage travel postcard.
   ============================================================ */
window.SCENES = (function(){
  const W=400, H=240;

  function svg(defs, body, capText){
    return '<svg class="scene" viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Postcard: '+capText+'">'
      + '<defs>'+defs+'</defs>' + body + caption(capText) + '</svg>';
  }
  function lin(id, stops, x1,y1,x2,y2){
    return '<linearGradient id="'+id+'" x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'">'
      + stops.map(s=>'<stop offset="'+s[0]+'" stop-color="'+s[1]+'"/>').join('') + '</linearGradient>';
  }
  function caption(text){
    const t = 'GREETINGS FROM ' + text;
    const fs = t.length > 30 ? 11 : (t.length > 25 ? 12.5 : 15);
    const ls = t.length > 25 ? 2.5 : 5;
    return '<rect x="0" y="'+(H-34)+'" width="'+W+'" height="34" fill="#171511" opacity=".88"/>'
      + '<text x="'+(W/2)+'" y="'+(H-12)+'" text-anchor="middle" font-family="Oswald,sans-serif" font-size="'+fs+'" letter-spacing="'+ls+'" fill="#f5c168">'+t+'</text>';
  }
  function stars(n, maxY, seedOffset){
    let s=''; for(let i=0;i<n;i++){
      const x=((i*73+29+(seedOffset||0))%W), y=((i*47+13)% (maxY||100));
      s+='<circle cx="'+x+'" cy="'+y+'" r="'+(i%3===0?1.4:0.9)+'" fill="#fff" opacity="'+(0.35+(i%5)*0.13)+'"/>';
    } return s;
  }
  function skyline(baseY, blocks, fill){
    let d='M0 '+baseY, x=0;
    blocks.forEach(b=>{ d+=' L'+x+' '+(baseY-b[1])+' L'+(x+b[0])+' '+(baseY-b[1]); x+=b[0]; });
    d+=' L'+W+' '+baseY+' Z';
    return '<path d="'+d+'" fill="'+fill+'"/>';
  }
  function windows(baseY, blocks, color){
    let s='', x=0;
    blocks.forEach((b,bi)=>{
      for(let wx=x+5; wx<x+b[0]-6; wx+=11){
        for(let wy=baseY-b[1]+7; wy<baseY-8; wy+=13){
          if((wx+wy+bi)%3!==0) s+='<rect x="'+wx+'" y="'+wy+'" width="4" height="6" fill="'+color+'" opacity=".85"/>';
        }
      } x+=b[0];
    });
    return s;
  }
  function palm(x, y, scale, lean){
    const s = scale||1, l = lean||0;
    return '<g transform="translate('+x+' '+y+') scale('+s+')">'
      + '<path d="M0 0 Q '+(6+l)+' -34 '+(4+l*2)+' -62" stroke="#3d2c1c" stroke-width="5" fill="none" stroke-linecap="round"/>'
      + ['-150','-115','-80','-45','-15'].map(a=>'<path d="M'+(4+l*2)+' -62 q 26 '+ (a<0?-6:-6) +' 40 6" stroke="#1f5c3a" stroke-width="5" fill="none" stroke-linecap="round" transform="rotate('+a+' '+(4+l*2)+' -62)"/>').join('')
      + '</g>';
  }
  function sea(y, color, waveColor){
    let s='<rect x="0" y="'+y+'" width="'+W+'" height="'+(H-y)+'" fill="'+color+'"/>';
    for(let i=0;i<5;i++){
      const wy=y+12+i*16;
      s+='<path d="M0 '+wy+' Q 30 '+(wy-4)+' 60 '+wy+' T 120 '+wy+' T 180 '+wy+' T 240 '+wy+' T 300 '+wy+' T 360 '+wy+' T 420 '+wy+'" stroke="'+waveColor+'" stroke-width="2" fill="none" opacity="'+(0.5-i*0.07)+'"/>';
    } return s;
  }
  function jetSilhouette(x,y,scale,color){
    return '<g transform="translate('+x+' '+y+') scale('+(scale||1)+')" fill="'+(color||'#171511')+'">'
      + '<path d="M0 6 Q14 3 32 3 L42 3 Q50 3.4 51 5 Q50 6.6 42 7 L10 8 Q3 8 0 6 Z"/>'
      + '<path d="M24 3.6 L18 -3 L21.4 -3 L29 3.4 Z"/><path d="M25 7 L21 12 L23.8 12 L29.6 7.3 Z"/>'
      + '</g>';
  }

  const scenes = {

    cityNight(d){
      const blocks=[[34,86],[26,128],[40,98],[30,150],[36,108],[28,132],[44,90],[30,118],[34,140],[36,96],[28,122],[34,84]];
      return svg(
        lin('cn',[['0','#0b1030'],['0.7','#23254f'],['1','#46306b']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#cn)"/>'
        + stars(40,120)
        + '<circle cx="330" cy="44" r="22" fill="#f4ecdb"/><circle cx="322" cy="38" r="20" fill="#0b1030" opacity=".25"/>'
        + skyline(H-34, blocks, '#101027') + windows(H-34, blocks, '#f5c168')
        + jetSilhouette(60,52,1.1,'#f4ecdb'),
        d||'NIGHT OWL CITY');
    },

    neonRetro(d){
      let grid='';
      for(let i=0;i<=10;i++){ const y=150+i*i*1.1; grid+='<line x1="0" y1="'+y+'" x2="'+W+'" y2="'+y+'" stroke="#ff5fa2" stroke-width="1.3" opacity=".7"/>'; }
      for(let i=-8;i<=8;i++){ grid+='<line x1="'+(200+i*12)+'" y1="150" x2="'+(200+i*60)+'" y2="'+H+'" stroke="#ff5fa2" stroke-width="1.3" opacity=".55"/>'; }
      return svg(
        lin('nr',[['0','#160a2e'],['0.65','#3b1457'],['1','#7a1f63']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#nr)"/>' + stars(26,110,17)
        + '<circle cx="200" cy="150" r="52" fill="#ff9d5c"/><circle cx="200" cy="150" r="52" fill="url(#nr)" opacity=".25"/>'
        + '<rect x="0" y="150" width="'+W+'" height="'+(H-150)+'" fill="#12081f"/>' + grid
        + '<g transform="translate(86 70)" stroke="#34e0e0" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round">'
        + '<path d="M6 0 L6 -34 L26 -34 L29 -14 L52 -10 L52 0 Z"/>'
        + '<line x1="6" y1="-24" x2="25" y2="-24"/>'
        + '<circle cx="16" cy="8" r="6"/><circle cx="42" cy="8" r="6"/>'
        + '<line x1="0" y1="-4" x2="6" y2="-4"/></g>',
        d||'THE ROLLER RINK');
    },

    suburbSunset(d){
      return svg(
        lin('ss',[['0','#ffb55c'],['0.55','#ff8e6b'],['1','#c75b7a']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#ss)"/>'
        + '<circle cx="200" cy="118" r="34" fill="#fff3cf"/>'
        + '<path d="M0 168 Q100 150 200 164 T 400 160 L400 240 L0 240 Z" fill="#5a3550"/>'
        + '<g fill="#3a2138">'
        + [40,120,250,330].map((x,i)=>'<rect x="'+x+'" y="'+(150+i%2*6)+'" width="34" height="26"/><path d="M'+(x-4)+' '+(150+i%2*6)+' L'+(x+17)+' '+(136+i%2*6)+' L'+(x+38)+' '+(150+i%2*6)+' Z"/>').join('')
        + '</g>'
        + [49,129,259,339].map((x,i)=>'<rect x="'+x+'" y="'+(158+i%2*6)+'" width="7" height="8" fill="#ffd98a"/>').join('')
        + '<g stroke="#3a2138" stroke-width="2.5"><line x1="0" y1="178" x2="400" y2="174"/>'
        + [70,200,320].map(x=>'<line x1="'+x+'" y1="176" x2="'+x+'" y2="150"/><circle cx="'+x+'" cy="148" r="3.4" fill="#ffd98a" stroke="none"/>').join('')+'</g>',
        d||'MEMORY LANE');
    },

    paris(d){
      const t='<g stroke="#1d1430" stroke-width="4" fill="none" stroke-linecap="round">'
        + '<path d="M200 60 L172 196 M200 60 L228 196"/>'
        + '<path d="M186 128 Q200 120 214 128 M178 164 Q200 152 222 164"/>'
        + '<path d="M172 196 Q200 168 228 196"/>'
        + '<line x1="200" y1="60" x2="200" y2="44"/></g>'
        + '<circle cx="200" cy="42" r="3" fill="#ffd98a"/>';
      let sparkle=''; for(let i=0;i<22;i++){ const x=176+(i*37)%52, y=70+(i*53)%120; sparkle+='<circle cx="'+x+'" cy="'+y+'" r="1.3" fill="#ffd98a" opacity="'+(0.5+(i%4)*0.14)+'"/>'; }
      return svg(
        lin('pr',[['0','#2a2150'],['0.6','#6e4a85'],['1','#d98a9c']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#pr)"/>' + stars(18,80,41)
        + '<path d="M0 200 L400 196 L400 240 L0 240 Z" fill="#1d1430"/>'
        + '<g fill="#241a3e">'
        + '<rect x="20" y="158" width="60" height="44"/><rect x="96" y="170" width="48" height="32"/>'
        + '<rect x="262" y="166" width="52" height="36"/><rect x="330" y="154" width="56" height="48"/></g>'
        + windows(202,[[80,44],[64,32],[0,0],[0,0]],'#f5c168')
        + t + sparkle,
        d||'PARIS');
    },

    beach(d){
      return svg(
        lin('bc',[['0','#ffd27a'],['0.5','#ff9e6e'],['1','#f06d7c']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#bc)"/>'
        + '<circle cx="290" cy="96" r="40" fill="#fff3cf"/>'
        + sea(128,'#2e9aa8','#bfeef2')
        + '<path d="M0 196 Q120 182 400 198 L400 240 L0 240 Z" fill="#f2d9a4"/>'
        + palm(64,198,1.25,2)
        + '<g transform="translate(300 188)"><line x1="0" y1="14" x2="0" y2="-28" stroke="#7a4a22" stroke-width="3"/>'
        + '<path d="M0 -28 q -30 4 -34 26 q 16 -10 34 -6 Z" fill="#ff6b5e"/>'
        + '<path d="M0 -28 q 30 4 34 26 q -16 -10 -34 -6 Z" fill="#f4ecdb"/></g>',
        d||'MARGARITAVILLE');
    },

    tropical(d){
      return svg(
        lin('tp',[['0','#6fc7e8'],['0.6','#ffd9a0'],['1','#ff9e7a']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#tp)"/>'
        + '<circle cx="120" cy="104" r="34" fill="#fff6da"/>'
        + '<path d="M250 70 q 60 -24 130 -8 L380 86 q -64 -14 -124 6 Z" fill="#fff" opacity=".5"/>'
        + sea(132,'#1f7fa3','#aee7ef')
        + '<path d="M0 200 Q140 184 400 202 L400 240 L0 240 Z" fill="#efd6a0"/>'
        + palm(330,202,1.3,-3) + palm(36,206,0.95,3)
        + '<path d="M150 214 q 18 -10 36 0 q -18 6 -36 0 Z" fill="#e76d6d"/>'
        + '<ellipse cx="168" cy="208" rx="3" ry="5" fill="#fff3cf"/>',
        d||'HONOLULU');
    },

    mountainDawn(d){
      return svg(
        lin('md',[['0','#ffe9b8'],['0.5','#ffb887'],['1','#9a6aa8']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#md)"/>'
        + '<circle cx="200" cy="118" r="42" fill="#fff6da"/>'
        + '<path d="M0 206 L88 92 L150 168 L214 76 L300 196 L338 134 L400 206 L400 240 L0 240 Z" fill="#5c4470"/>'
        + '<path d="M88 92 L110 122 L96 122 L118 150 Z" fill="#fff" opacity=".85"/>'
        + '<path d="M214 76 L238 110 L222 110 L246 144 Z" fill="#fff" opacity=".85"/>'
        + '<path d="M0 206 Q200 188 400 206 L400 240 L0 240 Z" fill="#3c2c50"/>'
        + jetSilhouette(64,52,1.15,'#3c2c50')
        + '<path d="M0 64 q 50 -10 96 -2" stroke="#fff" stroke-width="5" opacity=".4" stroke-linecap="round"/>',
        d||'SECOND WIND');
    },

    clouds(d){
      function puff(x,y,s){ return '<g transform="translate('+x+' '+y+') scale('+s+')" fill="#ffffff">'
        + '<ellipse cx="0" cy="0" rx="42" ry="20"/><circle cx="-22" cy="-10" r="16"/><circle cx="4" cy="-16" r="20"/><circle cx="26" cy="-8" r="14"/></g>'; }
      return svg(
        lin('cl',[['0','#9fd7f2'],['1','#e8f7ff']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#cl)"/>'
        + '<circle cx="330" cy="50" r="28" fill="#fff6c9"/>'
        + puff(90,120,1.2) + puff(250,90,0.9) + puff(330,160,1.05) + puff(160,190,1.3) + puff(30,60,0.7)
        + '<text x="92" y="128" text-anchor="middle" font-family="Oswald,sans-serif" font-size="26" fill="#5fb3d9" font-weight="600">9</text>'
        + jetSilhouette(196,128,1.3,'#3d7ea6'),
        d||'CLOUD NINE');
    },

    fountain(d){
      let drops=''; for(let i=0;i<3;i++){
        drops += '<path d="M200 96 q '+(-36+i*36)+' -44 '+(-58+i*58)+' -12" stroke="#bfeef2" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>';
      }
      return svg(
        lin('ft',[['0','#ffe2ad'],['0.6','#ffb98f'],['1','#e08a8a']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#ft)"/>'
        + '<circle cx="318" cy="64" r="26" fill="#fff6da"/>'
        + '<path d="M0 204 Q200 190 400 204 L400 240 L0 240 Z" fill="#5e7a4e"/>'
        + '<g><ellipse cx="200" cy="186" rx="92" ry="16" fill="#7fb9c4"/>'
        + '<ellipse cx="200" cy="182" rx="92" ry="14" fill="#a7d8df"/>'
        + '<rect x="186" y="120" width="28" height="60" rx="6" fill="#cdbf9f"/>'
        + '<ellipse cx="200" cy="120" rx="34" ry="9" fill="#e6dcc0"/>'
        + drops
        + '<path d="M200 96 q 0 -18 0 -22" stroke="#bfeef2" stroke-width="4" stroke-linecap="round"/>'
        + '<circle cx="200" cy="70" r="4" fill="#e8fbff"/></g>'
        + '<g fill="#d4537e"><circle cx="84" cy="206" r="6"/><circle cx="120" cy="214" r="5"/><circle cx="296" cy="210" r="6"/><circle cx="330" cy="202" r="5"/></g>'
        + '<g fill="#3d5a32"><rect x="82" y="210" width="4" height="14"/><rect x="118" y="218" width="4" height="12"/><rect x="294" y="214" width="4" height="13"/><rect x="328" y="206" width="4" height="14"/></g>',
        d||'FOUNTAIN OF YOUTH');
    },

    rio(d){
      return svg(
        lin('ro',[['0','#3b2a6e'],['0.55','#9a4a8c'],['1','#ff9e6e']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#ro)"/>' + stars(16,70,7)
        + '<path d="M236 168 q 22 -88 58 -94 q 36 6 58 94 Z" fill="#241a3e"/>'
        + '<g stroke="#f4ecdb" stroke-width="4" stroke-linecap="round"><line x1="294" y1="58" x2="294" y2="80"/><line x1="280" y1="66" x2="308" y2="66"/></g>'
        + sea(170,'#1f5d8a','#9fd0e8')
        + '<path d="M0 206 Q60 190 130 204 T 400 240 L0 240 Z" fill="#f2d9a4"/>'
        + '<path d="M0 218 q 40 -8 80 0 q -40 8 -80 0 Z" fill="#fff" opacity=".7"/>'
        + '<g fill="#ffd98a"><circle cx="40" cy="116" r="2"/><circle cx="76" cy="100" r="2"/><circle cx="110" cy="124" r="2"/><circle cx="150" cy="104" r="2"/></g>',
        d||'RIO DE JANEIRO');
    },

    tokyoNeon(d){
      const blocks=[[40,110],[28,150],[36,96],[30,164],[44,118],[28,140],[38,100],[32,156],[40,108],[30,128],[28,90],[26,118]];
      let signs='';
      const cols=['#ff5fa2','#34e0e0','#ffd95c','#9dff6b'];
      for(let i=0;i<9;i++){
        signs += '<rect x="'+(24+i*40)+'" y="'+(96+(i%4)*22)+'" width="9" height="'+(22+(i%3)*12)+'" rx="2" fill="'+cols[i%4]+'" opacity=".95"/>';
      }
      return svg(
        lin('tk',[['0','#0a0f2e'],['1','#27123f']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#tk)"/>' + stars(20,70,23)
        + '<circle cx="62" cy="48" r="20" fill="#ffe9c9"/>'
        + skyline(H-34, blocks, '#141233') + windows(H-34, blocks, '#7de0e8') + signs
        + '<g stroke="#ff5fa2" stroke-width="3" fill="none"><path d="M318 70 l0 -22 m-8 4 l16 0 m-16 8 l16 0 m-14 10 l12 -22"/></g>',
        d||'TOKYO');
    },

    golden(d){
      let rays='';
      for(let i=0;i<12;i++){
        rays+='<line x1="200" y1="110" x2="'+(200+170*Math.cos(i*Math.PI/6))+'" y2="'+(110+170*Math.sin(i*Math.PI/6))+'" stroke="#ffd98a" stroke-width="3" opacity=".35"/>';
      }
      return svg(
        lin('gd',[['0','#3d2c12'],['0.55','#8a5d1e'],['1','#d8a13e']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#gd)"/>' + rays
        + '<circle cx="200" cy="110" r="56" fill="#ffd98a"/><circle cx="200" cy="110" r="44" fill="#ffe9b8"/>'
        + '<text x="200" y="128" text-anchor="middle" font-family="Oswald,sans-serif" font-weight="600" font-size="52" fill="#8a5d1e">40</text>'
        + '<path d="M0 196 Q200 178 400 196 L400 240 L0 240 Z" fill="#2c1f0c"/>'
        + jetSilhouette(70,168,1.2,'#2c1f0c')
        + '<g fill="#ffd98a"><circle cx="64" cy="60" r="2.4"/><circle cx="330" cy="50" r="2.4"/><circle cx="356" cy="96" r="2"/><circle cx="40" cy="120" r="2"/></g>',
        d||'THE FABULOUS FORTIES');
    },

    fog(d){
      function bank(y,o){ return '<ellipse cx="200" cy="'+y+'" rx="260" ry="26" fill="#cfd3d6" opacity="'+o+'"/>'; }
      return svg(
        lin('fg',[['0','#8a9aa6'],['1','#5a6b78']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#fg)"/>'
        + bank(70,.5)+bank(120,.65)+bank(170,.8)+bank(215,.9)
        + '<g opacity=".5">'+jetSilhouette(150,96,1.4,'#3c4a55')+'</g>'
        + '<text x="200" y="64" text-anchor="middle" font-family="Oswald,sans-serif" font-size="13" letter-spacing="4" fill="#2e3a44" opacity=".8">VISIBILITY: NONE / INTEREST: LOW</text>',
        d||'ADULTHOOD (DELAYED)');
    },

    hill(d){
      return svg(
        lin('hl',[['0','#9fd7f2'],['1','#e8f7ff']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#hl)"/>'
        + '<circle cx="320" cy="56" r="26" fill="#fff6c9"/>'
        + '<path d="M0 240 Q 200 60 400 240 Z" fill="#79b35e"/>'
        + '<path d="M0 240 Q 200 90 400 240 Z" fill="#8fc472" opacity=".7"/>'
        + '<g transform="translate(200 118) rotate(-8)">'
        + '<rect x="-4" y="-34" width="8" height="44" fill="#7a4a22" rx="2"/>'
        + '<rect x="-58" y="-58" width="116" height="30" rx="4" fill="#f4ecdb" stroke="#7a4a22" stroke-width="3"/>'
        + '<text x="0" y="-38" text-anchor="middle" font-family="Oswald,sans-serif" font-size="13" letter-spacing="1" fill="#a32d2d" font-weight="600">NOT FOUND</text></g>'
        + '<g stroke="#a32d2d" stroke-width="6" stroke-linecap="round"><line x1="140" y1="80" x2="260" y2="170"/><line x1="260" y1="80" x2="140" y2="170"/></g>',
        d||'OVER THE HILL (CANCELLED)');
    },

    mexicoCity(d){
      let banner='';
      const cols=['#e24b4a','#34b56e','#f5c168','#8fd5e8','#d4537e'];
      for(let i=0;i<16;i++){
        banner+='<path d="M'+(i*26)+' 22 L'+(i*26+13)+' 44 L'+(i*26+26)+' 22 Z" fill="'+cols[i%5]+'"/>';
      }
      return svg(
        lin('mx',[['0','#ffd27a'],['0.6','#ff9e6e'],['1','#e0707c']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#mx)"/>'
        + '<circle cx="320" cy="74" r="30" fill="#fff3cf"/>'
        + '<path d="M0 22 L400 22" stroke="#5a3550" stroke-width="2"/>' + banner
        + '<g fill="#8a5a3c">'
        + '<path d="M110 196 L150 120 L250 120 L290 196 Z"/>'
        + '<path d="M130 178 L270 178 L262 162 L138 162 Z" fill="#a06a48"/>'
        + '<path d="M148 144 L252 144 L246 132 L154 132 Z" fill="#a06a48"/>'
        + '<rect x="186" y="120" width="28" height="76" fill="#6e4630"/></g>'
        + '<path d="M0 196 Q200 188 400 196 L400 240 L0 240 Z" fill="#5a8a4e"/>'
        + '<g fill="#3d6e3a"><path d="M52 196 l0 -30 q -12 -2 -12 -16 q 12 2 12 4 l0 -8 l8 0 l0 16 q 0 -8 12 -8 q 0 14 -12 16 l0 26 Z"/></g>',
        d||'MEXICO CITY');
    },

    amsterdam(d){
      function house(x,w,h,col,gable){
        let top = gable==='step'
          ? '<path d="M'+x+' '+(170-h)+' l'+(w*.2)+' 0 l0 -8 l'+(w*.2)+' 0 l0 -8 l'+(w*.2)+' 0 l0 8 l'+(w*.2)+' 0 l0 8 l'+(w*.2)+' 0 Z" fill="'+col+'" transform="translate(0 0)"/>'
          : '<path d="M'+x+' '+(170-h)+' q '+(w/2)+' -22 '+w+' 0 Z" fill="'+col+'"/>';
        let win='';
        for(let wy=170-h+12; wy<160; wy+=20){ win+='<rect x="'+(x+w/2-7)+'" y="'+wy+'" width="14" height="12" rx="2" fill="#ffd98a"/>'; }
        return '<rect x="'+x+'" y="'+(170-h)+'" width="'+w+'" height="'+h+'" fill="'+col+'"/>' + top + win;
      }
      return svg(
        lin('am',[['0','#3b2a6e'],['0.6','#7a4a85'],['1','#d98a7c']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#am)"/>' + stars(16,60,31)
        + house(48,46,86,'#7a3b32','step') + house(94,40,100,'#2e4a6e','bell')
        + house(134,44,78,'#8a6a3c','step') + house(178,42,108,'#5a3550','bell')
        + house(220,46,90,'#3d5a44','step') + house(266,40,98,'#7a4a2c','bell')
        + house(306,44,82,'#34466e','step')
        + '<rect x="0" y="170" width="400" height="70" fill="#1d2a44"/>'
        + '<g opacity=".35">'+house(48,46,-40,'#7a3b32','bell')+'</g>'
        + [60,140,230,320].map(x=>'<ellipse cx="'+x+'" cy="'+(186+(x%3)*8)+'" rx="26" ry="2.5" fill="#ffd98a" opacity=".3"/>').join('')
        + '<g transform="translate(330 158)" stroke="#171511" stroke-width="3" fill="none">'
        + '<circle cx="0" cy="8" r="8"/><circle cx="24" cy="8" r="8"/><path d="M0 8 L9 -6 L20 -6 M24 8 L13 8 L9 -6 M13 8 L9 -2"/></g>',
        d||'AMSTERDAM');
    },

    delhi(d){
      return svg(
        lin('dl',[['0','#ffb55c'],['0.55','#ff8a5c'],['1','#c75b6e']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#dl)"/>'
        + '<circle cx="86" cy="78" r="28" fill="#fff3cf"/>'
        + '<g fill="#5a2e4a">'
        + '<path d="M200 92 q -44 8 -44 50 l 88 0 q 0 -42 -44 -50 Z"/>'
        + '<rect x="156" y="142" width="88" height="56"/>'
        + '<line x1="200" y1="92" x2="200" y2="74" stroke="#5a2e4a" stroke-width="3"/>'
        + '<circle cx="200" cy="72" r="3.4"/>'
        + '<rect x="118" y="118" width="14" height="80"/><circle cx="125" cy="112" r="9"/>'
        + '<rect x="268" y="118" width="14" height="80"/><circle cx="275" cy="112" r="9"/></g>'
        + '<path d="M183 198 l0 -34 q 17 -14 34 0 l0 34 Z" fill="#ffd98a"/>'
        + '<path d="M0 198 Q200 190 400 198 L400 240 L0 240 Z" fill="#3d1f33"/>'
        + '<g fill="#f5a623"><circle cx="48" cy="206" r="5"/><circle cx="74" cy="212" r="5"/><circle cx="318" cy="208" r="5"/><circle cx="346" cy="214" r="5"/><circle cx="170" cy="214" r="5"/><circle cx="238" cy="212" r="5"/></g>',
        d||'DELHI');
    },

    astana(d){
      return svg(
        lin('as',[['0','#0b1438'],['0.7','#1d2a5e'],['1','#3b4a8a']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#as)"/>' + stars(34,140,53)
        + '<g fill="#16204a">'
        + '<path d="M60 200 L60 120 Q82 96 104 120 L104 200 Z"/>'
        + '<rect x="290" y="112" width="48" height="88" rx="8"/>'
        + '<path d="M120 200 L132 132 L156 132 L168 200 Z"/></g>'
        + windows(200,[[0,0]],'#7de0e8')
        + '<g fill="#8fd5e8" opacity=".8"><rect x="298" y="124" width="6" height="8"/><rect x="312" y="124" width="6" height="8"/><rect x="326" y="124" width="6" height="8"/><rect x="298" y="144" width="6" height="8"/><rect x="312" y="144" width="6" height="8"/><rect x="326" y="144" width="6" height="8"/><rect x="70" y="136" width="6" height="8"/><rect x="84" y="136" width="6" height="8"/><rect x="70" y="156" width="6" height="8"/><rect x="84" y="156" width="6" height="8"/><rect x="138" y="146" width="6" height="8"/></g>'
        + '<g><line x1="210" y1="200" x2="210" y2="92" stroke="#cdd6e8" stroke-width="6"/>'
        + '<path d="M210 200 L186 96 M210 200 L234 96" stroke="#cdd6e8" stroke-width="3" fill="none"/>'
        + '<circle cx="210" cy="84" r="22" fill="#ffd98a"/>'
        + '<circle cx="204" cy="78" r="7" fill="#fff3cf"/></g>'
        + '<path d="M0 200 L400 200 L400 240 L0 240 Z" fill="#0a0f2a"/>'
        + '<path d="M0 214 q 60 -6 120 0 q 80 6 160 -2 q 60 -4 120 2" stroke="#e8f0ff" stroke-width="3" fill="none" opacity=".4"/>',
        d||'ASTANA');
    },

    casablanca(d){
      return svg(
        lin('cb',[['0','#ffce7a'],['0.55','#ff9468'],['1','#d4537e']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#cb)"/>'
        + '<circle cx="120" cy="98" r="34" fill="#fff3cf"/>'
        + sea(160,'#2e7a9a','#bfe6ef')
        + '<g fill="#4a2e44">'
        + '<rect x="252" y="40" width="40" height="130"/>'
        + '<path d="M250 40 L294 40 L288 28 L256 28 Z"/>'
        + '<rect x="266" y="14" width="12" height="14"/>'
        + '<circle cx="272" cy="10" r="3"/>'
        + '<rect x="236" y="140" width="72" height="30"/></g>'
        + '<g fill="#ffd98a"><path d="M262 70 l0 -14 q 10 -8 20 0 l0 14 Z"/><path d="M262 104 l0 -14 q 10 -8 20 0 l0 14 Z"/><rect x="246" y="148" width="8" height="12"/><rect x="290" y="148" width="8" height="12"/></g>'
        + '<path d="M252 170 L292 170 L292 178 L252 178 Z" fill="#3a2138"/>'
        + '<path d="M0 206 Q200 196 400 206 L400 240 L0 240 Z" fill="#3a2138"/>'
        + palm(56,208,1.1,3)
        + '<path d="M150 214 l0 -22 q 12 -10 24 0 l0 22 Z" fill="#4a2e44"/>'
        + '<path d="M156 214 l0 -14 q 6 -6 12 0 l0 14 Z" fill="#ffd98a"/>',
        d||'CASABLANCA');
    },

    zurich(d){
      return svg(
        lin('zh',[['0','#8fc7ea'],['1','#e2f2fb']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#zh)"/>'
        + '<circle cx="330" cy="50" r="24" fill="#fff6c9"/>'
        + '<path d="M0 168 L70 70 L120 132 L190 56 L268 158 L316 96 L400 168 Z" fill="#6e7a9a"/>'
        + '<path d="M70 70 L92 100 L78 100 L98 126 Z" fill="#fff" opacity=".95"/>'
        + '<path d="M190 56 L216 92 L200 92 L226 128 Z" fill="#fff" opacity=".95"/>'
        + '<path d="M316 96 L334 120 L322 120 L338 142 Z" fill="#fff" opacity=".9"/>'
        + '<rect x="0" y="168" width="400" height="72" fill="#3d7ea6"/>'
        + '<path d="M0 178 Q 60 174 120 178 T 240 178 T 360 178 T 480 178" stroke="#bfe6ef" stroke-width="2" fill="none" opacity=".6"/>'
        + '<g transform="translate(150 192)">'
        + '<path d="M-30 12 L30 12 L20 24 L-20 24 Z" fill="#7a3b32"/>'
        + '<line x1="0" y1="12" x2="0" y2="-34" stroke="#3a2c20" stroke-width="3"/>'
        + '<path d="M-3 8 L-3 -30 L-30 8 Z" fill="#f4ecdb"/>'
        + '<path d="M3 8 L3 -26 L24 8 Z" fill="#e8dcc0"/></g>'
        + '<g transform="translate(330 200)"><rect x="-13" y="-13" width="26" height="26" rx="4" fill="#e24b4a"/>'
        + '<path d="M-2 -9 L2 -9 L2 -2 L9 -2 L9 2 L2 2 L2 9 L-2 9 L-2 2 L-9 2 L-9 -2 L-2 -2 Z" fill="#fff"/></g>',
        d||'ZURICH');
    },

    phoenixDesert(d){
      function saguaro(x,y,s){
        return '<g transform="translate('+x+' '+y+') scale('+s+')" fill="#3d6e3a">'
          + '<rect x="-7" y="-70" width="14" height="70" rx="7"/>'
          + '<path d="M-7 -42 q -18 0 -18 -16 l0 -10 q 0 -7 7 -7 q 7 0 7 7 l0 8 q 0 4 4 4 Z"/>'
          + '<path d="M7 -52 q 18 0 18 -14 l0 -8 q 0 -7 -7 -7 q -7 0 -7 7 l0 6 q 0 4 -4 4 Z"/></g>';
      }
      return svg(
        lin('px',[['0','#ffce6e'],['0.5','#ff9355'],['1','#e0606e']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#px)"/>'
        + '<circle cx="200" cy="104" r="46" fill="#fff0c4"/>'
        + '<path d="M0 168 L60 168 L80 132 L130 132 L150 168 L400 168 L400 178 L0 178 Z" fill="#a35a48"/>'
        + '<path d="M250 168 L268 142 L320 142 L338 168 Z" fill="#8a4438"/>'
        + '<rect x="0" y="168" width="400" height="72" fill="#d8925c"/>'
        + '<path d="M0 196 q 70 -8 140 0 q 80 8 160 -2 q 50 -4 100 2" stroke="#b56a42" stroke-width="3" fill="none" opacity=".6"/>'
        + saguaro(80,224,1.1) + saguaro(330,228,0.85)
        + '<text x="200" y="32" text-anchor="middle" font-family="Oswald,sans-serif" font-size="13" letter-spacing="3" fill="#8a3a2c">RUNWAY STATUS: TOO HOT</text>',
        d||'PHOENIX (CANCELLED)');
    },

    aurora(d){
      function ribbon(x0,amp,col,op){
        return '<path d="M'+x0+' 150 Q '+(x0+40)+' '+(60-amp)+' '+(x0+90)+' 96 T '+(x0+190)+' 50" stroke="'+col+'" stroke-width="26" fill="none" stroke-linecap="round" opacity="'+op+'"/>';
      }
      return svg(
        lin('au',[['0','#060b22'],['1','#12224a']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#au)"/>' + stars(42,150,67)
        + ribbon(40,20,'#3de8a0',.55) + ribbon(120,46,'#7de0e8',.4) + ribbon(190,8,'#3de8a0',.5)
        + '<path d="M0 196 L80 128 L150 188 L230 122 L310 192 L360 150 L400 196 Z" fill="#1c2950"/>'
        + '<path d="M0 196 L80 128 L150 188 L230 122 L310 192 L360 150 L400 196 Z" fill="none" stroke="#2e3f73" stroke-width="2"/>'
        + '<path d="M68 138 L80 128 L94 140 L86 148 L78 142 Z" fill="#dfe9ff"/>'
        + '<path d="M216 134 L230 122 L246 136 L238 146 L228 138 Z" fill="#dfe9ff"/>'
        + '<rect x="0" y="196" width="400" height="44" fill="#0a1028"/>'
        + '<g transform="translate(60 216)"><rect x="-14" y="-12" width="28" height="12" fill="#7a3b32"/>'
        + '<path d="M-18 -12 L0 -24 L18 -12 Z" fill="#a35a48"/>'
        + '<rect x="-4" y="-8" width="8" height="8" fill="#ffd98a"/></g>',
        d||'REYKJAVIK');
    },

    boraBora(d){
      return svg(
        lin('bb',[['0','#8fd5ea'],['0.55','#ffe2ad'],['1','#ffb287']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#bb)"/>'
        + '<circle cx="96" cy="84" r="30" fill="#fff6da"/>'
        + '<path d="M180 130 L236 70 L300 130 Z" fill="#3d6e58"/>'
        + '<path d="M236 70 L252 88 L242 88 L256 104 Z" fill="#fff" opacity=".5"/>'
        + sea(130,'#1faabf','#bff2f0')
        + '<path d="M0 134 L400 134 L400 142 L0 142 Z" fill="#7de0d0" opacity=".5"/>'
        + '<g><line x1="80" y1="200" x2="80" y2="172" stroke="#7a4a22" stroke-width="4"/>'
        + '<line x1="116" y1="200" x2="116" y2="172" stroke="#7a4a22" stroke-width="4"/>'
        + '<rect x="64" y="152" width="68" height="24" rx="3" fill="#caa066"/>'
        + '<path d="M58 152 L98 130 L138 152 Z" fill="#8a6a3c"/>'
        + '<rect x="90" y="160" width="16" height="16" fill="#2e6e7a"/>'
        + '<line x1="132" y1="164" x2="190" y2="164" stroke="#caa066" stroke-width="6"/></g>'
        + palm(330,216,1.25,-4)
        + '<path d="M0 216 Q 80 206 160 218 L160 240 L0 240 Z" fill="#f2d9a4"/>',
        d||'BORA BORA');
    },

    rome(d){
      function arches(y,n,w,col){
        let s=''; for(let i=0;i<n;i++){ const x=132+i*w;
          s+='<path d="M'+x+' '+(y+22)+' l0 -14 q '+(w*.36)+' -10 '+(w*.72)+' 0 l0 14 Z" fill="'+col+'"/>'; }
        return s;
      }
      return svg(
        lin('rm',[['0','#ffce7a'],['0.55','#ff9468'],['1','#c75b6e']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#rm)"/>'
        + '<circle cx="92" cy="84" r="30" fill="#fff3cf"/>'
        + '<path d="M120 198 q 0 -78 84 -86 q 76 8 76 86 Z" fill="#8a6a4c"/>'
        + '<path d="M120 198 q 0 -64 66 -78 l 0 -16 q 18 -4 36 0 l 8 18 q 50 16 50 76 Z" fill="#a3825e"/>'
        + arches(126,7,21,'#5e4630') + arches(156,7,21,'#5e4630')
        + '<path d="M0 198 Q200 192 400 198 L400 240 L0 240 Z" fill="#4a3326"/>'
        + '<g fill="#3d6e3a"><path d="M52 198 l0 -36 q -10 -22 0 -34 q 10 12 0 34 Z" stroke="#2c1f14" stroke-width="3"/><path d="M352 198 l0 -30 q -9 -20 0 -30 q 9 10 0 30 Z" stroke="#2c1f14" stroke-width="3"/></g>',
        d||'ROME');
    },

    sydney(d){
      function shell(x,y,s,flip){
        return '<path d="M'+x+' '+y+' q '+(26*s*flip)+' -'+(44*s)+' '+(52*s*flip)+' 0 l-'+(8*s*flip)+' 0 q -'+(18*s*flip)+' -'+(26*s)+' -'+(36*s*flip)+' 0 Z" fill="#fffdf6" stroke="#cfd6dd" stroke-width="1.5"/>';
      }
      return svg(
        lin('sy',[['0','#8fd0ee'],['0.6','#ffe2ad'],['1','#ffb287']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#sy)"/>'
        + '<circle cx="318" cy="70" r="28" fill="#fff6da"/>'
        + sea(158,'#1f6e9a','#aee0ef')
        + '<rect x="60" y="150" width="280" height="10" fill="#caa066"/>'
        + shell(96,150,1.4,1) + shell(160,150,1.1,1) + shell(212,150,0.85,1)
        + shell(304,150,1.0,-1) + shell(258,150,0.7,-1)
        + '<path d="M0 220 Q 200 210 400 220 L400 240 L0 240 Z" fill="#14334a"/>'
        + [120,200,290].map(x=>'<ellipse cx="'+x+'" cy="'+(176+(x%2)*10)+'" rx="22" ry="2.4" fill="#fff" opacity=".35"/>').join(''),
        d||'SYDNEY');
    },

    cairo(d){
      return svg(
        lin('ca',[['0','#ffd98a'],['0.55','#ff9e5c'],['1','#d4707c']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#ca)"/>'
        + '<circle cx="200" cy="92" r="36" fill="#fff0c4"/>'
        + '<path d="M40 196 L130 86 L220 196 Z" fill="#a3743c"/>'
        + '<path d="M130 86 L160 122 L143 122 L168 152 L150 152 L176 196 L220 196 Z" fill="#8a5e2c"/>'
        + '<path d="M196 196 L268 110 L340 196 Z" fill="#b5854a"/>'
        + '<path d="M268 110 L292 138 L278 138 L300 168 L286 168 L308 196 L340 196 Z" fill="#96703a"/>'
        + '<path d="M318 196 L356 152 L394 196 Z" fill="#c2925a"/>'
        + '<path d="M0 196 Q200 188 400 196 L400 240 L0 240 Z" fill="#d8a45c"/>'
        + '<path d="M0 214 q 70 -7 140 0 q 80 7 160 -2 q 50 -4 100 2" stroke="#b5854a" stroke-width="3" fill="none" opacity=".6"/>'
        + palm(40,224,0.9,3),
        d||'CAIRO');
    },

    london(d){
      return svg(
        lin('ld',[['0','#101b3e'],['0.7','#27305e'],['1','#4a3b6e']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#ld)"/>' + stars(26,90,19)
        + '<circle cx="74" cy="52" r="20" fill="#f4ecdb"/>'
        + '<g fill="#1a1430">'
        + '<rect x="120" y="120" width="150" height="60"/>'
        + '<rect x="130" y="106" width="10" height="16"/><rect x="160" y="106" width="10" height="16"/><rect x="190" y="106" width="10" height="16"/><rect x="220" y="106" width="10" height="16"/><rect x="250" y="106" width="10" height="16"/>'
        + '<rect x="282" y="64" width="34" height="116"/>'
        + '<path d="M280 64 L318 64 L299 38 Z"/>'
        + '</g>'
        + '<circle cx="299" cy="86" r="12" fill="#ffd98a"/>'
        + '<g stroke="#1a1430" stroke-width="2"><line x1="299" y1="86" x2="299" y2="78"/><line x1="299" y1="86" x2="305" y2="88"/></g>'
        + '<g transform="translate(120 0)">' + windows(180,[[150,60]],'#f5c168') + '</g>'
        + '<rect x="0" y="180" width="400" height="60" fill="#0c1026"/>'
        + [150,240,300].map(x=>'<ellipse cx="'+x+'" cy="'+(196+(x%3)*8)+'" rx="26" ry="2.5" fill="#ffd98a" opacity=".3"/>').join('')
        + '<path d="M40 180 q 30 -22 60 0 M250 180 q 30 -22 60 0" stroke="#3a3360" stroke-width="4" fill="none"/>',
        d||'LONDON');
    },

    vegas(d){
      let grid='';
      for(let i=0;i<=9;i++){ const y=156+i*i*1.05; grid+='<line x1="0" y1="'+y+'" x2="'+W+'" y2="'+y+'" stroke="#ff5fa2" stroke-width="1.2" opacity=".55"/>'; }
      for(let i=-8;i<=8;i++){ grid+='<line x1="'+(200+i*12)+'" y1="156" x2="'+(200+i*62)+'" y2="'+H+'" stroke="#ff5fa2" stroke-width="1.2" opacity=".4"/>'; }
      const blocks=[[34,70],[26,96],[40,60],[30,108],[36,76],[28,92],[40,64],[30,84]];
      let star='';
      for(let i=0;i<8;i++){ const a=i*Math.PI/4;
        star+='<line x1="92" y1="74" x2="'+(92+22*Math.cos(a))+'" y2="'+(74+22*Math.sin(a))+'" stroke="#ffd95c" stroke-width="3" stroke-linecap="round"/>'; }
      return svg(
        lin('vg',[['0','#140a30'],['0.65','#3b1457'],['1','#7a1f63']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#vg)"/>' + stars(22,90,29)
        + skyline(156, blocks, '#1a0f33') + windows(156, blocks, '#34e0e0')
        + '<rect x="0" y="156" width="'+W+'" height="'+(H-156)+'" fill="#10081f"/>' + grid
        + '<circle cx="92" cy="74" r="13" fill="#ffd95c"/>' + star
        + '<g stroke="#34e0e0" stroke-width="3" fill="none"><rect x="288" y="52" width="64" height="34" rx="8"/><line x1="298" y1="86" x2="294" y2="100"/><line x1="342" y1="86" x2="346" y2="100"/></g>'
        + '<text x="320" y="75" text-anchor="middle" font-family="Oswald,sans-serif" font-size="15" letter-spacing="2" fill="#ff5fa2">OPEN</text>',
        d||'LAS VEGAS');
    }
  };

  return {
    render(name, dest){
      const fn = scenes[name];
      if(fn) return fn((dest||'').toUpperCase());
      return svg(lin('df',[['0','#2a2150'],['1','#6e4a85']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#df)"/>' + stars(30,160,11)
        + '<circle cx="320" cy="52" r="22" fill="#fff3cf"/>'
        + '<g transform="translate(120 110)"><path d="M0 12 Q28 6 64 6 L84 6 Q100 7 102 10 Q100 13 84 14 L20 16 Q6 16 0 12 Z" fill="#f4ecdb"/><path d="M48 7 L36 -8 L43 -8 L58 6 Z" fill="#f4ecdb"/></g>',
        (dest||'PARTS UNKNOWN').toUpperCase());
    }
  };
})();
