/**
 * @author <code@tythos.net>
 */

import TrippyButton from "./TrippyButton/index.js";
import TrippyHeader from "./TrippyHeader/index.js";

window.addEventListener("load", () => {
    let h = new TrippyHeader()
        .set("title", "Some Stuff")
        .append();
    let b = new TrippyButton()
        .set("label", "My Button")
        .on("click", console.log)
        .append();
});

export default Object.assign(import.meta, {
    "__url__": "https://github.com/Tythos/trippy-testdemo.git",
    "__semver__": "v0.1.0",
    "__license__": "MIT",
    "__deps__": {
        "TrippyButton": "https://github.com/Tythos/TrippyButton.git",
        "TripperHeader": "https://github.com/Tythos/TrippyHeader.git"
    }
});
