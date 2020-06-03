(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{214:function(t,e){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dynamicMarkdown"},[n("p",[t._v("Unlike Java and .Net, Rails projects do not have artifacts. A simple copy-paste of the new code base would work after\nrestarting the web server. As a guideline, we had to push the artifacts to Artifactory at end of a every build.\nJPaC was being used to build our pipleline. API’s exposed by artifactory came to our rescue.")]),t._v(" "),n("p",[t._v("We did something like this in one of our build stages:")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#zip the artifacts")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" --exclude"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./doc'")]),t._v(" --exclude"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./.git/*'")]),t._v(" --exclude"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./tmp/*'")]),t._v(" --exclude"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./spec/*'")]),t._v(" -cvzf artifact.tar.gz -C "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Use the Artifactory api to push the artifact")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -u "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user-id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("api-key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -X PUT "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/{repo_path}/{repo_name}"')]),t._v(" -T artifact.tar.gz\n\n")])])])}]};t.exports={attributes:{name:"rails_push-to-artifactory",title:"Pushing rails artifacts to Artifactory",date:"2020-03-20 13:08:42 +0530",categories:"Rails, Artifactory",description:"How to push rails artifacts to artifactory?\n"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);