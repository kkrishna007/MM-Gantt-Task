import React, { useState, useEffect } from 'react';
import Header from './Header';
import Leftsidebar from './Leftsidebar';
import icon__star from '../images/icons1.svg';
import cv1 from '../images/cv1.svg';
import cv2 from '../images/cv2.svg';
import cv3 from '../images/cv3.svg';
import cv4 from '../images/cv4.svg';
import cv5 from '../images/cv5.svg';
import cv6 from '../images/cv6.svg';
import cv7 from '../images/cv7.svg';
import cv8 from '../images/cv8.svg';
import cv9 from '../images/cv9.svg';
import cv12 from '../images/cv12.svg';
import cv13 from '../images/cv13.svg';
import cv14 from '../images/cv14.svg';
import cv15 from '../images/cv15.svg';
import cv16 from '../images/cv16.svg';
import cv17 from '../images/cv17.svg';
import cv18 from '../images/cv18.svg';
import cv19 from '../images/cv19.svg';
import cv20 from '../images/cv20.svg';
import calenddd from '../images/oo.jpg';
import gantrmappp from '../images/cdffv.jpg';

import { Modal, Box, Button, TextField, Typography, Select, MenuItem } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import SplitPane from 'react-split-pane';
import "./Ganttchatvtwo.css";
import { SketchPicker } from 'react-color';
import SplitIcon from '../images/SplitIcon';


export default function Ganttchatvtwo() {
  const [open, setOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState({ 0: true });
  const [newProject, setNewProject] = useState({
    projectNumber: '',
    projectName: '',
    managingCompany: 'OSB',
    ownerRepresentative: '',
    category: '',
    description: '',
  });
  const [data, setData] = useState([
    {
      id: '1',
      wbsId: '2024',
      wbsName: ' Builder Property',
      originalDuration: '23',
      status: 'In Progress',
      startDate: '2023-01-01',
     
      childRows: [
        { id: '1.1', wbsId: 'ID1', wbsName: 'Task 1', originalDuration: '25', status: 'Completed', startDate: '2023-01-10', color: '#ffcccb' },
        { id: '1.2', wbsId: 'ID1', wbsName: 'Task 2', originalDuration: '45', status: 'In Progress', startDate: '2023-02-01', color: '#b0e57c' },
        { id: '1.3', wbsId: 'ID1', wbsName: 'Task 3', originalDuration: '87', status: 'In Progress', startDate: '2023-02-01', color: '#a0c4ff' },
        { id: '1.4', wbsId: 'ID1', wbsName: 'Task 4', originalDuration: '32', status: 'In Progress', startDate: '2023-02-01', color: '#ffc0cb' },
      ],
      color: '#ffffff',
      
    },
    {
      id: '2',
      wbsId: '2024',
      wbsName: ' Builder Property',
      originalDuration: '23',
      status: 'In Progress',
      startDate: '2023-01-01',
     
      childRows: [
        { id: '1.2', wbsId: 'ID1', wbsName: 'Task 2', originalDuration: '32 ', status: 'In Progress', startDate: '2023-02-01', color: '#ffc0cb' },
      ],
    },
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = () => {
    console.log(newProject);
    // Add new project logic here
    handleClose();
  };

  const toggleExpandRow = (index) => {
    setExpandedRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleDataChange = (e, rowIndex, childIndex = null) => {
    const { name, value } = e.target;
    setData((prevData) => {
      const newData = [...prevData];
      if (childIndex === null) {
        newData[rowIndex][name] = value;
      } else {
        newData[rowIndex].childRows[childIndex][name] = value;
      }
      return newData;
    });
  };

  const addRow = () => {
    setData((prevData) => [
      ...prevData,
      {
        id: `${prevData.length + 1}`,
        wbsId: '',
        wbsName: '',
        originalDuration: '',
        status: '',
        startDate: '',
      
        childRows: [],
      },
    ]);
  };

  const removeRow = (rowIndex) => {
    setData((prevData) => prevData.filter((_, index) => index !== rowIndex));
  };

  const addChildRow = (rowIndex) => {
    setData((prevData) => {
      const newData = [...prevData];
      const newChildRow = {
        id: `${newData[rowIndex].id}.${newData[rowIndex].childRows.length + 1}`,
        wbsId: '',
        wbsName: '',
        originalDuration: '',
        status: '',
        startDate: '',
        endDate: '',
      };
      newData[rowIndex].childRows.push(newChildRow);
      return newData;
    });
  };

  const removeChildRow = (rowIndex, childIndex) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex].childRows = newData[rowIndex].childRows.filter((_, index) => index !== childIndex);
      return newData;
    });
  };

  const printDiv = (divId) => {
    const printContents = document.getElementById(divId).innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [colorPickerOpen, setColorPickerOpen] = useState({});
  

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const openColorPicker = (rowIndex, childIndex) => {
    setColorPickerOpen(prevState => ({
      ...prevState,
      [`${rowIndex}-${childIndex}`]: true
    }));
  };

  const closeColorPicker = (rowIndex, childIndex) => {
    setColorPickerOpen(prevState => ({
      ...prevState,
      [`${rowIndex}-${childIndex}`]: false
    }));
  };

  const handleChildColorChange = (color, rowIndex, childIndex) => {
    console.log(`Changing color for row ${rowIndex}, child ${childIndex} to ${color.hex}`);
    setData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex].childRows[childIndex].color = color.hex;
      return newData;
    });
  };
  useEffect(() => {
    console.log('Data updated:', data);
  }, [data]);

  const [textColorPickerOpen, setTextColorPickerOpen] = useState(false);
  const [selectedTextColor, setSelectedTextColor] = useState('#000000');

  const handleTextColorChange = (color) => {
    setSelectedTextColor(color.hex);
    setData(prevData => prevData.map(row => ({
      ...row,
      childRows: row.childRows.map(childRow => ({
        ...childRow,
        textColor: color.hex
      }))
    })));
  };

  const [fontSizeIndex, setFontSizeIndex] = useState(0);
  const fontSizes = [12,14,16,18]; // Assuming 16px is the original size
  const toggleFontSize = () => {
    setFontSizeIndex((prevIndex) => (prevIndex + 1) % fontSizes.length);
  };

  const [imageFitMode, setImageFitMode] = useState('normal');
  const fitImageToHeight = () => {
    setImageFitMode('height');
  };
  
  const fitImageToWidth = () => {
    setImageFitMode('width');
  };

  const enterFullscreen = () => {
    const element = document.documentElement; // Change this to a specific element if needed
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
  };
  
  const exitFullscreen = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement ||
        document.mozFullScreenElement || document.msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const CustomResizer = ({ split, style }) => {
  return (
    <div
      style={{
        ...style,
        position: 'relative',
        width: '11px',
        margin: '0 -5px',
        cursor: 'col-resize',
        height: '100%',
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '5px',
          width: '1px',
          height: '100%',
          background: '#379FFF',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '-3px',
          top: '20px',
          width: '18px',
          height: '18px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#379FFF',
          borderRadius: '50%',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
        }}
      >
        <SplitIcon />
      </div>
    </div>
  );
};

  return (
    <>
      <Header />
      <div className="mainpage">
        <div className="row">
          <div className="col-md-1">
            <Leftsidebar />
          </div>
          <div className="col-md-11">
            <div className="seaech__box___00 s__0987gg">
              <div className='top__cv__showing'>
                <ul>
                {/* <ul className="top-cv-list"> */}
                  <li onClick={addRow}><span> <img src={cv1} alt="child-icon" /></span></li>
                  <li onClick={addRow}><span> <img src={cv2} alt="child-icon" /></span></li>
                  <li><span> <img src={cv3} alt="child-icon" /></span></li>
                  <li><span> <img src={cv4} alt="child-icon" /></span></li>
                  <li>
                    <span onClick={() => setShowColorPicker(!showColorPicker)}>
                      <img src={cv5} alt="child-icon" />
                    </span>
                    {showColorPicker && (
                      <div style={{ position: 'absolute', zIndex: '2' }}>
                        <SketchPicker color={selectedColor} onChange={handleColorChange} />
                        <button onClick={() => setShowColorPicker(false)}>Close</button>
                      </div>
                    )}
                  </li>
                  <li>
                    <span onClick={() => setTextColorPickerOpen(!textColorPickerOpen)}>
                      <img src={cv6} alt="text-color-icon" />
                    </span>
                    {textColorPickerOpen && (
                      <div style={{ position: 'absolute', zIndex: '2' }}>
                        <SketchPicker
                          color={selectedTextColor}
                          onChange={handleTextColorChange}
                        />
                        <button onClick={() => setTextColorPickerOpen(false)}>Close</button>
                      </div>
                    )}
                  </li>
                  <li onClick={toggleFontSize}>
                    <span>
                      <img src={cv7} alt="font-size-icon" />
                    </span>
                  </li>
                  <li><span> < img src={cv8} alt="child-icon" /></span></li>
                  <li><span> <img src={cv9} alt="child-icon" /></span></li>
                  <li><span> <img src={cv12} alt="child-icon" /></span></li>
                  <li onClick={fitImageToWidth}><span> <img src={cv18} alt="fit-to-height-icon" /></span></li>
                  <li onClick={fitImageToHeight}><span> <img src={cv17} alt="fit-to-width-icon" /></span></li>
                  {/* <li><span> <img src={cv15} alt="child-icon" /></span></li>
                  <li><span> <img src={cv16} alt="child-icon" /></span></li> */}
                  <li onClick={enterFullscreen}><span> <img src={cv14} alt="Enter Fullscreen" /></span></li>
                  <li onClick={exitFullscreen}><span> <img src={cv13} alt="Enter Fullscreen" /></span></li>
                  <li><span> <img src={cv19} alt="child-icon" /></span></li>
                  <li className='clicktoopendropdown'><span> <img src={cv20} alt="child-icon" /></span>
                    <div className='submenu__000114400'>
                      <ul>
                        <li onClick={() => printDiv('printableTable')}>Print tabular view</li>
                        <li  onClick={() => printDiv('printableTable2')}>Print chat view</li>
                        <li  onClick={() => printDiv('printableTable3')}>Print Full PDF</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            
            <div className="final__bg__09 s__bggg list__table__0900">
              <div className="table__and__content">
                <div className="row"  id="printableTable3">
                <SplitPane 
                  split="vertical"
                  defaultSize={600}
                  primary="second"
                  style={{ height: 'calc(100vh - 100px)' }}
                  resizerStyle={{ width: '1px', background: '#379FFF' }}
                  paneStyle={{ overflow: 'auto' }}
                  resizer={CustomResizer}
                >
                  <div className="col-md-8" >
                    <div id="printableTable">
                      <table className="table">
                        <thead>
                          <tr className="tt__09">
                            <th width="5%"></th>
                            <th width="50%">ID</th>
                            <th>Activities</th>
                            <th>Original Duration</th>
                            <th>Status</th>
                            <th>Start Date</th>
                          
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((row, index) => (
                            <React.Fragment key={row.id}>
                              <tr className='s__0154541545' style={{ 
                                backgroundColor: selectedColor,
                                fontSize: `${fontSizes[fontSizeIndex]}px`
                              }}>
                                <td className='set__icon__iuuuu'>
                                    <span className='border__09ww'></span>
                                  <img
                                    src={icon__star}
                                    onClick={() => toggleExpandRow(index)}
                                    style={{ cursor: 'pointer' }}
                                    alt="expand-icon"
                                  />
                                </td>
                                <td >
                                 2024
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    name="wbsName"
                                    value={row.wbsName}
                                    onChange={(e) => handleDataChange(e, index)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    name="originalDuration"
                                    value={row.originalDuration}
                                    onChange={(e) => handleDataChange(e, index)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    name="status"
                                    value={row.status}
                                    onChange={(e) => handleDataChange(e, index)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="date"
                                    name="startDate"
                                    value={row.startDate}
                                    onChange={(e) => handleDataChange(e, index)}
                                  />
                                </td>
                              </tr>

                              {expandedRows[index] && (
                                <tr className='s__098g45456 list__0001335' key={`${row.id}-child`}>
                                  <td colSpan={7}>
                                    <table className="table">
                                      <tbody>
                                      {row.childRows.map((childRow, childIndex) => (
                                        <tr
                                          className='s__border__lefttt child-row custom-child-row'
                                          key={childRow.id}
                                          style={{
                                            backgroundColor: childRow.color || '#ffffff',
                                            color: childRow.textColor || selectedTextColor,
                                            fontSize: `${fontSizes[fontSizeIndex]}px`
                                          }}
                                        >
                                          <td className='s___left__2255555'>
                                            ID1
                                          </td>
                                          <td></td>
                                          <td>
                                            <input
                                              type="text"
                                              name="wbsName"
                                              value={childRow.wbsName}
                                              onChange={(e) => handleDataChange(e, index, childIndex)}
                                              style={{ 
                                                color: childRow.textColor || selectedTextColor,
                                                fontSize: `${fontSizes[fontSizeIndex]}px`,
                                                backgroundColor: 'transparent'
                                              }}
                                            />
                                          </td>
                                            <td>
                                              <input
                                                type="text"
                                                name="originalDuration"
                                                value={childRow.originalDuration}
                                                onChange={(e) => handleDataChange(e, index, childIndex)}
                                                style={{ 
                                                  color: childRow.textColor || selectedTextColor,
                                                  fontSize: `${fontSizes[fontSizeIndex]}px`
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                name="status"
                                                value={childRow.status}
                                                onChange={(e) => handleDataChange(e, index, childIndex)}
                                                style={{ 
                                                  color: childRow.textColor || selectedTextColor,
                                                  fontSize: `${fontSizes[fontSizeIndex]}px`
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="date"
                                                name="startDate"
                                                value={childRow.startDate}
                                                onChange={(e) => handleDataChange(e, index, childIndex)}
                                                style={{ 
                                                  color: childRow.textColor || selectedTextColor,
                                                  fontSize: `${fontSizes[fontSizeIndex]}px`
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <div style={{ position: 'relative' }}>
                                                <span
                                                  onClick={() => openColorPicker(index, childIndex)}
                                                  style={{
                                                    display: 'inline-block',
                                                    backgroundColor: childRow.color || '#ffffff',
                                                    width: '24px',
                                                    height: '24px',
                                                    cursor: 'pointer',
                                                    border: '1px solid #ccc',
                                                  }}
                                                />
                                                {colorPickerOpen[`${index}-${childIndex}`] && (
                                                  <div style={{ position: 'absolute', zIndex: '1000' }}>
                                                    <SketchPicker
                                                      color={childRow.color || '#ffffff'}
                                                      onChange={(color) => handleChildColorChange(color, index, childIndex)}
                                                    />
                                                    <button onClick={() => closeColorPicker(index, childIndex)}>Close</button>
                                                  </div>
                                                )}
                                              </div>
                                            </td>
                                          </tr>
                                        ))}
                                        <Button className='s__listttgg' onClick={() => addChildRow(index)}>Add Activities</Button>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>


                      
                    </div>
                    <Button onClick={addRow}>Add WBS</Button>
                  </div>
                  <div className="col-md-4">
                    <div id="printableTable2" className='alsoprint'>
                      <div className='s__098uhs' style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img 
                          src={gantrmappp} 
                          alt="" 
                          style={{
                            maxWidth: imageFitMode === 'width' ? '100%' : 'none',
                            maxHeight: imageFitMode === 'height' ? '100%' : 'none',
                            width: imageFitMode === 'width' ? '100%' : 'auto',
                            height: imageFitMode === 'height' ? '100%' : 'auto',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  </SplitPane>
                </div>   
              </div>   
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 700 }}>
          <Typography variant="h6" component="h2">
            <h1>Create OBS Structure</h1>
          </Typography>
          <div>
            <Select
              label="Category"
              name="category"
              value={newProject.category}
              onChange={handleChange}
              fullWidth
              margin="normal"
              displayEmpty
            >
              <MenuItem value="">Select Category</MenuItem>
              <MenuItem value="universalConstruction">Universal Construction</MenuItem>
              <MenuItem value="currentObsProjects">Current OBS Projects</MenuItem>
            </Select>
            <TextField
              label="Project Number"
              name="projectNumber"
              value={newProject.projectNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Project Name"
              name="projectName"
              value={newProject.projectName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Managing Company"
              name="managingCompany"
              value={newProject.managingCompany}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Owner Representative"
              name="ownerRepresentative"
              value={newProject.ownerRepresentative}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={newProject.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={2}
            />
            <div>
              <Button onClick={handleClose} variant="contained" color="secondary">
                Close
              </Button>
              <Button onClick={handleCreate} variant="contained" color="primary">
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
