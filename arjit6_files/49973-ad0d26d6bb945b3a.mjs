(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[49973],{217508:(e,i,r)=>{r.d(i,{Z:()=>l});var t=r(898781),o=r(883119),n=r(785893);function l({backgroundColor:e="darkGray",iconColor:i="inverse",iconSize:r,size:l=20}){const a=(0,t.ZP)();return(0,n.jsx)(o.xu,{display:"flex",direction:"column",alignItems:"center",color:e,width:l,height:l,rounding:"circle",justifyContent:"center",children:(0,n.jsx)(o.JO,{accessibilityLabel:a._('Secret board icon', 'Icon indicating that a board is secret', 'Icon indicating that a board is secret'),color:i,icon:"lock",size:null!=r?r:l/2})})}},408285:(e,i,r)=>{r.d(i,{$J:()=>S,AP:()=>M,Dm:()=>k,Fv:()=>P,H$:()=>Z,In:()=>W,Ng:()=>C,RH:()=>b,Wj:()=>E,_P:()=>z,go:()=>j});var t=r(126098),o=r(6637),n=r(360903),l=r(30287),a=r(53987),s=r(867820),c=r(957161),d=r(266725);const u="home",_="closeup",h="news_hub",v="board",m="profile",g="topic",p="today",w="business",x="search";let f;const b="_push",y=e=>{e.onupdatefound=()=>{(0,s.My)("mweb_service_worker.update_found")}},j=()=>Boolean("undefined"!=typeof navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller),P=()=>new Promise(((e,i)=>{const r=navigator.serviceWorker,{pwaType:t,twaType:o}=f.getState().session,n=new URLSearchParams({source_url:window.location.pathname});t&&o&&(0,l.Rx)(o)&&(n.append("pwa_type",t),n.append("twa_type",o)),Boolean("undefined"!=typeof document&&document.referrer&&!document.referrer.startsWith(window.location.origin))&&n.append("referrer",document.referrer),r&&r.register?((0,s.My)("mweb_service_worker.install_attempt"),r.register(`/sw.js?${n.toString()}`).then((i=>{(0,s.My)("mweb_service_worker.install_success"),y(i),e(i)})).catch((e=>{(0,s.tj)("mweb_service_worker.install_fail",{error:e.message}),i(e)}))):e()})),C=()=>new Promise(((e,i)=>{const r=navigator.serviceWorker;r&&r.getRegistration?((0,s.My)("mweb_service_worker.update_attempt"),r.getRegistration().then((r=>{r?r.update().then((()=>{(0,s.My)("mweb_service_worker.update_success"),y(r),e(r)})).catch((e=>{(0,s.tj)("mweb_service_worker.update_fail",{error:e.message}),i(e)})):P().then(e)}))):e()})),S=()=>{const e=f.getState().session.isAuthenticated;(0,s.My)(`mweb.${e?"auth":"unauth"}.register_service_worker`),P()},k=()=>{const e=navigator.serviceWorker;return e&&e.getRegistration?((0,s.My)("mweb_service_worker.unregister_attempt"),(0,n.Qi)(),e.getRegistration().then((e=>{if(e)return e.unregister().then((()=>((0,s.My)("mweb_service_worker.unregister_success"),navigator.serviceWorker&&window.caches?window.caches.keys().then((e=>{const i=e.find((e=>e.startsWith("workbox-precaching")));return i?window.caches.delete(i):null})).then((()=>(0,s.My)("mweb_service_worker.clear_app_shell"))):Promise.resolve()))).catch((e=>{(0,s.tj)("mweb_service_worker.unregister_fail",{error:e.message})}))}))):Promise.resolve()},z=()=>!(!j()||!("SyncManager"in window)),A=e=>(0,a.C$)(e)?u:(0,a.L6)(e)?_:(0,a.l4)(e)?h:(0,a.am)(e)?v:(0,a.cD)(e)?m:(0,a.En)(e)?x:(0,a.$V)(e)?g:(0,a.Zz)(e)?p:(0,a.Ni)(e)?w:"undefined",B=e=>{switch(A(e)){case u:return{viewType:1,viewParameter:92};case _:return{viewType:3,viewParameter:void 0};case h:return{viewType:107,viewParameter:3081};case v:return{viewType:5,viewParameter:void 0};case x:return{viewType:2,viewParameter:43};case g:return{viewType:210,viewParameter:void 0};case m:return{viewType:4,viewParameter:void 0};case w:return{viewType:409,viewParameter:3397};case p:return{viewType:1,viewParameter:3372};default:return{viewType:void 0,viewParameter:void 0}}},T=(e,i)=>(0,s.tj)(e,{browser:f.getState().session.browser,version:Math.floor(parseInt(f.getState().session.browserVersion,10)),...i}),I=(0,t.Z)(),Z="default"===I||"granted"===I,E=(e,i,r)=>{const t=navigator.serviceWorker,n=Boolean((0,c.qn)(b)),l={experimentName:i||"noExperiment",experimentGroup:r||"noGroup"};return t&&t.ready&&Z&&!n?((0,d.j)({event_type:13,view_type:170,component:13125,aux_data:{experiment_name:i,experiment_group:r}}),T(`mweb.notifications_upsell.${A(e)}.viewed`,l),t.ready.then((e=>e.pushManager.subscribe({userVisibleOnly:!0}))).then((i=>((e,i,r)=>{o.ZP.create("WebPushDeviceResource",{}).callGet().then((i=>{const r=(({subscriptionId:e,endpoint:i})=>{return e||(r=i.split("/"))[r.length-1];var r})(e);if(i.resource_response.data[r])return;const t={registration_id:r,subscription_endpoint:e.endpoint};o.ZP.create("WebPushDeviceResource",t).callCreate()})),(0,c.Nh)(b,"subscribed"),T(`mweb.notifications_upsell.${A(i)}.subscribed`,r);const t=B(i);(0,d.So)({component:13125,element:10357,view_type:t.viewType,view_parameter:t.viewParameter,aux_data:{experiment_name:r.experimentName,experiment_group:r.experimentGroup}})})(i,e,l)),(()=>((e,i)=>{(0,c.Nh)(b,"denied"),T(`mweb.notifications_upsell.${A(e)}.denied`,i);const r=B(e);(0,d.So)({component:13125,element:10358,view_type:r.viewType,view_parameter:r.viewParameter,aux_data:{experiment_name:i.experimentName,experiment_group:i.experimentGroup}})})(e,l)))):Promise.reject()},W=e=>{f=e},M=({isAuthenticated:e,isAppShell:i})=>{let r=!1;const t=t=>{if(r)return;r=!0;const o=`${i?"warm":"cold"}.${e?"auth":"unauth"}`;(0,s.My)(`mweb_service_worker.appshell_status.${o}.${t}`)},o=navigator.serviceWorker,n=null==o?void 0:o.controller;o&&n?setTimeout((()=>t("timeout")),1e3):t("no_worker")}},360903:(e,i,r)=>{r.d(i,{Qi:()=>c,RK:()=>s,$_:()=>a});var t=r(766935);var o=r(957161);const n="REDUX_STATE",l=()=>!!navigator.serviceWorker,a=()=>l()&&JSON.parse((0,o.qn)(n))||{},s=e=>(0,t.Z)((i=>{const r={};r[e]=i,l()&&(e=>{if(window.requestIdleCallback)return window.requestIdleCallback(e);{const i=Date.now();setTimeout((()=>{e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-i))})}),1)}})((()=>(e=>{l()&&(0,o.Nh)(n,JSON.stringify({...a(),...e}))})(r)))}),1e3),c=()=>{(0,o.L_)(n)}},391254:(e,i,r)=>{r.d(i,{Z:()=>n});r(441143);var t=r(785893);class o{static factory(e){return e instanceof o?e:new o(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function n(e){const{css:i,unsafeCSS:r,...n}=e,l=String(i||"")||r||"";return!!l?(0,t.jsx)("style",{...n,dangerouslySetInnerHTML:{__html:String(o.factory(l))}}):null}},126098:(e,i,r)=>{function t(){if("undefined"!=typeof navigator&&"serviceWorker"in navigator&&void 0!==navigator.serviceWorker&&"Notification"in window&&"PushManager"in window)try{return window.Notification.permission}catch(e){return}}r.d(i,{Z:()=>t})},758127:(e,i,r)=>{r.d(i,{U:()=>n,Z:()=>l});var t=r(883119),o=r(785893);const n=", ";function l(){return(0,o.jsx)(t.xu,{display:"visuallyHidden",children:n})}},904411:(e,i,r)=>{r.d(i,{bn:()=>a,fJ:()=>c,gC:()=>s});var t=r(966338),o=r(425288),n=r(785893);const{Provider:l,useHook:a}=(0,o.Z)("Boards");function s(){const e=a();return i=>e[i]}function c({children:e}){const i=(0,t.useSelector)((({boards:e})=>e),t.shallowEqual);return(0,n.jsx)(l,{value:i,children:e})}},14254:(e,i,r)=>{r.d(i,{Z:()=>y});var t=r(667294),o=r(948618),n=r(70598),l=r(298361),a=r(112690),s=r(892819),c=r(19121),d=r(349700),u=r(867820),_=r(217468),h=r(50286),v=r(758127),m=r(322937),g=r(898781),p=r(808058),w=r(883119),x=r(785893);function f(e,i){const{full_name:r,username:t}=e,o=(0,x.jsx)(w.rU,{href:`/${t}`,inline:!0,underline:"hover",children:r});return(0,d.nk)(i._('{{ linkToUser }} invited you to join this board', 'boardRep.invite.invitationText', 'Indicating that another user invited the viewer to this board'),{linkToUser:o})}const b=({children:e})=>{const i=(0,c.Z)(),r=(0,h.HG)(),t=i&&i.isAuth;return r&&t?(0,x.jsx)(w.X6,{accessibilityLevel:2,size:"400",lineClamp:1,children:e}):(0,x.jsx)(w.xv,{lineClamp:1,weight:"bold",children:e})};function y({archivedDate:e,boardUrl:i,canEdit:r,collaborators:c,collaboratorsCount:y=0,containerBackgroundColor:j,coverPhoto:P,followedByMe:C,fullSizeDrawer:S,sensitivityScreen:k,handleInviteResponse:z,hideMeta:A,id:B,invite:T,imagesLego:I=[],isBoardInviteAccepted:Z,isActive:E,isAuthenticated:W,isCollaborative:M,isCollaborator:F,isOwner:D,isSecret:R,lastModifiedDate:L,layout:U,locale:$,name:H,numCols:N,onEditClick:G,onFollow:O,onUnfollow:q,owner:X,pinCount:J=0,sectionCount:K,showFollowButton:V,viewParameter:Y,viewType:Q,viewerId:ee}){const ie=(0,g.ZP)(),re=(0,l.Z)(),te=(0,s.Z)(),oe=(0,a.Z)(),ne=(0,h.HG)()&&W,le="square"===U?p.M0:p.z9,ae=I.map((e=>({url:e.url,name:H}))),se=!!X&&!r&&V,ce=(0,_.t)("mweb_board_sensitivity_screen"),de=!D&&!F&&ce().anyEnabled,ue=!(null==k||!k.show_warning)&&de,_e={board_id:B,reason:null==k?void 0:k.reason};(0,t.useEffect)((()=>{ue&&oe({event_type:13,component:13861,view_type:215,aux_data:_e})}),[]);const he=X?X.id:void 0,ve=[...c.filter((({id:e})=>e===he)),...c.filter((({id:e})=>e===ee&&e!==he)),...c.filter((({id:e})=>![he,ee].includes(e)))].map((e=>{var i,r;return{name:null!==(i=ne?e.full_name:e.username)&&void 0!==i?i:"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":null!==(r=e.image_medium_url)&&void 0!==r?r:""}}));let me=y>=ve.length?y-ve.length:0;me=me>99?100:me;const ge=[...ve,...Array(me).fill({name:"",src:""})],pe=ne?24:16,we=pe/3*(2*(ve.length>2?3:ve.length)+1);return(0,x.jsxs)(w.xu,{"data-test-id":`boardCard-${H}`,height:se?220:"100%",position:"relative",width:ne?le:"100%",children:[(0,x.jsx)(m.Z,{canEdit:r,containerBackgroundColor:j,coverPhoto:P,images:ae,isSecret:R,fullSize:S,showSensitivityScreen:ue,isActive:E,onEditClick:G,layout:U}),!A&&(0,x.jsx)(t.Fragment,{children:T?(0,x.jsxs)(t.Fragment,{children:[(0,x.jsxs)(w.xu,{padding:2,alignItems:"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,x.jsxs)(w.xu,{width:"100%",children:[(0,x.jsx)(w.rU,{href:null!=i?i:"",children:(0,x.jsx)(w.xu,{marginTop:0,marginBottom:1,children:(0,x.jsx)(b,{children:H})})}),Z?(0,x.jsx)(w.xv,{size:"200",lineClamp:1,children:ie._('You\u2019ve joined', 'boardRep.invite.invitationAcceptedText', 'Text shown after accepting collaborator board invitations')}):(0,x.jsx)(w.xv,{size:"200",children:f(T.invited_by_user,ie)})]}),(0,x.jsx)(w.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},marginStart:2,width:we,minWidth:we,height:pe,children:(0,x.jsx)(w.HE,{accessibilityLabel:v.U+(ie._('Board has collaborators', 'BoardCard.AvatarGroup.Collaborators', 'Board description: title, number of pins, date, and it has collaborators or not.')),collaborators:ge})})]}),Z?(0,x.jsx)(w.xu,{direction:"row",display:"flex",paddingX:2,children:(0,x.jsx)(w.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,x.jsx)(w.zx,{role:"link",href:null!=i?i:"",fullWidth:!0,size:"lg",text:ie._('See board', 'boardRep.invite.seeBoardButton', 'Button text to see board after accepting collaborator invite')})})}):(0,x.jsxs)(w.kC,{direction:"row",flex:"grow",justifyContent:"start",wrap:!0,children:[(0,x.jsx)(w.xu,{marginBottom:3,paddingX:1,flex:"grow",children:(0,x.jsx)(w.zx,{fullWidth:!0,onClick:()=>{null==z||z(!1)},size:"lg",text:ie._('Decline', 'boardRep.invite.declineButton', 'Button text to decline board collaborator invite or request')})}),(0,x.jsx)(w.xu,{marginBottom:3,paddingX:1,flex:"grow",children:(0,x.jsx)(w.zx,{fullWidth:!0,color:"red",onClick:()=>{null==z||z(!0)},size:"lg",text:ie._('Accept', 'boardRep.invite.acceptButton', 'Button text to accept board collaborator invite or request')})})]})]}):(0,x.jsxs)(w.xu,{height:ne?void 0:p.s0,marginTop:ne?0:1,paddingX:2,paddingY:ne?2:0,children:[(0,x.jsxs)(w.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,x.jsx)(b,{children:H}),M&&(0,x.jsx)(w.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},marginStart:2,width:we,minWidth:we,height:pe,children:(0,x.jsx)(w.HE,{accessibilityLabel:v.U+(ie._('Board has collaborators', 'BoardCard.AvatarGroup.Collaborators', 'Board description: title, number of pins, date, and it has collaborators or not.')),collaborators:ge})})]}),(0,x.jsx)(w.xu,{alignItems:"center",direction:"row",display:"flex",marginTop:1,children:(0,x.jsxs)(w.xv,{size:"100",lineClamp:1,children:[(0,x.jsx)(v.Z,{}),(0,d.nk)(ie.ngettext('{{ count }} Pin', '{{ count }} Pins', J, 'profile.ProfilePage.board.BoardCard.PinsCount', 'label for n amount of pins'),{count:te($,J,{})}),!!K&&(0,x.jsxs)(t.Fragment,{children:[(0,x.jsx)(o.Z,{ariaHidden:!0}),(0,x.jsx)(v.Z,{}),(0,d.nk)(ie.ngettext('{{ count }} section', '{{ count }} sections', K, 'profile.ProfilePage.board.BoardCard.SectionsCount', 'label for n amount of sections'),{count:K})]}),!e&&(0,x.jsx)(w.xu,{dangerouslySetInlineStyle:{__style:{display:ne?"inline-flex":"inline",paddingLeft:7}},children:(0,x.jsxs)(w.xv,{color:"subtle",inline:!0,size:"100",lineClamp:1,children:[(0,x.jsx)(v.Z,{}),re(L,!0)]})})]})}),!!e&&(0,x.jsxs)(w.xu,{marginTop:1,children:[(0,x.jsx)(v.Z,{}),(0,x.jsx)(w.xv,{color:"subtle",size:"100",lineClamp:1,children:ie._('Archived', 'profile.ProfilePage.board.BoardCard.ArchivedBoardText', 'subtitle for archived boards on profile page')})]}),se&&(0,x.jsx)(w.xu,{marginTop:2===N?3:void 0,column:2===N?12:void 0,flex:"none",children:(0,x.jsx)(n.Z,{disabled:null==X?void 0:X.blocked_by_me,followEventType:26,id:B,isFollowed:C,onFollow:e=>{W||(0,u.NC)("press_follow_board"),O&&O(e)},onUnfollow:e=>{W||(0,u.NC)("press_unfollow_board"),q&&q(e)},shouldUseLegoColors:!0,size:"md",unfollowEventType:27,viewParameter:Y,viewType:Q})})]})})]})}},794987:(e,i,r)=>{r.d(i,{Z:()=>g});var t=r(966338),o=r(14254),n=r(851850),l=r(19121),a=r(904411),s=r(925927),c=r(780280),d=r(286268),u=r(867820),_=r(883119),h=r(628358),v=r(785893);const m=["thumbnail","imageOnly"];function g({boardId:e,containerBackgroundColor:i,forwardedRef:r,fullSize:g,showFollowButton:p=!0,showPinCount:w=!0,type:x,viewParameter:f,viewType:b}){var y,j,P;const C=(0,l.Z)(),S=C&&C.isAuth,k=(0,t.useDispatch)(),z=(0,s.TH)(),{locale:A}=(0,c.B)(),B=(0,a.gC)()(e),T=(0,n.Z)(),I=C.isAuth?C.id:"";if(!B)return null;const Z=B.owner,E=[Z,...B.collaborating_users||[]].filter(Boolean).map((({id:e,image_medium_url:i,username:r})=>({id:e,image_medium_url:i,username:r}))),W=(null==Z?void 0:Z.id)===I,M=E.filter((({id:e})=>e===I)).length>0;if("secret"===B.privacy&&!M)return null;const F="grid"===x||"thumbnail"===x?2:4,D=T(B,F),R={isCustom:B.has_custom_cover,url:D,position:(0,d.Bw)(B.cover_pin)},L=(0,d.Jx)(B,D).map((({url:e})=>({name:(0,d.po)(e),url:e}))),U=(0,v.jsx)(o.Z,{archivedDate:null!==(y=B.archived_by_me_at)&&void 0!==y?y:void 0,canEdit:!!B.access&&B.access.includes("write"),collaborators:E,collaboratorsCount:B.collaborator_count,containerBackgroundColor:i,coverPhoto:D?R:null,followedByMe:B.followed_by_me,fullSizeDrawer:g,hideMeta:m.includes(x),id:B.id,imagesLego:L,isAuthenticated:S,isCollaborative:B.is_collaborative,isCollaborator:M,isOwner:W,isSecret:"secret"===B.privacy,lastModifiedDate:"full"===x?B.board_order_modified_at:"",locale:A,name:null!==(j=B.name)&&void 0!==j?j:"",numCols:F,onFollow:e=>k((0,h.Z)(e)),onUnfollow:e=>k((0,h.f)(e)),owner:Z,pinCount:w&&B.pin_count?B.pin_count:void 0,sectionCount:null!==(P=B.section_count)&&void 0!==P?P:0,sensitivityScreen:B.sensitivity_screen,showFollowButton:p,viewParameter:f,viewType:b,viewerId:I});return!m.includes(x)&&B.url?(0,v.jsx)(_.iP,{role:"link",href:B.url,rounding:2,tapStyle:"compress",onTap:()=>{S||((0,u.NC)("click_go_to_board"),(0,u.LW)({action:"click",pageLocation:z,item:"board-card"}))},children:(0,v.jsx)(_.xu,{ref:r,paddingY:3,children:U})}):U}},371918:(e,i,r)=>{r.d(i,{Z:()=>n});var t=r(883119),o=r(785893);function n({customCover:e,height:i,imgUrl:r,imgPos:n,width:l}){const a=i/l;let s="center center";if(e&&n){let e=1;e=n.height/n.width>a?l/n.width:i/n.height;s=`-${n.x*e}px -${n.y*e}px`}const c={backgroundImage:`url(${r})`,backgroundPosition:s,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF",position:"relative"};return(0,o.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:{height:i,width:l}},children:(0,o.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:c},children:(0,o.jsx)("div",{className:"imageWash",style:{position:"absolute"}})})})}},322937:(e,i,r)=>{r.d(i,{Z:()=>_});var t=r(371918),o=r(217508),n=r(898781),l=r(50286),a=r(780280),s=r(808058),c=r(883119),d=r(785893);const u="100%";function _(e){var i,r,_,h;const v=(0,n.ZP)(),{containerBackgroundColor:m="white",coverPhoto:g,fullSize:p,images:w,isSecret:x,showSensitivityScreen:f,isActive:b,canEdit:y,onEditClick:j,layout:P}=e,C=(0,l.HG)(),{isRTL:S,isAuthenticated:k}=(0,a.B)(),z=C&&k,A=w[0],B=!g&&(null===(i=w[0])||void 0===i?void 0:i.name)||v._('Cover image', 'DrawerImageGroup', 'Alt text for the main image of a board'),T=Array(2).fill(),I=new c.Ry(1),Z="square"===P?s.M0:s.z9,E="square"===P?s.FP:s.FC,W=f?{filter:"blur(20px)"}:{};return(0,d.jsx)(c.zd,{height:p?"100%":void 0,rounding:4,width:"100%",wash:b,children:(0,d.jsxs)(c.xu,{"aria-hidden":!0,display:"flex",height:z?E:"100%",direction:"row",children:[(0,d.jsx)(c.sg,{span:8,children:(0,d.jsx)(c.xu,{dangerouslySetInlineStyle:{__style:W},position:"relative",height:p?"100%":void 0,children:(0,d.jsx)(c.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:u}},overflow:"hidden",width:"100%",children:(0,d.jsxs)(c.xu,{dangerouslySetInlineStyle:{__style:{borderColor:m,borderStyle:"solid",borderWidth:"1px 0 1px 1px"}},overflow:"hidden",position:"absolute",top:!0,bottom:!0,right:!0,left:!0,children:[x&&(0,d.jsx)(c.xu,{left:!S,right:S,margin:2,position:"absolute",top:!0,zIndex:I,children:(0,d.jsx)(o.Z,{backgroundColor:"white",iconColor:"default",size:z?32:24})}),z&&null!=g&&g.url?(0,d.jsx)(t.Z,{customCover:g.isCustom,imgPos:g.position||{width:0,height:0,x:0,y:0},imgUrl:null!==(r=g.url)&&void 0!==r?r:"",width:Math.floor(Z/3*2),height:E}):(0,d.jsx)(c.Ee,{alt:B,color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:null!==(_=null!==(h=null==g?void 0:g.url)&&void 0!==h?h:null==A?void 0:A.url)&&void 0!==_?_:""})]})})})}),(0,d.jsx)(c.sg,{span:4,children:(0,d.jsxs)(c.xu,{dangerouslySetInlineStyle:{__style:W},height:"100%",children:[y&&b&&(0,d.jsx)(c.xu,{left:S,right:!S,margin:2,position:"absolute",bottom:!0,zIndex:I,children:(0,d.jsx)(c.hU,{accessibilityLabel:v._('Edit', 'DrawerImageGroup.edit', 'Icon indicating that a board is editable'),bgColor:"white",icon:"edit",iconColor:"darkGray",onClick:({event:e})=>null==j?void 0:j(e),size:"sm"})}),T.map(((e,i)=>{var r,t;const o=w[z?i:i+1];return(0,d.jsx)(c.xu,{position:"relative",height:p?"50%":void 0,children:(0,d.jsx)(c.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:u}},overflow:"hidden",width:"100%",children:(0,d.jsx)(c.xu,{dangerouslySetInlineStyle:{__style:{borderColor:m,borderStyle:"solid",borderWidth:0===i?1:"0 1px 1px 1px"}},overflow:"hidden",position:"absolute",top:!0,bottom:!0,right:!0,left:!0,children:(0,d.jsx)(c.Ee,{alt:null!==(r=null==o?void 0:o.name)&&void 0!==r?r:"placeholder",color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:null!==(t=null==o?void 0:o.url)&&void 0!==t?t:""})})})},i)}))]})}),f&&(0,d.jsx)(c.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:(0,d.jsx)(c.X6,{align:"center",color:"light",size:"400",children:v._('This board may contain sensitive content', 'drawerImageGroup.sensitivityScreen.heading', 'Warning text for a board that may have sensitive content')})})]})})}},808058:(e,i,r)=>{r.d(i,{FC:()=>a,FP:()=>n,M0:()=>o,s0:()=>t,z9:()=>l});const t=34,o=236,n=157,l=320,a=213},851850:(e,i,r)=>{r.d(i,{Z:()=>n});var t=r(19121),o=r(50286);function n(){const e=(0,o.HG)(),i=(0,t.Z)(),r=i&&i.isAuth;if(e&&r){return e=>{var i,r;const t=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,o=null!==(i=null===(r=e.cover_pin)||void 0===r?void 0:r.image_url)&&void 0!==i?i:t,n=e.images&&e.images["170x"]&&e.images["170x"].length?e.images["170x"][0].url:"";return o||n}}return(e,i)=>{var r,t;const o=e.has_custom_cover?e.image_cover_hd_url||e.image_cover_url:"";if(!o)return"";const n=e.cover_images&&e.cover_images["400x300"]?e.cover_images["400x300"].url:void 0,l=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,a=e.cover_images&&e.cover_images["216x146"]?e.cover_images["216x146"].url:void 0,s=null!==(r=null!==(t=null!=n?n:l)&&void 0!==t?t:a)&&void 0!==r?r:"",c=e.image_cover_url||"";return o||(i&&i>2&&s?s:"")||c}}},286268:(e,i,r)=>{r.d(i,{Bw:()=>a,Jx:()=>l,po:()=>t});const t=(e="")=>(null!=e?e:"").substring((null!=e?e:"").lastIndexOf("/")+1),o=e=>({dominant_color:"#FFFFFF",height:1,url:e,width:1}),n=e=>{if(!e)return()=>!0;const i=t(e);return e=>{var r;return"string"==typeof e?t(e)!==i:t(null!==(r=e.url)&&void 0!==r?r:"")!==i}},l=(e,i)=>e.images&&e.images["170x"]?e.images["170x"].filter(n(i)):e.pin_thumbnail_urls?e.pin_thumbnail_urls.filter(n(i)).map(o):[],a=e=>{var i;return null!==(i=e&&e.crop&&e.size&&{x:e.crop[0],y:e.crop[1],width:e.size[0],height:e.size[1]})&&void 0!==i?i:{x:0,y:0,width:0,height:0}}},628358:(e,i,r)=>{r.d(i,{Z:()=>l,f:()=>a});var t=r(6637),o=r(935409);function n(e){return t.ZP.create("BoardFollowResource",{board_id:e})}function l(e){return i=>{n(e).callCreate().catch((()=>{i((0,o.md)(e,!1))})),i((0,o.md)(e,!0))}}function a(e){return i=>{n(e).callDelete().catch((()=>{i((0,o.md)(e,!0))})),i((0,o.md)(e,!1))}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/49973-ad0d26d6bb945b3a.mjs.map