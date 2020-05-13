module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Modals/Edittamu.js":
/*!****************************!*\
  !*** ./Modals/Edittamu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\testgit\\BookingBallroom\\Modals\\Edittamu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import Layout from "../component/layout";









const ModalEditTamu = props => {
  const {
    data
  } = props;
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: company_name,
    1: setCompanyName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: start,
    1: setStart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: end,
    1: setEnd
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      data
    } = props;
    setName(data.name);
    setCompanyName(data.company_name);
    setStart(data.start);
    setEnd(data.end);
  }, [data]);

  const handleSubmit = e => {
    e.preventDefault();
    let hasil = {
      company_name: company_name,
      name: name,
      start: start,
      end: end
    };

    if (props.edit) {
      props.editData(props.edit, hasil);
    } else {
      props.editData(index, hasil);
    }

    resetForm();
    props.handleCloseModal();
  };

  const resetForm = () => {
    setName("");
    setStart("");
    setEnd("");
    setCompanyName("");
  };

  const onCompanyNameChange = e => {
    setCompanyName(e.target.value);
  };

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onStartChange = e => {
    setStart(e.target.value);
  };

  const onEndChange = e => {
    setEnd(e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
    show: props.showModal,
    onHide: props.handleCloseModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Header, {
    closeButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "Modal Edit")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Group, {
    controlId: "company_name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "Nama Perusahaan"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    type: "text",
    placeholder: "Masukan Nama Perusahaan",
    value: company_name,
    onChange: onCompanyNameChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Group, {
    controlId: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "Nama Pemesan"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    type: "text",
    placeholder: "Masukan Nama Pemesan",
    value: name,
    onChange: onNameChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Group, {
    controlId: "start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "Tanggal Pemakaian"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    type: "text",
    placeholder: "Masukan Nama Pemesan",
    value: start,
    onChange: onStartChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Group, {
    controlId: "end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, "tangal selesai"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    type: "text",
    placeholder: "Masukan Nama Pemesan",
    value: end,
    onChange: onEndChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "primary",
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Submit"))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "secondary",
    onClick: props.handleCloseModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Close"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalEditTamu);

/***/ }),

/***/ "./Modals/Tambahtamu.js":
/*!******************************!*\
  !*** ./Modals/Tambahtamu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\testgit\\BookingBallroom\\Modals\\Tambahtamu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import Layout from "../component/layout";









const ModalTambahTamu = props => {
  const {
    0: startDate,
    1: setStartDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date());
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: company_name,
    1: setCompanyName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: start,
    1: setStart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: end,
    1: setEnd
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleSubmit = e => {
    e.preventDefault();
    let hasil = {
      company_name: company_name,
      name: name,
      start: start,
      end: end
    };
    props.addData(hasil);
    resetForm();
    props.handleCloseModal();
  };

  const resetForm = () => {
    setName("");
    setStart("");
    setEnd("");
    setCompanyName("");
  };

  const onCompanyNameChange = e => {
    console.log(e);
    console.log(e.value);
    setCompanyName(e.target.value);
  };

  const onNameChange = e => {
    console.log(e);
    console.log(e.value);
    setName(e.target.value);
  };

  const onStartChange = e => {
    console.log(e);
    console.log(e.value);
    setStart(e.target.value);
  };

  const onEndChange = e => {
    console.log(e);
    console.log(e.value);
    setEnd(e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
    show: props.showModal,
    onHide: props.handleCloseModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Header, {
    closeButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Modal heading")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Group, {
    controlId: "company_name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "Nama Perusahaan"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    type: "text",
    placeholder: "Masukan Nama Perusahaan",
    value: company_name,
    onChange: onCompanyNameChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Group, {
    controlId: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Nama Pemesan"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    type: "text",
    placeholder: "Masukan Nama Pemesan",
    value: name,
    onChange: onNameChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Group, {
    controlId: "start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, "Tanggal Pemakaian"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    type: "text",
    placeholder: "Masukan Nama Pemesan",
    value: start,
    onChange: onStartChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Group, {
    controlId: "end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, "tangal selesai"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    type: "text",
    placeholder: "Masukan Nama Pemesan",
    value: end,
    onChange: onEndChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "primary",
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "Submit"))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "secondary",
    onClick: props.handleCloseModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "Close"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalTambahTamu);

/***/ }),

/***/ "./component/layout.js":
/*!*****************************!*\
  !*** ./component/layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./component/nav.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\testgit\\BookingBallroom\\component\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //kimport "../style/Style.css";
//import "../style/sass/home.scss";




const Layout = props => {
  return __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "AGIT Frontend Test")), __jsx(_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./component/nav.js":
/*!**************************!*\
  !*** ./component/nav.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\testgit\\BookingBallroom\\component\\nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NavbarCustom = () => __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
  bg: "dark",
  variant: "dark",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Brand, {
  href: "#home",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, "Booking Ballroom"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
  className: "mr-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, "Home"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
  href: "/about",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, "About")));

/* harmony default export */ __webpack_exports__["default"] = (NavbarCustom);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/layout */ "./component/layout.js");
/* harmony import */ var _Modals_Tambahtamu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modals/Tambahtamu */ "./Modals/Tambahtamu.js");
/* harmony import */ var _Modals_Edittamu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modals/Edittamu */ "./Modals/Edittamu.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\testgit\\BookingBallroom\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Index = () => {
  const initial = {
    company_name: "",
    name: "",
    start: "",
    end: ""
  };
  const dataset = [{
    company_name: "perusahaan 1",
    name: "aaa",
    start: "asdfasdf",
    end: "asdfasdfadf"
  }, {
    company_name: "perusahaan 2",
    name: "bbb",
    start: "asdfasdf",
    end: "asdfasdfadf"
  }, {
    company_name: "perusahaan 3",
    name: "ccc",
    start: "asdfasdf",
    end: "asdfasdfadf"
  }, {
    company_name: "perusahaan 4",
    name: "ddd",
    start: "asdfasdf",
    end: "asdfasdfadf"
  }, {
    company_name: "perusahaan 5",
    name: "eee",
    start: "asdfasdf",
    end: "asdfasdfadf"
  }];
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dataset);
  const {
    0: edit,
    1: setEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showModalEdit,
    1: setShowModalEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleHapus = index => {
    let result = data.filter((item, i) => i !== index);
    setData(result);
  };

  const handleOpenModal = index => {
    setShowModal(true);
  };

  const handleOpenModalEdit = index => {
    setEdit(index);
    setShowModalEdit(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };

  const addData = value => {
    setData([...data, value]);
  };

  const editData = (index, value) => {
    let dataset = data;
    dataset[index] = value;
    setData(dataset);
    setEdit(0);
  };

  let table = null;

  if (data) {
    table = data.map((x, i) => __jsx("tr", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, x.company_name), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }, x.name), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }, x.start), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, x.end), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      size: "sm",
      variant: "primary",
      onClick: () => handleHapus(i),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }, "Hapus"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      size: "sm",
      variant: "primary",
      onClick: () => handleOpenModalEdit(i),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, "Edit"))));
  } // const aaa = console.log(localStorage.getItem("datea"));


  console.log("edit", edit);
  return __jsx(_component_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "primary",
    onClick: () => handleOpenModal(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "Tambah Data"), __jsx(_Modals_Tambahtamu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    addData: addData,
    handleOpenModal: handleOpenModal,
    handleCloseModal: handleCloseModal,
    showModal: showModal,
    editData: editData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), __jsx(_Modals_Edittamu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    edit: edit,
    handleOpenModal: handleOpenModalEdit,
    handleCloseModal: handleCloseModalEdit,
    showModal: showModalEdit,
    editData: editData,
    data: edit === null ? initial : dataset[edit],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "table-responsive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx("table", {
    className: "table",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, "Nama Perusahaan"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, "Nama Pemesan"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, "Tanggal Pemakaian Ballroom"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, "Tanggal Selesai Pemakaian "), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "action"))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, table))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\testgit\BookingBallroom\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/Modal":
/*!****************************************!*\
  !*** external "react-bootstrap/Modal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTW9kYWxzL0VkaXR0YW11LmpzIiwid2VicGFjazovLy8uL01vZGFscy9UYW1iYWh0YW11LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L25hdi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRhdGVwaWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbFwiIl0sIm5hbWVzIjpbIk1vZGFsRWRpdFRhbXUiLCJwcm9wcyIsImRhdGEiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwiY29tcGFueV9uYW1lIiwic2V0Q29tcGFueU5hbWUiLCJzdGFydCIsInNldFN0YXJ0IiwiZW5kIiwic2V0RW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzaWwiLCJlZGl0IiwiZWRpdERhdGEiLCJpbmRleCIsInJlc2V0Rm9ybSIsImhhbmRsZUNsb3NlTW9kYWwiLCJvbkNvbXBhbnlOYW1lQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJvbk5hbWVDaGFuZ2UiLCJvblN0YXJ0Q2hhbmdlIiwib25FbmRDaGFuZ2UiLCJzaG93TW9kYWwiLCJNb2RhbFRhbWJhaFRhbXUiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJEYXRlIiwiYWRkRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJMYXlvdXQiLCJjaGlsZHJlbiIsIk5hdmJhckN1c3RvbSIsIkluZGV4IiwiaW5pdGlhbCIsImRhdGFzZXQiLCJzZXREYXRhIiwic2V0RWRpdCIsInNldFNob3dNb2RhbCIsInNob3dNb2RhbEVkaXQiLCJzZXRTaG93TW9kYWxFZGl0IiwiaGFuZGxlSGFwdXMiLCJyZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwiaSIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZU9wZW5Nb2RhbEVkaXQiLCJoYW5kbGVDbG9zZU1vZGFsRWRpdCIsInRhYmxlIiwibWFwIiwieCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixDQURGLENBREYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFzQyxLQUFSLENBVkYsQ0FERixDQXBCRixDQURGO0FBcUNELENBMUlEOztBQTJJZWhCLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIi8vaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L2xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuXHJcbmNvbnN0IE1vZGFsRWRpdFRhbXUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21wYW55X25hbWUsIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGFydCwgc2V0U3RhcnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VuZCwgc2V0RW5kXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcclxuICAgIHNldE5hbWUoZGF0YS5uYW1lKTtcclxuICAgIHNldENvbXBhbnlOYW1lKGRhdGEuY29tcGFueV9uYW1lKTtcclxuICAgIHNldFN0YXJ0KGRhdGEuc3RhcnQpO1xyXG4gICAgc2V0RW5kKGRhdGEuZW5kKTtcclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCBoYXNpbCA9IHtcclxuICAgICAgY29tcGFueV9uYW1lOiBjb21wYW55X25hbWUsXHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgZW5kOiBlbmQsXHJcbiAgICB9O1xyXG4gICAgaWYgKHByb3BzLmVkaXQpIHtcclxuICAgICAgcHJvcHMuZWRpdERhdGEocHJvcHMuZWRpdCwgaGFzaWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuZWRpdERhdGEoaW5kZXgsIGhhc2lsKTtcclxuICAgIH1cclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgcHJvcHMuaGFuZGxlQ2xvc2VNb2RhbCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0Rm9ybSA9ICgpID0+IHtcclxuICAgIHNldE5hbWUoXCJcIik7XHJcbiAgICBzZXRTdGFydChcIlwiKTtcclxuICAgIHNldEVuZChcIlwiKTtcclxuICAgIHNldENvbXBhbnlOYW1lKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tcGFueU5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tcGFueU5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25OYW1lQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdGFydENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGFydChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkVuZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRFbmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWwgc2hvdz17cHJvcHMuc2hvd01vZGFsfSBvbkhpZGU9e3Byb3BzLmhhbmRsZUNsb3NlTW9kYWx9PlxyXG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICA8TW9kYWwuVGl0bGU+TW9kYWwgRWRpdDwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiY29tcGFueV9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+TmFtYSBQZXJ1c2FoYWFuPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWFzdWthbiBOYW1hIFBlcnVzYWhhYW5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlfbmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNvbXBhbnlOYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5OYW1hIFBlbWVzYW48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNYXN1a2FuIE5hbWEgUGVtZXNhblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbk5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlRhbmdnYWwgUGVtYWthaWFuPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWFzdWthbiBOYW1hIFBlbWVzYW5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU3RhcnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJlbmRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD50YW5nYWwgc2VsZXNhaTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1hc3VrYW4gTmFtYSBQZW1lc2FuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25FbmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxFZGl0VGFtdTtcclxuIiwiLy9pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvbGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuXHJcbmNvbnN0IE1vZGFsVGFtYmFoVGFtdSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tcGFueV9uYW1lLCBzZXRDb21wYW55TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhcnQsIHNldFN0YXJ0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbmQsIHNldEVuZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBoYXNpbCA9IHtcclxuICAgICAgY29tcGFueV9uYW1lOiBjb21wYW55X25hbWUsXHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgZW5kOiBlbmQsXHJcbiAgICB9O1xyXG4gICAgcHJvcHMuYWRkRGF0YShoYXNpbCk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICAgIHByb3BzLmhhbmRsZUNsb3NlTW9kYWwoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXROYW1lKFwiXCIpO1xyXG4gICAgc2V0U3RhcnQoXCJcIik7XHJcbiAgICBzZXRFbmQoXCJcIik7XHJcbiAgICBzZXRDb21wYW55TmFtZShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbXBhbnlOYW1lQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgY29uc29sZS5sb2coZS52YWx1ZSk7XHJcbiAgICBzZXRDb21wYW55TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBvbk5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnZhbHVlKTtcclxuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdGFydENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIGNvbnNvbGUubG9nKGUudmFsdWUpO1xyXG4gICAgc2V0U3RhcnQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25FbmRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnZhbHVlKTtcclxuICAgIHNldEVuZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbCBzaG93PXtwcm9wcy5zaG93TW9kYWx9IG9uSGlkZT17cHJvcHMuaGFuZGxlQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgIDxNb2RhbC5UaXRsZT5Nb2RhbCBoZWFkaW5nPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJjb21wYW55X25hbWVcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5OYW1hIFBlcnVzYWhhYW48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNYXN1a2FuIE5hbWEgUGVydXNhaGFhblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ29tcGFueU5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5hbWEgUGVtZXNhbjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1hc3VrYW4gTmFtYSBQZW1lc2FuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uTmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VGFuZ2dhbCBQZW1ha2FpYW48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNYXN1a2FuIE5hbWEgUGVtZXNhblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25TdGFydENoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImVuZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPnRhbmdhbCBzZWxlc2FpPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWFzdWthbiBOYW1hIFBlbWVzYW5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VuZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkVuZENoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFRhbWJhaFRhbXU7XHJcbiIsImltcG9ydCBOYXYgZnJvbSBcIi4vbmF2XCI7XHJcbi8va2ltcG9ydCBcIi4uL3N0eWxlL1N0eWxlLmNzc1wiO1xyXG4vL2ltcG9ydCBcIi4uL3N0eWxlL3Nhc3MvaG9tZS5zY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BR0lUIEZyb250ZW5kIFRlc3Q8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxOYXYgLz5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5cclxuY29uc3QgTmF2YmFyQ3VzdG9tID0gKCkgPT4gKFxyXG4gIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+Qm9va2luZyBCYWxscm9vbTwvTmF2YmFyLkJyYW5kPlxyXG4gICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiPkhvbWU8L05hdi5MaW5rPlxyXG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9OYXYuTGluaz5cclxuICAgIDwvTmF2PlxyXG4gIDwvTmF2YmFyPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJDdXN0b207XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9sYXlvdXRcIjtcclxuaW1wb3J0IE1vZGFsVGFtYmFoVGFtdSBmcm9tIFwiLi4vTW9kYWxzL1RhbWJhaHRhbXVcIjtcclxuaW1wb3J0IE1vZGFsRWRpdFRhbXUgZnJvbSBcIi4uL01vZGFscy9FZGl0dGFtdVwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbCA9IHtcclxuICAgIGNvbXBhbnlfbmFtZTogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBzdGFydDogXCJcIixcclxuICAgIGVuZDogXCJcIixcclxuICB9O1xyXG4gIGNvbnN0IGRhdGFzZXQgPSBbXHJcbiAgICB7XHJcbiAgICAgIGNvbXBhbnlfbmFtZTogXCJwZXJ1c2FoYWFuIDFcIixcclxuICAgICAgbmFtZTogXCJhYWFcIixcclxuICAgICAgc3RhcnQ6IFwiYXNkZmFzZGZcIixcclxuICAgICAgZW5kOiBcImFzZGZhc2RmYWRmXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb21wYW55X25hbWU6IFwicGVydXNhaGFhbiAyXCIsXHJcbiAgICAgIG5hbWU6IFwiYmJiXCIsXHJcbiAgICAgIHN0YXJ0OiBcImFzZGZhc2RmXCIsXHJcbiAgICAgIGVuZDogXCJhc2RmYXNkZmFkZlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29tcGFueV9uYW1lOiBcInBlcnVzYWhhYW4gM1wiLFxyXG4gICAgICBuYW1lOiBcImNjY1wiLFxyXG4gICAgICBzdGFydDogXCJhc2RmYXNkZlwiLFxyXG4gICAgICBlbmQ6IFwiYXNkZmFzZGZhZGZcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvbXBhbnlfbmFtZTogXCJwZXJ1c2FoYWFuIDRcIixcclxuICAgICAgbmFtZTogXCJkZGRcIixcclxuICAgICAgc3RhcnQ6IFwiYXNkZmFzZGZcIixcclxuICAgICAgZW5kOiBcImFzZGZhc2RmYWRmXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb21wYW55X25hbWU6IFwicGVydXNhaGFhbiA1XCIsXHJcbiAgICAgIG5hbWU6IFwiZWVlXCIsXHJcbiAgICAgIHN0YXJ0OiBcImFzZGZhc2RmXCIsXHJcbiAgICAgIGVuZDogXCJhc2RmYXNkZmFkZlwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGRhdGFzZXQpO1xyXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dNb2RhbEVkaXQsIHNldFNob3dNb2RhbEVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVIYXB1cyA9IChpbmRleCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGRhdGEuZmlsdGVyKChpdGVtLCBpKSA9PiBpICE9PSBpbmRleCk7XHJcbiAgICBzZXREYXRhKHJlc3VsdCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoaW5kZXgpID0+IHtcclxuICAgIHNldFNob3dNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWxFZGl0ID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRFZGl0KGluZGV4KTtcclxuICAgIHNldFNob3dNb2RhbEVkaXQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFNob3dNb2RhbChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsRWRpdCA9ICgpID0+IHtcclxuICAgIHNldFNob3dNb2RhbEVkaXQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZERhdGEgPSAodmFsdWUpID0+IHtcclxuICAgIHNldERhdGEoWy4uLmRhdGEsIHZhbHVlXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdERhdGEgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgZGF0YXNldCA9IGRhdGE7XHJcbiAgICBkYXRhc2V0W2luZGV4XSA9IHZhbHVlO1xyXG4gICAgc2V0RGF0YShkYXRhc2V0KTtcclxuICAgIHNldEVkaXQoMCk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHRhYmxlID0gbnVsbDtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgdGFibGUgPSBkYXRhLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICA8dGQ+e3guY29tcGFueV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgPHRkPnt4Lm5hbWV9PC90ZD5cclxuICAgICAgICA8dGQ+e3guc3RhcnR9PC90ZD5cclxuICAgICAgICA8dGQ+e3guZW5kfTwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUhhcHVzKGkpfT5cclxuICAgICAgICAgICAgSGFwdXNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5Nb2RhbEVkaXQoaSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApKTtcclxuICB9XHJcbiAgLy8gY29uc3QgYWFhID0gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRlYVwiKSk7XHJcbiAgY29uc29sZS5sb2coXCJlZGl0XCIsIGVkaXQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5Nb2RhbChudWxsKX0+XHJcbiAgICAgICAgVGFtYmFoIERhdGFcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWxUYW1iYWhUYW11XHJcbiAgICAgICAgYWRkRGF0YT17YWRkRGF0YX1cclxuICAgICAgICBoYW5kbGVPcGVuTW9kYWw9e2hhbmRsZU9wZW5Nb2RhbH1cclxuICAgICAgICBoYW5kbGVDbG9zZU1vZGFsPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxyXG4gICAgICAgIGVkaXREYXRhPXtlZGl0RGF0YX1cclxuICAgICAgLz5cclxuICAgICAgPE1vZGFsRWRpdFRhbXVcclxuICAgICAgICBlZGl0PXtlZGl0fVxyXG4gICAgICAgIGhhbmRsZU9wZW5Nb2RhbD17aGFuZGxlT3Blbk1vZGFsRWRpdH1cclxuICAgICAgICBoYW5kbGVDbG9zZU1vZGFsPXtoYW5kbGVDbG9zZU1vZGFsRWRpdH1cclxuICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbEVkaXR9XHJcbiAgICAgICAgZWRpdERhdGE9e2VkaXREYXRhfVxyXG4gICAgICAgIGRhdGE9e2VkaXQgPT09IG51bGwgPyBpbml0aWFsIDogZGF0YXNldFtlZGl0XX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+TmFtYSBQZXJ1c2FoYWFuPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtYSBQZW1lc2FuPC90aD5cclxuICAgICAgICAgICAgICA8dGg+VGFuZ2dhbCBQZW1ha2FpYW4gQmFsbHJvb208L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5UYW5nZ2FsIFNlbGVzYWkgUGVtYWthaWFuIDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPmFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5Pnt0YWJsZX08L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kYXRlcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=