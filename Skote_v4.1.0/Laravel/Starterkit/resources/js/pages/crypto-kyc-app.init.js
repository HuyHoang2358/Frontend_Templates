/*
Template Name: Skote - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Crypto KYC applicatiion Js File
*/

!function($) {
    "use strict";
    $("#kyc-verify-wizard").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slide"
    });

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
}(window.jQuery);