(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8230)}])},2359:function(e,l,s){"use strict";s.d(l,{Z:function(){return g}});var a=s(5893),t=s(7294),n=s(4080),r=s(6471),i=s(8193),o=s(3750),c=s(6653),u=s(1715),d=s(6501);let m=()=>{let[e,l]=(0,t.useState)(!1),s=()=>{let e=window.location.href;navigator.clipboard.writeText(e).then(()=>{d.Am.dismiss(),d.Am.success("Link copied to clipboard.")}).catch(e=>{console.error("Failed to copy URL: ",e)})},a=async s=>{let a=async()=>{if(e)return;l(!0);let a=s.image_name,{data:t,error:n}=await u.Z.storage.from("visuals").download(a);if(n)return console.error("Error isDownloading image:",n),l(!1),Error("Something went wrong.");let r=new Blob([t],{type:t.type}),i=document.createElement("a");i.href=window.URL.createObjectURL(r),i.download=a,i.click(),l(!1)};d.Am.promise(a(),{loading:"Loading",success:"Downloaded Successfully",error:"Error when fetching"})},n=e=>{navigator.clipboard.writeText(e.code_snippet).then(()=>{d.Am.dismiss(),d.Am.success("Code snippet copied to clipboard.")}).catch(e=>{console.error("Failed to copy URL: ",e)})};return{isDownloading:e,handleCopyCode:n,handleDownloadBtn:a,handleShareBtn:s}},x="\n  rounded-full w-fit flex flex-col p-3 gap-2 items-center\n  hover:bg-[#222] duration-200 fluid-md group relative\n",p="\n  text-xs duration-300 absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md \n  invisible pointer-events-none opacity-0 bg-[#333] p-1 px-2\n  group-hover:opacity-100 group-hover:pointer-events-auto group-hover:visible\n",h=e=>{let{visualInfo:l,shareBtnRef:s}=e,{isDownloading:t,handleShareBtn:n,handleDownloadBtn:r,handleCopyCode:u}=m();return(0,a.jsxs)("div",{className:"ml-auto flex w-full justify-around xs:justify-end",children:[(0,a.jsxs)("button",{className:x,ref:s,onClick:n,children:[(0,a.jsx)(i.x2q,{className:"fluid-xl"}),(0,a.jsx)("span",{className:p,children:"Share"})]}),(0,a.jsxs)("button",{className:x,disabled:t,onClick:()=>r(l),children:[(0,a.jsx)(i.RFS,{className:"fluid-xl"}),(0,a.jsx)("span",{className:p,children:"Download"})]}),l.code_snippet?(0,a.jsxs)("button",{className:x,onClick:()=>u(l),children:[(0,a.jsx)(o.P_q,{className:"fluid-xl"}),(0,a.jsx)("span",{className:p,children:"Copy Code"})]}):null,l.compatibility_link?(0,a.jsxs)("a",{className:x,href:l.compatibility_link,rel:"noopener noreferrer",target:"_blank",children:[(0,a.jsx)(c.fHN,{className:"fluid-xl"}),(0,a.jsx)("span",{className:p,children:"Compatibility"})]}):null,l.learn_more_link?(0,a.jsxs)("a",{className:x,href:l.learn_more_link,rel:"noopener noreferrer",target:"_blank",children:[(0,a.jsx)(i.ocf,{className:"fluid-xl"}),(0,a.jsx)("span",{className:p,children:"Learn more"})]}):null]})};var f=s(300);let v=e=>{let{visualInfo:l,handleClose:s,transparentBG:o=!0}=e,c=(0,t.useRef)(null),[u,d]=(0,t.useState)({srcType:"",imgURL:""});return(0,t.useEffect)(()=>{if((null==l?void 0:l.imageURL)&&(null==l?void 0:l.srcType)){let e={imgURL:null==l?void 0:l.imageURL,srcType:null==l?void 0:l.srcType};d(e)}},[l]),(0,a.jsx)(n.u,{appear:!0,show:!!l,as:t.Fragment,children:(0,a.jsxs)(r.V,{initialFocus:c,as:"div",className:"relative z-10",onClose:s,children:[(0,a.jsx)(n.u.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-black ".concat(o?"bg-opacity-95":"")})}),(0,a.jsxs)("div",{className:"fixed inset-0 overflow-y-auto",children:[(0,a.jsx)("button",{onClick:s,className:"\n              rounded-full w-fit flex flex-col p-3 z-50 gap-2 absolute top-3 left-3 items-center\n              hover:bg-[#222] duration-200 fluid-md \n            ",children:(0,a.jsx)(i.kyg,{className:"fluid-xl"})}),(0,a.jsx)("div",{className:"\n            flex min-h-full items-center justify-center p-4 text-center\n          ",children:(0,a.jsx)(n.u.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,a.jsxs)(r.V.Panel,{className:"\n                  fixed z-20 flex flex-col gap-4 md:max-w-5xl p-3\n                ",children:[(0,a.jsxs)("div",{className:"\n                    flex justify-center\n                ",children:["video"===u.srcType||"webm"===u.srcType?(0,a.jsx)("div",{className:"",children:(0,a.jsx)("video",{className:"bg-bg-main xs:max-h-[80vh] rounded-2xl ",loop:!0,preload:"",muted:!0,playsInline:!0,autoPlay:!0,children:(0,a.jsx)("source",{src:"".concat(u.imgURL),type:"video/mp4"})})}):null,"image"===u.srcType?(0,a.jsx)("img",{src:u.imgURL,alt:null==l?void 0:l.image_name,className:"rounded-2xl xs:max-h-[80vh] object-contain"}):null]}),l?(0,a.jsx)("div",{className:"hidden xs:block",children:(0,a.jsx)(h,{handleClose:s,visualInfo:l,shareBtnRef:c})}):null,l?(0,a.jsx)(f.h,{children:(0,a.jsx)("div",{className:"block xs:hidden fixed bottom-0 left-0 w-full p-4 z-50",children:(0,a.jsx)(h,{handleClose:s,visualInfo:l,shareBtnRef:c})})}):null]})})})]})]})})};var g=v},1715:function(e,l,s){"use strict";var a=s(9802);let t=(0,a.eI)("https://kyipjihrihhaochrsmup.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5aXBqaWhyaWhoYW9jaHJzbXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0NTg2MDMsImV4cCI6MTk5NjAzNDYwM30.CM17lTfF8IFdBp08y8esgYiCSxrMSjXrcZN4C2QkXtM");l.Z=t},8230:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return C}});var a=s(5893),t=s(7294),n=s(827),r=s(1163);let i=e=>{let{visual:l,lastVisualRef:s,isLastVisual:n,handleClick:r}=e,i=(0,t.useRef)(null),o=()=>{let e=n?s:i;e.current&&e.current.play()},c=()=>{let e=n?s:i;e.current&&(e.current.pause(),e.current.currentTime=0)};return(0,a.jsxs)("div",{className:"my-masonry-grid_item !bg-bg-secondary group relative cursor-pointer overflow-hidden rounded-2xl border-[3px] border-bg-secondary hover:border-[#3f3f3f]  duration-200",onClick:()=>r(l),onMouseEnter:()=>o(),onMouseLeave:()=>c(),children:["video"===l.srcType||"webm"===l.srcType?(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("video",{className:"bg-bg-main duration-500 opacity-0 rounded-2xl",ref:n?s:i,preload:"",loop:!0,onLoadedData:e=>{e.target.classList.remove("opacity-0")},muted:!0,autoPlay:!1,children:(0,a.jsx)("source",{src:"".concat(l.imageURL),type:"video/webm"})}),(0,a.jsx)("h2",{className:"absolute bg-bg-secondary text-white text-sm p-1.5 px-3 bottom-2 right-2 rounded-xl",children:"video"})]}):null,"image"===l.srcType?(0,a.jsx)("img",{ref:n?s:void 0,src:l.imageURL,className:" duration-500 opacity-0",loading:"lazy",onLoad:e=>{e.target.classList.remove("opacity-0")},alt:l.title}):null,(0,a.jsx)("div",{className:"absolute inset-0 flex items-end justify-center gap-4 bg-black/20 p-4 opacity-0 duration-200 group-hover:opacity-100"})]},l.title)},o=e=>{let{visuals:l,lastVisualRef:s}=e,o=(0,r.useRouter)(),[u,d]=(0,t.useState)(null),[m,x]=(0,t.useState)(!1),p=e=>{d(e),o.push("?visualId=".concat(e.id),"".concat(e.id),{scroll:!1})},h=()=>{d(null),o.push("/",void 0,{scroll:!1})},[f,v]=(0,t.useState)(!0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{breakpointCols:{default:3,1100:2,650:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:l.map((e,t)=>(0,a.jsx)(i,{visual:e,handleClick:p,lastVisualRef:s,isLastVisual:l.length===t+1?s:void 0},e.id))}),(0,a.jsx)(c.Z,{handleClose:h,visualInfo:u})]})};s(1664);var c=s(2359),u=s(8193),d=s(1715),m=s(5285),x=s(1296),p=s.n(x);let h=async e=>{let{pageIndex:l,maxItemsPerPage:s,filter:a,searchTerm:t}=e,n=d.Z.from("visuals").select("*",{count:"exact"}).range(l*s,l*s+(s-1)).order("created_at",{ascending:!1}),r=t.replace(/\s+/g," & ");r&&(n=n.textSearch("title",r,{type:"websearch",config:"english"})),a&&"all"!==a&&(n=n.eq("type",a));let{data:i,error:o,count:c}=await n;if(o)throw Error(o.message);if(i)return{visuals:i,visualsCount:c}},f=()=>{var e;let[l,s]=(0,t.useState)("all"),[a,n]=(0,t.useState)(""),{data:r,hasNextPage:i,isFetchingNextPage:o,fetchNextPage:c,status:u}=(0,m.N)({queryKey:["visuals",l,a],queryFn:e=>{let{pageParam:s=0}=e;return h({pageIndex:s,maxItemsPerPage:4,searchTerm:a,filter:l})},getNextPageParam:(e,l)=>{let s=e.visualsCount/4,a=l.length+1;return a<=s?a:void 0}}),d=()=>{c()},x=()=>{n("")},f=e=>{e!==l&&s(e)},v=e=>{e!==a&&n(e)},g=(null==r?void 0:r.pages.flatMap(e=>null==e?void 0:e.visuals))||[],j=(null===(e=null==r?void 0:r.pages[0])||void 0===e?void 0:e.visualsCount)||0,y=(0,t.useMemo)(()=>p()(v,250),[]);return(0,t.useEffect)(()=>()=>{y.cancel()}),{changeFilter:f,searchVisual:v,resetSearch:x,visualsCount:j,nextPage:d,status:u,visuals:g,hasMore:i,searchTerm:a,filter:l}};var v=s(4143),g=s(4293),j=s(7516);let y=[{name:"All",value:"all"},{name:"HTML",value:"html"},{name:"CSS",value:"css"},{name:"Javascript",value:"javascript"},{name:"VS Code",value:"vscode"}],b=e=>{let{changeFilter:l}=e,[s,n]=(0,t.useState)(y[0]);return(0,t.useEffect)(()=>{l(s.value)},[s]),(0,a.jsx)(v.R,{value:s,onChange:n,children:(0,a.jsxs)(g.bv,{as:"div",className:"relative",placement:"bottom",offset:4,floatingAs:t.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:[(0,a.jsxs)(v.R.Button,{className:"relative w-full cursor-pointer py-3 xs:py-2 pl-8 pr-10 text-left min-w-[12rem]",children:[(0,a.jsx)("span",{className:"block truncate",children:s.name}),(0,a.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4",children:(0,a.jsx)(j.OrA,{className:"text-2xl"})})]}),(0,a.jsx)(v.R.Options,{className:"absolute mt-4 max-h-70 w-full min-w-[10rem] overflow-auto rounded-xl bg-bg-secondary text-base shadow-lg focus:outline-none fluid-md z-20 ",children:y.map((e,l)=>(0,a.jsx)(v.R.Option,{className:e=>{let{active:l}=e;return"relative cursor-pointer select-none  p-3 px-6  ".concat(l?"bg-accent-primary text-white":"text-white")},value:e,children:l=>{let{selected:s}=l;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:"block truncate ".concat(s?"font-medium":"font-normal"),children:e.name})})}},l))})]})})},N=e=>{let{}=e,{visuals:l,visualsCount:s,status:n,filter:r,nextPage:i,resetSearch:c,searchVisual:d,hasMore:m,changeFilter:x,searchTerm:p}=f(),h="loading"===n,v=(0,t.useRef)(null),g=(0,t.useCallback)(e=>{!h&&(v.current&&v.current.disconnect(),v.current=new IntersectionObserver(e=>{e[0].isIntersecting&&m&&i()}),e&&v.current.observe(e))},[h,m]),j=(0,t.useRef)(null),y=()=>{var e;null==j||null===(e=j.current)||void 0===e||e.reset(),c()},N=e=>{d(e.target.value)};return(0,a.jsxs)("div",{className:"flex min-h-screen flex-col gap-8 px-vw-12 max-w-[1600px] mx-auto pt-12 xs:pt-24",children:[(0,a.jsxs)("header",{className:"flex flex-col gap-6 items-center justify-center",children:[" ",(0,a.jsx)("h1",{className:"website-title font-bold fluid-3xl text-center text-slate-300",children:"Web Development Visuals"}),(0,a.jsxs)("div",{className:"relative flex flex-col xs:flex-row xs:items-center w-full max-w-3xl bg-bg-secondary rounded-xl ",children:[(0,a.jsxs)("div",{className:"relative flex-1",children:[(0,a.jsx)(u.RB5,{className:"absolute left-4 inset-0 my-auto text-xl"}),(0,a.jsx)("input",{type:"text",value:p,onChange:N,placeholder:"Search Visuals",className:"input w-full bg-transparent p-3 pl-11 xs:p-5 xs:pl-11 text-white fluid-md rounded-xl "}),p?(0,a.jsx)("button",{onClick:y,type:"button",className:"absolute right-3 top-1/2 -translate-y-1/2 bg-bg-main rounded-full p-1.5 text-xl duration-100",children:(0,a.jsx)(u.oHP,{className:"text-sm"})}):null]}),(0,a.jsx)("div",{className:"xs:ml-auto w-full h-0.5 xs:w-0.5 xs:h-8 bg-[#343a40]"}),(0,a.jsx)(b,{changeFilter:x})]})]}),(null==l?void 0:l.length)?(0,a.jsx)(o,{visuals:l,lastVisualRef:g}):null,h?(0,a.jsx)(u.Z7b,{className:"mx-auto my-6 animate-spin text-4xl text-accent-primary"}):null,!h&&s<=0?(0,a.jsxs)("div",{className:"flex flex-col items-center gap-8",children:[(0,a.jsx)("img",{className:"w-full max-w-xs",src:"/no_results.svg"}),(0,a.jsx)("h2",{className:"text-2xl",children:"No Results Found."})]}):null]})},w=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(N,{})});var C=w}},function(e){e.O(0,[13,617,874,824,236,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);