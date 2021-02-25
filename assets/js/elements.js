let divCounter = 1;

function createParentDivElement(divElementId) {

    let divElement = document.createElement("div");
    divElement.setAttribute("id", divElementId);
    divElement.setAttribute("class", "element");
    divElement.innerHTML = `
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                </div>
            </div>
                            `;
    document.getElementById("content-editor").appendChild(divElement);

    divCounter++;
}

function addActionPanelElement(parentId, elementType) {

    let parent_div_id = parentId;
    let element_type = elementType;
    let inner_html = "";

    let actionPanelElement = document.createElement("div");
    actionPanelElement.setAttribute("class", "action-panel");

    let add_row_btn = `<button onclick="addTableRow('` + parent_div_id + `')">Add row</button>`;
    let remove_element_btn = `<button onclick="removeElement('` + parent_div_id + `')">Remove</button>`;
    let replace_image_btn = `<button onclick="replaceImage('` + parent_div_id + `')">Replace Image</button>`;
    let move_up_btn = `<button onclick="moveUpward('` + parent_div_id + `')">Move up</button>`;
    let move_down_btn = `<button onclick="moveDownward('` + parent_div_id + `')">Move down</button>`;
    let more_option_btn = `<button onclick="moreOption('` + parent_div_id + `')">More option</button>`;
    let insert_element_btn = `<button onclick="insertElement('` + parent_div_id + `')">Insert element</button>`;
    let bg_image_btn = `<button onclick="addBackground('` + parent_div_id + `', 'bg_image')">BG Image</button>`;
    let bg_color_btn = `<button onclick="addBackground('` + parent_div_id + `', 'bg_color')">BG Color</button>`;

    if (element_type === "div") {
        inner_html += insert_element_btn;
    }


    if (element_type === "table" || element_type === "column")
        inner_html += add_row_btn;

    inner_html += remove_element_btn;

    if (element_type === "image")
        inner_html += replace_image_btn;

    if (element_type === "div") {
        inner_html += bg_image_btn;
        inner_html += bg_color_btn;
    }

    inner_html += move_up_btn;
    inner_html += move_down_btn;
    inner_html += more_option_btn;


    actionPanelElement.innerHTML = inner_html;
    return actionPanelElement;
}

function addParagraphElement() {
    //create parent div
    let parentDivId = "div_" + divCounter;
    createParentDivElement(parentDivId);


    let paragraph = document.createElement("div");
    paragraph.setAttribute("class", "paragraph");
    paragraph.setAttribute("contenteditable", "true");
    paragraph.setAttribute("placeholder", "Write something....");
    paragraph.setAttribute("onfocus", "toggleActionPanel('" + parentDivId + "')");


    document.getElementById(parentDivId).firstElementChild.firstElementChild.appendChild(paragraph);
    document.getElementById(parentDivId).appendChild(addActionPanelElement(parentDivId, "paragraph"));
    document.getElementById(parentDivId).firstElementChild.firstElementChild.firstElementChild.focus()
}

function addHeaderElement(header_type) {

    event.stopPropagation();

    //create parent div
    let parentDivId = "div_" + divCounter;
    createParentDivElement(parentDivId);


    let header = ""
    if (header_type === "header_1") {
        header = document.createElement("h1");
    } else if (header_type === "header_2") {
        header = document.createElement("h2");
    } else if (header_type === "header_3") {
        header = document.createElement("h3");
    } else if (header_type === "header_4") {
        header = document.createElement("h4");
    } else if (header_type === "header_5") {
        header = document.createElement("h5");
    } else {
        header = document.createElement("h6");
    }


    header.setAttribute("class", "header");
    header.setAttribute("contenteditable", "true");
    header.setAttribute("placeholder", "Write something....");
    header.setAttribute("onfocus", "toggleActionPanel('" + parentDivId + "')");

    document.getElementById(parentDivId).firstElementChild.firstElementChild.appendChild(header);
    document.getElementById(parentDivId).appendChild(addActionPanelElement(parentDivId, "paragraph"));
    document.getElementById(parentDivId).firstElementChild.firstElementChild.firstElementChild.focus()

}

function addTableElement(tableType) {
    event.stopPropagation();

    let numberOfColumns = prompt("Number of columns.").trim();

    if (numberOfColumns === "" || numberOfColumns === null)
        return;

    if (isNaN(parseInt(numberOfColumns))) {
        alert("Invalid columns");
        return;
    }

    let table_type = tableType;

    //create parent div
    let parentDivId = "div_" + divCounter;
    createParentDivElement(parentDivId);

    let table = document.createElement("table");
    table.setAttribute("contenteditable", "true");
    table.setAttribute("onfocus", "toggleActionPanel('" + parentDivId + "')");
    table.setAttribute("columns", numberOfColumns);


    let row = "<tr>" + generateColumn(numberOfColumns, "th") + "</tr>";

    if (table_type === "simple") {
        table.setAttribute("class", "table");
    } else if (table_type === "bordered") {
        table.setAttribute("class", "table table-bordered");
    } else {
        table.setAttribute("class", "table table-striped");
    }

    table.innerHTML = "  <thead>" + row + "</thead><tbody></tbody>";


    document.getElementById(parentDivId).firstElementChild.firstElementChild.appendChild(table);
    document.getElementById(parentDivId).appendChild(addActionPanelElement(parentDivId, "table"));
    document.getElementById(parentDivId).firstElementChild.firstElementChild.firstElementChild.focus()
}

function addColumnElement(tableType) {

    event.stopPropagation();

    let numberOfColumns = prompt("Number of columns.");

    if (numberOfColumns.trim() === "" || numberOfColumns.trim() === null)
        return;

    if (isNaN(parseInt(numberOfColumns.trim()))) {
        alert("Invalid columns");
        return;
    }

    let table_type = tableType;

    //create parent div
    let parentDivId = "div_" + divCounter;
    createParentDivElement(parentDivId);

    let table = document.createElement("table");
    table.setAttribute("contenteditable", "true");
    table.setAttribute("onfocus", "toggleActionPanel('" + parentDivId + "')");
    table.setAttribute("columns", numberOfColumns);

    let row = "<tr>" + generateColumn(numberOfColumns, "td") + "</tr>";

    if (table_type === "simple") {
        table.setAttribute("class", "table");
    } else if (table_type === "bordered") {
        table.setAttribute("class", "table table-bordered");
    } else {
        table.setAttribute("class", "table table-striped");
    }

    table.innerHTML = "  <thead>" + row + "</thead><tbody></tbody>";


    document.getElementById(parentDivId).firstElementChild.firstElementChild.appendChild(table);
    document.getElementById(parentDivId).appendChild(addActionPanelElement(parentDivId, "column"));
    document.getElementById(parentDivId).firstElementChild.firstElementChild.firstElementChild.focus()
}

function addImageElement(image_size) {
    event.stopPropagation();

    let imageSizeSelection = image_size;
    let imageSource = prompt("Source.").trim();
    let alternativeText = prompt("Alternative text").trim();

    if (imageSource === "" || imageSource === null || imageSource === undefined) {
        return;
    }

    let imageSize = "";

    if (imageSizeSelection === "image_25")
        imageSize = "25%";
    else if (imageSizeSelection === "image_50")
        imageSize = "50%";
    else if (imageSizeSelection === "image_75")
        imageSize = "75%";
    else if (imageSizeSelection === "image_100")
        imageSize = "100%";

    //create parent div
    let parentDivId = "div_" + divCounter;
    createParentDivElement(parentDivId);

    let image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute("onclick", "toggleActionPanel('" + parentDivId + "')");
    image.setAttribute("src", imageSource);
    image.setAttribute("alt", alternativeText);
    image.setAttribute("style", "width: " + imageSize + "; cursor: pointer;" );


    document.getElementById(parentDivId).firstElementChild.firstElementChild.appendChild(image);
    document.getElementById(parentDivId).appendChild(addActionPanelElement(parentDivId, "image"));
}

function addListElement(list_type) {
    event.stopPropagation();

    //create parent div
    let parentDivId = "div_" + divCounter;
    createParentDivElement(parentDivId);


    let list = document.createElement("ul");
    list.setAttribute("class", "list");
    list.setAttribute("contenteditable", "true");
    list.setAttribute("onfocus", "toggleActionPanel('" + parentDivId + "')");

    if (list_type === "none")
        list.setAttribute("style", "list-style: none;");

    if (list_type === "square")
        list.setAttribute("style", "list-style: square;");

    if (list_type === "decimal")
        list.setAttribute("style", "list-style: decimal;");

    if (list_type === "decimal_leading_zero")
        list.setAttribute("style", "list-style: decimal-leading-zero;");

    if (list_type === "upper_alphabet")
        list.setAttribute("style", "list-style: upper-alpha;");

    if (list_type === "lower_alphabet")
        list.setAttribute("style", "list-style: lower-alpha;");

    if (list_type === "upper_roman")
        list.setAttribute("style", "list-style: upper-roman;");

    if (list_type === "lower_roman")
        list.setAttribute("style", "list-style: lower-greek;");

    list.innerHTML = "<li></li>";


    document.getElementById(parentDivId).firstElementChild.firstElementChild.appendChild(list);
    document.getElementById(parentDivId).appendChild(addActionPanelElement(parentDivId, "list"));
    document.getElementById(parentDivId).firstElementChild.firstElementChild.firstElementChild.focus()

}

function addLineBreakElement() {
    //create parent div
    let parentDivId = "div_" + divCounter;
    createParentDivElement(parentDivId);


    let line_break = document.createElement("div");
    line_break.setAttribute("class", "line_break");
    line_break.setAttribute("onclick", "toggleActionPanel('" + parentDivId + "')");
    line_break.setAttribute("style", "cursor: pointer;");
    line_break.innerHTML = "<br>";

    document.getElementById(parentDivId).firstElementChild.firstElementChild.appendChild(line_break);
    document.getElementById(parentDivId).appendChild(addActionPanelElement(parentDivId, "line_break"));
    document.getElementById(parentDivId).firstElementChild.firstElementChild.firstElementChild.focus()

}

function addDivElement() {

    // let width = prompt("Div width. (Default 100%)");
    // let height = prompt("Div height. (Default 100% vertical height)");
    //
    // if (width.trim() === "" || width.trim() === null)
    //     width = "100%";
    //
    // if (height.trim() === "" || height.trim() === null)
    //     height = "100vh";

    //create parent div
    let parentDivId = "div_" + divCounter;
    let divElement = document.createElement("div");
    divElement.setAttribute("id", parentDivId);
    divElement.setAttribute("class", "div");
    // divElement.setAttribute("style", "height: " + height + "; width: " + width + ";");
    divElement.setAttribute("style", "height: 70vh; width: 100%;");
    divElement.setAttribute("onclick", "toggleActionPanel('" + parentDivId + "')");
    document.getElementById("content-editor").appendChild(divElement);
    document.getElementById(parentDivId).appendChild(addActionPanelElement(parentDivId, "div"));

    divCounter++;
}

function generateColumn(columnLimit, columnType){
    let columns = "";
    for(let index = 1; index <= columnLimit; index++){
        if(columnType === "th"){
            columns += "<th scope='col'></th>";
        }else{
            columns += "<td></td>";
        }
    }
    return columns;
}