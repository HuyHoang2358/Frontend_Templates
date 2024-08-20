/*
Template Name: Skote - Admin & Dashboard Template
Author: Themesbrand
Version: 3.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: ecommerce select2 Js File
*/

// Select2
$(".select2").select2();

// Dropzone
var dropzonePreviewNode = document.querySelector("#dropzone-preview-list");
dropzonePreviewNode.id = "";
if (dropzonePreviewNode) {
    var previewTemplate = dropzonePreviewNode.parentNode.innerHTML;
    dropzonePreviewNode.parentNode.removeChild(dropzonePreviewNode);
    var dropzone = new Dropzone(".dropzone", {
        url: 'https://httpbin.org/post',
        method: "post",
        previewTemplate: previewTemplate,
        previewsContainer: "#dropzone-preview",
    });
}