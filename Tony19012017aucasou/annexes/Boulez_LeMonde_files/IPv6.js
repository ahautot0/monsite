(function(root,factory){if(typeof exports==="object")module.exports=factory();else if(typeof define==="function"&&define.amd)define(factory);else root.IPv6=factory(root)})(this,function(root){var _IPv6=root&&root.IPv6;function bestPresentation(address){var _address=address.toLowerCase();var segments=_address.split(":");var length=segments.length;var total=8;if(segments[0]===""&&segments[1]===""&&segments[2]===""){segments.shift();segments.shift()}else if(segments[0]===""&&segments[1]==="")segments.shift();
else if(segments[length-1]===""&&segments[length-2]==="")segments.pop();length=segments.length;if(segments[length-1].indexOf(".")!==-1)total=7;var pos;for(pos=0;pos<length;pos++)if(segments[pos]==="")break;if(pos<total){segments.splice(pos,1,"0000");while(segments.length<total)segments.splice(pos,0,"0000");length=segments.length}var _segments;for(var i=0;i<total;i++){_segments=segments[i].split("");for(var j=0;j<3;j++)if(_segments[0]==="0"&&_segments.length>1)_segments.splice(0,1);else break;segments[i]=
_segments.join("")}var best=-1;var _best=0;var _current=0;var current=-1;var inzeroes=false;for(i=0;i<total;i++)if(inzeroes)if(segments[i]==="0")_current+=1;else{inzeroes=false;if(_current>_best){best=current;_best=_current}}else if(segments[i]==="0"){inzeroes=true;current=i;_current=1}if(_current>_best){best=current;_best=_current}if(_best>1)segments.splice(best,_best,"");length=segments.length;var result="";if(segments[0]==="")result=":";for(i=0;i<length;i++){result+=segments[i];if(i===length-1)break;
result+=":"}if(segments[length-1]==="")result+=":";return result}function noConflict(){if(root.IPv6===this)root.IPv6=_IPv6;return this}return{best:bestPresentation,noConflict:noConflict}});
