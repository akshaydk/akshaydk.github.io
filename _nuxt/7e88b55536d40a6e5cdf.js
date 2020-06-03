(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{213:function(t,n){const r={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"dynamicMarkdown"},[r("p",[t._v("Today morning I was looking at the N-Queens problem. It has been one of those puzzles that I wanted solve\nfor a long time. While I going through some content on backtracking I came across this problem. So, I spent\nsometime solving the puzzle today.")]),t._v(" "),r("p",[t._v("Given n, the "),r("code",{pre:!0},[t._v("totalNQueens")]),t._v(" will return the number of ways we can place the queens.")]),t._v(" "),r("pre",{staticClass:"language-python"},[r("code",{pre:!0,attrs:{class:"language-python"}},[t._v("    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("totalNQueens")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" C "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n        \n        b "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        teritories "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        \n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("markTeritory")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            teritory "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                    teritory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                    teritory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            i "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\n            j "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y\n            x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" C"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                    teritory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                \n                x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" C"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                    teritory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      \n                x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" C"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                    teritory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      \n                x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("      \n            x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" C"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                    teritory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      \n                x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            teritories"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" teritory\n\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("unmarkTeritory")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            teritory "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" teritories"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("j "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" teritory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                \n                                                \n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" y "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    markTeritory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    b"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Q'")]),t._v("               \n                    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" R"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                        count "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                \n                    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                        count "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" backtrack"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                       \n                    unmarkTeritory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  \n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" backtrack"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                \n")])]),t._v(" "),r("p",[t._v("After this, I would implement a sudoku solver.")])])}]};t.exports={attributes:{name:"n_queens",title:"Solution to N Queens",date:"2020-04-23 13:08:42 +0530",categories:"DS, Algo",description:"Although, it isn't unique solution, I am sharing it because I had fun solving the puzzle.\n"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);