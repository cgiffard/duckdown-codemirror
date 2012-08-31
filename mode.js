CodeMirror.defineMode("duckdown", function(cmCfg, modeCfg) {
	return {
		startState: function() {
			return new Duckdown();
		},
		
		token: function(stream, state) {
			//state.clear();
			//state.tokenise(stream.string);
			//state.parse();
			//console.log(state.tokens);
			//console.log(state.compile());
			console.log("string:",stream.string);
			
			state.clear();
			console.log(state.parseToken("Stuff:",state));
			
			stream.next();
			return ["header","comment","quote","string","hr","link"][Math.floor(Math.random()*6)];
		}
	};

}, "text");

CodeMirror.defineMIME("text/duckdown", "duckdown");