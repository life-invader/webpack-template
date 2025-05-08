export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-class-pattern": null,
    "custom-property-pattern": [
      "^[a-z][a-zA-Z0-9]*$",
      {
        message: "Expected custom property name to be camelCase",
      },
    ],
  },
};
