/* The following mimics the starter shim */
var a = document.getElementById( 'c' ),
	b = document.body,
	c = a.getContext( '2d' );

a.width = window.innerWidth;
a.height = window.innerHeight;

/*
Minified
*/

function R(){w=a.width=W.innerWidth,h=a.height=W.innerHeight,f=c.getImageData(0,0,w,h),d=f.data,O=d.length}function L(){for(i=0;O>i;i++)d[i]=i+1&3?0:255;z.h+=.005,z.h=z.h>1?z.h-1:z.h<0?z.h+1:z.h;var n=z.l<.5?z.l*(1+z.s):z.l+z.s-z.l*z.s,a=2*z.l-n,t=255*H(a,n,z.h+1/3)+.5>>0;for(g=255*H(a,n,z.h)+.5>>0,b=255*H(a,n,z.h-1/3)+.5>>0,i=0;C>i;i++){var e=S[i],r=m.x-e.x,o=m.y-e.y,x=M.atan2(o,r),y=100/M.sqrt(r*r+o*o),s=M.cos(x)*y,v=M.sin(x)*y;e.h+=s,e.v+=v,e.x+=e.h,e.y+=e.v,e.h*=.96,e.v*=.96,e.x=e.x>=w?e.x-w:e.x<0?e.x+w-1:e.x,e.y=e.y>=h?e.y-h:e.y<0?e.y+h-1:e.y,a=(e.y+.5>>0)*w*4+4*(e.x+.5>>0),d[a++]=t,d[a++]=g,d[a++]=b}c.putImageData(f,0,0),u&&requestAnimationFrame(L)}function N(h){m.x=h.pageX,m.y=h.pageY}function T(){u=!u,u&&L()}function H(h,i,n){return n=0>n?n+1:n>1?n-1:n,1/6>n?h+6*(i-h)*n:.5>n?i:2/3>n?h+(i-h)*(2/3-n)*6:h}var W=window,S=[],m={x:0,y:0},z={h:0,s:1,l:.5},C=3e4,u=!0,w,h,f,d,O,M=Math,r="random";for(W.onresize=R,W.onmousemove=N,W.onclick=T,R(),i=0;C>i;i++){var n={x:M[r]()*w,y:M[r]()*h,h:0,v:0};S.push(n)}L();

/*
Unminified

var W = window,
	S = [],
	m = {x:0, y:0},
	z = {h:0, s:1, l:0.5},
	C = 30000,
	u = true,
	w, h, f, d, O,
	M = Math,
	r = 'random';

function R(){

	w = a.width = W.innerWidth;
	h = a.height = W.innerHeight;
	f = c.getImageData(0, 0, w, h);
	d = f.data;
    O = d.length

}

function L(){

	for (i=0;i<O;i++) {
		d[i]=(!((i+1)&3))?255:0
	}

    z.h+=0.005;
    z.h=z.h>1?z.h-1:(z.h<0?z.h+1:z.h);

    var q=z.l<0.5?z.l*(1+z.s):z.l+z.s-z.l*z.s,
    	p=2*z.l-q,
	    r=((H(p,q,z.h+1/3)*255)+0.5)>>0;
	    g=((H(p,q,z.h)*255)+0.5)>>0;
	    b=((H(p,q,z.h-1/3)*255)+0.5)>>0;

	for (i=0;i<C;i++) {

		var n=S[i],
        	x=m.x-n.x,
        	y=m.y-n.y,
        	k=M.atan2(y,x),
        	o=100/M.sqrt(x*x+y*y),
			v=(M.cos(k)*o),
        	t=(M.sin(k)*o);

        n.h+=v;
        n.v+=t;

        n.x+=n.h;
        n.y+=n.v;

        n.h*=0.96;
        n.v*=0.96;

        n.x=n.x>=w?n.x-w:(n.x<0?n.x+w-1:n.x);
        n.y=n.y>=h?n.y-h:(n.y<0?n.y+h-1:n.y);
        
		p=(((n.y+0.5)>>0)*w*4)+(((n.x+0.5)>>0)*4);

		d[p++]=r;
		d[p++]=g;
		d[p++]=b

	}

	c.putImageData(f, 0, 0);
	if (u) requestAnimationFrame(L)
}

function N(e){
    m.x = e.pageX;
    m.y = e.pageY
}

function T() {
	u = !u;
	if (u) L()
}

function H(p,q,t){
    t=t<0?t+1:(t>1?t-1:t);
    return t<1/6?p+(q-p)*6*t:(t<1/2?q:(t<2/3?p+(q-p)*(2/3-t)*6:p))
}

W.onresize = R;
W.onmousemove = N;
W.onclick = T;

R();

for (i=0;i<C;i++) {
	var n = {x:M[r]()*w,y:M[r]()*h,h:0,v:0};
	S.push(n)
}

L();

*/
