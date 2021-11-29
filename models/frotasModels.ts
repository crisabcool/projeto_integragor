import db from '../db';
import Sequelize from 'sequelize';

export default db.define('tbl_frota', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    placa: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    km: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    acoes: {
        type: Sequelize.CHAR,
        allowNull: false
    }
});