(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.m4ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m4.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C098AC").s().p("AgxCkQg8gdgggOQg2gZgrgLQAZgYAvgqQAogkAUgcQATgcARgwQATg5ALgeQBQALA1AQQBOAWBEArIg5AVQgaAJgOAJIgyAgQgbATgOAUQhRB0B/BKQAFADArAUIgXACQhMAAhfgtg");
	this.shape.setTransform(457.5,227.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#586CA9").s().p("AmKKHQgRg4gNheQgai1BIjMQAahLAwhlIBTivQAXgxAnhAIBHhtQArhCAmgiQAxgsBMg/ICHhwQBEA7AuBPQAmBAAbBYIjZCDIgfgRQgWgLgRgCQhTgLgrANQhBAVgLAyQgKAyAwAxIAgAfIApAjIhQB/IgpgCQgYgCgPAFQg7AVgPAFQgpARgaAVQgvAmAIAqQAIAoA6AZQALAEAWAFQAYAFAKADIA9AZQgCBNgLAQQgLAShAAVQgvAPgVAMQgjATgTAfQghA3ASAoQATAoA+AFQAiADAygBIBUgBQgIBGhRBAQhRBAhbAFQgqg5gXhNg");
	this.shape_1.setTransform(278.1,163);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3ADCC").s().p("ACKHTQgxgJgggIQlMhNjqicIgigWQhIgngdg+Qgdg9APhPQAtj0CLieQAXgaAYgFQAYgGAiALQAhALAwAFIBUAJQAMABA2ABQAoABAXAHQBNAXCeAmQCLAlBZAuQAPAHAWAGIAnAIQBHARAmAWQAnAWA0A2Qg7AMg9gFQgrgEhBgPQhHgQhLANQgVADgXAQQgUAPgQATQglAsAIArQAIApAwAfIBgA9IgLAZIhXgZIhXgXQgygNglgHQhCgMg9A3QgsAoAEApQAEApAyAgIBkBAQA8AmAoAcQATANAXAZIAoApIgLAUg");
	this.shape_2.setTransform(368.8,192.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9097C3").s().p("AFuOkQjIhviUhdQi3hziWhxQiyiGh8h1QiaiRhriWQjXkug1lkIgBgKIgCgKQgmhVAgg1QAbgtBng5QBSguBwACQArABCaAXQCZAWFfA2QFDAyCzAZQD7AjEYBiIA9AUIA+ATQAuAQBbAiIAHAeIiOCIQguAvgkAzIg7BQQggAvgUAmQgmBFhMCtQhQC2grBwQg0CIgPCgQgOCHAMCpIAAA3Qhxgygygbg");
	this.shape_3.setTransform(150.1,129);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AeUUmQgegQg4gZIhVgpQghgQgWABQgbACgYAbQgxA4hCAWQg/AWhLgLQi2gahAgLQiLgWhqgYQgrgJg5gfQhAgmgggSIiIhLIiNhPQiPC+jJBLQi3BFjtgaQg5gGhLgfIiBg6Qg/gchegvIichPQjGhhjgiUQiVhij6i4QhxhShxhxQhZhZhviEQhZhohKiNQg2hohCikQhLi7g6jRQgWhRANhDQAPhLA8g+QEOkXFOgOQC5gIDwAzQFpBMEqAbQF2AjEqBqIDSBMQB9AtBYAbQBBAUBsAXQCJAfAmAJQBRAVAZAiQAaAhgEBQQgBAeAGATQAHAWAVAQQAKAIAPAQIAYAaQCtCrgiD2IAXAOQALAHAHAAQBogDCFAjQBNAUCXAxQDlBEDVBSQAqAQAyAfQAZAPA+ArQBcBAgjB7IgRBBICWAxQBWAcA7AXQBOAfAbA+QAZA8gcBRIgEAJQgkA7gNBIQgLA9AEBRQADA9gfAwQgdAug6AdQhyA4hoAGIgWABQhnAAhhgxgAeOMRQgRAwgTAcQgTAcgoAlQgwAqgZAYQAsALA2AZQAfAOA9AdQBvAzBTgIQgrgUgFgDQh/hKBRh1QAOgUAbgTIAyggQAOgJAagJIA5gVQhEgrhNgWQg1gQhRgLQgMAegTA5gAFJmVQhMA/gyAsQglAigsBCIhGBtQgoBAgWAwIhTCvQgvBmgbBLQhHDMAZC1QAOBeARA4QAXBNApA5QBbgFBRhAQBRhAAHhGIhTABQgyABghgDQg/gFgSgoQgTgoAig3QATgfAigTQAWgMAugPQA/gVAMgSQAKgQADhNIg9gZQgKgDgYgFQgWgFgLgEQg5gZgIgoQgJgqAwgmQAZgVApgRQAPgGA7gVQAOgFAYACIAqACIBQh/IgogjIghgfQgxgwALgyQALgyBBgVQArgNBTALQARACAWALIAfARIDaiDQgchYglhAQguhPhFg7IiHBwgAKzBNQgZAGgXAaQiKCegtD0QgPBPAcA9QAdA+BJAnIAhAWQDqCcFNBOQAgAHAxAJIBRAPIAMgTIgogqQgYgYgSgNQgogcg8gmIhlhAQgzghgEgpQgEgpAsgoQA9g3BEANQAkAGAzAOIBWAXIBYAYIALgYIhhg+QgwgfgHgqQgIgrAkgrQARgUAUgOQAXgQAVgEQBKgMBHAQQBCAPArADQA9AFA7gMQg1g2gngWQglgVhHgRIgngJQgXgFgOgIQhaguiLglQidglhOgXQgYgHgogBQg1gBgMgCIhUgIQgwgGghgKQgXgIgSAAQgJAAgIACgEggugQRQhnA5gaAtQggA1AlBVIACAKIABAKQA1FkDYEuQBrCWCZCRQB9B1CyCGQCWBxC3BzQCVBdDHBvQAyAbByAyIAAg3QgMipANiHQAQigA0iIQArhwBPi1QBNiuAlhFQAUgmAhgvIA6hQQAlgzAugvICNiIIgIgeQhagigtgQIg+gTIg+gUQkXhij7gjQi0gZlEgyQlfg2iYgWQiagXgrgBIgKAAQhqAAhPAsg");
	this.shape_4.setTransform(257,136.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,514,273.4);


(lib.m3ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m3.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C098AC").s().p("ACEF9QhagUjChSQjrhiixhmIBHAAQCDAABmg5QBjg3BJhwQAggygFg5QgEgmgdhIIA6gbIBoArIBcAkICMAzQBXAfA1AWQBjApAaBfQhIA0hggDQiGgChcANQg6AHglAjQgkAkgHA6QgNBpB4A5QAeAOAqAaIBOAxQgkANgsAAQglAAgpgJg");
	this.shape.setTransform(460.7,281.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#586CA9").s().p("AqDSQQgugngOg4QgchtgCiAQgChmAOiJIAGgtQAEgbgCgRQgMiOAnirQARhHBIjlQA/jMBPiRQBTiYCTjFQCnjdE2iRQBdgsBXAPQBSAOBPBDIAQANQAKAIACAHQAVA7AyBzQApBoACBRIicAAIgUgzQgMgcgIgSQgvhdhqAAQg9AAgoATQgwAWgbAyQgYAtAFAdQAFAeAkAlIArAvIkHCbIgrgTQhGgehDAXQhDAXgiBEQgeA9A0AvQAeAZA1AxIhIECIhTAHQhFAIgrAjQgrAjgNA3QgJAmAMAZQAMAbAjAPIAkAQQBxAnAbA0QAaAzgbB/IhEAbQgpAQgbANQg2AagnAgQgnAggTA0QgSAyAPAiQAPAlApAQQArARA6gLQAygKBLgWICCgnIAEAWQACAKgCADIhZB+Qg0BJgpAyQhHBViYAOIgNABQguAAgrgjg");
	this.shape_1.setTransform(227.7,189.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3ADCC").s().p("AgfLRQjkg1jyiFQg/gjh0g1QiBg8gzgaQhYgugshcQgrhcAThiQA8k1CNj6QB1jQEdADQAGA/AuAdQAcASBJARQCRAiC/A2ICZAsQBXAaBAAZQERBrDJBhQAlASAwApIBUBJQgkAugpAIQgeAGgxgOQhAgRgwAEQg7AEgwAjQhSA5gFBRQgGBRBJBDIA9A3QhQAMhzgWQhygWhbgsIg1gcQgggSgWgHQheghhKA1QhFAzgMBgQgHA0A7AmQBBApBqBNQAQALAVAUIAmAiQg0BFhFASQgaAGgeAAQgnAAgugLg");
	this.shape_2.setTransform(337.9,221.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9097C3").s().p("AiyU7QglgPgegiQiYithEhIQihirhvjjQhhjEhDkBQgtiogIgnQgYh3AFheQAKi6AHhdQAMigAUh1QAhjFCciPQCYiNDLgdIC/gdQBzgTBMgFQCTgMChAVQB0APCbAZIEPAuQAXAEAiAKIA5ARIAJAYIgnAlQgXAVgSAJQidBQhzCVQgiAshfByQhTBjgsA8QhIBihBCKQgiBJhKC0QgyB5gvChQgWBJg4DWQgnCRgMCqQgJCLAIC0QACAwAFBGIAIB6IgVAAQglAAgegLg");
	this.shape_3.setTransform(129,166.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("Ad1a4Qhvgciog+Qi+hGi0hQQgcgNglgcQgsgigZgSIidA4QhfAihEAUQghAJgtACQgaABg2gCQhrgDhygkQhegehxg5Qjwh+h7g8QgggQgwgSIhNgcIhIBlQgoA3gZAnQgoA8hHA3QgXARhsBIQipBxi7ACQgZAAghgHIg6gQQhCgSgngBQg5gCgyAaQg8Aeg6gBQhAgBg4gnQgcgTgbgCQgxgFgygcQgggSg2gpQhohShvh9Qgyg4iMivQiwjchtj2QiGkrgwkhQgukSANkGQAGiZAFhNQAJiDAWhfQAsjDB5kHQAbg9A0gqQA2gsBHgOIFBhFQDBgpCBgSQEDgkE0AIQBGABBlAYICrAoIBJAQQArAIAfAAQBjAAB1AeQBDAQCOAvQBiAhDFA7IAtAMQAbAJAJAMQAlAwBOA+QBcBIAdAdQA/BBgLBPQgDAZAHAcQAHAcANAWQBYCJAeB9QAjCPgkCPQgCAIAAANIABAaQByAjDkBCQDLA9CHA0QD6BhAlAQQChBFBrBRQBjBMBKB/QAQAbABA3IADBnIEyBcQCoAxBtBUQBNA6AlBTQAjBOgDBfQgCBLgzBCQgoA0hNAzQgQAKhBAlQAAAnADBIQACA/gGAoQgRBqhWBEQhTBBhwACIgOAAQiCAAiTgkgAaoU3QDDBSBaAUQBbAUBDgYIhOgxQgqgagegOQh4g5ANhpQAGg6AlgkQAlgkA5gHQBcgNCHACQBgADBHg0QgZhfhkgpQg0gWhXgfIiMgzIhcgkIhpgrIg6AbQAcBIAEAmQAGA5ggAyQhJBwhkA4QhlA5iDAAIhHAAQCxBmDrBigAjcwJQk3CRimDdQiUDFhSCYQhPCRhADLQhIDmgQBHQgoCrANCOQACARgEAbIgHAtQgOCJACBmQADCAAbBtQAOA4AvAnQAwAoA2gGQCXgOBHhVQApgyA1hJIBYh+QADgDgCgKIgFgWIiCAnQhKAWgzAKQg6ALgqgRQgpgQgPglQgPgiASgyQASg0AoggQAnggA1gaQAbgNApgQIBEgbQAch/gbgzQgag0hxgnIglgQQgjgPgMgbQgLgZAJgmQAMg3ArgjQArgjBFgIIBUgHIBIkCQg1gxgegZQg1gvAfg9QAihEBDgXQBCgXBHAeIArATIEHibIgqgvQglglgEgeQgFgdAYgtQAbgyAvgWQApgTA9AAQBpAAAuBdQAJASALAcIAUAzICcAAQgChRgohoQgzhzgVg7QgCgHgJgIIgQgNQhPhDhSgOQgWgEgWAAQhCAAhGAhgA2x2bQhMAGh0ASIi/AeQjKAciZCNQibCQghDFQgUB1gMCfQgHBdgKC6QgGBfAZB2QAIAoAsCnQBEECBgDEQBvDiChCrQBFBJCXCsQAeAjAlAOQAnAPAygEIgJh5QgFhHgCgwQgIizAKiLQALiqAniRQA6jXAVhJQAwifAyh7QBJizAjhJQBBiKBIhiQAsg9BThjQBehxAjgtQBziUCchQQATgJAXgWIAngkIgKgZIg4gRQgigKgXgEIkPguQibgZh1gPQhngNhhAAQg3AAg1AEgAi5hHQiND5g9E3QgTBhArBcQAsBdBYAtQAzAbCCA7QByA1A/AjQDzCFDjA2QBTATA7gPQBGgSAzhFIglgiQgWgTgQgMQhphMhDgqQg6gmAGgzQAMhgBHgzQBJg2BeAhQAWAIAgARIA1AcQBbAsBzAWQByAWBRgLIg9g4QhJhDAFhRQAGhRBRg6QAxgjA7gEQAwgDBAARQAxANAdgGQAqgIAjguIhUhIQgwgpgkgSQjKhhkRhrQg/gZhXgZIiZgtQjBg2iRgiQhJgRgbgRQgugegHg/IgIAAQkVAAhzDNg");
	this.shape_4.setTransform(275,175.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,351.3);


(lib.m2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ag6A0QgYgVAAgcQABgfAcgWQAcgVAoABQAlABARAPQAQAPgCAgQgCAggZAXQgYAXghAAIgDAAQgfAAgXgTg");
	this.shape.setTransform(368.8,357.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C098AC").s().p("AACBEQglgIg4g2ICPhKQAjAlAEAXQAEAWgXAaQgaAdgeAAIgOgBg");
	this.shape_1.setTransform(405.6,322.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C098AC").s().p("Ah8AnQgMgWABglQABgXAKhDIEEBJIg5AlQgaAPgLAPQgJANgEAZIgHArQh7gagXgug");
	this.shape_2.setTransform(384.9,306.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C098AC").s().p("ACTC6Qhwg0hIgmQgkgTgzgeIhig3Igbg/IglhPIDWgwQANgDAHAFQA5AgB6A6QBlA6AnBXQASAoACAbQACAkgXAcQgZAegmAAQgZAAgfgOgAALgYQgbAVAAAgQgBAcAYAUQAYAVAhgBQAhgBAZgWQAYgXACgiQADgfgRgPQgQgPglgBIgEAAQgnAAgbAVg");
	this.shape_3.setTransform(362.3,355);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#586CA9").s().p("Ao9UnQgegLgXgpQh3jNgLkOIgIipQgEhiAChHQARmyDemwQBujWC9jlQCfjBDNiMQA+gqBXgiQBAgYBigbQA9gQBCARQA9AQA7AsQABAoASA0IAhBYQAnBsgfBQIg5gGQgjgEgTgLQg0ghg6AEQgtADg/AbIg3AUQgwg8gagdQgtgxhGgCQhFgBgvAvQglAlgDAmQgDAnAgAvQAQAZAmAvIAyBAIixEZIg0gvQgggcgYgSQgsgghRAVQhSAVgTAyQgOAmADAbQADAkAgAaQAQANAaAcQAdAfAOAMQARAPAaAQIArAbIhiC9QgbA2g3gSIgcgLQgRgFgMAAIhKACQgqACgeAJQgkAKgWAZQgYAbgCAnQgBAiAUAbQARAWAgAUQARAKAcAMIAtAUQA3AaAJARQAHAPgEBBQgEA/AAAgQAAA1AJAoQAHAjgHAXQgIAVgYAYQg6A5hKBcQgWAcgKAsQgLAtAPAXQAOAXAtALQCGAiBehiIBAhGIBChKIBQAzQhMCdhbBkQhpB0iMA6QgZALgVAAQgNAAgMgFg");
	this.shape_4.setTransform(202.4,263.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3ADCC").s().p("ACnM3IklhaQimg4h1hDQiuhiimh+QhghIAhh6QAzjEBXiFQAZglAlhBIA8hoIB/jQQBKh2A8hWQBLhsB6AkQA5ARBXAPICUAYIAYAEQAOADAJAFQDEBmBPA5QCPBlBKCCQAPAZAnAwQAgAvgBA3Ig4gEQgdgCgSgHQgYgJgigSIg5geQhMgnhGANQhFANg4A/QggAkACAuQACAuAjAgIDPC4QAaAXAGAPQAFAOAEA8IggAFQgTADgMgDIimgjQhfgWhFgUQhzgihlBIQg4AoABBEQABBEA3AtQCmCNBZBdQAWAYAUAuIAhBOQgkAagoAAQgYgBgrgNg");
	this.shape_5.setTransform(277.7,284.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9097C3").s().p("AtOe9QhfghhHhTQiTitg6iwQhAjFgBjrQgCkKA3kbQAyj7BikaQBoktCpkuQCVkKDUkgQDhkzEUjoQEMjgE5hGQDEgrCEB0QAoAiBSBBQBHA8AnA4QBNBtAKCHQAHBogiCdQgugIgOgGQhagrh4ADQgfABi1AUQgbADgqAUQg5AcgLAEQhbAfhhA4QhJArhlBIQieBwiOCxQhiB6iMDbQhOB8hMCnQgoBXhXDXQgRApgMBFIgTByQhFE9AKEoQACBKAKBfIAUCnQACARAMAZIAUApQAGAPAOAeQALAbADAUQARCJBcBdQALALAOAUIAaAmIgkAWQgUAMgPAFIhZAfQg0AQgoAHQgqAIgpAAQg+AAg5gTg");
	this.shape_6.setTransform(158.5,226.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("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");
	this.shape_7.setTransform(224.7,225.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,449.4,450.5);


(lib.m1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C098AC").s().p("AhIFHQhkgKhLgWQhHgVgdgyQgagsADhNQCTgiBPhfQAqgyATgvQAUg2gFg6QgEgmADgOQAHgaAegOQAdgMAUABQAYACAaARQAlAZA+AhIBlA1QA1AeAXAaQAhAlgGAzQgDAhguAPQgsANhIgHQhPgIhBAuQhBAugJBGQgGApAMAbQAMAeAiATQAQAJAXARIAmAcIgMAYIiwgMg");
	this.shape.setTransform(404.5,266.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#586CA9").s().p("An4TwQgmgDgXgWQg4gzghgpQgrg2gYg6Qg7iJgahFQgth4gLhhQgSiiABh3QACiXAfiDQAUhQAmhYQAehFAxhaQBBh3BEhYQBRhoBfhIQAdgWBihSQBPhCAzgjQAxgiBBgkQAogWBOgnQAxgZBygzQBpgwA4gdQBigyBMgaQBhggBhgGIBjE9Ih6AAQhFhRg7gTQg7gShFAmQg6AggLAsQgLAsAdBUIkvCsQgpgwgbgSQgogdgwAAQg9AAg7AnQg9AogRA4QgJAhAHAZQAHAbAeATQATANAbAYIAyAtQhPBTg2CHQgfBOg3CiIihghQg/gPgxAXQgtAWglA4QgiA1ANAnQAMAoA8AWQCOA0A3ARQAdAJANARQAOASgBAcIgDBkQgBA6ABAqQABAagQAVQgKANgYAVIhaBcQg1A3ggAqQgpA1gBAvQAAAsAkAiQApAnBDACQBDACAuglQAygpAhgtQAggtAkgKQAmgMAwAaQAKAFAQAEIAcAIQgfB9iQBwQiFBnhwAAIgRgBg");
	this.shape_1.setTransform(227.6,202.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3ADCC").s().p("AAZMJQhLgTg1gLQhHgOhPgiQg4gZhVguQg+gihZg0IiWhYIgRgLQgKgGgIgBQg9gDgagqQgTgegGg/QgEg1AIguIAjjFQAWhxAXhQQAvieBgh3QBih6CQhKQBJgmBpgmQA8gWB7gpQARgHAZADQAYACAUAJQDcBdAxAXQCWBHBqBKQB1BTBZB1QAVAcANAsQAOA0gVAgQgXAgg0gCQh6gDhdgiQhEgZg9AQQg2AOg3AvQg3AuAHBDQAHBBA+AmIBVAzQAhAUAPAZQASAfgCAzIhBgMQgkgHgUgJQhEggh8hJQhHgqhWAGQhUAGg3A0Qg1A0AEA9QAFA9A7AvQBoBRAyAzQBPBPApBVQAWAsAAARQgBATgZA/Ih9ggg");
	this.shape_2.setTransform(312.8,220.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9097C3").s().p("AkaYAQgYgDgMgHQi9hjhZg/QiQhnhSiAQgegvhZh3QhMhoglhBQhAh2geheQglh4AGhxQAEhBACifQADiOAGhRQAJh6AuiBQA8i6AihcQA7ieBHhoQBgiLBKhTQBmhyBxhJQG0kdIZAtQBQAGBtAfQA/ASB8AmQA5AQBMAaICDAvQAMAEASAMIAlAYIhqArQg6AYgoAKQiBAjiWBWIkBChQiWBeiQCHQh7ByiECdQjzEfhwGZQhIEJBBFaQA2EZCbFJQAGAMAHAVIAOAtIgvgGg");
	this.shape_3.setTransform(152.7,184.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("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");
	this.shape_4.setTransform(238.1,189.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,476.3,379.1);


// stage content:
(lib.malcolmloop2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7.1,1,1).p("EA6cgguIg8AAMAAABA1MhzTAAAEA6cAgvIg8AAIAAgoEA50AgHIgUAAEg6bgguIAUAAIAAAUMBzTAAAEg6bggaIAUAAEg6bAgvIAUAAMAAAhBJ");
	this.shape.setTransform(375,210.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(123));

	// Layer 1
	this.instance = new lib.m3ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(786,424.2,0.232,0.232,0,0,0,224.8,226.1);
	this.instance._off = true;

	this.instance_1 = new lib.m4ai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(759,414.2,0.254,0.254,0,0,0,224.9,226.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.m1ai("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(652,350.1,0.206,0.206,0,0,0,225.1,226.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.m2ai("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(633,323.2,0.232,0.232,0,0,0,224.8,226.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},2).wait(5).to({_off:false,regX:225.1,regY:226.3,scaleX:0.21,scaleY:0.21,x:698,y:373.2},0).to({_off:true},2).wait(8).to({_off:false,regX:224.8,regY:226.1,scaleX:0.23,scaleY:0.23,x:589,y:324.2},0).wait(2).to({x:570,y:313.2},0).to({_off:true},2).wait(4).to({_off:false,regX:224.9,scaleX:0.25,scaleY:0.25,x:498,y:284.2},0).wait(2).to({x:482,y:278.2},0).to({_off:true},2).wait(12).to({_off:false,regX:224.8,scaleX:0.23,scaleY:0.23,x:385,y:207.2},0).wait(2).to({x:375,y:198.2},0).wait(2).to({x:372,y:202.2},0).wait(2).to({x:370,y:206.2},0).wait(2).to({x:369},0).wait(2).to({x:367,y:196.2},0).to({_off:true},3).wait(4).to({_off:false,regX:224.9,scaleX:0.25,scaleY:0.25,x:318,y:172.2},0).wait(2).to({x:307,y:178.2},0).to({_off:true},2).wait(15).to({_off:false,regX:224.8,scaleX:0.23,scaleY:0.23,x:160,y:179.2},0).wait(2).to({x:145,y:175.2},0).to({_off:true},2).wait(4).to({_off:false,regX:224.9,scaleX:0.25,scaleY:0.25,x:82,y:150.2},0).wait(2).to({regX:224.7,regY:226.2,x:50.9,y:137.8},0).wait(2).to({x:29.6,y:129.3},0).to({_off:true},2).wait(14).to({_off:false,regX:224.8,regY:226.1,scaleX:0.23,scaleY:0.23,x:-64.9,y:88.2},0).wait(2).to({x:-74.9,y:85.2},0).to({_off:true},2).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(2).to({x:720,y:396.2},0).to({_off:true},3).wait(14).to({_off:false,x:547,y:313.2},0).wait(2).to({x:513,y:301.2},0).to({_off:true},2).wait(29).to({_off:false,x:363,y:205.2},0).wait(2).to({x:341,y:195.2},0).to({_off:true},2).wait(23).to({_off:false,x:134,y:185.2},0).wait(2).to({x:105,y:172.2},0).to({_off:true},2).wait(24).to({_off:false,x:-79.9,y:98.2},0).to({_off:true},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(2).to({regX:238.1,regY:189.6,scaleX:0.21,scaleY:0.21,x:644.1,y:338.1},0).to({_off:true},2).wait(16).to({_off:false,regX:224.9,regY:226.1,scaleX:0.25,scaleY:0.25,x:465,y:263.1},0).wait(2).to({regX:238.2,regY:189.7,scaleX:0.25,scaleY:0.25,x:460.1,y:238.1},0).wait(2).to({x:450.1,y:229.1},0).wait(2).to({regX:238.3,regY:189.6,scaleX:0.24,scaleY:0.24,x:437.1,y:218.1},0).to({_off:true},2).wait(25).to({_off:false,regX:224.9,regY:226.1,scaleX:0.25,scaleY:0.25,x:287,y:183.2},0).wait(2).to({x:280,y:192.2},0).wait(1).to({x:276,y:194.1},0).wait(2).to({regX:238.2,regY:189.7,scaleX:0.25,scaleY:0.25,x:262.1,y:196.2},0).wait(2).to({x:240.1,y:201.1},0).wait(2).to({regX:238.3,regY:189.6,scaleX:0.24,scaleY:0.24,x:221.1,y:194.1},0).to({_off:true},2).wait(18).to({_off:false,regX:224.9,regY:226.1,scaleX:0.25,scaleY:0.25,x:13.1,y:120.2},0).wait(2).to({x:-1.9,y:117.1},0).wait(2).to({regX:238.2,regY:189.7,scaleX:0.25,scaleY:0.25,x:1.1,y:106.2},0).wait(2).to({x:-10.9,y:101.1},0).wait(2).to({regX:238.3,regY:189.6,scaleX:0.24,scaleY:0.24,x:-24.9,y:95.1},0).to({_off:true},2).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(2).to({x:617,y:315.2},0).to({_off:true},2).wait(20).to({_off:false,x:427,y:206.2},0).wait(2).to({x:417,y:201.2},0).to({_off:true},2).wait(32).to({_off:false,x:210,y:183.2},0).wait(2).to({x:199,y:179.2},0).to({_off:true},2).wait(24).to({_off:false,x:-28.9,y:83.2},0).wait(2).to({x:-36.9,y:80.2},0).to({_off:true},2).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(371,207.5,755.1,426.1);
// library properties:
lib.properties = {
	width: 747,
	height: 420,
	fps: 10,
	color: "#00CCFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;