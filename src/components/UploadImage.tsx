import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import Icon from '@ant-design/icons';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React, { useState } from 'react';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

interface TextProps {
  text: string;
}

const UploadImage: React.FunctionComponent<TextProps> = (text) => {
  const uploadText = text
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const addImageSvg = () => (
    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.3759 26.1027H3.24218V6.96897H15.5424V4.23558H3.24218C1.73881 4.23558 0.508789 5.4656 0.508789 6.96897V26.1027C0.508789 27.606 1.73881 28.8361 3.24218 28.8361H22.3759C23.8792 28.8361 25.1093 27.606 25.1093 26.1027V13.8024H22.3759V26.1027ZM11.7293 21.7703L9.05062 18.5449L5.29222 23.3693H20.3258L15.4878 16.9322L11.7293 21.7703ZM25.1093 4.23558V0.135498H22.3759V4.23558H18.2758C18.2895 4.24925 18.2758 6.96897 18.2758 6.96897H22.3759V11.0554C22.3896 11.069 25.1093 11.0554 25.1093 11.0554V6.96897H29.2094V4.23558H25.1093Z"
        fill="#40A9FF"
      />
    </svg>
  );

  const AddImageIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={addImageSvg} {...props} />
  );

  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>
        <div><AddImageIcon /></div>
        <div>{uploadText.text}</div>
      </div>
    </div>
  );

  console.log(uploadText.text)
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploadImage;