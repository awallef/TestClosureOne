goog.provide('wallef.start');
goog.require('goog.dom');

wallef.start = function(){
    
}

wallef.start.prototype.sayHi = function() {
    var newHeader = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
    'Hello world!');
    goog.dom.appendChild(document.body, newHeader);
}

wallef.start.prototype.youpi = function() {
    alert('youpi');
}

goog.exportSymbol('wal', wallef);
goog.exportSymbol('wal.start', wallef.start);
goog.exportProperty(wallef.start.prototype, 'youpi', wallef.start.prototype.youpi);
goog.exportProperty(wallef.start.prototype, 'sayHi', wallef.start.prototype.sayHi);