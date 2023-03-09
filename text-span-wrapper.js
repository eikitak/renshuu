'use strict';
{
    /////////////////////////
    // テキストをspanタグで囲む //
    /////////////////////////
    class SpanWrap {
        constructor(target) {

            this.target = this.convertElement(target);
            this.nodes = [...this.target.childNodes];

            this.convert();
        }

        convert() {

            let spanWrapText = ""

            this.nodes.forEach((node) => {
                if (node.nodeType == 3) {
                    const text = node.textContent.replace(/\r?\n/g, '');//テキストから改行コード削除
                    
                    spanWrapText = spanWrapText + text.split('').reduce((acc, v) => {
                        return acc + `<span>${v}</span>`
                    }, "");
                } else {
                    spanWrapText = spanWrapText + node.outerHTML
                }
            })

            this.target.innerHTML = spanWrapText

        }

        convertElement(element) {
            if (element instanceof HTMLElement) {
                return element
            }
            // if (element instanceof jQuery) {
            //     return element[0]
            // }
            return document.querySelector(element);
        }
    }

    const tx =  document.querySelectorAll('footer p');
    tx.forEach(el => {
        new SpanWrap(el);
    });
}