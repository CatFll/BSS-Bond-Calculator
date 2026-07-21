LEVELS = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
]

REQ = [
    10,
    40,
    200,
    750,
    4000,
    15000,
    60000,
    270000,
    450000,
    1200000,
    2000000,
    4000000,
    7000000,
    15000000,
    120000000,
    450000000,
    1900000000,
    7500000000,
    15000000000,
    475000000000,
    4500000000000,
    95000000000000,
    5000000000000000,
    95000000000000000,
]

BOND = 0
PUPPYBEE = 0

const btn = document.getElementById('calc');

btn.addEventListener('click', () => {

    for (let i = 0; i < 25; i++)
    {
        const el = document.getElementById(`${i+1}`);
        const n = parseInt(el.value, 10);

        if (Number.isNaN(n)) return;

        LEVELS[i] = n;
    }

    const hv = document.getElementById('hive')
    const hvn = parseInt(hv.value, 10);

    const bnd = document.getElementById('bond')
    BOND = parseInt(bnd.value, 10)

    const ppyb = document.getElementById('puppybee')
    const isTrue = ppyb.checked

    if(isTrue)
    {
        PUPPYBEE = 2
    }
    else
    {
        PUPPYBEE = 0
    }

    document.getElementById('cost').innerHTML = calc(hvn)
});

function calc(hive)
{
    total = 0
    level_sum = 0

    if (hive > 25) return Infinity

    for (let level = 1; level < hive; level++)
    {
        level_sum += LEVELS[level - 1]
        total += REQ[level - 1] * level_sum
    }

    return Math.round((total) * 10000 / (10 + (BOND / 10) + PUPPYBEE))
}