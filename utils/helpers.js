const randomStat = () => Math.floor(Math.random() * 20) + 1;

const randomClass = () => {
    const classes = ['Mage', 'Alchemist', 'Fighter', 'Healer', 'Paladin'];
    return classes[Math.floor(Math.random() * classes.length)];
};

module.exports = { randomStat, randomClass };
