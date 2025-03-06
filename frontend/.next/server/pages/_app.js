/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./context/Web3Context.js":
/*!********************************!*\
  !*** ./context/Web3Context.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Web3Provider: () => (/* binding */ Web3Provider),\n/* harmony export */   useWeb3: () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_connectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors */ \"wagmi/connectors\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, wagmi_connectors__WEBPACK_IMPORTED_MODULE_4__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, wagmi_connectors__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n// Create a context for Web3\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Web3 Provider Component\nconst Web3Provider = ({ children })=>{\n    // Create wagmi configuration\n    const config = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createConfig)({\n        chains: [\n            wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet\n        ],\n        connectors: [\n            (0,wagmi_connectors__WEBPACK_IMPORTED_MODULE_4__.injected)() // Use injected connector instead of MetaMaskConnector\n        ],\n        transports: {\n            [wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.http)()\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiProvider, {\n        config: config,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\context\\\\Web3Context.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n// Custom hook to use Web3 context\nconst useWeb3 = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n    if (!context) {\n        throw new Error('useWeb3 must be used within a Web3Provider');\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvV2ViM0NvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUNwQjtBQUNuQjtBQUNLO0FBRTVDLDRCQUE0QjtBQUM1QixNQUFNVSw0QkFBY1Qsb0RBQWFBO0FBRWpDLDBCQUEwQjtBQUNuQixNQUFNVSxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLDZCQUE2QjtJQUM3QixNQUFNQyxTQUFTUCxtREFBWUEsQ0FBQztRQUMxQlEsUUFBUTtZQUFDTixpREFBT0E7U0FBQztRQUNqQk8sWUFBWTtZQUNWTiwwREFBUUEsR0FBRyxzREFBc0Q7U0FDbEU7UUFDRE8sWUFBWTtZQUNWLENBQUNSLGlEQUFPQSxDQUFDUyxFQUFFLENBQUMsRUFBRVYsMkNBQUlBO1FBQ3BCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0YsZ0RBQWFBO1FBQUNRLFFBQVFBO2tCQUNwQkQ7Ozs7OztBQUdQLEVBQUU7QUFFRixrQ0FBa0M7QUFDM0IsTUFBTU0sVUFBVTtJQUNyQixNQUFNQyxVQUFVakIsaURBQVVBLENBQUNRO0lBQzNCLElBQUksQ0FBQ1MsU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsiRDpcXFRhc2tcXGZhaXItZGljZVxcZnJvbnRlbmRcXGNvbnRleHRcXFdlYjNDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBXYWdtaVByb3ZpZGVyLCBjcmVhdGVDb25maWcsIGh0dHAgfSBmcm9tICd3YWdtaSc7XHJcbmltcG9ydCB7IG1haW5uZXQgfSBmcm9tICd3YWdtaS9jaGFpbnMnO1xyXG5pbXBvcnQgeyBpbmplY3RlZCB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMnO1xyXG5cclxuLy8gQ3JlYXRlIGEgY29udGV4dCBmb3IgV2ViM1xyXG5jb25zdCBXZWIzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIFdlYjMgUHJvdmlkZXIgQ29tcG9uZW50XHJcbmV4cG9ydCBjb25zdCBXZWIzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgLy8gQ3JlYXRlIHdhZ21pIGNvbmZpZ3VyYXRpb25cclxuICBjb25zdCBjb25maWcgPSBjcmVhdGVDb25maWcoe1xyXG4gICAgY2hhaW5zOiBbbWFpbm5ldF0sXHJcbiAgICBjb25uZWN0b3JzOiBbXHJcbiAgICAgIGluamVjdGVkKCkgLy8gVXNlIGluamVjdGVkIGNvbm5lY3RvciBpbnN0ZWFkIG9mIE1ldGFNYXNrQ29ubmVjdG9yXHJcbiAgICBdLFxyXG4gICAgdHJhbnNwb3J0czoge1xyXG4gICAgICBbbWFpbm5ldC5pZF06IGh0dHAoKVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdhZ21pUHJvdmlkZXIgY29uZmlnPXtjb25maWd9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1dhZ21pUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEN1c3RvbSBob29rIHRvIHVzZSBXZWIzIGNvbnRleHRcclxuZXhwb3J0IGNvbnN0IHVzZVdlYjMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoV2ViM0NvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VXZWIzIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBXZWIzUHJvdmlkZXInKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldhZ21pUHJvdmlkZXIiLCJjcmVhdGVDb25maWciLCJodHRwIiwibWFpbm5ldCIsImluamVjdGVkIiwiV2ViM0NvbnRleHQiLCJXZWIzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNvbmZpZyIsImNoYWlucyIsImNvbm5lY3RvcnMiLCJ0cmFuc3BvcnRzIiwiaWQiLCJ1c2VXZWIzIiwiY29udGV4dCIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/Web3Context.js\n");

/***/ }),

/***/ "(pages-dir-node)/./context/authContext.js":
/*!********************************!*\
  !*** ./context/authContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Load user from localStorage on mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            if (false) {}\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    const login = (userData)=>{\n        if (false) {}\n    };\n    const logout = ()=>{\n        if (false) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\context\\\\authContext.js\",\n        lineNumber: 38,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvYXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ25CO0FBRXhDLE1BQU1JLDRCQUFjSixvREFBYUE7QUFFMUIsTUFBTUssZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTVEsU0FBU04sc0RBQVNBO0lBRXhCLHVDQUF1QztJQUN2Q0QsZ0RBQVNBO2tDQUFDO1lBQ1IsSUFBSSxLQUE2QixFQUFFLEVBS2xDO1FBQ0g7aUNBQUcsRUFBRTtJQUVMLE1BQU1hLFFBQVEsQ0FBQ0M7UUFDYixJQUFJLEtBQTZCLEVBQUUsRUFLbEM7SUFDSDtJQUVBLE1BQU1LLFNBQVM7UUFDYixJQUFJLEtBQTZCLEVBQUUsRUFLbEM7SUFDSDtJQUVBLHFCQUFPLDhEQUFDakIsWUFBWW1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFakI7WUFBTVE7WUFBT007UUFBTztrQkFBSWY7Ozs7OztBQUNoRSxFQUFFO0FBRUYsaUVBQWVGLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxUYXNrXFxmYWlyLWRpY2VcXGZyb250ZW5kXFxjb250ZXh0XFxhdXRoQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBMb2FkIHVzZXIgZnJvbSBsb2NhbFN0b3JhZ2Ugb24gbW91bnRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY29uc3Qgc3RvcmVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcclxuICAgICAgaWYgKHN0b3JlZFVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKEpTT04ucGFyc2Uoc3RvcmVkVXNlcikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdXNlckRhdGEudG9rZW4pOyAvLyDinIUgU3RvcmUgdG9rZW4gc2VwYXJhdGVseVxyXG4gICAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvZ2FtZVwiKTsgLy8g4pyFIFJlZGlyZWN0IGFmdGVyIGxvZ2luXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpOyAvLyDinIUgUmVkaXJlY3QgdG8gbG9naW4gb24gbG9nb3V0XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpbiwgbG9nb3V0IH19PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwic3RvcmVkVXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2dpbiIsInVzZXJEYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRva2VuIiwicHVzaCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJQcm92aWRlciIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/authContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authContext */ \"(pages-dir-node)/./context/authContext.js\");\n/* harmony import */ var _context_Web3Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/Web3Context */ \"(pages-dir-node)/./context/Web3Context.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_Web3Context__WEBPACK_IMPORTED_MODULE_3__]);\n_context_Web3Context__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_authContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Web3Context__WEBPACK_IMPORTED_MODULE_3__.Web3Provider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDd0I7QUFDQTtBQUV0RCxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSiw4REFBWUE7a0JBQ1gsNEVBQUNDLDhEQUFZQTtzQkFDWCw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJEOlxcVGFza1xcZmFpci1kaWNlXFxmcm9udGVuZFxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvYXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1dlYjNDb250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICA8V2ViM1Byb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9XZWIzUHJvdmlkZXI+XHJcbiAgICA8L0F1dGhQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiV2ViM1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/connectors":
/*!***********************************!*\
  !*** external "wagmi/connectors" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/connectors");;

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();