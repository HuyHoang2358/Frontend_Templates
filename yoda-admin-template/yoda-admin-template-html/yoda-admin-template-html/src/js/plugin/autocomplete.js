(function (e) { "function" === typeof define && define.amd ? define(["jquery"], e) : e(jQuery) })(function (e) {
    function g(a, b) {
        var c = function () { }, c = {
            autoSelectFirst: !1, appendTo: "body", serviceUrl: null, lookup: null, onSelect: null, width: "auto", minChars: 1, maxHeight: 300, deferRequestBy: 0, params: {}, formatResult: g.formatResult, delimiter: null, zIndex: 9999, type: "GET", noCache: !1, onSearchStart: c, onSearchComplete: c, containerClass: "autocomplete-suggestions", tabDisabled: !1, dataType: "text", lookupFilter: function (a, b, c) {
                return -1 !==
                    a.value.toLowerCase().indexOf(c)
            }, paramName: "query", transformResult: function (a) { return "string" === typeof a ? e.parseJSON(a) : a }
        }; this.element = a; this.el = e(a); this.suggestions = []; this.badQueries = []; this.selectedIndex = -1; this.currentValue = this.element.value; this.intervalId = 0; this.cachedResponse = []; this.onChange = this.onChangeInterval = null; this.isLocal = this.ignoreValueChange = !1; this.suggestionsContainer = null; this.options = e.extend({}, c, b); this.classes = { selected: "autocomplete-selected", suggestion: "autocomplete-suggestion" };
        this.initialize(); this.setOptions(b)
    } var h = { extend: function (a, b) { return e.extend(a, b) }, createNode: function (a) { var b = document.createElement("div"); b.innerHTML = a; return b.firstChild } }; g.utils = h; e.Autocomplete = g; g.formatResult = function (a, b) { var c = "(" + b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)", "g"), "\\$1") + ")"; return a.value.replace(RegExp(c, "gi"), "<strong>$1</strong>") }; g.prototype = {
        killerFn: null, initialize: function () {
            var a = this, b = "." + a.classes.suggestion, c = a.classes.selected,
                d = a.options, f; a.element.setAttribute("autocomplete", "off"); a.killerFn = function (b) { 0 === e(b.target).closest("." + a.options.containerClass).length && (a.killSuggestions(), a.disableKillerFn()) }; if (!d.width || "auto" === d.width) d.width = a.el.outerWidth(); a.suggestionsContainer = g.utils.createNode('<div class="' + d.containerClass + '" style="position: absolute; display: none;"></div>'); f = e(a.suggestionsContainer); f.appendTo(d.appendTo).width(d.width); f.on("mouseover.autocomplete", b, function () { a.activate(e(this).data("index")) });
            f.on("mouseout.autocomplete", function () { a.selectedIndex = -1; f.children("." + c).removeClass(c) }); f.on("click.autocomplete", b, function () { a.select(e(this).data("index"), !1) }); a.fixPosition(); if (window.opera) a.el.on("keypress.autocomplete", function (b) { a.onKeyPress(b) }); else a.el.on("keydown.autocomplete", function (b) { a.onKeyPress(b) }); a.el.on("keyup.autocomplete", function (b) { a.onKeyUp(b) }); a.el.on("blur.autocomplete", function () { a.onBlur() }); a.el.on("focus.autocomplete", function () { a.fixPosition() })
        }, onBlur: function () { this.enableKillerFn() },
        setOptions: function (a) { var b = this.options; h.extend(b, a); if (this.isLocal = e.isArray(b.lookup)) b.lookup = this.verifySuggestionsFormat(b.lookup); e(this.suggestionsContainer).css({ "max-height": b.maxHeight + "px", width: b.width + "px", "z-index": b.zIndex }) }, clearCache: function () { this.cachedResponse = []; this.badQueries = [] }, clear: function () { this.clearCache(); this.currentValue = null; this.suggestions = [] }, disable: function () { this.disabled = !0 }, enable: function () { this.disabled = !1 }, fixPosition: function () {
            var a; "body" === this.options.appendTo &&
                (a = this.el.offset(), e(this.suggestionsContainer).css({ top: a.top + this.el.outerHeight() + "px", left: a.left + "px" }))
        }, enableKillerFn: function () { e(document).on("click.autocomplete", this.killerFn) }, disableKillerFn: function () { e(document).off("click.autocomplete", this.killerFn) }, killSuggestions: function () { var a = this; a.stopKillSuggestions(); a.intervalId = window.setInterval(function () { a.hide(); a.stopKillSuggestions() }, 300) }, stopKillSuggestions: function () { window.clearInterval(this.intervalId) }, onKeyPress: function (a) {
            if (!this.disabled &&
                !this.visible && 40 === a.keyCode && this.currentValue) this.suggest(); else if (!this.disabled && this.visible) { switch (a.keyCode) { case 27: this.el.val(this.currentValue); this.hide(); break; case 9: case 13: if (-1 === this.selectedIndex) { this.hide(); return } this.select(this.selectedIndex, 13 === a.keyCode); if (9 === a.keyCode && !1 === this.options.tabDisabled) return; break; case 38: this.moveUp(); break; case 40: this.moveDown(); break; default: return }a.stopImmediatePropagation(); a.preventDefault() }
        }, onKeyUp: function (a) {
            var b = this;
            if (!b.disabled) { switch (a.keyCode) { case 38: case 40: return }clearInterval(b.onChangeInterval); if (b.currentValue !== b.el.val()) if (0 < b.options.deferRequestBy) b.onChangeInterval = setInterval(function () { b.onValueChange() }, b.options.deferRequestBy); else b.onValueChange() }
        }, onValueChange: function () {
            var a; clearInterval(this.onChangeInterval); this.currentValue = this.element.value; a = this.getQuery(this.currentValue); this.selectedIndex = -1; this.ignoreValueChange ? this.ignoreValueChange = !1 : a.length < this.options.minChars ?
                this.hide() : this.getSuggestions(a)
        }, getQuery: function (a) { var b = this.options.delimiter; if (!b) return e.trim(a); a = a.split(b); return e.trim(a[a.length - 1]) }, getSuggestionsLocal: function (a) { var b = a.toLowerCase(), c = this.options.lookupFilter; return { suggestions: e.grep(this.options.lookup, function (d) { return c(d, a, b) }) } }, getSuggestions: function (a) {
            var b, c = this, d = c.options, f = d.serviceUrl; (b = c.isLocal ? c.getSuggestionsLocal(a) : c.cachedResponse[a]) && e.isArray(b.suggestions) ? (c.suggestions = b.suggestions, c.suggest()) :
                c.isBadQuery(a) || (d.params[d.paramName] = a, !1 !== d.onSearchStart.call(c.element, d.params) && (e.isFunction(d.serviceUrl) && (f = d.serviceUrl.call(c.element, a)), e.ajax({ url: f, data: d.ignoreParams ? null : d.params, type: d.type, dataType: d.dataType }).done(function (b) { c.processResponse(b, a); d.onSearchComplete.call(c.element, a) })))
        }, isBadQuery: function (a) { for (var b = this.badQueries, c = b.length; c--;)if (0 === a.indexOf(b[c])) return !0; return !1 }, hide: function () { this.visible = !1; this.selectedIndex = -1; e(this.suggestionsContainer).hide() },
        suggest: function () { if (0 === this.suggestions.length) this.hide(); else { var a = this.options.formatResult, b = this.getQuery(this.currentValue), c = this.classes.suggestion, d = this.classes.selected, f = e(this.suggestionsContainer), g = ""; e.each(this.suggestions, function (d, e) { g += '<div class="' + c + '" data-index="' + d + '">' + a(e, b) + "</div>" }); f.html(g).show(); this.visible = !0; this.options.autoSelectFirst && (this.selectedIndex = 0, f.children().first().addClass(d)) } }, verifySuggestionsFormat: function (a) {
            return a.length && "string" ===
                typeof a[0] ? e.map(a, function (a) { return { value: a, data: null } }) : a
        }, processResponse: function (a, b) { var c = this.options, d = c.transformResult(a, b); d.suggestions = this.verifySuggestionsFormat(d.suggestions); c.noCache || (this.cachedResponse[d[c.paramName]] = d, 0 === d.suggestions.length && this.badQueries.push(d[c.paramName])); b === this.getQuery(this.currentValue) && (this.suggestions = d.suggestions, this.suggest()) }, activate: function (a) {
            var b = this.classes.selected, c = e(this.suggestionsContainer), d = c.children(); c.children("." +
                b).removeClass(b); this.selectedIndex = a; return -1 !== this.selectedIndex && d.length > this.selectedIndex ? (a = d.get(this.selectedIndex), e(a).addClass(b), a) : null
        }, select: function (a, b) { var c = this.suggestions[a]; c && (this.el.val(c), this.ignoreValueChange = b, this.hide(), this.onSelect(a)) }, moveUp: function () {
            -1 !== this.selectedIndex && (0 === this.selectedIndex ? (e(this.suggestionsContainer).children().first().removeClass(this.classes.selected), this.selectedIndex = -1, this.el.val(this.currentValue)) : this.adjustScroll(this.selectedIndex -
                1))
        }, moveDown: function () { this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1) }, adjustScroll: function (a) { var b = this.activate(a), c, d; b && (b = b.offsetTop, c = e(this.suggestionsContainer).scrollTop(), d = c + this.options.maxHeight - 25, b < c ? e(this.suggestionsContainer).scrollTop(b) : b > d && e(this.suggestionsContainer).scrollTop(b - this.options.maxHeight + 25), this.el.val(this.getValue(this.suggestions[a].value))) }, onSelect: function (a) {
            var b = this.options.onSelect; a = this.suggestions[a];
            this.el.val(this.getValue(a.value)); e.isFunction(b) && b.call(this.element, a)
        }, getValue: function (a) { var b = this.options.delimiter, c; if (!b) return a; c = this.currentValue; b = c.split(b); return 1 === b.length ? a : c.substr(0, c.length - b[b.length - 1].length) + a }, dispose: function () { this.el.off(".autocomplete").removeData("autocomplete"); this.disableKillerFn(); e(this.suggestionsContainer).remove() }
    }; e.fn.autocomplete = function (a, b) {
        return 0 === arguments.length ? this.first().data("autocomplete") : this.each(function () {
            var c =
                e(this), d = c.data("autocomplete"); if ("string" === typeof a) { if (d && "function" === typeof d[a]) d[a](b) } else d && d.dispose && d.dispose(), d = new g(this, a), c.data("autocomplete", d)
        })
    }
});
