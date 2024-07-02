import React, { useState } from 'react';
import Header from './Header';
import Leftsidebar from './Leftsidebar';
import { Modal, Box, Button, TextField, Typography, Select, MenuItem, Slide, FormControl, InputLabel } from '@mui/material';
import create_icon from '../images/newframe.svg';
import userimg from '../images/Avatar.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import create_icon2 from '../images/newframe2.svg';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function Universalconstruction() {
  // Modal state
  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    projectNumber: '',
    projectName: '',
    managingCompany: 'OSB',
    ownerRepresentative: '',
    dueDate: '',
    task: '',
    status: 'Pending',
    projectStatus: '',
    category: '',
    description: '', // Added description field
    startdate: '',
    enddate: '',
    assignManager: '',
  });


  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  const handleCreate = () => {
    console.log(newProject);
    // Add new project logic here
    handleClose();
  };

  return (
    <>
      <Header />
      <div className='mainpage'>
        <div className='row'>
          <div className='col-md-1'>
            <Leftsidebar />
          </div>
          <div className='col-md-11'>
            <div className='final__bg__09'>
              <div className="seaech__box___00">
                <div className="row">
                  <div className='col-md-12'>
                    <div className='s_09ssd'>
                      <h3><span className='s__999099'><HomeIcon /></span>Universal Construction</h3>
                    </div>
                  </div>
                </div>
                <div className='click___createprojects'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='product____create'>
                        <div className='icon__create_00'>
                          <img src={create_icon} alt="iconleft" />
                        </div>
                        <div className='create__content'>
                          <h3>Create Project Schedule</h3>
                          <p>Lorem ipsum is a placeholder text commonly used to demonstrate 
                              the visual form of a document or a 
                              typeface without relying on meaningful content.</p>
                          <Button variant="contained" color="primary" onClick={handleOpen}>
                            <span className='s__11444'><AddIcon /></span>  Create New Projects
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='product____create'>
                        <div className='icon__create_00'>
                          <img src={create_icon2} alt="iconleft" />
                        </div>
                        <div className='create__content'>
                          <h3>Create Project Schedule</h3>
                          <p>Lorem ipsum is a placeholder text commonly used to demonstrate 
                              the visual form of a document or a 
                              typeface without relying on meaningful content.</p>
                          <Button variant="contained" color="primary" onClick={handleOpen}>
                            <span className='s__11444'><AddIcon /></span> Start New Takeoff
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for creating a new project */}
      <Modal className='s___showing__-0987 ' open={open} onClose={handleClose}>
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
          <Box sx={{ ...style, right: '0', transform: 'translate(-0%, -50%)', width: 400 }}>
            <Typography variant="h6" component="h2">
              <h1 className='s__09iii'>Add New Project</h1>
            </Typography>

            <div className='s__set__09w'>
              <div className='row'>
                <div className='col-md-12'>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="obs-label">Select OBS</InputLabel>
                    <Select
                      label="Select OBS"
                      labelId="obs-label"
                      name="status"
                      value={newProject.status}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="InProgress">In Progress</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className='col-md-6'>
                  <TextField
                    label="Project ID"
                    
                    name="projectNumber"
                    value={newProject.projectNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </div>

                <div className='col-md-6'>
      <FormControl fullWidth margin="normal">
        <InputLabel id="project-status-label">Project Status</InputLabel>
        <Select
          label="Project Status"
          labelId="project-status-label"
          name="projectStatus"
          value={newProject.projectStatus}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="Pending1">Pending</MenuItem>
          <MenuItem value="InProgress2">In Progress</MenuItem>
          <MenuItem value="Completed3">Completed</MenuItem>
        </Select>
      </FormControl>
    </div>

                <div className='col-md-12'>
                  <TextField
                    label="Project Name"
                    name="projectName"
                    value={newProject.projectName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </div>

                <div className='col-md-12'>
                  <TextField
                    label="Owner Representative"
                    name="ownerRepresentative"
                    value={newProject.ownerRepresentative}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </div>

                <div className='col-md-12'>
                  <TextField
                    label="Duration"
                    name="duration"
                    value={newProject.duration}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </div>

                <div className='col-md-12'>
                  <TextField
                    label="Due Date"
                    type="date"
                    name="dueDate"
                    value={newProject.dueDate || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>

                <div className='col-md-6'>
                  <TextField
                    label="Start Date"
                    type="date"
                    name="startdate"
                    value={newProject.startdate || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>

                <div className='col-md-6'>
                  <TextField
                    label="End Date"
                    type="date"
                    name="enddate"
                    value={newProject.enddate || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>


<div className='s__oihghjks'>
  <div className='row'>
                <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-12'>

                  <h3 className='setfontss'>Assign Manager/OBC</h3>
                  </div>
                 
                  <div className='col-md-9'>
                  <div className='assign_manager_obs'>
                  
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="assign-manager-label">Enter Name</InputLabel>
                      <Select
                        label="Enter Name"
                        labelId="assign-manager-label"
                        name="assignManager"
                        value={newProject.assignManager}
                        onChange={handleChange}
                        displayEmpty
                      >
                        <MenuItem value="Manager1">Manager 1</MenuItem>
                        <MenuItem value="Manager2">Manager 2</MenuItem>
                        <MenuItem value="Manager3">Manager 3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  </div>
                  <div className='col-md-3'>
              
                  <div className='s___button'><button> <AddCircleIcon /> ADD</button></div>
               
                  </div>
                  </div>
                </div>

                
                <div className='assignmanneger'>
                
                  <div className='manager__listing'>
                    <ul>
                    <li>
                     

                    <div className='user__img__00'>
                    
                    <img src={userimg} alt="iconleft" />
                    </div>
                    <div className='user__name__009'>
                       <h3>Kristin Watson</h3>

                    </div>
                    <div className='user__position'>
                      <select>
                        <option>Project Manager</option>

                        <option>Project Manager2</option>
                        <option>Project Manager3</option>
                      </select>
                    </div>
                    <div className='action__showing'>
                      <MoreVertIcon />
                    </div>
                    
                    </li>

                    </ul>

                  </div>


                  </div>

                  </div>
                  </div>
                <div className='col-md-12'>
                  <div className='button__00999'>
                    <Button className='wclose' onClick={handleClose} variant="contained" color="secondary">
                      Close
                    </Button>
                    <Button onClick={handleCreate} variant="contained" color="primary">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Slide>
      </Modal>
    </>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  right: '0',
  transform: 'translate(-0%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
