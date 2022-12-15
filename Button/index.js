/**
 * @author <code@tythos.net>
 */

import Trippy from "../Trippy/index.js";

class Button extends Trippy {
    constructor() {
        super(import.meta.url);
        this.bind("button", "click");
    }
}

export default Object.assign(Button, {
    "__url__": "",
    "__license__": "",
    "__semver__": "",
    "__deps__": {},
    "__tests__": []
});
