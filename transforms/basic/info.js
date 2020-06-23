const setProperty = require('../utils/setProperty')('info');
const getContact = require('./contact');
const license = require('./license');

const getInfo = (options = {}) => ({
  title: setProperty(options, 'title', {
    type: 'string',
    required: true,
  }),
  description: setProperty(options, 'description', {
    type: 'string',
    defaultValue: 'Add your description',
  }),
  contact: options.contact ? getContact(options.contact) : undefined,
  license: options.license ? license(options.license) : undefined,
  termsOfService: setProperty(options, 'termsOfService', {
    type: 'string',
    defaultValue: '',
  }),
  version: setProperty(options, 'version', {
    type: 'string',
    required: true,
  }),
});

module.exports = getInfo;
