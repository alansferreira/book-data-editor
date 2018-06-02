function initializeRandomColorfunction(){var u=null,s={};r("monochrome",null,[[0,0],[100,0]]),r("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),r("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),r("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),r("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),r("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),r("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),r("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var o=function(r){if(void 0!==(r=r||{}).seed&&null!==r.seed&&r.seed===parseInt(r.seed,10))u=r.seed;else if("string"==typeof r.seed)u=function(r){for(var e=0,n=0;n!==r.length&&!(e>=Number.MAX_SAFE_INTEGER);n++)e+=r.charCodeAt(n);return e}(r.seed);else{if(void 0!==r.seed&&null!==r.seed)throw new TypeError("The seed value must be an integer or string");u=null}var e,n;if(null!==r.count&&void 0!==r.count){var a=r.count,t=[];for(r.count=null;a>t.length;)u&&r.seed&&(r.seed+=1),t.push(o(r));return r.count=a,t}return function(r,e){switch(e.format){case"hsvArray":return r;case"hslArray":return h(r);case"hsl":var n=h(r);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var a=h(r),t=e.alpha||Math.random();return"hsla("+a[0]+", "+a[1]+"%, "+a[2]+"%, "+t+")";case"rgbArray":return l(r);case"rgb":var u=l(r);return"rgb("+u.join(", ")+")";case"rgba":var o=l(r),t=e.alpha||Math.random();return"rgba("+o.join(", ")+", "+t+")";default:return function(r){var e=l(r);function n(r){var e=r.toString(16);return 1==e.length?"0"+e:e}return"#"+n(e[0])+n(e[1])+n(e[2])}(r)}}([e=function(r){var e=i(function(r){if("number"==typeof parseInt(r)){var e=parseInt(r);if(e<360&&0<e)return[e,e]}if("string"==typeof r)if(s[r]){var n=s[r];if(n.hueRange)return n.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=function(r){r=3===(r=r.replace(/^#/,"")).length?r.replace(/(.)/g,"$1$1"):r;var e=parseInt(r.substr(0,2),16)/255,n=parseInt(r.substr(2,2),16)/255,a=parseInt(r.substr(4,2),16)/255,t=Math.max(e,n,a),u=t-Math.min(e,n,a),o=t?u/t:0;switch(t){case e:return[(n-a)/u%6*60||0,o,t];case n:return[60*((a-e)/u+2)||0,o,t];case a:return[60*((e-n)/u+4)||0,o,t]}}(r)[0];return[a,a]}return[0,360]}(r.hue));e<0&&(e=360+e);return e}(r),n=function(r,e){if("monochrome"===e.hue)return 0;if("random"===e.luminosity)return i([0,100]);var n=(u=r,c(u).saturationRange),a=n[0],t=n[1];var u;switch(e.luminosity){case"bright":a=55;break;case"dark":a=t-10;break;case"light":t=55}return i([a,t])}(e,r),function(r,e,n){var a=function(r,e){for(var n=c(r).lowerBounds,a=0;a<n.length-1;a++){var t=n[a][0],u=n[a][1],o=n[a+1][0],s=n[a+1][1];if(t<=e&&e<=o){var i=(s-u)/(o-t),l=u-i*t;return i*e+l}}return 0}(r,e),t=100;switch(n.luminosity){case"dark":t=a+20;break;case"light":a=(t+a)/2;break;case"random":a=0,t=100}return i([a,t])}(e,n,r)],r)};function c(r){for(var e in 334<=r&&r<=360&&(r-=360),s){var n=s[e];if(n.hueRange&&r>=n.hueRange[0]&&r<=n.hueRange[1])return s[e]}return"Color not found"}function i(r){if(null===u)return Math.floor(r[0]+Math.random()*(r[1]+1-r[0]));var e=r[1]||1,n=r[0]||0,a=(u=(9301*u+49297)%233280)/233280;return Math.floor(n+a*(e-n))}function r(r,e,n){var a=n[0][0],t=n[n.length-1][0],u=n[n.length-1][1],o=n[0][1];s[r]={hueRange:e,lowerBounds:n,saturationRange:[a,t],brightnessRange:[u,o]}}function l(r){var e=r[0];0===e&&(e=1),360===e&&(e=359),e/=360;var n=r[1]/100,a=r[2]/100,t=Math.floor(6*e),u=6*e-t,o=a*(1-n),s=a*(1-u*n),i=a*(1-(1-u)*n),l=256,c=256,h=256;switch(t){case 0:l=a,c=i,h=o;break;case 1:l=s,c=a,h=o;break;case 2:l=o,c=a,h=i;break;case 3:l=o,c=s,h=a;break;case 4:l=i,c=o,h=a;break;case 5:l=a,c=o,h=s}return[Math.floor(255*l),Math.floor(255*c),Math.floor(255*h)]}function h(r){var e=r[0],n=r[1]/100,a=r[2]/100,t=(2-n)*a;return[e,Math.round(n*a/(t<1?t:2-t)*1e4)/100,t/2*100]}return o}
var randomColor = initializeRandomColorfunction();

function guid(){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}

var cdsCopyBook = initializeCOBOLCopybookParser();

angular.module('app1', ['ngMaterial', 'ngMessages'])
.factory('$bookService', function(){
    var $bookService = {
        book: {
            /**
             * original nested fields definition
             */
            nestedSpec: [],
            /**
             * expanded data fields, new $scope.data
             */
            nestedExpandedData: [], 
            /**
             * new pieces
             */
            rawDataFields:[], 
            /**
             * mapped raw data fields by guid like {'23iuuu3-dfs-3-123-': {color: '...', dataField: {...}}}
             */
            guidExtraInfo: {}, 
        },
        randomColorHueTypeMap: {
            'PICX': 'yellow',
            'PIC9': 'orange',
            'PICS9': 'orange',
            'PIC_PLUS_9': 'orange'
        },
        getRandomColor: (type) => {
            var hue = ($bookService.randomColorHueTypeMap[type] || 'orange');
            return randomColor({luminosity: 'light', hue: hue});
        },    
        dumpDataArray: (dataFields) => { 
            dataFields.map((subField) => {
                $bookService.dumpData(subField);
            });
        },
        dumpData: (dataField) => {
            if(!dataField.guid){
                dataField.guid = guid().replace(/-/g, '_');
                $bookService.book.guidExtraInfo[dataField.guid] = {dataField, color: $bookService.getRandomColor(dataField.type)};
                $bookService.book.rawDataFields.push($bookService.book.guidExtraInfo[dataField.guid]);   
            }
    
            switch(dataField.type){
            case 'GROUP_ITEM':
                $bookService.dumpDataArray(dataField.dataFields);
                break;
            case 'PIC9':
                dataField.dataContentHtml = 
                dataField.dataContent.padStart(dataField.size, '0')
                .replace(/ /g, "&nbsp;"); 
                break;
            default:
                dataField.dataContentHtml = 
                dataField.dataContent.padEnd(dataField.size, ' ')
                .replace(/ /g, "&nbsp;"); 
                break;
            }
        },
        buildFullContent: () => {
            $bookService.book.rawDataFields = [];
            $bookService.book.guidExtraInfo = {};
            $bookService.dumpDataArray($bookService.book.nestedExpandedData);    
        },
        parseBook: (content, importCopyCallback)=> {
            $bookService.book.nestedSpec = cdsCopyBook.loadBook(content, importCopyCallback);
            $bookService.book.nestedExpandedData = cdsCopyBook.expandDataBook($bookService.book.nestedSpec);
            $bookService.buildFullContent();
            
            return $bookService.nestedSpec;
        }

    };



    return $bookService;
})
.controller('ctrl1', function($scope, $sce, $mdDialog, $bookService){
    
    $scope.pieces = [];
        
    $scope.onItemChange = function(item){
        $bookService.dumpData(item);
    };

    $scope.onPieceClick = function(piece, ev){
        var $el = $('#field' + piece.dataField.guid);
        var $elClicked = $(ev.currentTarget);
        var $itemFocus = $('#itemFocus');

        $itemFocus.html(piece.dataField.dataContentHtml);
        $itemFocus.show();
        $itemFocus.attr("style", $elClicked.attr("style")).addClass($elClicked.attr("class"));
        $itemFocus.offset($elClicked.offset());

        $itemFocus.animate({
            ...$el.offset(),
        }, 
        {
            duration: 1000,
            complete: function(){
                $el.focus();
                $itemFocus.hide();
           }
        });
    };  
    $scope.onPieceKeydown = function(piece){
        console.log(piece);
    };  

    $scope.deliberatelyTrustDangerousSnippet = function(html) {
        return $sce.trustAsHtml(html);
    };


    /** Menu actions **/

    $scope.menuAction = function(action, $event){
        $scope[action]($event);
    };

    $scope.openCopyBookDefinition = function(ev) {
        $mdDialog.show({
            contentElement: '#dlgOpenCopyBookDefinition',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
        .then(function(value) {
            // $scope.copyBookDefSource = value;
            $bookService.parseBook(value);            

            $scope.pieces = $bookService.book.rawDataFields;

        }, function() {
            
        });
    };


})
.controller('dialogController', function ($scope, $mdDialog) {
    console.log('dialog loaded');
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.ok = function(answer) {
      $mdDialog.hide(answer);
    };
}); 

$(function(){
    $(window).resize(function(){
        $('#piecesContainer').width('50%');
    });
});