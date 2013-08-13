function display(){
  return (this.id +" "+this.name +" "+this.cost +" "+this.units +" "+this.category);
}

var products = [
	{id:1,name:"pen",cost:21,units:21,category:1,display:display},
	{id:7,name:"hen",cost:52,units:61,category:2,display:display},
	{id:2,name:"den",cost:23,units:31,category:1,display:display},
	{id:6,name:"ken",cost:12,units:11,category:2,display:display},
	{id:9,name:"len",cost:82,units:10,category:2,display:display},
	{id:4,name:"ten",cost:42,units:19,category:1,display:display}
]
var collectionUtils = {
	forEach : function (list,action){
				  for(var i=0;i<list.length;i++)
				    action(list[i]);
				},
	sum : function (list, selectorFn){
			  var result = 0;
			  for(var i=0;i<list.length;i++)
			    result += selectorFn(list[i]);
			  return result;
			},
	all : function all(list,criteriaFn){
			  for(var i=0;i<list.length;i++)
			     if (!criteriaFn(list[i])) return false;
			  return true;
			},
	any : function (list,criteriaFn){
			  for(var i=0;i<list.length;i++)
			     if (criteriaFn(list[i])) return true;
			  return false;
			},
	min : function (list, selectorFn){
			  var result = Number.MAX_VALUE;
			  for(var i=0;i<list.length;i++){
			     var value = selectorFn(list[i]);
			     if (value < result) result = value;
			  }
			  return result;
			},
	max : function (list, selectorFn){
			  var result = Number.MIN_VALUE;
			  for(var i=0;i<list.length;i++){
			     var value = selectorFn(list[i]);
			     if (value > result) result = value;
			  }
			  return result;
			},
	count : function (list,criteriaFn){
			  var result = 0;
			  for(var i=0;i<list.length;i++)
			    if (criteriaFn(list[i])) result++;
			  return result;
			},
	average : function (list,selectorFn){
				  var total = sum(list,selectorFn);
				  return total/list.length;
				},
	filter : function (list,criteriaFn){
			  var result = [];
			  for(var i=0;i<list.length;i++)
			    if (criteriaFn(list[i])) result.push(list[i]);
			  return result;
			},
	toArray : function(list){
		var result = [];
		for(var i=0;i<list.length;i++)
			result.push(list[i]);
		return result;
	},
	sort : function(list,comparatorFn){
		for(var i=0;i<list.length-1;i++)
			for(var j=i+1;j<list.length;j++){
				var left = list[i],
					right = list[j],
					temp;
				if (comparatorFn(left,right) > 0){
					temp = list[i];
					list[i] = list[j];
					list[j] = temp;
				}
			}
	}
}

