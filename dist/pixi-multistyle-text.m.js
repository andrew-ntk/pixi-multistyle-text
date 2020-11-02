import{VERSION as t,TextStyle as e,TextMetrics as i,utils as s,Rectangle as o,Text as n,TEXT_GRADIENT as r}from"pixi.js";if(parseInt(t.split(".")[0],10)<5)throw new Error("Detected Pixi.js version "+t+". pixi-multistyle-text supports Pixi.js version 5+. (Please use v0.8.0 for Pixi 4 support.)");var a=["pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture","mouseover","mouseenter","mousedown","mousemove","mouseup","mousecancel","mouseout","mouseleave","touchover","touchenter","touchdown","touchmove","touchup","touchcancel","touchout","touchleave"],h={bbcode:["[","]"],xml:["<",">"]},l=function(t){function n(e,i){var s=this;t.call(this,e),this.styles=i,a.forEach(function(t){s.on(t,function(t){return s.handleInteraction(t)})})}t&&(n.__proto__=t),(n.prototype=Object.create(t&&t.prototype)).constructor=n;var r={styles:{configurable:!0}};return n.prototype.handleInteraction=function(t){var e=t,i=t.data.getLocalPosition(this),s=this.hitboxes.reduce(function(t,e){return void 0!==t?t:e.hitbox.contains(i.x,i.y)?e:void 0},void 0);e.targetTag=void 0===s?void 0:s.tag},r.styles.set=function(t){for(var i in this.textStyles={},this.textStyles.default=this.assign({},n.DEFAULT_TAG_STYLE),t)"default"===i?this.assign(this.textStyles.default,t[i]):this.textStyles[i]=this.assign({},t[i]);"bbcode"===this.textStyles.default.tagStyle&&(this.textStyles.b=this.assign({},{fontStyle:"bold"}),this.textStyles.i=this.assign({},{fontStyle:"italic"}),this.textStyles.color=this.assign({},{fill:""}),this.textStyles.outline=this.assign({},{stroke:"",strokeThickness:6}),this.textStyles.font=this.assign({},{fontFamily:""}),this.textStyles.shadow=this.assign({},{dropShadowColor:"",dropShadow:!0,dropShadowBlur:3,dropShadowDistance:3,dropShadowAngle:2}),this.textStyles.size=this.assign({},{fontSize:"px"}),this.textStyles.spacing=this.assign({},{letterSpacing:""}),this.textStyles.align=this.assign({},{align:""})),this.withPrivateMembers()._style=new e(this.textStyles.default),this.withPrivateMembers().dirty=!0},n.prototype.setTagStyle=function(t,i){t in this.textStyles?this.assign(this.textStyles[t],i):this.textStyles[t]=this.assign({},i),this.withPrivateMembers()._style=new e(this.textStyles.default),this.withPrivateMembers().dirty=!0},n.prototype.deleteTagStyle=function(t){"default"===t?this.textStyles.default=this.assign({},n.DEFAULT_TAG_STYLE):delete this.textStyles[t],this.withPrivateMembers()._style=new e(this.textStyles.default),this.withPrivateMembers().dirty=!0},n.prototype.getTagRegex=function(t,e){var i=Object.keys(this.textStyles).join("|");i=t?"("+i+")":"(?:"+i+")";var s="bbcode"===this.textStyles.default.tagStyle?"\\"+h.bbcode[0]+i+"(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\"+h.bbcode[1]+"|\\"+h.bbcode[0]+"\\/"+i+"\\s*\\"+h.bbcode[1]:"\\"+h.xml[0]+i+"(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\"+h.xml[1]+"|\\"+h.xml[0]+"\\/"+i+"\\s*\\"+h.xml[1];return e&&(s="("+s+")"),new RegExp(s,"g")},n.prototype.getPropertyRegex=function(){return new RegExp("([A-Za-z0-9_\\-]+)=(?:\"((?:[^\"]+|\\\\\")*)\"|'((?:[^']+|\\\\')*)')","g")},n.prototype.getBBcodePropertyRegex=function(){return new RegExp("[A-Za-z0-9_\\-]+=([A-Za-z0-9_\\-\\#]+)","g")},n.prototype._getTextDataPerLine=function(t){for(var e=[],i=this.getTagRegex(!0,!1),s=[this.assign({},this.textStyles.default)],o=[{name:"default",properties:{}}],n=0;n<t.length;n++){for(var r=[],a=[],l=void 0;l=i.exec(t[n]);)a.push(l);if(0===a.length)r.push(this.createTextData(t[n],s[s.length-1],o[o.length-1]));else{for(var c=0,x=0;x<a.length;x++){if(a[x].index>c&&r.push(this.createTextData(t[n].substring(c,a[x].index),s[s.length-1],o[o.length-1])),"/"===a[x][0][1])s.length>1&&(s.pop(),o.pop());else{for(var d={},g=this.getPropertyRegex(),p=void 0;p=g.exec(a[x][0]);)d[p[1]]=p[2]||p[3];if(o.push({name:a[x][1],properties:d}),"bbcode"===this.textStyles.default.tagStyle&&a[x][0].includes("=")&&this.textStyles[a[x][1]]){var u=this.getBBcodePropertyRegex().exec(a[x][0]),f={};Object.entries(this.textStyles[a[x][1]]).forEach(function(t){f[t[0]]="string"!=typeof t[1]?t[1]:u[1]+t[1]}),s.push(this.assign({},s[s.length-1],f))}else s.push(this.assign({},s[s.length-1],this.textStyles[a[x][1]]))}c=a[x].index+a[x][0].length}if(c<t[n].length){var y=this.createTextData(c?t[n].substring(c):t[n],s[s.length-1],o[o.length-1]);r.push(y)}}e.push(r)}var b=this.textStyles.default.tagStyle;return e[e.length-1].map(function(t){t.text.includes(h[b][0])&&(t.text=t.text.match("bbcode"===b?/^(.*)\[/:/^(.*)\</)[1])}),e},n.prototype.getFontString=function(t){return new e(t).toFontString()},n.prototype.createTextData=function(t,e,i){return{text:t,style:e,width:0,height:0,fontProperties:void 0,tag:i}},n.prototype.getDropShadowPadding=function(){var t=this,e=0,i=0;return Object.keys(this.textStyles).forEach(function(s){var o=t.textStyles[s],n=o.dropShadowBlur;e=Math.max(e,o.dropShadowDistance||0),i=Math.max(i,n||0)}),e+i},n.prototype.withPrivateMembers=function(){return this},n.prototype.updateText=function(){var t=this;if(this.withPrivateMembers().dirty){this.hitboxes=[],this.texture.baseTexture.resolution=this.resolution;var r=this.textStyles,a=this.text;this.withPrivateMembers()._style.wordWrap&&(a=this.wordWrap(this.text));for(var h=a.split(/(?:\r\n|\r|\n)/),l=this._getTextDataPerLine(h),c=[],x=[],d=[],g=0,p=0;p<h.length;p++){for(var u=0,f=0,y=0,b=0,v=0;v<l[p].length;v++){var S=l[p][v].style;b=S.lineHeight?S.lineHeight-1:0,this.context.font=this.getFontString(S),l[p][v].width=this.context.measureText(l[p][v].text).width,0!==l[p][v].text.length&&(l[p][v].width+=(l[p][v].text.length-1)*S.letterSpacing,v>0&&(u+=S.letterSpacing/2),v<l[p].length-1&&(u+=S.letterSpacing/2)),u+=l[p][v].width,l[p][v].fontProperties=i.measureFont(this.context.font),l[p][v].height=l[p][v].fontProperties.fontSize,"number"==typeof S.valign?(f=Math.min(f,S.valign-l[p][v].fontProperties.descent),y=Math.max(y,S.valign+l[p][v].fontProperties.ascent)):(f=Math.min(f,-l[p][v].fontProperties.descent),y=Math.max(y,l[p][v].fontProperties.ascent))}c[p]=u,x[p]=f,d[p]=Math.max(y,b),g=Math.max(g,u)}var m=Object.keys(r).map(function(t){return r[t]}).reduce(function(t,e){return Math.max(t,e.strokeThickness||0)},0),w=this.getDropShadowPadding(),T=g+2*m+2*w,P=d.reduce(function(t,e){return t+e},0)-x.reduce(function(t,e){return t+e},0)+2*m+2*w;this.canvas.width=T*this.resolution,this.canvas.height=P*this.resolution,this.context.scale(this.resolution,this.resolution),this.context.textBaseline="alphabetic",this.context.lineJoin="round";for(var k=w+m,_=[],M=0;M<l.length;M++){var F=l[M],O=void 0;switch(this.withPrivateMembers()._style.align){case"left":O=w+m;break;case"center":O=w+m+(g-c[M])/2;break;case"right":O=w+m+g-c[M]}for(var A=0;A<F.length;A++){var D=F[A],E=D.style,B=D.text,W=D.fontProperties,j=D.width,R=D.tag,L=k+W.ascent;switch(E.valign){case"top":break;case"baseline":L+=d[M]-W.ascent;break;case"middle":L+=(d[M]-x[M]-W.ascent-W.descent)/2;break;case"bottom":L+=d[M]-x[M]-W.ascent-W.descent;break;default:L+=d[M]-W.ascent-E.valign}if(0===E.letterSpacing)_.push({text:B,style:E,x:O,y:L,width:j,ascent:W.ascent,descent:W.descent,tag:R}),O+=F[A].width;else{this.context.font=this.getFontString(F[A].style);for(var z=0;z<B.length;z++){(z>0||A>0)&&(O+=E.letterSpacing/2);var I=this.context.measureText(B.charAt(z)).width;_.push({text:B.charAt(z),style:E,x:O,y:L,width:I,ascent:W.ascent,descent:W.descent,tag:R}),O+=I,(z<B.length-1||A<F.length-1)&&(O+=E.letterSpacing/2)}}}k+=d[M]-x[M]}this.context.save(),_.forEach(function(e){var i=e.style,o=e.text,n=e.x,r=e.y;if(i.dropShadow){t.context.font=t.getFontString(i);var a=i.dropShadowColor;"number"==typeof a&&(a=s.hex2string(a)),t.context.shadowColor=a,t.context.shadowBlur=i.dropShadowBlur,t.context.shadowOffsetX=Math.cos(i.dropShadowAngle)*i.dropShadowDistance*t.resolution,t.context.shadowOffsetY=Math.sin(i.dropShadowAngle)*i.dropShadowDistance*t.resolution,t.context.fillText(o,n,r)}}),this.context.restore(),_.forEach(function(e){var i=e.style,o=e.text,n=e.x,r=e.y;if(void 0!==i.stroke&&i.strokeThickness){t.context.font=t.getFontString(i);var a=i.stroke;"number"==typeof a&&(a=s.hex2string(a)),t.context.strokeStyle=a,t.context.lineWidth=i.strokeThickness,t.context.strokeText(o,n,r)}}),_.forEach(function(i){var o=i.style,n=i.text,r=i.x,a=i.y;if(void 0!==o.fill){t.context.font=t.getFontString(o);var h=o.fill;if("number"==typeof h)h=s.hex2string(h);else if(Array.isArray(h))for(var l=0;l<h.length;l++){var c=h[l];"number"==typeof c&&(h[l]=s.hex2string(c))}t.context.fillStyle=t._generateFillStyle(new e(o),[n]),t.context.fillText(n,r,a)}}),_.forEach(function(e){var i=e.style,s=e.x,r=e.y,a=e.width,h=e.ascent,l=e.descent,c=e.tag,x=-t.withPrivateMembers()._style.padding-t.getDropShadowPadding();t.hitboxes.push({tag:c,hitbox:new o(s+x,r-h+x,a,h+l)}),(void 0===i.debug?n.debugOptions.spans.enabled:i.debug)&&(t.context.lineWidth=1,n.debugOptions.spans.bounding&&(t.context.fillStyle=n.debugOptions.spans.bounding,t.context.strokeStyle=n.debugOptions.spans.bounding,t.context.beginPath(),t.context.rect(s,r-h,a,h+l),t.context.fill(),t.context.stroke(),t.context.stroke()),n.debugOptions.spans.baseline&&(t.context.strokeStyle=n.debugOptions.spans.baseline,t.context.beginPath(),t.context.moveTo(s,r),t.context.lineTo(s+a,r),t.context.closePath(),t.context.stroke()),n.debugOptions.spans.top&&(t.context.strokeStyle=n.debugOptions.spans.top,t.context.beginPath(),t.context.moveTo(s,r-h),t.context.lineTo(s+a,r-h),t.context.closePath(),t.context.stroke()),n.debugOptions.spans.bottom&&(t.context.strokeStyle=n.debugOptions.spans.bottom,t.context.beginPath(),t.context.moveTo(s,r+l),t.context.lineTo(s+a,r+l),t.context.closePath(),t.context.stroke()),n.debugOptions.spans.text&&(t.context.fillStyle="#ffffff",t.context.strokeStyle="#000000",t.context.lineWidth=2,t.context.font="8px monospace",t.context.strokeText(c.name,s,r-h+8),t.context.fillText(c.name,s,r-h+8),t.context.strokeText(a.toFixed(2)+"x"+(h+l).toFixed(2),s,r-h+16),t.context.fillText(a.toFixed(2)+"x"+(h+l).toFixed(2),s,r-h+16)))}),n.debugOptions.objects.enabled&&(n.debugOptions.objects.bounding&&(this.context.fillStyle=n.debugOptions.objects.bounding,this.context.beginPath(),this.context.rect(0,0,T,P),this.context.fill()),n.debugOptions.objects.text&&(this.context.fillStyle="#ffffff",this.context.strokeStyle="#000000",this.context.lineWidth=2,this.context.font="8px monospace",this.context.strokeText(T.toFixed(2)+"x"+P.toFixed(2),0,8,T),this.context.fillText(T.toFixed(2)+"x"+P.toFixed(2),0,8,T))),this.updateTexture()}},n.prototype.wordWrap=function(t){var e="",i=this.getTagRegex(!0,!0),s=t.split("\n"),o=this.withPrivateMembers()._style.wordWrapWidth,n=[this.assign({},this.textStyles.default)];this.context.font=this.getFontString(this.textStyles.default);for(var r=0;r<s.length;r++){for(var a=o,h=s[r].split(i),l=!0,c=0;c<h.length;c++)if(i.test(h[c]))e+=h[c],"/"===h[c][1]?(c+=2,n.pop()):(n.push(this.assign({},n[n.length-1],this.textStyles[h[++c]])),c++),this.context.font=this.getFontString(n[n.length-1]);else for(var x=h[c].split(" "),d=0;d<x.length;d++){var g=this.context.measureText(x[d]).width;if(this.withPrivateMembers()._style.breakWords&&g>a){var p=x[d].split("");d>0&&(e+=" ",a-=this.context.measureText(" ").width);for(var u=0;u<p.length;u++){var f=this.context.measureText(p[u]).width;f>a?(e+="\n"+p[u],a=o-f):(e+=p[u],a-=f)}}else if(this.withPrivateMembers()._style.breakWords)e+=x[d],a-=g;else{var y=g+(d>0?this.context.measureText(" ").width:0);y>a?(l||(e+="\n"),e+=x[d],a=o-g):(a-=y,d>0&&(e+=" "),e+=x[d])}l=!1}r<s.length-1&&(e+="\n")}return e},n.prototype.updateTexture=function(){var t=this.withPrivateMembers()._texture,e=this.getDropShadowPadding();t.baseTexture.setRealSize(this.canvas.width,this.canvas.height,this.resolution),t.trim.width=t.frame.width=this.canvas.width/this.resolution,t.trim.height=t.frame.height=this.canvas.height/this.resolution,t.trim.x=-this.withPrivateMembers()._style.padding-e,t.trim.y=-this.withPrivateMembers()._style.padding-e,t.orig.width=t.frame.width-2*(this.withPrivateMembers()._style.padding+e),t.orig.height=t.frame.height-2*(this.withPrivateMembers()._style.padding+e),this.withPrivateMembers()._onTextureUpdate(),t.baseTexture.emit("update",t.baseTexture),this.withPrivateMembers().dirty=!1},n.prototype.assign=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];for(var s=0,o=e;s<o.length;s+=1){var n=o[s];for(var r in n)t[r]=n[r]}return t},Object.defineProperties(n.prototype,r),n}(n);l.DEFAULT_TAG_STYLE={align:"left",breakWords:!1,dropShadow:!1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"#000000",dropShadowDistance:5,fill:"black",fillGradientType:r.LINEAR_VERTICAL,fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",valign:"baseline",wordWrap:!1,wordWrapWidth:100,tagStyle:"xml"},l.debugOptions={spans:{enabled:!1,baseline:"#44BB44",top:"#BB4444",bottom:"#4444BB",bounding:"rgba(255, 255, 255, 0.1)",text:!0},objects:{enabled:!1,bounding:"rgba(255, 255, 255, 0.05)",text:!0}};export default l;
//# sourceMappingURL=pixi-multistyle-text.m.js.map
