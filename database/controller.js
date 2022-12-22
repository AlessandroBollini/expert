const db = require('./model');

exports.findUser = async (wallet) => {
    let user;
    await db.Users.findAll({ where: { wallet: wallet } })
        .then(data => {
            user = data;
        })
        .catch(err => {
            console.error(err);
        });
    return user[0].dataValues;
}

exports.updateUser = async (id, level) => {
    await db.Users.update({ level: level }, { where: { id: id } })
        .then(() => {
            console.log("User updated.");
        })
        .catch(err => {
            console.error(err);
        });
}

exports.hasUpgraded = async (wallet, n) => {
    const user = await this.findUser(wallet);
    const levelLenght = user.level.length;
    if (levelLenght > n) {
        return 1;
    }
    return 0;
}