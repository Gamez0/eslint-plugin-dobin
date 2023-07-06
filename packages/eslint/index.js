const {onCustomHook}= require("./customHook");
module.exports = {
  rules: {
    "custom-hooks": {
      create: onCustomHook,
    },
  },
};