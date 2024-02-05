import User from "@/model/user";
import sequelize from "@/config/database";

export default async function POST(req, res) {
    try {
        // Konek ke database
        await sequelize.authenticate();
        // Sync Migration
        await sequelize.sync();

        // Insert data
        const query = await User.create({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
        });

        return res.status(201).json(query);

    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
}