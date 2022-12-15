/**
 * @author <code@tythos.net>
 */

import Triplet from "../Triplet/index.js";

class Header extends Triplet {
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
