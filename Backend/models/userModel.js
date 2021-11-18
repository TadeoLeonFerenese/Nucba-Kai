const { Schema, model } = require("mongoose");
const UserSchema = Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: [true, "email is required"] },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

UserSchema,
  (methods.toJSON = function () {
    const { __v, _id, sub, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
  });

module.exports = model("User", UserSchema);
