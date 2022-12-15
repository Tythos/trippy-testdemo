/**
 * @author <code@tythos.net>
 */

import Trippy from "../Trippy/index.js";

class Header extends Trippy {
    constructor() {
        super(import.meta.url);
    }
}

export default Object.assign(Header, {
    "__url__": "",
    "__license__": "",
    "__semver__": "",
    "__deps__": {},
    "__tests__": []
});
