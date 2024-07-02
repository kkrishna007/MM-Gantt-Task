import React, { useState } from 'react';
import Header from './Header';
import Leftsidebar from './Leftsidebar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Modal, Box, Button, TextField, Typography, Select, MenuItem } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Calender() {
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
    category: '',
    description: '', // Added description field
  });
  
  const events = [
    { title: 'Meeting', start: new Date() }
  ];
  
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

  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <strong>{eventInfo.timeText}</strong>
        <i>{eventInfo.event.title}</i>
      </div>
    );
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
            <div className='final__bg__09 thenewfindsa'>
              <div className="seaech__box___00">
                <div className="row">
                  <div className='col-md-3'>
                    <div className='s_09ssd'>
                      {/* <h3>Create OBS</h3> */}
                      <h3>Set Your Calender</h3>
                    </div>
                  </div>
                  {/* <div className="col-md-6">
                     Search bar 
                    <input type="text" className="form-control" placeholder="Search..." />
                  </div> */}
                  <div className="col-md-6">
                  <div className="thegloabcalnavtabs">
                  <ul class="nav nav-pills mb-3 thheeecalendvacs" id="pills-tab" role="tablist">
  <li class="nav-item tecustomnavs" role="presentation">
    <button class="nav-link thecustomnavlinks active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Global</button>
  </li>
  <li class="nav-item tecustomnavs" role="presentation">
    <button class="nav-link thecustomnavlinks" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Resources</button>
  </li>
  <li class="nav-item tecustomnavs" role="presentation">
    <button class="nav-link thecustomnavlinks" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Project</button>
  </li>
</ul>
                  </div>
                  </div>
                  <div className="col-md-3 text-right">
                    {/* Create New Project button */}
                    {/* <Button variant="contained" color="primary" onClick={handleOpen}>
                      Create OBS
                    </Button> */}
                    <div className="thheesmalbuttons">
                      <ul>
                        <li>
                          <div className="theesmalbts">
                            <span><AddCircleIcon /></span>Add
                          </div>
                        </li>
                        <li>
                          <div className="theesmalbts">
                            <span><DeleteIcon /></span>Delete
                          </div>
                        </li>
                        <li>
                          <div className="theesmalbts">
                            <span><CalendarMonthIcon /></span>Modify
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
            
            <div className='full__calll'>

            <div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
  <div className='thenavtabss1'>
    <div className='row'>
                <div className='col-md-9'>
                  <div className='thecalenders'>
                  <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={false}
                events={events}
                eventContent={renderEventContent}
              />
                  </div>
                
                </div>
                <div className='col-md-3'>
                  <div className='thecalecheckboxx'>
                    <div className='theworkingsdheads'>
                      <h3>Working Days & Hours</h3>
                    </div>

                    <div className='thhecheckworks'>
                      <ul className='thecheclnoxuls'>
                        <li className='thechecbolis'>
                          <div className='thecheckkbboxdivs'>
                            <div className='theckecboxones'>
                            <input
                           
                                  type="checkbox"
                                  name="workings"
                                />
                              <label>Monday</label>
                            </div>
                            <div className='thechecboxselects'>
                            <Select
              label="workingdays"
              name="category"
              value={newProject.category}
              displayEmpty
            >
               
              <MenuItem value="">01</MenuItem>
              <MenuItem value="02">02</MenuItem>
              <MenuItem value="03">02</MenuItem>
            </Select>
                            </div>
                          </div>
                        </li>
                        <li className='thechecbolis'>
                          <div className='thecheckkbboxdivs'>
                            <div className='theckecboxones'>
                            <input
                           
                                  type="checkbox"
                                  name="workings"
                                />
                              <label>Tuesday</label>
                            </div>
                            <div className='thechecboxselects'>
                            <Select
              label="workingdays"
              name="category"
              value={newProject.category}
              // displayEmpty
            >
                <MenuItem value=""></MenuItem>
              <MenuItem value="">01</MenuItem>
              <MenuItem value="02">02</MenuItem>
              <MenuItem value="03">02</MenuItem>
            </Select>
                            </div>
                          </div>
                        </li>
                        <li className='thechecbolis'>
                          <div className='thecheckkbboxdivs'>
                            <div className='theckecboxones'>
                            <input
                           
                                  type="checkbox"
                                  name="workings"
                                />
                              <label>Wednesday</label>
                            </div>
                            <div className='thechecboxselects'>
                            <Select
              label="workingdays"
              name="category"
              value={newProject.category}
              // displayEmpty
            >
                <MenuItem value=""></MenuItem>
              <MenuItem value="">01</MenuItem>
              <MenuItem value="02">02</MenuItem>
              <MenuItem value="03">02</MenuItem>
            </Select>
                            </div>
                          </div>
                        </li>
                        <li className='thechecbolis'>
                          <div className='thecheckkbboxdivs'>
                            <div className='theckecboxones'>
                            <input
                           
                                  type="checkbox"
                                  name="workings"
                                />
                              <label>Thrusday</label>
                            </div>
                            <div className='thechecboxselects'>
                            <Select
              label="workingdays"
              name="category"
              value={newProject.category}
              // displayEmpty
            >
                <MenuItem value=""></MenuItem>
              <MenuItem value="">01</MenuItem>
              <MenuItem value="02">02</MenuItem>
              <MenuItem value="03">02</MenuItem>
            </Select>
                            </div>
                          </div>
                        </li>
                        <li className='thechecbolis'>
                          <div className='thecheckkbboxdivs'>
                            <div className='theckecboxones'>
                            <input
                           
                                  type="checkbox"
                                  name="workings"
                                />
                              <label>Friday</label>
                            </div>
                            <div className='thechecboxselects'>
                            <Select
              label="workingdays"
              name="category"
              value={newProject.category}
              // displayEmpty
            >
                <MenuItem value=""></MenuItem>
              <MenuItem value="">01</MenuItem>
              <MenuItem value="02">02</MenuItem>
              <MenuItem value="03">02</MenuItem>
            </Select>
                            </div>
                          </div>
                        </li>
                        <li className='thechecbolis'>
                          <div className='thecheckkbboxdivs'>
                            <div className='theckecboxones'>
                            <input
                           
                                  type="checkbox"
                                  name="workings"
                                />
                              <label>Saturday</label>
                            </div>
                            <div className='thechecboxselects'>
                            <Select
              label="workingdays"
              name="category"
              value={newProject.category}
              // displayEmpty
            >
                <MenuItem value=""></MenuItem>
              <MenuItem value="">01</MenuItem>
              <MenuItem value="02">02</MenuItem>
              <MenuItem value="03">02</MenuItem>
            </Select>
                            </div>
                          </div>
                        </li>
                        <li className='thechecbolis'>
                          <div className='thecheckkbboxdivs'>
                            <div className='theckecboxones'>
                            <input
                           
                                  type="checkbox"
                                  name="workings"
                                />
                              <label>Sunday</label>
                            </div>
                            <div className='thechecboxselects'>
                            <Select
              label="workingdays"
              name="category"
              value={newProject.category}
              // displayEmpty
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="">01</MenuItem>
              <MenuItem value="02">02</MenuItem>
              <MenuItem value="03">02</MenuItem>
            </Select>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  <div className='thenavtabss2'>
    Resources
  </div>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
  <div className='thenavtabss3'>
    Projects
  </div>
  </div>
</div>
       
              
              
              </div>
            </div>
            
            <div className='theeeseconds'>
              <div className='theexcpemains'>
              <div className='theexholsdheads'>
                <h2>Exceptional Holidays</h2>
              </div>

              <div className='theefielsdo'>
              <div className='thexformsd'>
                <div className='theexinpps'>
                  <label>Name of the Holiday</label>
                  <input
                           placeholder="Christmas"
                                  type="text"
                                  name="workings"
                                />
                </div>
                <div className='theexinpps'>
                  <label>Select Date</label>
                  <Select
              name="select_date"
              value=""
              
            >
              <MenuItem value="10 May 2024">10 May 2024</MenuItem>
              <MenuItem value="11 May 2024">11 May 2024</MenuItem>
              <MenuItem value="12 May 2024">12 May 2024</MenuItem>
            </Select>
                </div>
                <div className='theexinpps'>
                <div className='thesubsbutons'>Submit</div>
              </div>
              </div>
              <div className='theholidetais'>
                <h4 className='listshoname'>List</h4>
                <ul className='theholidetalists'>
                  <li>
                    <div className='theolidelistsos'>
                      <h4 className='thenameholds'>Christmas</h4>
                      <p className='thehadtaehols'>10 May, 2024</p>
                    </div>
                  </li>
                  <li>
                    <div className='theolidelistsos'>
                      <h4 className='thenameholds'>Christmas</h4>
                      <p className='thehadtaehols'>10 May, 2024</p>
                    </div>
                  </li>
                  <li>
                    <div className='theolidelistsos'>
                      <h4 className='thenameholds'>Christmas</h4>
                      <p className='thehadtaehols'>10 May, 2024</p>
                    </div>
                  </li>
                  
                </ul>
              </div>
              </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal for creating new project */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Create New Project
          </Typography>
          <TextField
            margin="dense"
            name="projectNumber"
            label="Project Number"
            type="text"
            fullWidth
            value={newProject.projectNumber}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="projectName"
            label="Project Name"
            type="text"
            fullWidth
            value={newProject.projectName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="managingCompany"
            label="Managing Company"
            type="text"
            fullWidth
            value={newProject.managingCompany}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="ownerRepresentative"
            label="Owner Representative"
            type="text"
            fullWidth
            value={newProject.ownerRepresentative}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="dueDate"
            label="Due Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newProject.dueDate}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="task"
            label="Task"
            type="text"
            fullWidth
            value={newProject.task}
            onChange={handleChange}
          />
          <Select
            labelId="status-label"
            id="status"
            name="status"
            value={newProject.status}
            fullWidth
            onChange={handleChange}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
          <TextField
            margin="dense"
            name="category"
            label="Category"
            type="text"
            fullWidth
            value={newProject.category}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={newProject.description}
            onChange={handleChange}
          />
          <Button onClick={handleCreate} color="primary">
            Create
          </Button>
        </Box>
      </Modal>
    </>
  );
}
