let activeElementId = "";

function toggleActionPanel(objectId) {
    event.stopPropagation();
    hideAllActionPanel();
    document.getElementById(objectId).lastElementChild.style.display = "block";
}

function addTableRow(objectId) {

    let tableSelector = document.getElementById(objectId).firstElementChild.firstElementChild.firstElementChild;

    let numberOfColumns = tableSelector.getAttribute("columns");

    let row = document.createElement("tr");
    row.innerHTML = generateColumn(numberOfColumns, "td");
    tableSelector.lastElementChild.appendChild(row)

}

function removeElement(objectId) {
    let _continue = confirm("Are you sure you want to remove this element?");
    if (_continue) {
        $("#" + objectId).remove();
    }
}

function moveUpward(objectId) {
    let divSelector = "#" + objectId;
    $(divSelector).prev().insertAfter($(divSelector));
}

function moveDownward(objectId) {
    let divSelector = "#" + objectId;
    $(divSelector).next().insertBefore($(divSelector));
}

function replaceImage(objectId) {
    let imageSource = prompt("Source").trim();

    if (imageSource === "" || imageSource === null)
        return;


    let alternativeText = prompt("Alternative text").trim();

    let imageSelector = document.getElementById(objectId).firstElementChild.firstElementChild.firstElementChild;
    console.log(imageSelector);
    imageSelector.setAttribute("src", imageSource)
    imageSelector.setAttribute("alt", alternativeText)
}

document.onfocus = () => {
    let activeElement = document.activeElement.parentElement.getAttribute("id");
    activeElementId = activeElement;
}

document.onclick = (e) => {
    let tagName = document.activeElement.tagName;
    if (tagName.toLowerCase() === "body") {
        hideAllActionPanel();
    }

}
//
//         if (activeElementId != null) {
//             let elementSelector = $("#" + activeElementId)[0].firstElementChild;
//             let context = elementSelector.innerHTML.split(" ");
//             // console.log("old array");
//             console.log(context);
//             context.map((value, index) => {
//                 if (value.includes("http") || value.includes("https") || value.includes("www")) {
//                     let link = "";
//
//                     let getFirstSubString = value.substring(0, 1);
//
//                     if (getFirstSubString !== "@") {
//                         link = "@" + value;
//                     } else {
//                         link = value
//                     }
//
//                     context.splice(index, 1, link);
//                 }
//             });
//
//             elementSelector.innerHTML = context.join(" ");
//         }
//     }
// });

function hideAllActionPanel() {
    let actionPanelClassSelector = document.getElementsByClassName("action-panel");
    for (let index = 0; index < actionPanelClassSelector.length; index++) {
        actionPanelClassSelector[index].style.display = "none";
    }
}

function addBackground(objectId, bg_type) {
    if (bg_type === "bg_image") {
        let bg_image_source = prompt("Background image source.");
        document.getElementById(objectId).style.backgroundImage = "url(" + bg_image_source + ")"
    } else {
        let bg_color = prompt("Background color.");
        document.getElementById(objectId).style.backgroundColor = bg_color;
    }
//ss
}

function moreOption(objectId) {

    let moreOptionSelector = document.getElementsByClassName("more-option-panel")[0];
    moreOptionSelector.style.display = "block";

    moreOptionSelector
        .firstElementChild
        .lastElementChild
        .lastElementChild.setAttribute("onclick", "applyChangesFromMoreOptions('" + objectId + "')")
}

function applyChangesFromMoreOptions(objectId) {
    let moreOptionSelector = document.getElementsByClassName("more-option-panel")[0];
    moreOptionSelector.style.display = "none";
    moreOptionSelector
        .firstElementChild
        .lastElementChild
        .lastElementChild.removeAttribute("onclick");

    let padding = document.getElementById("padding").value;
    let margin = document.getElementById("margin").value;
    let bg_attachment = document.getElementById("bg_attachment").value;
    let bg_blend_mode = document.getElementById("bg_blend_mode").value;
    let bg_clip = document.getElementById("bg_clip").value;
    let bg_origin = document.getElementById("bg_origin").value;
    let bg_position = document.getElementById("bg_position").value;
    let bg_repeat = document.getElementById("bg_repeat").value;
    let bg_size = document.getElementById("bg_size").value;
}

function closeMoreOption() {
    let moreOptionSelector = document.getElementsByClassName("more-option-panel")[0];
    moreOptionSelector.style.display = "none";
    moreOptionSelector
        .firstElementChild
        .lastElementChild
        .lastElementChild.removeAttribute("onclick");

}

function insertElement(objectId) {
    console.log(objectId);
}

function generateContent() {

    let contentEditorSelector = document.getElementById("content-editor");
    let tempGeneratedTemplate = document.getElementById("temp_generator_template");
    tempGeneratedTemplate.innerHTML = contentEditorSelector.innerHTML;

    $("#temp_generator_template *").removeAttr("contenteditable");
    $("#temp_generator_template *").removeAttr("onfocus");
    $("#temp_generator_template *").removeAttr("placeholder");
    $("#temp_generator_template *").removeAttr("columns");
    $("#temp_generator_template *").removeAttr("onclick");
    $("#temp_generator_template div.action-panel").remove();

    console.log(tempGeneratedTemplate.innerHTML);
}