"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[70624],{782677:(e,t,r)=>{function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function a(e){return!!(e&&"function"==typeof e.hasOwnProperty&&(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function c(e,t,r){return Object.keys(e).reduce(function(t,n){var i=""+n;return t.has(i)?t.set(i,r(t.get(i),e[i])):t},t)}r.d(t,{Fv:()=>_,fK:()=>R});var u=function(){function e(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r={}),!e||"string"!=typeof e)throw Error("Expected a string key for Entity, but found "+e+".");var n=r,i=n.idAttribute,s=void 0===i?"id":i,c=n.mergeStrategy,u=void 0===c?function(e,t){return o({},e,t)}:c,l=n.processStrategy,d=void 0===l?function(e){return o({},e)}:l,h=n.fallbackStrategy;this._key=e,this._getId="function"==typeof s?s:function(e){return a(e)?e.get(s):e[s]},this._idAttribute=s,this._mergeStrategy=u,this._processStrategy=d,this._fallbackStrategy=void 0===h?function(e,t){}:h,this.define(t)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,r){var n,i=e[r];return o({},t,((n={})[r]=i,n))},this.schema||{})},t.getId=function(e,t,r){return this._getId(e,t,r)},t.merge=function(e,t){return this._mergeStrategy(e,t)},t.fallback=function(e,t){return this._fallbackStrategy(e,t)},t.normalize=function(e,t,r,n,i,o){var s=this,a=this.getId(e,t,r),c=this.key;if(c in o||(o[c]={}),a in o[c]||(o[c][a]=[]),o[c][a].some(function(t){return t===e}))return a;o[c][a].push(e);var u=this._processStrategy(e,t,r);return Object.keys(this.schema).forEach(function(t){if(u.hasOwnProperty(t)&&"object"==typeof u[t]){var r=s.schema[t],a="function"==typeof r?r(e):r;u[t]=n(u[t],u,t,a,i,o)}}),i(this,u,e,t,r),a},t.denormalize=function(e,t){var r=this;return a(e)?c(this.schema,e,t):(Object.keys(this.schema).forEach(function(n){if(e.hasOwnProperty(n)){var i=r.schema[n];e[n]=t(e[n],i)}}),e)},i(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),l=function(){function e(e,t){t&&(this._schemaAttribute="string"==typeof t?function(e){return e[t]}:t),this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=e},t.getSchemaAttribute=function(e,t,r){return!this.isSingleSchema&&this._schemaAttribute(e,t,r)},t.inferSchema=function(e,t,r){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(e,t,r);return this.schema[n]},t.normalizeValue=function(e,t,r,n,i,o){var s=this.inferSchema(e,t,r);if(!s)return e;var a=n(e,t,r,s,i,o);return this.isSingleSchema||null==a?a:{id:a,schema:this.getSchemaAttribute(e,t,r)}},t.denormalizeValue=function(e,t){var r=a(e)?e.get("schema"):e.schema;return this.isSingleSchema||r?t((this.isSingleSchema?void 0:a(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[r]):e},i(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),d=function(e){function t(t,r){if(!r)throw Error('Expected option "schemaAttribute" not found on UnionSchema.');return e.call(this,t,r)||this}s(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,o){return this.normalizeValue(e,t,r,n,i,o)},r.denormalize=function(e,t){return this.denormalizeValue(e,t)},t}(l),h=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,s){var a=this;return Object.keys(e).reduce(function(t,r,c){var u,l=e[r];return null!=l?o({},t,((u={})[r]=a.normalizeValue(l,e,r,n,i,s),u)):t},{})},r.denormalize=function(e,t){var r=this;return Object.keys(e).reduce(function(n,i){var s,a=e[i];return o({},n,((s={})[i]=r.denormalizeValue(a,t),s))},{})},t}(l),f=function(e){if(Array.isArray(e)&&e.length>1)throw Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},g=function(e){return Array.isArray(e)?e:Object.keys(e).map(function(t){return e[t]})},m=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,o){var s=this;return g(e).map(function(e,a){return s.normalizeValue(e,t,r,n,i,o)}).filter(function(e){return null!=e})},r.denormalize=function(e,t){var r=this;return e&&e.map?e.map(function(e){return r.denormalizeValue(e,t)}):e},t}(l),y=function(e,t,r,n,i,s,a){var c=o({},t);return Object.keys(e).forEach(function(r){var n=e[r],o="function"==typeof n?n(t):n,u=i(t[r],t,r,o,s,a);null==u?delete c[r]:c[r]=u}),c},p=function(e,t,r){if(a(t))return c(e,t,r);var n=o({},t);return Object.keys(e).forEach(function(t){null!=n[t]&&(n[t]=r(n[t],e[t]))}),n},R={Array:m,Entity:u,Object:function(){function e(e){this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,r){var n,i=e[r];return o({},t,((n={})[r]=i,n))},this.schema||{})},t.normalize=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return y.apply(void 0,[this.schema].concat(t))},t.denormalize=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return p.apply(void 0,[this.schema].concat(t))},e}(),Union:d,Values:h},_=function(e,t){if(!e||"object"!=typeof e)throw Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===e?"null":typeof e)+'".');var r={};return{entities:r,result:function e(t,r,n,i,o,s){return"object"==typeof t&&t?"object"!=typeof i||i.normalize&&"function"==typeof i.normalize?i.normalize(t,r,n,e,o,s):(Array.isArray(i)?function(e,t,r,n,i,o,s){return e=f(e),g(t).map(function(t,a){return i(t,r,n,e,o,s)})}:y)(i,t,r,n,e,o,s):t}(e,e,null,t,function(e,t,n,i,o){var s=e.key,a=e.getId(n,i,o);s in r||(r[s]={});var c=r[s][a];c?r[s][a]=e.merge(c,t):r[s][a]=t},{})}}},357013:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(590338),i=r(730212),o=r(785893);let s=({currency:e,maximumFractionDigits:t,minimumFractionDigits:r,shortform:s,shortformMaximumFractionDigits:a,formatStyle:c,uplimit:u,value:l})=>{let d=(0,n.Z)();return(0,o.jsx)(i.LC,{children:n=>d(n.locale||"en-US",l,{currency:e,maximum_fraction_digits:t,minimum_fraction_digits:r,shortform:s,shortform_maximum_fraction_digits:a,style:c,uplimit:u})})}},786974:(e,t,r)=>{r.d(t,{Z:()=>s,k:()=>o});let n=new Set(["bookmarks","client_tracking_params","get_page_metadata","in_nux","invite_code","original_referrer","source","top_level_source","top_level_source_depth"]),i=e=>!n.has(e)&&!e.startsWith("__track__");function o(e){return e.split(/([^=]+=[^=]+),/).filter(Boolean).reduce((e,t)=>{let[r,n]=t.split("=");return e[r]=JSON.parse(n),e},{})}let s=e=>e?Object.keys("object"==typeof e&&e||{}).filter(e=>"string"==typeof e).filter(i).sort().map(t=>`${t}=${JSON.stringify(null==e[t]?null:e[t])}`).join(","):""},29010:(e,t,r)=>{r.d(t,{AF:()=>n,KK:()=>i,aW:()=>a,cR:()=>o,se:()=>c,zP:()=>s});let n="CREATE_COMPLETE",i="FETCHING",o="FETCH_ERROR",s="FETCH_COMPLETE",a="FETCH_MORE_COMPLETE",c="RESOURCE_INVALIDATE"},198481:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(667294),i=r(883119),o=r(357013),s=r(936437),a=r(144326),c=r(240760),u=r(946970),l=r(785893);function d({boardOrderModifiedAt:e,isBoardsActualizationRepsExp:t,pinCount:r,placesCount:d,sectionCount:h}){let f=(0,a.ZP)(),g=(0,s.Z)(),m=!!d&&0!==r||!d,y=d?(0,l.jsx)(i.xu,{"data-test-id":"pinAndSectionCount-places-count",display:"none",overflow:"hidden",smDisplay:"flex",children:(0,l.jsx)(i.xv,{color:t?"subtle":void 0,inline:!0,lineClamp:1,size:"200",children:(0,c.nk)(f.ngettext('{{ count }} place', '{{ count }} places', d, 'board.pinAndSectionCount.pinsPlaces', 'Show how many places there are in the board card. count:number of places'),{count:(0,l.jsx)(o.Z,{value:d},"pinAndSectionCount-places-count")})})}):null,p=m&&(0,l.jsx)(i.xu,{"data-test-id":"pinAndSectionCount-pin-count",overflow:"hidden",smDisplay:"flex",children:(0,l.jsx)(i.xv,{color:t?"subtle":void 0,lineClamp:1,size:"100",children:(0,c.nk)(f.ngettext('{{ count }} Pin', '{{ count }} Pins', r, 'board.pinAndSectionCount.pinsCount', 'Show how many Pins there are in the board card. count:number of Pins'),{count:(0,l.jsx)(o.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:r},"pinAndSectionCount-pin-count")})})}),R=h?(0,l.jsx)(i.xu,{"data-test-id":"pinAndSectionCount-section-count",display:"none",overflow:"hidden",smDisplay:"flex",children:(0,l.jsx)(i.xv,{color:t?"subtle":void 0,inline:!0,lineClamp:1,size:"100",children:(0,c.nk)(f.ngettext('{{ count }} section', '{{ count }} sections', h, 'board.pinAndSectionCount.sectionCount', 'Show how many sections there are in the board card. count:number of sections'),{count:(0,l.jsx)(o.Z,{value:h},"pinAndSectionCount-section-count")})})}):null;return(0,l.jsxs)(i.xu,{alignItems:"center",direction:"row",display:"flex",marginTop:1,children:[y,p,h?(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(u.Z,{ariaHidden:!0,color:t?"subtle":void 0,size:"100"}),R]}):null,e&&(0,l.jsxs)(i.xu,{"data-test-id":"pinAndSectionCount-time",marginStart:t?void 0:2,overflow:"hidden",smDisplay:"flex",children:[t&&(0,l.jsx)(u.Z,{ariaHidden:!0,color:"subtle",size:"100"}),(0,l.jsx)(i.xv,{color:"subtle",lineClamp:1,size:"100",children:g(e,!0)})]})]})}},872678:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(883119),i=r(144326),o=r(785893);function s(){let e=(0,i.ZP)();return(0,o.jsx)(n.JO,{accessibilityLabel:e._('Secret board', 'Accessibility label for icon indicating a secret board', 'Accessibility label for icon indicating a secret board'),color:"default",icon:"lock",inline:!0})}},130763:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(883119),i=r(212515),o=r(144326),s=r(730212),a=r(872678),c=r(162779),u=r(785893);function l({cover:e,height:t,image:r,width:i}){return e?(0,u.jsx)(c.Z,{customCover:e.isCustom,height:t,imgPos:e.position||{width:0,height:0,x:0,y:0},imgUrl:e.url??"",width:i}):r?(0,u.jsx)(n.zd,{height:t,wash:!0,width:i,children:(0,u.jsx)(n.Ee,{alt:"Board collage cover image",color:"#EFEFEF",fit:"cover",naturalHeight:r.height??1,naturalWidth:r.width??1,src:r.url??""})}):(0,u.jsx)(n.xu,{color:"secondary",height:t,width:i})}var d=r(798858),h=r(575597);function f({boardThumbs:e=[],cover:t,editButton:r,isActive:c,isSecret:f,layout:g,sensitivityScreenAuxData:m,showSensitivityScreen:y=!1}){let p=(0,o.ZP)();(0,i.Q)(y?{component:13861,view_type:215,aux_data:m}:null);let{isRTL:R}=(0,s.B)(),{height:_,width:b}=(0,h.F)(g),v=t?void 0:e[0],w=e.slice(t?0:1);return(0,u.jsxs)(n.zd,{height:_,rounding:4,wash:c,width:b,children:[(0,u.jsx)(n.xu,{"aria-label":"Board",color:"default",dangerouslySetInlineStyle:{__style:y?{filter:"blur(20px)"}:{}},display:"flex",height:"100%",justifyContent:"between",width:"100%",children:(0,u.jsxs)(n.xu,{"aria-hidden":"true",display:"flex",height:"100%",justifyContent:"between",width:"100%",children:[(0,u.jsx)(l,{cover:t,height:_,image:v,width:Math.floor(b/3*2)}),(0,u.jsxs)(n.kC,{alignItems:"stretch",direction:"column",flex:"none",height:"100%",justifyContent:"between",children:[(0,u.jsx)(d.Z,{height:Math.floor(_/2),image:w[0],width:Math.floor(b/3)}),(0,u.jsx)(d.Z,{height:Math.floor(_/2),image:w[1],width:Math.floor(b/3)})]})]})}),f&&(0,u.jsx)(n.xu,{alignItems:"center",color:"default",display:"flex",height:32,justifyContent:"center",left:!R,marginStart:2,marginTop:2,position:"absolute",right:R,rounding:"circle",top:!0,width:32,children:(0,u.jsx)(a.Z,{})}),c&&r&&(0,u.jsx)(n.xu,{alignItems:"center",bottom:!0,color:"default",display:"flex",height:32,justifyContent:"center",left:R,marginBottom:2,marginEnd:2,position:"absolute",right:!R,rounding:"circle",width:32,children:r}),y&&(0,u.jsx)(n.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:(0,u.jsx)(n.X6,{align:"center",color:"light",size:"400",children:p._('This board may contain sensitive content', 'profileBoardCard.boardCollage.heading', 'Warning text on board that may have sensitive content')})})]})}},798858:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(883119),i=r(785893);function o({image:e,width:t,height:r}){return e?(0,i.jsx)(n.zd,{height:r,wash:!0,width:t,children:(0,i.jsx)(n.Ee,{alt:"Board collage image",color:"#EFEFEF",fit:"cover",naturalHeight:e.height||1,naturalWidth:e.width||1,src:e.url||""})}):(0,i.jsx)(n.xu,{color:"secondary",height:r,width:t})}},575597:(e,t,r)=>{r.d(t,{F:()=>i,m:()=>o});let n={square:{width:236,height:157},wide:{width:320,height:213}};function i(e){return n["square"===e?"square":"wide"]}function o(e){return i(e).width+16}},517989:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(524753);let i={AggregatedCommentResource:n.rm,AggregatedCommentFeedResource:n.LR,AggregatedCommentReplyResource:n.rm,AggregatedCommentReplyFeedResource:n.LR,AggregatedActivityFeedResource:n.LR,BestPinsFeedAltResource:n.LR,BoardArchiveResource:n.LR,BoardContentRecommendationResource:n.LR,BoardFeedResource:n.LR,BoardFollowingResource:n.LR,BoardInviteResource:n.sf,BoardInvitesResource:n.Ht,BoardlessPinsResource:n.LR,BoardPickerBoardsResource:{all_boards:n.LR,boards_shortlist:n.LR},BoardSectionEditResource:n._F,BoardSectionsRepinResource:n.LR,BoardSectionsResource:n.LR,BoardsFeedResource:n.LR,BoardResource:n.IY,BoardSectionResource:n._F,BoardSectionPinsResource:n.LR,BoardToolsFeedResource:n.LR,ContactRequestsResource:n.LR,ConversationsResource:n.LR,ConversationMessagesResource:n.dq,DidItCommentsResource:n.LR,DidItLikedByResource:n.Gn,DidItUserFeedResource:n.LR,HolidaySpotlightResource:n.LR,InterestFollowingResource:n.LR,InterestResource:n.cC,MoreIdeasTabsBoardsResource:n.LR,NewsHubResource:n.LR,NewsHubDetailsResource:n.LR,NewsHubSummaryResource:n.t6,NuxInterestsResource:n.LR,NuxTopicToCreatorsResource:n.Gn,PinResource:n.Cj,PinCatalogResource:n.LR,PinsFromBrandResource:n.LR,ReactionsResource:n.fE,RelatedArticlesResource:n.LR,RelatedInterestsResource:n.LR,RelatedModulesResource:n.LR,RelatedPinFeedResource:n.LR,RelatedProductFeedResource:n.LR,RelatedStreamResource:n.LR,RepinResource:n.Cj,BaseSearchResource:{results:n.LR},SearchResource:n.LR,SectionToolsFeedResource:n.LR,ShareSuggestionsTypeaheadResource:{items:n.LR},ShoppingFeedModularizedResource:n.LR,StoryFeedResource:n.LR,StoryPinTaggedProductsResource:n.LR,SuggestedCreatorFollowsResource:n.Gn,TodayArticleFeedResource:n.LR,IdeasHubTodayArticlesResource:n.LR,TodayArticleResource:n.iF,TodayTabInterestFeedResource:n.LR,TodayTabResource:n.LR,TopicFeedResource:n.LR,UnifiedCommentsResource:n.LR,UserActivityPinsResource:n.LR,UserFollowingResource:n.LR,UserRecentActivityResource:n.LR,UserHomefeedResource:n.LR,UserPinsResource:n.LR,UserSettingsResource:n.EA,UserStoryPinsFeedResource:n.LR,UserResource:n.EA,VideosFeedResource:n.LR,VisualLiveSearchResource:{results:n.LR},VisualLiveSearchProductFeedResource:n.LR,VisualSearchFlashlightUnifiedResource:n.LR,SeoTier1CandidateResource:n.LR}},524753:(e,t,r)=>{r.d(t,{Cj:()=>u,EA:()=>o,Gn:()=>S,Ht:()=>A,IY:()=>c,LR:()=>j,_F:()=>h,cC:()=>_,dq:()=>g,fE:()=>d,iF:()=>R,rm:()=>s,sN:()=>L,sf:()=>b,t6:()=>x});var n=r(782677);let i=Object.freeze({aggregatedComment:"aggregatedComments",article:"articles",board:"boards",boardsection:"boardsections",contactrequest:"contactrequests",conversation:"conversations",conversationMessage:"conversationMessages",inbox:"inbox",notification:"notifications",pin:"pins",reaction:"reactions",story:"stories",todayArticle:"todayArticles",topic:"topics",triedit:"triedits",user:"users",invite:"collaboratorinvite"}),o=new n.fK.Entity(i.user),s=new n.fK.Entity(i.aggregatedComment,{user:o,tagged_users:[o]}),a=new n.fK.Entity(i.article),c=new n.fK.Entity(i.board),u=new n.fK.Entity(i.pin),l=new n.fK.Entity(i.reaction),d=new n.fK.Array(l),h=new n.fK.Entity(i.boardsection),f=new n.fK.Entity(i.conversationMessage,{sender:o,users:[o],board:c,pin:u,user:o}),g=new n.fK.Array(f),m=new n.fK.Entity(i.contactrequest),y=new n.fK.Entity(i.story),p=new n.fK.Entity(i.triedit),R=new n.fK.Entity(i.todayArticle,{article_creator_user:o,content_pin:u,content_pin_official_user:o,video_pin:u}),_=new n.fK.Entity(i.topic,{},{processStrategy:e=>({...e,slug:e.slug?e.slug:e.url_name?e.url_name.includes(":")?e.url_name.split(":")[1]:e.url_name:""})}),b=new n.fK.Entity(i.invite,{invited_by_user:o,invited_user:o,board:c},{idAttribute:e=>`${e.board.id}:${e.invited_user.id}`}),v=e=>{switch(e.type){case"aggregatedcomment":return"aggregatedComment";case"conversationMessage":return"conversationMessage";case"explorearticle":return"article";case"news":return"notification";case"interest":case"klp_featured_data":return"topic";case"userdiditdata":return"triedit";case"board_section":return"boardsection";case"todayarticle":return"todayArticle";default:return e.type}},w=new n.fK.Union({user:o,board:c,invite:b,pin:u,topic:_,triedit:p},v),x=new n.fK.Entity(i.notification,{content_items:[{content_object:w}],header_icon_objects:[w]}),A=new n.fK.Array(b),S=new n.fK.Array(o),L=new n.fK.Array(c),j=new n.fK.Array({aggregatedComment:s,article:a,board:c,boardsection:h,contactrequest:m,conversationMessage:f,notification:x,pin:u,story:y,todayArticle:R,topic:_,triedit:p,user:o},v,e=>{switch(e.type){case"collaboratorinvite":return e.board.id;case"category":return"key";default:return"id"}});y.define({objects:j})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/70624-fb6ea00eef7de71f.mjs.map