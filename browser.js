var chromeV = {
    a:100,
    b:101,
    c:102,
    d:103,
    e:104,
    f:105,
    g:106,
    h:107,
    i:108
}
 var Chrome100 = {
    a : "100.0.4896.58",
    b : "100.0.4896.79",
    c : "100.0.4896.88",
    d : "100.0.4896.127",
    e : "100.0.0.0"
}
var Chrome101 = {
    a : "101.0.4951.41",
    b : "101.0.4951.61",
    c : "101.0.0.0"
}
var Chrome102 = {
    a : "102.0.5005.59",
    b : "102.0.5005.78",
    c : "102.0.5005.99",
    d : "102.0.5005.125",
    e : "102.0.0.0"
}
var Chrome103 = {
    a : "103.0.5060.53",
    b : "103.0.5060.70",
    c : "103.0.5060.71",
    d : "103.0.5060.129",
    e : "103.0.0.0"
}
var Chrome104 = {
    a : "104.0.5112.69",
    b : "104.0.5112.97",
    c : "104.0.0.0"
}
var Chrome105 = {
    a : "105.0.5195.68",
    b : "105.0.5195.77",
    c : "105.0.5195.79",
    d : "105.0.5195.124",
    e : "105.0.5195.136",
    f : "105.0.0.0"
}
var Chrome106 = {
    a : "106.0.5249.65",
    b : "106.0.5249.79",
    c : "106.0.5249.126",
    d : "106.0.0.0"
}
var Chrome107 = {
    a : "107.0.5304.91",
    b : "107.0.5304.105",
    c : "107.0.5304.141",
    d : "107.0.0.0"
}
var Chrome108 = {
    a : "108.0.5359.61",
    b : "108.0.5359.128",
    c : "108.0.0.0"
}

function nTl(n){
    switch(n){
        case 1:
            return "a";
            break;
        case 2:
            return "b";
            break;
        case 3:
            return "c";
            break;
        case 4:
            return "d";
            break;
        case 5:
            return "e";
            break;
        case 6:
            return "f";
            break;
        case 7:
            return "g";
            break;
        case 8:
            return "h";
            break;
        case 9:
            return "i";
            break;
        default:
            break;
    }
    

}


   function getChrome(v){
        var lng = Object.keys(v).length;
        var ran = Math.floor(Math.random()* (lng - 1+1)) + 1;
        var ln = nTl(ran);
        return v[ln];
    }
    function nTc(s){
	switch(s){
	        case "1":
			return Chrome100;
			break;
		case "2":
	         	return Chrome101;
			break;
		case "3":
			return Chrome102;
			break;
		case "4":
			return Chrome103;
			break;
		case "5":
			return Chrome104;
			break;
		case "6":
			return Chrome105;
			break;
		case "7":
			return Chrome106;
			break;
		case "8":
			return Chrome107;
			break;
		case "9":
			return Chrome108;
			break;
		default:
			return "not found!";
		}
	}
