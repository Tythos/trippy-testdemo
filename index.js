/**
 * @author <code@tythos.net>
 */

import Button from "./Button/index.js";
import Header from "./Header/index.js";

window.addEventListener("load", () => {
    let h = new Header()
        .set("title", "Some Stuff")
        .append();
    let b = new Button()
        .set("label", "My Button")
        .on("click", console.log)
        .append();
});
