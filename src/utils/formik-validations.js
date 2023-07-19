import * as Yup from 'yup';

const FILE_SIZE = 1;

/**
 * Validates an object value, ensuring it is not empty.
 * @param {string} [val='Mandatory Selection'] - The validation error message.
 * @returns {Yup.ObjectSchema} The Yup object validation schema.
 */

export const objectValidator = (val = 'Mandatory Selection', required) =>
  required ? Yup.object().typeError().required(val) : Yup.object().typeError();

/**
 * Creates a validation schema for arrays using Yup.
 *
 * @param {string} [val='Mandatory Selection'] - The error message to display when the array is empty.
 * @param {boolean} required - The value that determines wether the validation is required or not.
 * @param {number} [min=null] - The minimum number of items required in the array.
 * @param {number} [max=null] - The maximum number of items allowed in the array.
 * @returns {Yup.ArraySchema} The validation schema for arrays.
 */

export const arrayValidator = (val = 'Mandatory Selection', required, min = null, max = null) => {
  let ARRAY_VALIDATION = Yup.array();

  if (min && max) {
    ARRAY_VALIDATION = ARRAY_VALIDATION.min(min, `You must at least select a minimum value of ${min}`).max(
      max,
      `You must at least select a maximum value of ${max}`
    );
  }
  if (min && !max) {
    ARRAY_VALIDATION = ARRAY_VALIDATION.min(min, `You must at least select a minimum value of ${min}`);
  }
  if (!min && max) {
    ARRAY_VALIDATION = ARRAY_VALIDATION.max(max, `You must at least select a maximum value of ${max}`);
  }
  if (required) return ARRAY_VALIDATION.required(val);
  return ARRAY_VALIDATION;
};

/**
 * Validates a string value, optionally specifying minimum and maximum length constraints.
 * @param {string} msg - The validation error message.
 * @param {boolean} required - The value that determines wether the validation is required or not.
 * @param {number} [min=null] - The minimum length constraint.
 * @param {number} [max=null] - The maximum length constraint.
 * @returns {Yup.StringSchema} The Yup string validation schema.
 */

export const stringValidator = (msg, required, min = null, max = null) => {
  let STRING_VALIDATION = Yup.string().trim();
  if (min && max) {
    STRING_VALIDATION = STRING_VALIDATION.min(min, `The value must be more than ${min} characters`).max(
      max,
      `The value must not be less than ${max} characters`
    );
  }
  if (min && !max) {
    STRING_VALIDATION = STRING_VALIDATION.min(min, `The value must be more than ${min} characters`);
  }
  if (!min && max) {
    STRING_VALIDATION = STRING_VALIDATION.max(max, `The value must not be more than ${max} characters`);
  }
  if (required) return STRING_VALIDATION.required(msg);
  return STRING_VALIDATION;
};

/**
 * Validates a numeric value, optionally specifying minimum and maximum constraints.
 * @param {string} msg - The validation error message.
 * @param {boolean} required - The value that determines wether the validation is required or not.
 * @param {number} [min=null] - The minimum value constraint.
 * @param {number} [max=null] - The maximum value constraint.
 * @returns {Yup.NumberSchema} The Yup number validation schema.
 */

export const numberValidator = (msg, required, min = null, max = null) => {
  let NUMBER_VALIDATION = Yup.number();
  if (min !== null && max !== null) {
    NUMBER_VALIDATION = NUMBER_VALIDATION.min(min, `The value must be more than ${min}`).max(max, `The value must not be less than ${max}`);
  }
  if (min !== null && !max) {
    NUMBER_VALIDATION = NUMBER_VALIDATION.min(min, `The value must be more than ${min}`);
  }
  if (!min && max !== null) {
    NUMBER_VALIDATION = NUMBER_VALIDATION.max(max, `The value must not be more than ${max}`);
  }
  if (required) return NUMBER_VALIDATION.required(msg);
  return NUMBER_VALIDATION;
};

/**
 * Validates a file value, ensuring it is not empty and meets size and format constraints.
 * @param {string} [msg='Please provide an image input'] - The validation error message.
 * @param {string[]} format - The allowed file formats.
 * @returns {Yup.MixedSchema} The Yup file validation schema.
 * @throws {Error} Throws an error if the format parameter is not provided or contains non-string values.
 */

export const fileValidator = (format, msg = 'Please provide an image input') => {
  if (format.length === 0) {
    throw new Error('Please provide options for the file format');
  }

  if (format.some((val) => typeof val !== 'string')) {
    throw new Error('format values must be string values');
  }

  return Yup.mixed()
    .required(msg)
    .test(
      'FILE_SIZE',
      'Uploaded file is too big. File size must not exceed 1MB',
      (value) => value && value.size / (1024 * 1024) <= FILE_SIZE
    )
    .test('FILE_FORMAT', 'Uploaded file has unsupported format.', (value) => value && format.includes(value.type));
};

/**
 * A date validator function using Yup.
 * @param {string} msg - The error message to display if the date is not provided.
 * @param {boolean} required - The value that determines wether the validation is required or not.
 * @returns {Yup.DateSchema} The Yup date validation schema.
 */

export const dateValidator = (msg, required) => (required ? Yup.date().required(msg) : Yup.date());
