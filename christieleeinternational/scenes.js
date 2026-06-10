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

    cityNight(){
      const blocks=[[34,86],[26,128],[40,98],[30,150],[36,108],[28,132],[44,90],[30,118],[34,140],[36,96],[28,122],[34,84]];
      return svg(
        lin('cn',[['0','#0b1030'],['0.7','#23254f'],['1','#46306b']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#cn)"/>'
        + stars(40,120)
        + '<circle cx="330" cy="44" r="22" fill="#f4ecdb"/><circle cx="322" cy="38" r="20" fill="#0b1030" opacity=".25"/>'
        + skyline(H-34, blocks, '#101027') + windows(H-34, blocks, '#f5c168')
        + jetSilhouette(60,52,1.1,'#f4ecdb'),
        'NIGHT OWL CITY');
    },

    neonRetro(){
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
        'THE ROLLER RINK');
    },

    suburbSunset(){
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
        'MEMORY LANE');
    },

    paris(){
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
        'PARIS');
    },

    beach(){
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
        'MARGARITAVILLE');
    },

    tropical(){
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
        'HONOLULU');
    },

    mountainDawn(){
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
        'SECOND WIND');
    },

    clouds(){
      function puff(x,y,s){ return '<g transform="translate('+x+' '+y+') scale('+s+')" fill="#ffffff">'
        + '<ellipse cx="0" cy="0" rx="42" ry="20"/><circle cx="-22" cy="-10" r="16"/><circle cx="4" cy="-16" r="20"/><circle cx="26" cy="-8" r="14"/></g>'; }
      return svg(
        lin('cl',[['0','#9fd7f2'],['1','#e8f7ff']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#cl)"/>'
        + '<circle cx="330" cy="50" r="28" fill="#fff6c9"/>'
        + puff(90,120,1.2) + puff(250,90,0.9) + puff(330,160,1.05) + puff(160,190,1.3) + puff(30,60,0.7)
        + '<text x="92" y="128" text-anchor="middle" font-family="Oswald,sans-serif" font-size="26" fill="#5fb3d9" font-weight="600">9</text>'
        + jetSilhouette(196,128,1.3,'#3d7ea6'),
        'CLOUD NINE');
    },

    fountain(){
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
        'FOUNTAIN OF YOUTH');
    },

    rio(){
      return svg(
        lin('ro',[['0','#3b2a6e'],['0.55','#9a4a8c'],['1','#ff9e6e']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#ro)"/>' + stars(16,70,7)
        + '<path d="M236 168 q 22 -88 58 -94 q 36 6 58 94 Z" fill="#241a3e"/>'
        + '<g stroke="#f4ecdb" stroke-width="4" stroke-linecap="round"><line x1="294" y1="58" x2="294" y2="80"/><line x1="280" y1="66" x2="308" y2="66"/></g>'
        + sea(170,'#1f5d8a','#9fd0e8')
        + '<path d="M0 206 Q60 190 130 204 T 400 240 L0 240 Z" fill="#f2d9a4"/>'
        + '<path d="M0 218 q 40 -8 80 0 q -40 8 -80 0 Z" fill="#fff" opacity=".7"/>'
        + '<g fill="#ffd98a"><circle cx="40" cy="116" r="2"/><circle cx="76" cy="100" r="2"/><circle cx="110" cy="124" r="2"/><circle cx="150" cy="104" r="2"/></g>',
        'RIO DE JANEIRO');
    },

    tokyoNeon(){
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
        'TOKYO');
    },

    golden(){
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
        'THE FABULOUS FORTIES');
    },

    fog(){
      function bank(y,o){ return '<ellipse cx="200" cy="'+y+'" rx="260" ry="26" fill="#cfd3d6" opacity="'+o+'"/>'; }
      return svg(
        lin('fg',[['0','#8a9aa6'],['1','#5a6b78']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#fg)"/>'
        + bank(70,.5)+bank(120,.65)+bank(170,.8)+bank(215,.9)
        + '<g opacity=".5">'+jetSilhouette(150,96,1.4,'#3c4a55')+'</g>'
        + '<text x="200" y="64" text-anchor="middle" font-family="Oswald,sans-serif" font-size="13" letter-spacing="4" fill="#2e3a44" opacity=".8">VISIBILITY: NONE / INTEREST: LOW</text>',
        'ADULTHOOD (DELAYED)');
    },

    hill(){
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
        'OVER THE HILL (CANCELLED)');
    }
  };

  return {
    render(name, dest){
      const fn = scenes[name];
      if(fn) return fn();
      return svg(lin('df',[['0','#2a2150'],['1','#6e4a85']],0,0,0,1),
        '<rect width="'+W+'" height="'+H+'" fill="url(#df)"/>' + stars(30,160,11)
        + '<circle cx="320" cy="52" r="22" fill="#fff3cf"/>'
        + '<g transform="translate(120 110)"><path d="M0 12 Q28 6 64 6 L84 6 Q100 7 102 10 Q100 13 84 14 L20 16 Q6 16 0 12 Z" fill="#f4ecdb"/><path d="M48 7 L36 -8 L43 -8 L58 6 Z" fill="#f4ecdb"/></g>',
        (dest||'PARTS UNKNOWN').toUpperCase());
    }
  };
})();
