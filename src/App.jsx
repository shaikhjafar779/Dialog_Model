import { useState } from 'react';
import './App.css'
import DialogWindow from './components/DialogWindow/DialogWindow'
import Icon from './assets/react.svg'


function App() {
  const [visible, setVisible] = useState(false);
  const [dialogType, setDialogType] = useState('basic');

  const getDialogConfig = () => {
    const baseConfig = {
      header: {
        icon: Icon,
        title: 'Dialog Title',
        buttons: [{ label: 'Button 1' }, { label: 'Button 2' }]
      },
      footer: {
        buttons: [
          { label: 'OK' },
          { label: 'Cancel', onClick: () => setVisible(false) }
        ],
        info: 'Optional footer info text',
      },
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    };

    switch (dialogType) {
      case 'full-modal':
        return baseConfig;

      case 'header':
        baseConfig.header.buttons = [
          { label: 'Action 1', onClick: () => alert('Action 1') },
          { label: 'Action 2', onClick: () => alert('Action 2') },
          { label: 'Action 3', onClick: () => alert('Action 3 ') },
          { label: 'Action 4', onClick: () => alert('Action 4') },
        ];
        return {
          header: baseConfig.header,
        };

      case 'content':
        return {
          content: baseConfig.content,
        };

      case 'footer':
        baseConfig.footer.buttons = [
          { label: 'Option 1' },
          { label: 'Option 2' },
          { label: 'Cancel', onClick: () => setVisible(false) }
        ]
        return {
          footer: baseConfig.footer,
        };

      default:
        return baseConfig;
    }
  };

  return (
    <div>
      <h2>Dialog Modal</h2>
      <div className='select_dialog'>
        <select onChange={(e) => setDialogType(e.target.value)}>
          <option value="full-modal">Full Modal</option>
          <option value="header">Header</option>
          <option value="content">Content</option>
          <option value="footer">Footer</option>
        </select>
        <button onClick={() => setVisible(true)}>Show Dialog</button>
      </div>

      <DialogWindow
        visible={visible}
        onClose={() => setVisible(false)}
        header={getDialogConfig().header}
        footer={getDialogConfig().footer}
        content={getDialogConfig().content}
      >
      </DialogWindow>
    </div>
  );
}

export default App
