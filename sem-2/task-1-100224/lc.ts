function isIsomorphic(s: string, t: string): boolean {
    interface LooseObject {
        [key: string]: any
    }
    
    const hash_t_s: LooseObject = {};
    const hash_t_t: LooseObject = {};

    for (let i=97; i<122; i++) {
        hash_t_s[String.fromCharCode(i)] = [];
        hash_t_t[String.fromCharCode(i)] = [];
    }

    for (let i=0; i<s.length; i++) {
        hash_t_s[s[i]].push(s[i]);
        hash_t_t[t[i]].push(t[i]);
    }

    return hash_t_s.values() === hash_t_t.values()
};

isIsomorphic('ac', 'sv');