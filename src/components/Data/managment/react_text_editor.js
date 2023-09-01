import React, { useRef, useMemo, useState } from 'react';
import JoditEditor from 'jodit-react';
const ReactTextEditor = ({ props }) => {
  const [desc, setDesc] = useState('');
  const editor = useRef();
  const config = useMemo(
    () => ({
      placeholder: 'Start Writing here',
      height: '450px',
      width: '100%',
      colorPickerDefaultTab: 'text',
      enableDragAndDropFileToEditor: true,
      buttons: [
        'source',
        'bold',
        'preview',
        '|',
        'italic',
        'underline',
        '|',
        'ul',
        'ol',
        '|',
        'font',
        'fontsize',
        'brush',
        'paragraph',
        '|',
        'image',
        'table',
        'link',
        '|',
        'left',
        'center',
        'right',
        'justify',
        '|',
        'undo',
        'redo',
        '|',
        'hr',
        'lineHeight',
        'fullsize'
      ],
      autofocus: true,
      uploader: { insertImageAsBase64URI: true },
      removeButtons: ['file', 'eraser'],
      showXPathInStatusbar: false,
      showCharsCounter: false,
      showWordsCounter: false,
      toolbarAdaptive: true,
      toolbarSticky: true
      //   style: {
      //     background: '#27272E',
      //     color: '#fff'
      //   }
    }),
    []
  );

  const handleSUbmit = () => {
    props.setFieldValue('editorContent', editor.current.value);
    props.setFieldTouched('editorContent', true);
  };

  return <JoditEditor ref={editor} config={config} value={desc} onChange={handleSUbmit} />;
};

export default React.memo(ReactTextEditor);
