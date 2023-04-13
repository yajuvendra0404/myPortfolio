
export const MESSAGE_KEYS = {
  propertyName: 'propertyName',
  comparisonValue: 'comparisonValue',
  minLength: 0,
  maxLength: 0,
  totalLength: 'totalLength',
  propertyValue: 'propertyValue',
  collectionIndex: 'collectionIndex',
};

export const DEFAULT_MESSAGES: {[key:string]: string} = {
  email:`invalid email address`,
  noSpaceAllowed:`'Space is not allowed in ${MESSAGE_KEYS.propertyName}'.`,
  required: `'${MESSAGE_KEYS.propertyName}' is required.`,
  length: `The length of ‘${MESSAGE_KEYS.propertyName}’ must be between {{${MESSAGE_KEYS.minLength}}} and {{${MESSAGE_KEYS.maxLength}}} characters. You entered {{${MESSAGE_KEYS.totalLength}}} characters.`,
  minlength: `The length of ‘${MESSAGE_KEYS.propertyName}’ must be at least be {{${MESSAGE_KEYS.minLength}}} characters. You entered {{${MESSAGE_KEYS.totalLength}}} characters.`,
  maxlength: `The length of ‘${MESSAGE_KEYS.propertyName}’ must be {{${MESSAGE_KEYS.maxLength}}} characters or fewer. You entered {{${MESSAGE_KEYS.totalLength}}} characters.`,
  lessthan: `${MESSAGE_KEYS.propertyName} must be less than {{${MESSAGE_KEYS.comparisonValue}}}.`,
  greaterthan: `${MESSAGE_KEYS.propertyName} must be greater than {{${MESSAGE_KEYS.comparisonValue}}}.`,
};
