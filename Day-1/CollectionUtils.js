function display(){
  return (this.id +" "+this.name +" "+this.cost +" "+this.units +" "+this.category);
}

function Product(id,name,cost,units,category){
	//Verifying the function being called as a construction function
	//choice-1
	if (!(this instanceof Product))
		return new Product(id,name,cost,units,category);

	//choice-2
	/*if (this.constructor.name != "Product")
		return new Product(id,name,cost,units,category);	*/

	//choice-3
	/*if (this.constructor.name != arguments.callee.name)
		return new Product(id,name,cost,units,category);	*/

	this.id = id;
	this.name = name;
	this.cost = cost;
	this.units = units;
	this.category = category;
	this.display = display;
}

var products = [
	/*{id:1,name:"pen",cost:21,units:21,category:1,display:display},
	{id:7,name:"hen",cost:52,units:61,category:2,display:display},
	{id:2,name:"den",cost:23,units:31,category:1,display:display},
	{id:6,name:"ken",cost:12,units:11,category:2,display:display},
	{id:9,name:"len",cost:82,units:10,category:2,display:display},
	{id:4,name:"ten",cost:42,units:19,category:1,display:display}*/
];
products.push(new Product(1,"pen",21,21,1));
products.push(new Product(7,"pen",22,61,2));
products.push(new Product(3,"pen",29,12,1));
products.push(new Product(6,"pen",72,91,2));
products.push(new Product(2,"pen",69,71,1));
products.push(new Product(5,"pen",18,11,2));

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

