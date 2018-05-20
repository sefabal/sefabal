var equation=document.getElementById("equation");
var isCalculated=false;
function cleanTheValue(){
	equation.value="";
}
function fac(n) {
	return n < 2 ? 1 : n * fac(n - 1);
}
function insert(num){
	if((typeof num)=="number"){
		if(isCalculated){
			isCalculated=false;
			cleanTheValue();
		}
		if(equation.value.substr(-1).match(/[)]/)){
			equation.value+="*";
		}
	}
	isCalculated=false;
	equation.value+=num;
}
function func(string){
	if(lastNumber()){
		insert('*');
	}
	isCalculated=false;
	equation.value+=string+"(";
}
function equal(){
	try{
		equation.value=equation.value.replace("log","log10");
		equation.value=equation.value.replace("ln","log");
		console.log(equation.value);
		equation.value=math.eval(equation.value);
	}catch(err){
		equation.value="NaN";
	}
	isCalculated=true;
}
function paranthesis(right){
	if(right){
		equation.value+=')';
	}else{
		if(lastNumber()){
			insert('*');
		}
		equation.value+='(';
	}
	isCalculated=false;
}
function lastNumber(){
	if(equation.value.substr(-1).match("\\d"))return true;
	else return false;
}