$(document).ready(() => {

    let cb_editorId = "cb_editor";
    let hrElement = document.createElement("hr");

    let elements = document.createElement("div");
    elements.setAttribute("class", "elements");
    elements.innerHTML = `
        <ul>
            <li onclick="addParagraphElement()">Paragraph</li>
            <li>
                Header
                <ul class="inner-element">
                    <li onclick="addHeaderElement('header_1')">Header 1</li>
                    <li onclick="addHeaderElement('header_2')">Header 2</li>
                    <li onclick="addHeaderElement('header_3')">Header 3</li>
                    <li onclick="addHeaderElement('header_4')">Header 4</li>
                    <li onclick="addHeaderElement('header_5')">Header 5</li>
                    <li onclick="addHeaderElement('header_6')">Header 6</li>
                </ul>
            </li>
            <li>
                Table
                <ul class="inner-element">
                    <li onclick="addTableElement('simple')">Simple</li>
                    <li onclick="addTableElement('bordered')">Bordered</li>
                    <li onclick="addTableElement('striped')">Striped</li>
                </ul>
            </li>
            <li>
                Column
                <ul class="inner-element">
                    <li onclick="addColumnElement('simple')">Simple</li>
                    <li onclick="addColumnElement('bordered')">Bordered</li>
                    <li onclick="addColumnElement('striped')">Striped</li>
                </ul></li>
            <li>
                Image
                <ul class="inner-element">
                    <li onclick="addImageElement('image_25')">25%</li>
                    <li onclick="addImageElement('image_50')">50%</li>
                    <li onclick="addImageElement('image_75')">75%</li>
                    <li onclick="addImageElement('image_100')">100%</li>
                </ul>
            </li>
            <li onclick="addListElement('bullet')">
                List
                <ul>
                    <li onclick="addListElement('none')">None</li>
                    <li onclick="addListElement('bullet')">Bullet</li>
                    <li onclick="addListElement('square')">Square</li>
                    <li onclick="addListElement('decimal')">Decimal</li>
                    <li onclick="addListElement('decimal_leading_zero')">Decimal with zero</li>
                    <li onclick="addListElement('upper_alphabet')">Upper Alphabet</li>
                    <li onclick="addListElement('lower_alphabet')">Lower Alphabet</li>
                    <li onclick="addListElement('armenian')">Armenian</li>
                    <li onclick="addListElement('upper_roman')">Upper Roman</li>
                    <li onclick="addListElement('lower_roman')">Lower Roman</li>
                </ul>
            </li>
            <li onclick="addLineBreakElement()">
                Line Break
            </li>
            <li onclick="addDivElement()">
                Div
            </li>
        </ul>
        
        <div style="margin-left: auto;">
            <button onclick="generateContent()">Publish</button>
        </div>
    `;


    let content_editor = document.createElement("div");
    content_editor.setAttribute("id", "content-editor");

    let temp_generator_template = document.createElement("div");
    temp_generator_template.setAttribute("id", "temp_generator_template");
    temp_generator_template.setAttribute("style", "display:none");



    let more_option = document.createElement("div")
    more_option.setAttribute("class", "more-option-panel");
    more_option.innerHTML = `
        <div class="more-option">
            <h5>OPTIONS</h5>
            <hr/>
            <input id="padding" placeholder="Padding">
            <input id="margin" placeholder="Margin">
            <input id="bg_attachment" placeholder="Background Attachment">
            <input id="bg_blend_mode" placeholder="Background Blend-Mode">
            <input id="bg_clip" placeholder="Background Clip">
            <input id="bg_origin" placeholder="Background Origin">
            <input id="bg_position" placeholder="Background Position">
            <input id="bg_repeat" placeholder="Background Repeat">
            <input id="bg_size" placeholder="Background Size">
            <div style="text-align: right">
                <button onclick="closeMoreOption()" style="background-color: transparent ; color: darkred; border: 1px solid darkred;">Close</button>
                <button>Save</button>
            </div>
        </div>
    `;

    document.getElementById(cb_editorId).appendChild(elements);
    document.getElementById(cb_editorId).appendChild(content_editor);
    document.getElementById(cb_editorId).appendChild(more_option);
    document.getElementById(cb_editorId).appendChild(temp_generator_template);


});