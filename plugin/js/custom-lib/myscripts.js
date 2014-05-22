  function shuffle(items)
  {
      var cached = items.slice(0), temp, i = cached.length, rand;
      while(--i)
      {
          rand = Math.floor(i * Math.random());
          temp = cached[rand];
          cached[rand] = cached[i];
          cached[i] = temp;
      }
      return cached;
  }
  function shuffleNodes(list)
  {
      var nodes = list.children, i = 0;
      nodes = toArray(nodes);
      nodes = shuffle(nodes);
      while(i < nodes.length)
      {
          list.appendChild(nodes[i]);
          ++i;
      }
  }
  
  function toArray(obj) {
	  var array = [];
	  // iterate backwards ensuring that length is an UInt32
	  for (var i = obj.length >>> 0; i--;) { 
	    array[i] = obj[i];
	  }
	  return array;
	}

  if (typeof String.prototype.startsWith != 'function') {
	  String.prototype.startsWith = function (str){
	    return this.slice(0, str.length) == str;
	  };
	}
  
  if (typeof String.prototype.trim != 'function') {
	  String.prototype.trim = function (){
		  return this.replace(/^\s+|\s+$/g, '');
	  };
	}
  
  if (typeof String.prototype.splitOnFirst != 'function') {
	  String.prototype.splitOnFirst = function (str){
		  var d = this.indexOf(str);
		  if(0>d)return this;
		  else{
			  return [this.substr(0,d) , this.substr(d+str.length)];
		  }
	  };
	}
