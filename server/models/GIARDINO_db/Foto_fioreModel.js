import Foto_fioreModelGenerated from "./generated/Foto_fioreModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await Foto_fioreModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Foto_fioreModelGenerated,
  ...customModel
};
