/* Kerning between the letters */
const kerningMap = {
    a: {
        c: { kern: -0.035 },
        g: { kern: -0.035 },
        s: { kern: -0.010 },
        t: { kern: -0.065 },
        y: { kern: -0.100 },
        u: { kern: -0.025 },
        v: { kern: -0.090 },
        w: { kern: -0.045 }
    },
    b: {
        a: { kern: -0.015 }
    },
    c: {
        a: { kern: -0.025 },
        y: { kern: -0.035 }
    },
    d: {
        a: { kern: -0.035 },
        o: { kern: 0.005 },
        v: { kern: -0.035 },
        y: { kern: -0.050 }
    },
    f: {
        a: { kern: -0.045 }
    },
    g: {
        a: { kern: -0.025 },
        g: { kern: 0.005 },
        o: { kern: 0.005 },
        ',': { kern: -0.015 }
    },
    i: {
        o: { kern: -0.001 }
    },
    j: {
        a: { kern: -0.020 }
    },
    k: {
        o: { kern: -0.035 },
        s: { kern: -0.035 }
    },
    l: {
        y: { kern: -0.085 },
        w: { kern: -0.055 }
    },
    p: {
        a: { kern: -0.060 },
        t: { kern: -0.010 }
    },
    r: {
        t: { kern: -0.005 },
        v: { kern: -0.015 },
        y: { kern: -0.025 }
    },
    s: {
        a: { kern: -0.015 },
        t: { kern: -0.010 },
        v: { kern: -0.015 },
    },
    t: {
        a: { kern: -0.065 },
        c: { kern: -0.035 },
        o: { kern: -0.025 },
        w: { kern: 0.010 },
        y: { kern: 0.010 }
    },
    o: {
        t: { kern: -0.015 },
        v: { kern: -0.035 },
        w: { kern: -0.020 },
        x: { kern: -0.075 },
        y: { kern: -0.050 }
    },
    v: {
        a: { kern: -0.075 },
        o: { kern: -0.035 },
        g: { kern: -0.025 },
    },
    w: {
        a: { kern: -0.065 },
        o: { kern: -0.035 }
    },
    y: {
        '-': { kern: -0.075 },
        '—': { kern: -0.075 },
        '–': { kern: -0.075 },
        a: { kern: -0.080 },
        c: { kern: -0.050 },
        o: { kern: -0.050 },
        s: { kern: -0.035 },
        t: { kern: 0.010 }
    },
    '9': {
        '.': { kern: -0.025 }
    },
    '’': {
        a: { kern: -0.085 }
    },
    '-': {
        t: { kern: -0.075 }
    },
    '–': {
        t: { kern: -0.075 }
    },
    '—': {
        t: { kern: -0.075 }
    }
};

export default kerningMap