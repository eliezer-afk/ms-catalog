import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Product extends Model {
    private id!: number;
    private nombre!: string;
    private precio!: number;
    private activado!: boolean;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    activado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    sequelize,
    modelName: 'Product',
    tableName: 'productos',
    timestamps: false,
});

export default Product;