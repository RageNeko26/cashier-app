import User from "@/model/user";
import sequelize from "@/config/database";
import bcrypt from "bcrypt";

export default async function POST(req, res) {
    try {
        // Konek ke database
        await sequelize.authenticate();
        // Sync Migration
        await sequelize.sync();

        // Ambil request body pada field password
        const pass = req.body.password

        // Salt untuk mengamankan password
        const salt = bcrypt.genSaltSync(10);
        const hashed = bcrypt.hashSync(pass, salt);

        // Insert data
        const query = await User.create({
            username: req.body.username,
            password: hashed,
            role: req.body.role,
        });

        return res.status(201).json(query);

    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
}