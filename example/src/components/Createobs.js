import React, { useState } from 'react';
import Header from './Header';
import Leftsidebar from './Leftsidebar';
import { useTable } from 'react-table';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Modal, Box, Button, TextField, Typography, Select, MenuItem } from '@mui/material';

export default function Createobs() {
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

  // Define sample data
  const data = React.useMemo(
    () => [
      {
        projectNumber: '123',
        projectName: 'Sample Project 1',
        managingCompany: 'OSB',
        ownerRepresentative: 'John Doe',
        dueDate: '2024-06-30',
        task: 'Task description 1',
        status: <span className='s__0iuhh'>In Progress</span>,
        action: <button className='buticon'><MoreVertIcon /></button>,
      },
      {
        projectNumber: '124',
        projectName: 'Sample Project 2',
        managingCompany: 'OSB',
        ownerRepresentative: 'Jane Doe',
        dueDate: '2024-07-15',
        task: 'Task description 2',
        status: <span className='s__0iuhh'>Completed</span>,
        action: <button className='buticon'><MoreVertIcon /></button>,
      },
      {
        projectNumber: '125',
        projectName: 'Sample Project 3',
        managingCompany: 'OSB',
        ownerRepresentative: 'Alice Smith',
        dueDate: '2024-07-20',
        task: 'Task description 3',
        status: <span className='s__0iuhh'>Pending</span>,
        action: <button className='buticon'><MoreVertIcon /></button>,
      },
      {
        projectNumber: '126',
        projectName: 'Sample Project 4',
        managingCompany: 'OSB',
        ownerRepresentative: 'Bob Johnson',
        dueDate: '2024-08-05',
        task: 'Task description 4',
        status: <span className='s__0iuhh'>Active</span>,
        action: <button className='buticon'><MoreVertIcon /></button>,
      },
    ],
    []
  );

  // Define columns
  const columns = React.useMemo(
    () => [
      {
        Header: 'Project #',
        accessor: 'projectNumber',
      },
      {
        Header: 'Project Name',
        accessor: 'projectName',
      },
      {
        Header: 'Managing Company',
        accessor: 'managingCompany',
      },
      {
        Header: 'Owner Representative',
        accessor: 'ownerRepresentative',
      },
      {
        Header: 'Due Date',
        accessor: 'dueDate',
      },
      {
        Header: 'Task',
        accessor: 'task',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Action',
        accessor: 'action',
      },
    ],
    []
  );

  // Use the useTable hook to create the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

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
                  <div className='col-md-4'>
                    <div className='s_09ssd'>
                      <h3>Create OBS</h3>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* Search bar */}
                    <input type="text" className="form-control" placeholder="Search..." />
                  </div>
                  <div className="col-md-2 text-right">
                    {/* Create New Project button */}
                    <Button variant="contained" color="primary" onClick={handleOpen}>
                      Create OBS
                    </Button>
                  </div>
                </div>
              </div>

              <table {...getTableProps()} className='table'>
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map(row => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for creating a new project */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 700 }}>
          <Typography variant="h6" component="h2">
            <h1 className='s__09iii'>Create OBS Structure</h1>
          </Typography>

          <div className='s__set__09w'>
            <Select className="bg__09870111"
              label="Category"
              name="category"
              value={newProject.category}
              onChange={handleChange}
              fullWidth
              margin="normal"
              displayEmpty
            >
              <MenuItem value="">Current OBS Projects</MenuItem>
              <MenuItem value="currentObsProjects">Universal Construction</MenuItem>
              <MenuItem value="currentObsProjects2">Current OBS Projects2</MenuItem>
            </Select>

            <h3 className='createnewobs'>Create New OBS</h3>
            <TextField
              label="Project Number"
              name="projectNumber"
              value={newProject.projectNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={newProject.description} // Make sure this matches your state
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={2} // Adjust the number of rows as needed
            />

            <div className='button__00999'>
              <Button className='wclose' onClick={handleClose} variant="contained" color="secondary">
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
