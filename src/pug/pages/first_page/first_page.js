console.log("FirstPage important");


function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

for (let i = 0; i < 10; i++) {
    console.log(i);    
}

console.log(requireAll(require.context('../../components', true, /\.(js)$/)))
