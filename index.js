function initializeRandomColorfunction(){var u=null,s={};r("monochrome",null,[[0,0],[100,0]]),r("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),r("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),r("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),r("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),r("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),r("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),r("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var o=function(r){if(void 0!==(r=r||{}).seed&&null!==r.seed&&r.seed===parseInt(r.seed,10))u=r.seed;else if("string"==typeof r.seed)u=function(r){for(var e=0,n=0;n!==r.length&&!(e>=Number.MAX_SAFE_INTEGER);n++)e+=r.charCodeAt(n);return e}(r.seed);else{if(void 0!==r.seed&&null!==r.seed)throw new TypeError("The seed value must be an integer or string");u=null}var e,n;if(null!==r.count&&void 0!==r.count){var a=r.count,t=[];for(r.count=null;a>t.length;)u&&r.seed&&(r.seed+=1),t.push(o(r));return r.count=a,t}return function(r,e){switch(e.format){case"hsvArray":return r;case"hslArray":return h(r);case"hsl":var n=h(r);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var a=h(r),t=e.alpha||Math.random();return"hsla("+a[0]+", "+a[1]+"%, "+a[2]+"%, "+t+")";case"rgbArray":return l(r);case"rgb":var u=l(r);return"rgb("+u.join(", ")+")";case"rgba":var o=l(r),t=e.alpha||Math.random();return"rgba("+o.join(", ")+", "+t+")";default:return function(r){var e=l(r);function n(r){var e=r.toString(16);return 1==e.length?"0"+e:e}return"#"+n(e[0])+n(e[1])+n(e[2])}(r)}}([e=function(r){var e=i(function(r){if("number"==typeof parseInt(r)){var e=parseInt(r);if(e<360&&0<e)return[e,e]}if("string"==typeof r)if(s[r]){var n=s[r];if(n.hueRange)return n.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=function(r){r=3===(r=r.replace(/^#/,"")).length?r.replace(/(.)/g,"$1$1"):r;var e=parseInt(r.substr(0,2),16)/255,n=parseInt(r.substr(2,2),16)/255,a=parseInt(r.substr(4,2),16)/255,t=Math.max(e,n,a),u=t-Math.min(e,n,a),o=t?u/t:0;switch(t){case e:return[(n-a)/u%6*60||0,o,t];case n:return[60*((a-e)/u+2)||0,o,t];case a:return[60*((e-n)/u+4)||0,o,t]}}(r)[0];return[a,a]}return[0,360]}(r.hue));e<0&&(e=360+e);return e}(r),n=function(r,e){if("monochrome"===e.hue)return 0;if("random"===e.luminosity)return i([0,100]);var n=(u=r,c(u).saturationRange),a=n[0],t=n[1];var u;switch(e.luminosity){case"bright":a=55;break;case"dark":a=t-10;break;case"light":t=55}return i([a,t])}(e,r),function(r,e,n){var a=function(r,e){for(var n=c(r).lowerBounds,a=0;a<n.length-1;a++){var t=n[a][0],u=n[a][1],o=n[a+1][0],s=n[a+1][1];if(t<=e&&e<=o){var i=(s-u)/(o-t),l=u-i*t;return i*e+l}}return 0}(r,e),t=100;switch(n.luminosity){case"dark":t=a+20;break;case"light":a=(t+a)/2;break;case"random":a=0,t=100}return i([a,t])}(e,n,r)],r)};function c(r){for(var e in 334<=r&&r<=360&&(r-=360),s){var n=s[e];if(n.hueRange&&r>=n.hueRange[0]&&r<=n.hueRange[1])return s[e]}return"Color not found"}function i(r){if(null===u)return Math.floor(r[0]+Math.random()*(r[1]+1-r[0]));var e=r[1]||1,n=r[0]||0,a=(u=(9301*u+49297)%233280)/233280;return Math.floor(n+a*(e-n))}function r(r,e,n){var a=n[0][0],t=n[n.length-1][0],u=n[n.length-1][1],o=n[0][1];s[r]={hueRange:e,lowerBounds:n,saturationRange:[a,t],brightnessRange:[u,o]}}function l(r){var e=r[0];0===e&&(e=1),360===e&&(e=359),e/=360;var n=r[1]/100,a=r[2]/100,t=Math.floor(6*e),u=6*e-t,o=a*(1-n),s=a*(1-u*n),i=a*(1-(1-u)*n),l=256,c=256,h=256;switch(t){case 0:l=a,c=i,h=o;break;case 1:l=s,c=a,h=o;break;case 2:l=o,c=a,h=i;break;case 3:l=o,c=s,h=a;break;case 4:l=i,c=o,h=a;break;case 5:l=a,c=o,h=s}return[Math.floor(255*l),Math.floor(255*c),Math.floor(255*h)]}function h(r){var e=r[0],n=r[1]/100,a=r[2]/100,t=(2-n)*a;return[e,Math.round(n*a/(t<1?t:2-t)*1e4)/100,t/2*100]}return o}
var randomColor = initializeRandomColorfunction();

function guid(){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}

var cdsCopyBook = initializeCOBOLCopybookParser();

angular.module('app1', ['ngMaterial', 'ngMessages'])
.controller('ctrl1', function($scope, $sce, $mdDialog){

    $scope.data = [{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-AREA-ERRO","dataFields":[{"type":"GROUP_ITEM","logicalLevel":"05","name":"WRK-BLOCO-INFO-ERRO","occurs_min":"SPACES","dataFields":[{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":0},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":1},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":2},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":3},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":4},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":5},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":6},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":7},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":8},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":9},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":10},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":11},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":12},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":13},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":14},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":15},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":16},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":17},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":18},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":19},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":20},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":21},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":22},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":23},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":24},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":25},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":26},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":27},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":28},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":29},{"name":"WRK-CHAR-INFO-ERRO","size":"001","type":"PICX","dataContent":"","index":30},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0}],"index":0}],"index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-FRWKGARQ","dataFields":[],"index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-AREA-ERRO-DB2","dataFields":[],"index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-FRWKGMOD","dataFields":[],"index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-AREA-CBPAW031","dataFields":[],"index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-AREA-CBTT2E8F","dataFields":[],"index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-AREA-CMCD2ABC","dataFields":[],"index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-AREA-INEC2000","dataFields":[],"index":0},{"name":"FILLER","size":"50","type":"PICX","dataContent":"","index":0},{"name":"WRK-P0160-JOB","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-P0160-VALORFAC","size":"05","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3 ","dataContent":"","index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-ACUMULADORES","dataFields":[{"name":"ACU-LIDOS-ARQBAIXA","size":"009","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"ACU-BAIXA-NAO-ACHOU","size":"009","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"ACU-DESPREZADOS-MOEDA","size":"009","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"ACU-DESPREZADOS-VALOR","size":"009","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"ACU-DESPREZADOS-BAIXA","size":"009","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"ACU-DESPREZADOS-OCOR","size":"009","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"ACU-GRAVADOS-BAIXA-14","size":"009","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"ACU-GRAVADOS-BAIXA-15","size":"009","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"ACU-GRAVADOS-TITBAIXA","size":"009","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"ACU-GRAVADOS-DUPLICADOS","size":"009","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"name":"WRK-DUMP-BAT","size":"001","type":"PICX","dataContent":"","index":0},{"name":"WRK-ABEND-BAT","size":"004","type":"PICS9","has_compression":"COMP ","dataContent":"","index":0},{"name":"WRK-FRWK2999","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-PROGRAMA","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-MODULO","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-CKRS0105","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-BRAD0160","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-BRAD0450","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-CBPA2EST","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-ARQBAIXA","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-BAIXA34","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-BAIXA35","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-TITBAIXA","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-TITDUPL","size":"008","type":"PICX","dataContent":"","index":0},{"name":"WRK-FLAG-TABELAS","size":"001","type":"PIC9","compression_logicalLevel":"3","has_compression":"COMP-3  ","dataContent":"","index":0},{"name":"WRK-LOCAL","size":"004","type":"PICX","dataContent":"","index":0},{"name":"WRK-FLAG-INCONS","size":"001","type":"PICX","dataContent":"","index":0}],"index":0},{"name":"WRK-CNEGOC-COBR","size":"018","type":"PIC9","dataContent":"","index":0},{"name":"WRK-ECONM-MOEDA-X10","size":"010","type":"PICX","dataContent":"","index":0},{"name":"WRK-SQLCODE-S9-9","size":"009","type":"PICS9","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-DATA-X-10","dataFields":[{"name":"WRK-DIA-D","size":"002","type":"PIC9","dataContent":"","index":0},{"name":"FILLER","size":"001","type":"PICX","dataContent":"","index":0},{"name":"WRK-MES-D","size":"002","type":"PIC9","dataContent":"","index":0},{"name":"FILLER","size":"001","type":"PICX","dataContent":"","index":0},{"name":"WRK-ANO-D","size":"004","type":"PIC9","dataContent":"","index":0}],"index":0},{"name":"WRK-DATA-9-8","size":"008","type":"PIC9","dataContent":"","index":0},{"name":"WRK-912-ZON","size":"012","type":"PIC9","dataContent":"","index":0},{"name":"WRK-912-98","size":"012","type":"PIC9","dataContent":"","index":0},{"name":"WRK-S10-910","size":"10","type":"PIC_PLUS_9","dataContent":"","index":0},{"name":"WRK-S3-93","size":"03","type":"PIC_PLUS_9","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-COMPILACAO","dataFields":[{"type":"GROUP_ITEM","logicalLevel":"05","name":"WRK-DTCOMPILA","dataFields":[{"name":"WRK-MMCOMPILA","size":"002","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"001","type":"PICX","dataContent":"","index":0},{"name":"WRK-DDCOMPILA","size":"002","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"001","type":"PICX","dataContent":"","index":0},{"name":"WRK-AACOMPILA","size":"002","type":"PICX","dataContent":"","index":0}],"index":0},{"name":"WRK-HRCOMPILA","size":"008","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"060","type":"PICX","dataContent":"","index":0}],"index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-TRATAMENTO-NULOS","dataFields":[{"name":"WRK-CTPO-CANAL-N","size":"004","type":"PICS9","has_compression":"COMP ","dataContent":"","index":0},{"name":"WRK-CPSSOA-LCTO-CTA-N","size":"004","type":"PICS9","has_compression":"COMP ","dataContent":"","index":0},{"name":"WRK-CTPO-LCTO-CTA-N","size":"004","type":"PICS9","has_compression":"COMP ","dataContent":"","index":0},{"name":"WRK-NCONTR-LCTO-CTA-N","size":"004","type":"PICS9","has_compression":"COMP ","dataContent":"","index":0}],"index":0},{"name":"WRK-VNMNAL-TITLO-COBR-R","size":"15","type":"PIC9","dataContent":"","index":0},{"name":"WRK-917-915V99","size":"17","type":"PIC9","dataContent":"","index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-MSG-FS","dataFields":[{"name":"FILLER","size":"005","type":"PICX","dataContent":"","index":0},{"name":"WRK-OPERACAO","size":"013","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"012","type":"PICX","dataContent":"","index":0},{"name":"WRK-ARQUIVO","size":"008","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"016","type":"PICX","dataContent":"","index":0},{"name":"WRK-FS","size":"002","type":"PICX","dataContent":"","index":0},{"name":"WRK-ABERTURA","size":"013","type":"PICX","dataContent":"","index":0},{"name":"WRK-LEITURA","size":"013","type":"PICX","dataContent":"","index":0},{"name":"WRK-FECHAMENTO","size":"013","type":"PICX","dataContent":"","index":0},{"name":"WRK-GRAVACAO","size":"013","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0}],"index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-MSG-SQL","dataFields":[{"name":"FILLER","size":"008","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"009","type":"PICX","dataContent":"","index":0},{"name":"WRK-SQLCODE","size":"009","type":"PIC_PLUS_9","dataContent":"","index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0},{"name":"WRK-FS-ARQBAIXA","size":"002","type":"PICX","dataContent":"","index":0},{"name":"WRK-FS-BAIXA34","size":"002","type":"PICX","dataContent":"","index":0},{"name":"WRK-FS-BAIXA35","size":"002","type":"PICX","dataContent":"","index":0},{"name":"WRK-FS-TITBAIXA","size":"002","type":"PICX","dataContent":"","index":0},{"name":"WRK-FS-TITDUPL","size":"002","type":"PICX","dataContent":"","index":0},{"name":"FILLER","size":"050","type":"PICX","dataContent":"","index":0}],"index":0},{"type":"GROUP_ITEM","logicalLevel":"01","name":"WRK-AREA-CBTTWREA","dataFields":[],"index":0}];
    
    $scope.pieces = [];
    
    var guidExtraInfo = {};
    
    function dumpDataArray(dataFields){ 
        dataFields.map((subField) => {
            dumpData(subField);
        });
    } 
    
    function dumpData(dataField){
        if(!dataField.guid){
            dataField.guid = guid().replace(/-/g, '_');
            guidExtraInfo[dataField.guid] = {dataField, color: getRandomColor(dataField.type)};
            $scope.pieces.push(guidExtraInfo[dataField.guid]);   
        }

        switch(dataField.type){
        case 'GROUP_ITEM':
            dumpDataArray(dataField.dataFields);
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

    }
    const randomColorHueTypeMap = {
        'PICX': 'yellow',
        'PIC9': 'orange',
        'PICS9': 'orange',
        'PIC+9': 'orange'
    };
    function getRandomColor(type) {
        var hue = (randomColorHueTypeMap[type] || 'orange');
        return randomColor({luminosity: 'light', hue: hue});
    }
    
    $scope.buildFullContent = function(){
        $scope.pieces = [];
    
        guidExtraInfo = {};
        dumpDataArray($scope.data);    
    }
    $scope.buildFullContent();
    $scope.onItemChange = function(item){
        dumpData(item);
    };

    $scope.onPieceClick = function(piece){
        
        $('#field' + piece.dataField.guid).focus();
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
            var spec = cdsCopyBook.loadBook(value);
            $scope.data = cdsCopyBook.expandDataBook(spec);
            $scope.buildFullContent();

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
