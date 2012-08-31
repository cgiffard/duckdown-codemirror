CodeMirror.defineMode("duckdown", function(cmCfg, modeCfg) {
	return {
		startState: function() {
			return new Duckdown();
		},
		
		token: function(stream, state) {
			// This will get better.
			// I've got some changes in mind for Duckdown, so it can more
			// easily parse without a couple of the hacks here.
			
			state.clear();
			var tokens = state.tokenise(stream.string);
			state.clear();
			
			var result = tokens.reduce(function(prev,cur) {
				var val = (prev && prev.length ? " " : "");
				return val + state.parseToken(state,cur);
			}," ");
			
			stream.next();
			return result;
		}
	};

}, "text");

CodeMirror.defineMIME("text/duckdown", "duckdown");