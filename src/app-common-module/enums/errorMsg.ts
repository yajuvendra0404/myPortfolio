
export const MESSAGE_KEYS = {
  propertyName: 'propertyName',
  comparisonValue: 'comparisonValue',
  minLength: 'minLength',
  maxLength: 'maxLength',
  totalLength: 'totalLength',
  propertyValue: 'propertyValue',
  collectionIndex: 'collectionIndex',
};

export const DEFAULT_MESSAGES: {[key:string]: string} = {
  email:`invalid email address`,
  noSpaceAllowed:`'Space is not allowed in ${MESSAGE_KEYS.propertyName}'.`,
  required: `'${MESSAGE_KEYS.propertyName}' is required.`,
  length: `The length of ‘${MESSAGE_KEYS.propertyName}’ must be between {{${MESSAGE_KEYS.minLength}}} and {{${MESSAGE_KEYS.maxLength}}} characters. You entered {{${MESSAGE_KEYS.totalLength}}} characters.`,
  minLength: `The length of ‘${MESSAGE_KEYS.propertyName}’ must be at least be {{${MESSAGE_KEYS.minLength}}} characters. You entered {{${MESSAGE_KEYS.totalLength}}} characters.`,
  maxLength: `The length of ‘${MESSAGE_KEYS.propertyName}’ must be {{${MESSAGE_KEYS.maxLength}}} characters or fewer. You entered {{${MESSAGE_KEYS.totalLength}}} characters.`,
  lessThan: `${MESSAGE_KEYS.propertyName} must be less than {{${MESSAGE_KEYS.comparisonValue}}}.`,
  greaterThan: `${MESSAGE_KEYS.propertyName} must be greater than {{${MESSAGE_KEYS.comparisonValue}}}.`,
};
