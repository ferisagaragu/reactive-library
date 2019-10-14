import { createElement, Component } from 'react';
import { Table, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var TableReactive = /** @class */ (function (_super) {
    __extends(TableReactive, _super);
    function TableReactive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableReactive.prototype.render = function () {
        return (createElement(Table, { responsive: true },
            createElement("thead", null,
                createElement("tr", null,
                    createElement("th", null, "#"),
                    createElement("th", null, "Table heading"),
                    createElement("th", null, "Table heading"),
                    createElement("th", null, "Table heading"),
                    createElement("th", null, "Table heading"),
                    createElement("th", null, "Table heading"),
                    createElement("th", null, "Table heading"))),
            createElement("tbody", null,
                createElement("tr", null,
                    createElement("td", null, "1"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell")),
                createElement("tr", null,
                    createElement("td", null, "2"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell")),
                createElement("tr", null,
                    createElement("td", null, "3"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell"),
                    createElement("td", null, "Table cell")))));
    };
    return TableReactive;
}(Component));

var ExampleComponent = /** @class */ (function (_super) {
    __extends(ExampleComponent, _super);
    function ExampleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExampleComponent.prototype.render = function () {
        var text = this.props.text;
        return (createElement(Container, null,
            createElement(Col, null,
                "Example Component: ",
                text),
            createElement(Button, null, "Hola Mundial")));
    };
    return ExampleComponent;
}(Component));
var Table$1 = TableReactive;

export default ExampleComponent;
export { Table$1 as Table };
//# sourceMappingURL=index.es.js.map
