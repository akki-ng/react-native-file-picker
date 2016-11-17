'use strict'

const { NativeModules } = require('react-native');
const { FilePickerManager } = NativeModules;
const DEFAULT_OPTIONS = {
    title: 'File Picker',
    chooseFileButtonTitle: 'Choose File...'
};

module.exports = {
  ...FilePickerManager,
  showImagePicker: function showImagePicker(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    return FilePickerManager.showFilePicker({...DEFAULT_OPTIONS, ...options}, callback)
  }
}
