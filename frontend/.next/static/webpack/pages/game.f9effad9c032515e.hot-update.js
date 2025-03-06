"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "(pages-dir-browser)/./components/Leaderboard.js":
/*!***********************************!*\
  !*** ./components/Leaderboard.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(pages-dir-browser)/./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Leaderboard = ()=>{\n    _s();\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Leaderboard.useEffect\": ()=>{\n            const fetchLeaderboard = {\n                \"Leaderboard.useEffect.fetchLeaderboard\": async ()=>{\n                    setLoading(true);\n                    const token = localStorage.getItem(\"token\");\n                    try {\n                        // Use full URL with process.env\n                        const apiUrl = \"http://localhost:5000\" || 0;\n                        const response = await fetch(\"\".concat(apiUrl, \"/api/leaderboard\"), {\n                            method: 'GET',\n                            headers: {\n                                'Authorization': \"Bearer \".concat(token),\n                                'Content-Type': 'application/json'\n                            }\n                        });\n                        console.log(\"Response status:\", response.status);\n                        if (!response.ok) {\n                            const errorText = await response.text();\n                            console.error(\"Error response text:\", errorText);\n                            throw new Error(\"HTTP error! Status: \".concat(response.status, \", \").concat(errorText));\n                        }\n                        const data = await response.json();\n                        if (data.success) {\n                            setPlayers(data.leaderboard);\n                        } else {\n                            setError(data.message || \"Failed to fetch leaderboard\");\n                        }\n                    } catch (error) {\n                        console.error(\"Detailed leaderboard fetch error:\", error);\n                        setError(error.message || \"Failed to fetch leaderboard\");\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"Leaderboard.useEffect.fetchLeaderboard\"];\n            fetchLeaderboard();\n        }\n    }[\"Leaderboard.useEffect\"], []);\n    // Rest of your component remains the same\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Leaderboard\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: 'red'\n                },\n                children: error\n            }, void 0, false, {\n                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                lineNumber: 55,\n                columnNumber: 23\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Rank\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Username\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Balance\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Wins\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Losses\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                            lineNumber: 61,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: players.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \"#\",\n                                            index + 1\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: player.username\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \"$\",\n                                            player.balance.toFixed(2)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: player.totalWins\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: player.totalLosses\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, player.username || index, true, {\n                                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                                lineNumber: 71,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Task\\\\fair-dice\\\\frontend\\\\components\\\\Leaderboard.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Leaderboard, \"jWjrUw3leG7QymWYH20Mbe1jdQg=\");\n_c = Leaderboard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Leaderboard);\nvar _c;\n$RefreshReg$(_c, \"Leaderboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1HLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQTtpQ0FBQztZQUNOLE1BQU1TOzBEQUFtQjtvQkFDckJILFdBQVc7b0JBQ1gsTUFBTUksUUFBUUMsYUFBYUMsT0FBTyxDQUFDO29CQUVuQyxJQUFJO3dCQUNBLGdDQUFnQzt3QkFDaEMsTUFBTUMsU0FBU0MsdUJBQW9DLElBQUksQ0FBdUI7d0JBRTlFLE1BQU1HLFdBQVcsTUFBTUMsTUFBTSxHQUFVLE9BQVBMLFFBQU8scUJBQW1COzRCQUN0RE0sUUFBUTs0QkFDUkMsU0FBUztnQ0FDTCxpQkFBaUIsVUFBZ0IsT0FBTlY7Z0NBQzNCLGdCQUFnQjs0QkFDcEI7d0JBQ0o7d0JBRUFXLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JMLFNBQVNNLE1BQU07d0JBRS9DLElBQUksQ0FBQ04sU0FBU08sRUFBRSxFQUFFOzRCQUNkLE1BQU1DLFlBQVksTUFBTVIsU0FBU1MsSUFBSTs0QkFDckNMLFFBQVFkLEtBQUssQ0FBQyx3QkFBd0JrQjs0QkFDdEMsTUFBTSxJQUFJRSxNQUFNLHVCQUEyQ0YsT0FBcEJSLFNBQVNNLE1BQU0sRUFBQyxNQUFjLE9BQVZFO3dCQUMvRDt3QkFFQSxNQUFNRyxPQUFPLE1BQU1YLFNBQVNZLElBQUk7d0JBRWhDLElBQUlELEtBQUtFLE9BQU8sRUFBRTs0QkFDZDFCLFdBQVd3QixLQUFLRyxXQUFXO3dCQUMvQixPQUFPOzRCQUNIdkIsU0FBU29CLEtBQUtJLE9BQU8sSUFBSTt3QkFDN0I7b0JBQ0osRUFBRSxPQUFPekIsT0FBTzt3QkFDWmMsUUFBUWQsS0FBSyxDQUFDLHFDQUFxQ0E7d0JBQ25EQyxTQUFTRCxNQUFNeUIsT0FBTyxJQUFJO29CQUM5QixTQUFVO3dCQUNOMUIsV0FBVztvQkFDZjtnQkFDSjs7WUFFQUc7UUFDSjtnQ0FBRyxFQUFFO0lBRUwsMENBQTBDO0lBQzFDLHFCQUNJLDhEQUFDd0I7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0gzQix1QkFBUyw4REFBQzRCO2dCQUFFQyxPQUFPO29CQUFDQyxPQUFPO2dCQUFLOzBCQUFJOUI7Ozs7OztZQUNwQ0Ysd0JBQ0csOERBQUM4QjswQkFBRTs7Ozs7MENBRUgsOERBQUNHOztrQ0FDRyw4REFBQ0M7a0NBQ0csNEVBQUNDOzs4Q0FDRyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDQztrQ0FDSXZDLFFBQVF3QyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ2xCLDhEQUFDTDs7a0RBQ0csOERBQUNNOzs0Q0FBRzs0Q0FBRUQsUUFBUTs7Ozs7OztrREFDZCw4REFBQ0M7a0RBQUlGLE9BQU9HLFFBQVE7Ozs7OztrREFDcEIsOERBQUNEOzs0Q0FBRzs0Q0FBRUYsT0FBT0ksT0FBTyxDQUFDQyxPQUFPLENBQUM7Ozs7Ozs7a0RBQzdCLDhEQUFDSDtrREFBSUYsT0FBT00sU0FBUzs7Ozs7O2tEQUNyQiw4REFBQ0o7a0RBQUlGLE9BQU9PLFdBQVc7Ozs7Ozs7K0JBTGxCUCxPQUFPRyxRQUFRLElBQUlGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXhEO0dBakZNM0M7S0FBQUE7QUFtRk4saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxUYXNrXFxmYWlyLWRpY2VcXGZyb250ZW5kXFxjb21wb25lbnRzXFxMZWFkZXJib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTGVhZGVyYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaExlYWRlcmJvYXJkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNlIGZ1bGwgVVJMIHdpdGggcHJvY2Vzcy5lbnZcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwaVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2FwaS9sZWFkZXJib2FyZGAsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIHN0YXR1czpcIiwgcmVzcG9uc2Uuc3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXNwb25zZSB0ZXh0OlwiLCBlcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c30sICR7ZXJyb3JUZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQbGF5ZXJzKGRhdGEubGVhZGVyYm9hcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZmV0Y2ggbGVhZGVyYm9hcmRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRGV0YWlsZWQgbGVhZGVyYm9hcmQgZmV0Y2ggZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZmV0Y2ggbGVhZGVyYm9hcmRcIik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZldGNoTGVhZGVyYm9hcmQoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBSZXN0IG9mIHlvdXIgY29tcG9uZW50IHJlbWFpbnMgdGhlIHNhbWVcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPkxlYWRlcmJvYXJkPC9oMj5cclxuICAgICAgICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0+e2Vycm9yfTwvcD59XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYW5rPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VybmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QmFsYW5jZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+V2luczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TG9zc2VzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwbGF5ZXIudXNlcm5hbWUgfHwgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4je2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLnVzZXJuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7cGxheWVyLmJhbGFuY2UudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLnRvdGFsV2luc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLnRvdGFsTG9zc2VzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFkZXJib2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxlYWRlcmJvYXJkIiwicGxheWVycyIsInNldFBsYXllcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaExlYWRlcmJvYXJkIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXBpVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIm9rIiwiZXJyb3JUZXh0IiwidGV4dCIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwibGVhZGVyYm9hcmQiLCJtZXNzYWdlIiwiZGl2IiwiaDIiLCJwIiwic3R5bGUiLCJjb2xvciIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsInRkIiwidXNlcm5hbWUiLCJiYWxhbmNlIiwidG9GaXhlZCIsInRvdGFsV2lucyIsInRvdGFsTG9zc2VzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./components/Leaderboard.js\n"));

/***/ })

});