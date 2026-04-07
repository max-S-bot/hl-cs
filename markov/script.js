

const preprocess = str => 
    str.toLowerCase().replaceAll(/[^a-z0-9]/g, ' ').trim().split(/\s+/g);

const mapRelations = words => {
    const map = {};
    for (let i = 0; i < words.length; i++)
        if (words[i] in map)
            if (words[i + 1] in map[words[i]])
                map[words[i]][words[i + 1]]++;
            else 
                map[words[i]][words[i + 1]] = 1;
        else 
            map[words[i]] = { 
                [words[i + 1]]: 1,
                [next]: function () {
                    
                },
            };
    return map;
};

const next = wObj => {
    const freqs = [];
    for (const w in wObj)
        for (let i = 0; i < wObj[w]; i++)
            freqs.push(w);
    return freqs[Math.floor(Math.random() * freqs.length)];
} 

const generate = (map, words) => len => {
    const output = [words[Math.floor(Math.random() * words.length)]];
    for (let i = 1; i < len; i++)
        output.push(next(map[output[output.length - 1]]));
    return output.join(' ');
}

const run = () => {
    const words = preprocess(text);
    const generator = generate(mapRelations(words), words);
    console.log(generator(50));
}

run();