import IMask from "imask";

export class FormValidation {
  selectors = {
    form: "[data-js-form]",
    inputMaskType: "[data-js-form-input-mask]",
    inputError: "[data-js-form-input-error]",
  };

  inputMasks = {
    name: {
      mask: /^[A-Za-zА-Яа-яЁё]/gi,
    },
    phone: {
      mask: "+{7} (000) 000-00-00",
    },
    age: {
      mask: Number,
      min: 18,
      max: 100,
    },
  };

  validators = {
    required: {
      fn: (input) => {
        if (["radio", "checkbox"].includes(input.type)) {
          return input.validity.valid;
        }

        return !!input.value;
      },
      getMessage: () => "Заполните поле",
    },
    minLength: {
      fn: (input) =>
        input.minLength
          ? Number(input.value.length) >= Number(input.minLength)
          : true,
      getMessage: (input) => `Значение короче ${input.minLength} символов`,
    },
    maxlength: {
      fn: (input) =>
        input.maxlength ? input.value.length <= input.maxlength : true,
      getMessage: (input) => `Значение длиннее ${input.maxlength} символов`,
    },
    tel: {
      fn: (input) => input.mask.unmaskedValue.length === 11,
      getMessage: () => "Некорректный номер телефона",
    },
    email: {
      fn: (input) =>
        /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(
          input.value,
        ),
      getMessage: () => "Некорректный email",
    },
  };

  validationRules = {
    tel: ["required", "tel"],
    email: ["required", "email"],
    default: ["required", "minLength"],
  };

  constructor() {
    this.initImask();
    this.bindEvents();
  }

  initImask = () => {
    const maskedInputs = [
      ...document.querySelectorAll(this.selectors.inputMaskType),
    ];
    maskedInputs.forEach((input) => {
      const maskType = input.dataset.jsFormInputMask;
      const mask = (this.mask = IMask(input, this.inputMasks[maskType]));
      input.mask = mask;
    });
  };

  manageErrors = (inputField, errorsMessages) => {
    const fieldErrorElement = inputField.parentElement.querySelector(
      this.selectors.inputError,
    );
    fieldErrorElement.innerHTML = errorsMessages
      .map((error) => `<span class="field__error">${error}</span>`)
      .join("");
  };

  getValidationRules = (inputField) => {
    const type = inputField.type;
    return this.validationRules[type] || this.validationRules.default;
  };

  validateField = (inputField) => {
    const inputValidationRules = this.getValidationRules(inputField);
    const errorsMessages = [];

    for (const rule of inputValidationRules) {
      const { fn, getMessage } = this.validators[rule];
      const isRuleCheckValid = fn(inputField);

      if (!isRuleCheckValid) {
        errorsMessages.push(getMessage(inputField));
        break;
      }
    }

    this.manageErrors(inputField, errorsMessages);
    const isInputValid = errorsMessages.length === 0;
    return isInputValid;
  };

  inputBlurHandler = (evt) => {
    const { target } = evt;

    const isFormField = target.closest(this.selectors.form);
    const isRequired = target.required;

    if (isFormField && isRequired) {
      this.validateField(target);
    }
  };

  inputChangeHandler = (evt) => {
    const { target } = evt;
    const isRequired = target.required;
    const isToggleType = ["radio", "checkbox"].includes(target.type); // radio or checkbox

    if (isRequired && isToggleType) {
      this.validateField(target);
    }
  };

  formSubmitHandler = (evt) => {
    const { target } = evt;
    const isFormElement = target.matches(this.selectors.form);

    if (!isFormElement) {
      return;
    }

    const requiredInputElements = [...target.elements].filter(
      ({ required }) => required,
    );

    const invalidInputElements = requiredInputElements.filter((input) => {
      return !this.validateField(input);
    });

    if (invalidInputElements.length) {
      invalidInputElements[0].focus();
      evt.preventDefault();
    }
  };

  bindEvents() {
    document.addEventListener("submit", this.formSubmitHandler);
    document.addEventListener("blur", this.inputBlurHandler, true);
    document.addEventListener("change", this.inputChangeHandler);
  }
}
