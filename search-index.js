var searchIndex = {};
searchIndex['effect_monad'] = {"items":[[0,"","effect_monad","This module contains Purescript-inspired effects monads for rust",null,null],[3,"BoundEffect","","A struct representing two bound effects. Ideally, we would be able to a\nclosure here, but that's not possible without returning a boxed version of\nthe closure, which we don't want to do.",null,null],[4,"ResolveFn","","Helper enum for acting as a resolve function.",null,null],[13,"Const","","",0,null],[8,"EffectMonad","","Monad trait for effect functions",null,null],[10,"bind","","Sequentially composes two effect functions, passing\nthe output of the first to the input of the second",1,{"inputs":[{"name":"effectmonad"},{"name":"f"}],"output":{"name":"boundeffect"}}],[11,"bind_ignore_contents","","Sequentially composes the two effects, while ignoring the return values\nof the effects. Similar to the `>>` function in Haskell, but without\nreturning the value of the second Monad.",1,{"inputs":[{"name":"effectmonad"},{"name":"eb"}],"output":{"name":"boundeffect"}}],[11,"call_once","","",0,{"inputs":[{"name":"resolvefn"},{"name":"args"}],"output":{"name":"output"}}],[11,"from","","",0,{"inputs":[{"name":"resolvefn"},{"name":"t"}],"output":{"name":"self"}}],[11,"call_once","","",2,null],[14,"effect_map!","","",null,null]],"paths":[[4,"ResolveFn"],[8,"EffectMonad"],[3,"BoundEffect"]]};
initSearch(searchIndex);
