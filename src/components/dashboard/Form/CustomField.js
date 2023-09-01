// CustomField.js
import React from 'react';
import InputText from 'components/InputArea/TextInput';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import FileUpload from 'components/InputArea/FileUpload';

const CustomField = ({ component: FieldComponent, props }) => {
  switch (FieldComponent) {
    case AutoCompleteSelector:
    case InputText:
    case FileUpload:
      return <FieldComponent {...props} />;
    default:
      return null;
  }
};

export default CustomField;
