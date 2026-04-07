

const preprocess = str => 
    str.toLowerCase().replaceAll(/[^a-z0-9]/g, ' ').trim().split(/\s+/g);

const mapRelations = words => {
    const map = {};
    for (let i = 0; i < words.length; i++)
        if (words[i] in map)
            map[words[i]].push(words[i + 1]);
        else 
            map[words[i]] = [words[i + 1]];
    return map;
};

const next = freqs => 
    freqs[Math.floor(Math.random() * freqs.length)];

const generate = (map, words) => len => {
    const output = [words[Math.floor(Math.random() * words.length)]];
    for (let i = 1; i < len; i++)
        output.push(next(map[output[output.length - 1]]));
    return output.join(' ');
}

const run = () => {
    const words = preprocess(text); // eslint-disable-line
    const generator = generate(mapRelations(words), words);
    console.log(generator(50));
}

run();