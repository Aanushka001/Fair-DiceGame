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
exports.id = "pages/auth/register";
exports.ids = ["pages/auth/register"];
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

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Cauth%5Cregister.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Cauth%5Cregister.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var _pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\auth\\register.js */ \"(pages-dir-node)/./pages/auth/register.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__]);\n([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/auth/register\",\n        pathname: \"/auth/register\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_auth_register_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZhdXRoJTJGcmVnaXN0ZXImcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2F1dGglNUNyZWdpc3Rlci5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdGO0FBQ2hDO0FBQ0U7QUFDMUQ7QUFDeUQ7QUFDVjtBQUMvQztBQUN1RDtBQUN2RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsb0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsb0RBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsb0RBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsb0RBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLG9EQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLG9EQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsb0RBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsb0RBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsb0RBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsb0RBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsb0RBQVE7QUFDekQ7QUFDTyx3QkFBd0Isa0dBQWdCO0FBQy9DO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQixvRUFBZ0I7QUFDbEMsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELGlDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0ICogYXMgZG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGF1dGhcXFxccmVnaXN0ZXIuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgY29tcG9uZW50IChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IGhvaXN0KHVzZXJsYW5kLCAncmVwb3J0V2ViVml0YWxzJyk7XG4vLyBSZS1leHBvcnQgbGVnYWN5IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVMsXG4gICAgICAgIHBhZ2U6IFwiL2F1dGgvcmVnaXN0ZXJcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2F1dGgvcmVnaXN0ZXJcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIC8vIGRlZmF1bHQgZXhwb3J0IG1pZ2h0IG5vdCBleGlzdCB3aGVuIG9wdGltaXplZCBmb3IgZGF0YSBvbmx5XG4gICAgICAgIEFwcDogYXBwLmRlZmF1bHQsXG4gICAgICAgIERvY3VtZW50OiBkb2N1bWVudC5kZWZhdWx0XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Cauth%5Cregister.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authContext */ \"(pages-dir-node)/./context/authContext.js\");\n/* harmony import */ var _context_Web3Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/Web3Context */ \"(pages-dir-node)/./context/Web3Context.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_Web3Context__WEBPACK_IMPORTED_MODULE_3__]);\n_context_Web3Context__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_authContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Web3Context__WEBPACK_IMPORTED_MODULE_3__.Web3Provider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDd0I7QUFDQTtBQUV0RCxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSiw4REFBWUE7a0JBQ1gsNEVBQUNDLDhEQUFZQTtzQkFDWCw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJEOlxcVGFza1xcZmFpci1kaWNlXFxmcm9udGVuZFxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvYXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1dlYjNDb250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICA8V2ViM1Byb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9XZWIzUHJvdmlkZXI+XHJcbiAgICA8L0F1dGhQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiV2ViM1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/auth/register.js":
/*!********************************!*\
  !*** ./pages/auth/register.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _styles_Register_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Register.css */ \"(pages-dir-node)/./styles/Register.css\");\n/* harmony import */ var _styles_Register_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Register_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);\naxios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst API_URL = \"http://localhost:5000/api/auth\";\nfunction Register() {\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleRegister = async (e)=>{\n        e.preventDefault();\n        setError(\"\");\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(`${API_URL}/register`, {\n                username,\n                email,\n                password\n            });\n            router.push(\"/\");\n        } catch (err) {\n            setError(err.response?.data?.error || \"Registration failed. Try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"register-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"register-title\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"register-form\",\n                onSubmit: handleRegister,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Username\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        placeholder: \"Email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"error-message\",\n                children: error\n            }, void 0, false, {\n                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navigation-buttons\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>router.push(\"/\"),\n                    children: \"Go to Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2F1dGgvcmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTztBQUNkO0FBQ1M7QUFFbkMsTUFBTUcsVUFBVTtBQUVELFNBQVNDO0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNYSxTQUFTWixzREFBU0E7SUFDeEIsTUFBTWEsaUJBQWlCLE9BQU9DO1FBQzVCQSxFQUFFQyxjQUFjO1FBQ2hCSixTQUFTO1FBRVQsSUFBSTtZQUNGLE1BQU1WLGtEQUFVLENBQUMsR0FBR0MsUUFBUSxTQUFTLENBQUMsRUFBRTtnQkFBRUU7Z0JBQVVFO2dCQUFPRTtZQUFTO1lBRXBFSSxPQUFPSyxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLEtBQUs7WUFDWlAsU0FBU08sSUFBSUMsUUFBUSxFQUFFQyxNQUFNVixTQUFTO1FBQ3hDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFpQjs7Ozs7OzBCQUMvQiw4REFBQ0U7Z0JBQUtGLFdBQVU7Z0JBQWdCRyxVQUFVWjs7a0NBQ3hDLDhEQUFDYTt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT3pCO3dCQUNQMEIsVUFBVSxDQUFDaEIsSUFBTVQsWUFBWVMsRUFBRWlCLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDM0NHLFFBQVE7Ozs7OztrQ0FFViw4REFBQ047d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU92Qjt3QkFDUHdCLFVBQVUsQ0FBQ2hCLElBQU1QLFNBQVNPLEVBQUVpQixNQUFNLENBQUNGLEtBQUs7d0JBQ3hDRyxRQUFROzs7Ozs7a0NBRVYsOERBQUNOO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPckI7d0JBQ1BzQixVQUFVLENBQUNoQixJQUFNTCxZQUFZSyxFQUFFaUIsTUFBTSxDQUFDRixLQUFLO3dCQUMzQ0csUUFBUTs7Ozs7O2tDQUVWLDhEQUFDQzt3QkFBT04sTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7O1lBRXZCakIsdUJBQVMsOERBQUN3QjtnQkFBRVosV0FBVTswQkFBaUJaOzs7Ozs7MEJBRXhDLDhEQUFDVztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ1c7b0JBQU9FLFNBQVMsSUFBTXZCLE9BQU9LLElBQUksQ0FBQzs4QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakQiLCJzb3VyY2VzIjpbIkQ6XFxUYXNrXFxmYWlyLWRpY2VcXGZyb250ZW5kXFxwYWdlc1xcYXV0aFxccmVnaXN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IFxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9SZWdpc3Rlci5jc3NcIjtcclxuXHJcbmNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgXHJcbiAgY29uc3QgaGFuZGxlUmVnaXN0ZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RXJyb3IoXCJcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtBUElfVVJMfS9yZWdpc3RlcmAsIHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KTtcclxuXHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIucmVzcG9uc2U/LmRhdGE/LmVycm9yIHx8IFwiUmVnaXN0cmF0aW9uIGZhaWxlZC4gVHJ5IGFnYWluLlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1jb250YWluZXJcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXRpdGxlXCI+UmVnaXN0ZXI8L2gyPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWdpc3Rlci1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVJlZ2lzdGVyfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj57ZXJyb3J9PC9wPn1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1idXR0b25zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9PkdvIHRvIExvZ2luPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkFQSV9VUkwiLCJSZWdpc3RlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJoYW5kbGVSZWdpc3RlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJwdXNoIiwiZXJyIiwicmVzcG9uc2UiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInAiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/auth/register.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/Register.css":
/*!*****************************!*\
  !*** ./styles/Register.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Cauth%5Cregister.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();