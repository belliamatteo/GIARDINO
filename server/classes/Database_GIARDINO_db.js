// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_GIARDINO_db";
import UserModel from "../models/GIARDINO_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.GIARDINO_db.host +
        ":" +
        properties.GIARDINO_db.port +
        "//" +
        properties.GIARDINO_db.user +
        "@" +
        properties.GIARDINO_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.GIARDINO_db.name,
      properties.GIARDINO_db.user,
      properties.GIARDINO_db.password,
      {
        host: properties.GIARDINO_db.host,
        dialect: properties.GIARDINO_db.dialect,
        port: properties.GIARDINO_db.port,
        logging: false
      }
    );
    this.dbConnection_GIARDINO_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_GIARDINO_db;
  }
}

export default new Database();
