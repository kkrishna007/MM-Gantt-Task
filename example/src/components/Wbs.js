import React, { useState } from 'react';
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
import cv10 from '../images/cv10.svg';
import cv11 from '../images/cv11.svg';
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

import { Modal, Box, Button, TextField, Typography, Select, MenuItem } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Wbs() {
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
      wbsId: 'WBS001',
      wbsName: 'Project Alpha',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      childRows: [
        { id: '1.1', wbsId: 'WBS001-1', wbsName: 'Task 1', startDate: '2023-01-10', endDate: '2023-01-20' },
        { id: '1.2', wbsId: 'WBS001-2', wbsName: 'Task 2', startDate: '2023-02-01', endDate: '2023-02-10' },
      ],
    },
    {
      id: '2',
      wbsId: 'WBS002',
      wbsName: 'Project Beta',
      startDate: '2023-02-01',
      endDate: '2023-11-30',
      childRows: [
        { id: '2.1', wbsId: 'WBS002-1', wbsName: 'Task 1', startDate: '2023-02-05', endDate: '2023-02-15' },
      ],
    },
    // The rest of the data remains unchanged...
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
        startDate: '',
        endDate: '',
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
                  <li onClick={addRow}><span> <img src={cv1} alt="child-icon" /></span></li>
                  <li onClick={addRow}><span> <img src={cv2} alt="child-icon" /></span></li>
                  <li><span> <img src={cv3} alt="child-icon" /></span></li>
                  <li><span> <img src={cv4} alt="child-icon" /></span></li>
                  <li><span> <img src={cv5} alt="child-icon" /></span></li>
                  <li><span> <img src={cv6} alt="child-icon" /></span></li>
                  <li><span> <img src={cv7} alt="child-icon" /></span></li>
                  <li><span> <img src={cv8} alt="child-icon" /></span></li>
                  <li><span> <img src={cv9} alt="child-icon" /></span></li>
                  <li><span> <img src={cv10} alt="child-icon" /></span></li>
                  <li><span> <img src={cv11} alt="child-icon" /></span></li>
                  <li><span> <img src={cv12} alt="child-icon" /></span></li>
                  <li><span> <img src={cv13} alt="child-icon" /></span></li>
                  <li><span> <img src={cv14} alt="child-icon" /></span></li>
                  <li><span> <img src={cv15} alt="child-icon" /></span></li>
                  <li><span> <img src={cv16} alt="child-icon" /></span></li>
                  <li><span> <img src={cv17} alt="child-icon" /></span></li>
                  <li><span> <img src={cv18} alt="child-icon" /></span></li>
                  <li><span> <img src={cv19} alt="child-icon" /></span></li>
                  <li className='clicktoopendropdown'><span> <img src={cv20} alt="child-icon" /></span>
                    <div className='submenu__000114400'>
                      <ul>
                        <li onClick={() => printDiv('printableTable')}>  Print tabular view </li>
                        <li>Print chat view</li>
                        </ul>  
                      
                    </div>
                  
                  </li>
                </ul>
              </div>
            </div>

            <div  className="final__bg__09 s__bggg">
              <div className="table__and__content">
                <div className="row">
                  <div className="col-md-8">
                    <div id="printableTable">
                    <table className="table">
                      <thead>
                        <tr className="tt__09">
                          <th></th>
                          <th>WBS ID</th>
                          <th>WBS Name</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((row, index) => (
                          <React.Fragment key={row.id}>
                            <tr>
                              <td>
                                <img
                                  src={icon__star}
                                  onClick={() => toggleExpandRow(index)}
                                  style={{ cursor: 'pointer' }}
                                  alt="expand-icon"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="wbsId"
                                  value={row.wbsId}
                                  onChange={(e) => handleDataChange(e, index)}
                                />
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
                                  type="date"
                                  name="startDate"
                                  value={row.startDate}
                                  onChange={(e) => handleDataChange(e, index)}
                                />
                              </td>
                              <td>
                                <input
                                  type="date"
                                  name="endDate"
                                  value={row.endDate}
                                  onChange={(e) => handleDataChange(e, index)}
                                />
                              </td>
                            </tr>

                            {expandedRows[index] && (
                              <tr className='s__098g45456' key={`${row.id}-child`}>
                                <td colSpan={6}>
                                  <table className="table">
                                    <tbody>
                                      {row.childRows.map((childRow, childIndex) => (
                                        <tr key={childRow.id}>
                                          <td className='border__09'>
                                            <img src={icon__star} alt="child-icon" />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              name="wbsId"
                                              value={childRow.wbsId}
                                              onChange={(e) => handleDataChange(e, index, childIndex)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              name="wbsName"
                                              value={childRow.wbsName}
                                              onChange={(e) => handleDataChange(e, index, childIndex)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="date"
                                              name="startDate"
                                              value={childRow.startDate}
                                              onChange={(e) => handleDataChange(e, index, childIndex)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="date"
                                              name="endDate"
                                              value={childRow.endDate}
                                              onChange={(e) => handleDataChange(e, index, childIndex)}
                                            />
                                            <Button className='s__098001441' onClick={() => removeChildRow(index, childIndex)}><DeleteOutlineIcon /></Button>
                                          </td>
                                        </tr>
                                      ))}
                                      <Button className='s__listttgg' onClick={() => addChildRow(index)} >Add sub wbs</Button>
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
                    <div className='s__098uhs'>
                      <img src={calenddd} alt="child-icon" />
                    </div>
                  
                  </div>
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
