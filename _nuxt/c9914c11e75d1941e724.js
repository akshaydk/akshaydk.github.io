(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{220:function(t,e){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dynamicMarkdown"},[n("p",[t._v("Recently, I was asked to improve the performance of write and delete queries.\nSo, the first thing I did was to find and remove the unused indexes.")]),t._v(" "),n("p",[n("strong",[t._v("Important points to consider:")])]),t._v(" "),n("ul",[n("li",[t._v("Index stats are in-memory: they reset every time the sql server is restarted.")]),t._v(" "),n("li",[t._v("You’ll need admin privileges to run the following queries")])]),t._v(" "),n("p",[t._v("Query to find out the unused indexes, table and size:")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" table_name "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Table Name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index_name "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Index Name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stat_value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@innodb_page_size")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Size in MB'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innodb_index_stats\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" stat_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'size'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" index_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PRIMARY'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" index_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" index_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("schema_unused_indexes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("p",[t._v("Finding out the total number of unused indexes and their size per table:")]),t._v(" "),n("pre",{staticClass:"language-sql"},[n("code",{pre:!0,attrs:{class:"language-sql"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" unused"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Table Name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unused"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index_count "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Unused Index Count'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unused"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size_in_mb "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Unused Index Size'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nallindex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index_count "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Total Index Count'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" allindex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size_in_mb "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Total Index Size'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \nunused"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size_in_mb"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("allindex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size_in_mb"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Percent of Unused Size'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" table_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" index_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stat_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@innodb_page_size")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" size_in_mb\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innodb_index_stats\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" stat_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'size'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" index_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PRIMARY'")]),t._v("\n")])]),t._v(" "),n("p",[t._v("Innodb stats for 60 days were considered before finalising the list of indexes to be removed.")]),t._v(" "),n("p",[n("strong",[t._v("Index fragmentation")]),t._v(" was something else that was looked at, but our indexes were\ncleaner than I imagined so rebuilding of indexes was not pursued. However, it is something\nthat one can look at to improve the read query performance.")])])}]};t.exports={attributes:{name:"unused_indexes",title:"Cleaning unused indexes in MySql",date:"2020-02-10 13:08:42 +0530",categories:"MySql",description:"How we found out and cleared unused indexes in out production db.\n"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);