import React, { useState, useRef } from 'react';
import QRCode from "react-qr-code";
import { QrReader } from 'react-qr-reader';



function B() {
  const [openScan, setOpenScan] = useState(false);
  const qrRef = useRef(null);
  const [data, setData] = useState('No result');

  const handleData = () => {
    setData(result?.text);

  }

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  }
  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  }
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  }
  return (
    <div>
      <div className='w-64 h-64'>
        <QRCode
          value={'https://www.google.com'}
        />
      </div>
      <div onClick={() => setOpenScan(!openScan)}>open</div>


      {/* {openScan &&
        <div>
          <QrReader className='w-64 h-64'
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}

          />
        </div>} */}

      <div onClick={onScanFile}>onScanFile</div>


      <QrReader
        ref={qrRef}
        delay={300}
        style={{ width: '100%' }}
        onError={handleErrorFile}
        onScan={handleScanFile}
        legacyMode
      />
      <p> {data}</p>
    </div >
  )
}

export default B